/**
 * 使用示例：如何在 Modern.js 项目中集成新的 Document 虚拟模块插件
 */

import type { CliPlugin, AppTools } from '@modern-js/app-tools';
import { ImprovedDocumentVirtualModulePlugin } from './improved-document-virtual-module-plugin';
import { documentErrorHandler } from './document-error-handler';
import type { ExtendedDocumentPluginOptions } from './document-types';

/**
 * 创建改进的 Document 插件
 */
export const createDocumentVirtualModulePlugin = (
  options?: Partial<ExtendedDocumentPluginOptions>
): CliPlugin<AppTools> => ({
  name: '@modern-js/plugin-document-virtual-module-improved',
  
  pre: ['@modern-js/plugin-analyze'],
  
  setup: async (api) => {
    let documentPlugin: ImprovedDocumentVirtualModulePlugin;
    
    // 配置插件选项
    const pluginOptions: ExtendedDocumentPluginOptions = {
      entrypoints: [],
      appDirectory: '',
      internalDirectory: '',
      debug: process.env.NODE_ENV === 'development',
      documentFileName: 'Document',
      supportedExtensions: ['tsx', 'jsx', 'ts', 'js'],
      // 错误处理配置
      errorHandler: {
        maxRetries: 3,
        enableFallback: true,
        fallbackGenerator: (entryName, templateParameters) => {
          return documentErrorHandler.generateFallbackHtml(entryName, templateParameters);
        },
      },
      // 插件钩子配置
      hooks: {
        beforeCompile: async (entries) => {
          console.log(`Starting document compilation for entries: ${entries.join(', ')}`);
        },
        afterCompile: async (stats) => {
          console.log(`Document compilation completed: ${stats.successCount}/${stats.entriesCount} entries succeeded in ${stats.duration}ms`);
          if (stats.errors.length > 0) {
            console.warn(`Document compilation warnings: ${stats.errors.length} errors occurred`);
          }
        },
        beforeRender: async (entryName, documentParams) => {
          console.log(`Rendering document for entry: ${entryName}`);
        },
        afterRender: async (entryName, html) => {
          console.log(`Document rendered for entry: ${entryName}, HTML length: ${html.length}`);
        },
        onError: async (error) => {
          console.error(`Document error in ${error.phase} phase:`, error);
        },
      },
      // 缓存配置
      cache: {
        enabled: true,
        maxAge: 300000, // 5 minutes
      },
      ...options,
    };

    // 文档入口处理函数（与原有逻辑保持兼容）
    const documentEntry = (
      entryName: string,
      templateParameters: Record<string, unknown>,
    ) => {
      // 检查是否有对应的 Document 文件
      if (!documentPlugin?.hasDocument(entryName)) {
        return null;
      }

      return async ({ htmlWebpackPlugin }: { [option: string]: any }) => {
        const config = api.getNormalizedConfig();
        
        const documentParams = {
          processEnv: process.env,
          config: {
            output: config.output,
          },
          entryName,
          templateParams: templateParameters,
        };

        try {
          // 调用渲染前钩子
          if (pluginOptions.hooks?.beforeRender) {
            await pluginOptions.hooks.beforeRender(entryName, documentParams);
          }

          // 从编译结果中获取渲染函数
          const virtualModuleId = documentPlugin.getVirtualModuleId(entryName);
          if (!virtualModuleId) {
            throw new Error(`No virtual module found for entry: ${entryName}`);
          }

          // 动态导入编译后的虚拟模块
          const compiledModule = await import(virtualModuleId);
          const renderDocument = compiledModule.default || compiledModule.renderDocument;
          
          // 安全渲染 Document
          const html = await documentErrorHandler.safeRenderDocument(
            renderDocument,
            documentParams,
            entryName,
            templateParameters
          );

          // 调用渲染后钩子
          if (pluginOptions.hooks?.afterRender) {
            await pluginOptions.hooks.afterRender(entryName, html);
          }

          // 处理 HTML 插件标签和占位符（与原有逻辑相同）
          const processedHtml = await processHtmlContent(
            html,
            htmlWebpackPlugin,
            api,
            entryName,
            templateParameters,
            config
          );

          return processedHtml;
          
        } catch (error) {
          console.error(`Error rendering document for entry ${entryName}:`, error);
          
          // 调用错误钩子
          if (pluginOptions.hooks?.onError) {
            const documentError = documentErrorHandler.handleRenderingError(
              error as Error,
              entryName,
              documentParams
            );
            await pluginOptions.hooks.onError(documentError);
          }
          
          // 返回 fallback HTML
          return documentErrorHandler.generateFallbackHtml(entryName, templateParameters);
        }
      };
    };

    // 配置 HTML 插件
    api.config(() => {
      const userConfig = api.getConfig();

      if (userConfig.tools?.htmlPlugin === false) {
        return {};
      }

      return {
        tools: {
          htmlPlugin: (options, entry) => {
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
      
      // 更新插件选项
      pluginOptions.entrypoints = entrypoints;
      pluginOptions.appDirectory = appDirectory;
      pluginOptions.internalDirectory = internalDirectory;
      
      // 创建虚拟模块插件实例
      documentPlugin = new ImprovedDocumentVirtualModulePlugin(pluginOptions);

      // 添加虚拟模块插件到 Rspack
      chain.plugin('document-virtual-module-improved').use(documentPlugin);

      // 添加 document loader
      chain.module
        .rule('document-virtual')
        .test(/^virtual:modern-document-/)
        .use('document-loader')
        .loader(require.resolve('./document-loader.js'))
        .options({
          target,
          debug: pluginOptions.debug,
        });
    });

    // 清理钩子
    api.onExit(() => {
      if (documentPlugin) {
        documentPlugin.cleanup();
      }
    });
  },
});

/**
 * 处理 HTML 内容（与原有逻辑保持一致）
 */
async function processHtmlContent(
  html: string,
  htmlWebpackPlugin: any,
  api: any,
  entryName: string,
  templateParameters: Record<string, unknown>,
  config: any
): Promise<string> {
  // 这里包含原有的 HTML 处理逻辑
  // 包括 partials、scripts、links、metas、titles 等的处理
  // 以及各种占位符的替换
  
  const { partialsByEntrypoint } = api.getAppContext();
  
  // 处理脚本和链接
  const scripts = [
    htmlWebpackPlugin.tags.headTags
      .filter((item: any) => item.tagName === 'script')
      .join(''),
    htmlWebpackPlugin.tags.bodyTags.toString(),
  ].join('');

  const links = [
    htmlWebpackPlugin.tags.headTags
      .filter((item: any) => item.tagName === 'link')
      .join(''),
  ].join('');

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

  const titles =
    htmlWebpackPlugin.tags.headTags
      .filter((item: any) => item.tagName === 'title')
      .join('')
      .replace('<title>', '')
      .replace('</title>', '') || templateParameters.title;

  // 处理 partials
  const partialsContent = {
    partialsTop: '',
    partialsHead: '',
    partialsBody: '',
  };
  
  if (partialsByEntrypoint?.[entryName]) {
    partialsContent.partialsTop = partialsByEntrypoint[entryName].top.join('\n');
    partialsContent.partialsHead = partialsByEntrypoint[entryName].head.join('\n');
    partialsContent.partialsBody = partialsByEntrypoint[entryName].body.join('\n');
  }

  // 应用所有替换（这里省略具体的占位符替换逻辑，与原有代码相同）
  let processedHtml = html;
  
  // ... 执行所有原有的占位符替换逻辑
  
  return `<!DOCTYPE html>${processedHtml}`;
}

// 导出默认插件实例
export default createDocumentVirtualModulePlugin();

/**
 * 使用示例
 */

// 在 modern.config.ts 中使用：
/*
import { defineConfig } from '@modern-js/app-tools';
import { createDocumentVirtualModulePlugin } from './document-virtual-module-plugin';

export default defineConfig({
  plugins: [
    createDocumentVirtualModulePlugin({
      debug: true,
      errorHandler: {
        maxRetries: 5,
        enableFallback: true,
      },
      hooks: {
        afterCompile: async (stats) => {
          console.log('Document compilation stats:', stats);
        },
      },
    }),
  ],
});
*/