import path from 'path';
import type {
  AppTools,
  CliPlugin,
  AppNormalizedConfig as NormalizedConfig,
} from '@modern-js/app-tools';
import type { Entrypoint } from '@modern-js/types/cli';
import { createDebugger } from '@modern-js/utils';
import { DocumentVirtualModulePlugin } from './document-virtual-module-plugin';

import {
  BODY_PARTICALS_SEPARATOR,
  DOCUMENT_CHUNKSMAP_PLACEHOLDER,
  DOCUMENT_COMMENT_PLACEHOLDER_END,
  DOCUMENT_COMMENT_PLACEHOLDER_START,
  DOCUMENT_LINKS_PLACEHOLDER,
  DOCUMENT_META_PLACEHOLDER,
  DOCUMENT_SCRIPTS_PLACEHOLDER,
  DOCUMENT_SCRIPT_ATTRIBUTES_END,
  DOCUMENT_SCRIPT_ATTRIBUTES_START,
  DOCUMENT_SCRIPT_PLACEHOLDER_END,
  DOCUMENT_SCRIPT_PLACEHOLDER_START,
  DOCUMENT_SSRDATASCRIPT_PLACEHOLDER,
  DOCUMENT_SSR_PLACEHOLDER,
  DOCUMENT_STYLE_PLACEHOLDER_END,
  DOCUMENT_STYLE_PLACEHOLDER_START,
  DOCUMENT_TITLE_PLACEHOLDER,
  HEAD_PARTICALS_SEPARATOR,
  HTML_SEPARATOR,
  PLACEHOLDER_REPLACER_MAP,
  TOP_PARTICALS_SEPARATOR,
} from '@modern-js/runtime/document/constants';

const debug = createDebugger('html_generate_virtual');

/**
 * 改进的 Document 插件 - 使用虚拟模块方案
 * 替代原有的 esbuild 编译方式，使用主 bundler 进行编译
 */
export const documentVirtualModulePlugin = (): CliPlugin<AppTools> => ({
  name: '@modern-js/plugin-document-virtual-module',
  
  pre: ['@modern-js/plugin-analyze'],
  
  setup: async api => {
    let documentPlugin: DocumentVirtualModulePlugin;
    
    // 获取文档参数
    function getDocParams(params: {
      config: NormalizedConfig;
      entryName: string;
      templateParameters: Record<string, unknown>;
    }) {
      const { config, templateParameters, entryName } = params;
      return {
        processEnv: process.env,
        config: {
          output: config.output,
        },
        entryName,
        templateParams: templateParameters,
      };
    }

    // 创建文档入口处理函数
    const documentEntry = (
      entryName: string,
      templateParameters: Record<string, unknown>,
    ) => {
      const { entrypoints, internalDirectory, appDirectory } = api.getAppContext();
      
      // 检查是否有对应的 Document 文件
      if (!documentPlugin?.hasDocument(entryName)) {
        return null;
      }

      return async ({ htmlWebpackPlugin }: { [option: string]: any }) => {
        const config = api.getNormalizedConfig();
        
        const documentParams = getDocParams({
          config: config as NormalizedConfig,
          entryName,
          templateParameters,
        });

        try {
          // 从编译结果中获取渲染函数
          const virtualModuleId = documentPlugin.getVirtualModuleId(entryName);
          if (!virtualModuleId) {
            throw new Error(`No virtual module found for entry: ${entryName}`);
          }

          // 动态导入编译后的虚拟模块
          const compiledModule = await import(virtualModuleId);
          const renderDocument = compiledModule.default || compiledModule.renderDocument;
          
          if (typeof renderDocument !== 'function') {
            throw new Error(`Invalid render function from virtual module: ${entryName}`);
          }

          // 渲染 Document 组件
          let html = renderDocument(documentParams);
          
          debug("entry %s's document jsx rendered html: %o", entryName, html);
          
          // 处理 HTML 插件标签
          const { partialsByEntrypoint } = api.getAppContext();
          const scripts = [
            htmlWebpackPlugin.tags.headTags
              .filter((item: any) => item.tagName === 'script')
              .join(''),
            htmlWebpackPlugin.tags.bodyTags.toString(),
          ].join('');

          // 支持 partials HTML
          const partialsContent = {
            partialsTop: '',
            partialsHead: '',
            partialsBody: '',
          };
          
          if (partialsByEntrypoint?.[entryName]) {
            partialsContent.partialsTop =
              partialsByEntrypoint[entryName].top.join('\n');
            partialsContent.partialsHead =
              partialsByEntrypoint[entryName].head.join('\n');
            partialsContent.partialsBody =
              partialsByEntrypoint[entryName].body.join('\n');
          }

          // 替换 partials 占位符
          html = html
            .replace(TOP_PARTICALS_SEPARATOR, () => partialsContent.partialsTop)
            .replace(HEAD_PARTICALS_SEPARATOR, () => partialsContent.partialsHead)
            .replace(BODY_PARTICALS_SEPARATOR, () => partialsContent.partialsBody);

          // 处理 links
          const links = [
            htmlWebpackPlugin.tags.headTags
              .filter((item: any) => item.tagName === 'link')
              .join(''),
          ].join('');

          // 处理 metas
          const metas = [
            templateParameters.meta,
            htmlWebpackPlugin.tags.headTags
              .filter(
                (item: any) =>
                  item.tagName !== 'script' &&
                  item.tagName !== 'link' &&
                  item.tagName !== 'title',
              )
              .join(''),
          ].join('');

          // 处理 titles
          const titles =
            htmlWebpackPlugin.tags.headTags
              .filter((item: any) => item.tagName === 'title')
              .join('')
              .replace('<title>', '')
              .replace('</title>', '') || templateParameters.title;

          // 处理功能性脚本占位符
          if (
            html.includes(DOCUMENT_SCRIPT_PLACEHOLDER_START) &&
            html.includes(DOCUMENT_SCRIPT_PLACEHOLDER_END)
          ) {
            const { nonce } = config.security || {};
            const nonceAttr = nonce ? `nonce=${nonce}` : '';

            html = html.replace(
              new RegExp(
                `${DOCUMENT_SCRIPT_PLACEHOLDER_START}${DOCUMENT_SCRIPT_ATTRIBUTES_START}(.*)${DOCUMENT_SCRIPT_ATTRIBUTES_END}(.*?)${DOCUMENT_SCRIPT_PLACEHOLDER_END}`,
                'g',
              ),
              (_scriptStr, $1, $2) =>
                `<script ${decodeURIComponent($1)} ${nonceAttr}>${decodeURIComponent($2)}</script>`,
            );
          }

          // 处理样式占位符
          if (
            html.includes(DOCUMENT_STYLE_PLACEHOLDER_START) &&
            html.includes(DOCUMENT_STYLE_PLACEHOLDER_END)
          ) {
            html = html.replace(
              new RegExp(
                `${DOCUMENT_STYLE_PLACEHOLDER_START}(.*?)${DOCUMENT_STYLE_PLACEHOLDER_END}`,
                'g',
              ),
              (_styleStr, $1) => `<style>${decodeURIComponent($1)}</style>`,
            );
          }

          // 处理注释占位符
          if (
            html.includes(DOCUMENT_COMMENT_PLACEHOLDER_START) &&
            html.includes(DOCUMENT_COMMENT_PLACEHOLDER_END)
          ) {
            html = html.replace(
              new RegExp(
                `${DOCUMENT_COMMENT_PLACEHOLDER_START}(.*?)${DOCUMENT_COMMENT_PLACEHOLDER_END}`,
                'g',
              ),
              (_scriptStr, $1) => `${decodeURIComponent($1)}`,
            );
          }

          // 替换最终的 HTML 占位符
          const finalHtml = `<!DOCTYPE html>${html}`
            .replace(DOCUMENT_META_PLACEHOLDER, () => metas)
            .replace(DOCUMENT_SSR_PLACEHOLDER, () => HTML_SEPARATOR)
            .replace(DOCUMENT_SCRIPTS_PLACEHOLDER, () => scripts)
            .replace(DOCUMENT_LINKS_PLACEHOLDER, () => links)
            .replace(
              DOCUMENT_CHUNKSMAP_PLACEHOLDER,
              () => PLACEHOLDER_REPLACER_MAP[DOCUMENT_CHUNKSMAP_PLACEHOLDER],
            )
            .replace(
              DOCUMENT_SSRDATASCRIPT_PLACEHOLDER,
              () => PLACEHOLDER_REPLACER_MAP[DOCUMENT_SSRDATASCRIPT_PLACEHOLDER],
            )
            .replace(DOCUMENT_TITLE_PLACEHOLDER, () => titles);

          return finalHtml;
          
        } catch (error) {
          console.error(`Error rendering document for entry ${entryName}:`, error);
          // 返回默认 HTML 模板作为 fallback
          return `<!DOCTYPE html><html><head><title>${templateParameters.title || ''}</title></head><body><div id="root"></div></body></html>`;
        }
      };
    };

    // 配置插件
    api.config(() => {
      const userConfig = api.getConfig();

      if (userConfig.tools?.htmlPlugin === false) {
        return {};
      }

      return {
        tools: {
          htmlPlugin: (options, entry) => {
            // 计算模板参数
            const hackParameters: Record<string, unknown> =
              typeof options?.templateParameters === 'function'
                ? options?.templateParameters({} as any, {} as any, {} as any, {} as any)
                : { ...options?.templateParameters };

            const templateContent = documentEntry(entry.entryName, hackParameters);

            const documentHtmlOptions = templateContent
              ? {
                  templateContent,
                  inject: false,
                }
              : {};

            return {
              ...options,
              ...documentHtmlOptions,
            };
          },
        },
      };
    });

    // 注册 bundler 插件
    api.modifyBundlerChain((chain, { target }) => {
      const { entrypoints, internalDirectory, appDirectory } = api.getAppContext();
      
      // 创建虚拟模块插件实例
      documentPlugin = new DocumentVirtualModulePlugin({
        entrypoints,
        appDirectory,
        internalDirectory,
      });

      // 添加虚拟模块插件到 Rspack
      chain.plugin('document-virtual-module').use(documentPlugin);

      // 添加 document loader
      chain.module
        .rule('document-virtual')
        .test(/^virtual:modern-document-/)
        .use('document-loader')
        .loader(path.resolve(__dirname, 'document-loader.js'))
        .options({
          target,
        });
    });
  },
});

export default documentVirtualModulePlugin;