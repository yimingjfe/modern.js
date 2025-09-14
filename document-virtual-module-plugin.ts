import path from 'path';
import type { Rspack } from '@rsbuild/core';
import { fs, findExists } from '@modern-js/utils';
import type { Entrypoint } from '@modern-js/types/cli';

// 常量定义
const DOCUMENT_FILE_NAME = 'Document';
const DOC_EXT = ['tsx', 'jsx', 'ts', 'js'];
const VIRTUAL_MODULE_PREFIX = 'virtual:modern-document-';

interface DocumentVirtualModulePluginOptions {
  entrypoints: Entrypoint[];
  appDirectory: string;
  internalDirectory: string;
}

/**
 * 查找入口对应的 Document 文件
 */
function getDocumentByEntryName(
  entrypoints: Entrypoint[],
  entryName: string,
  fallbackDir?: string,
): string | undefined {
  const entryDir = entrypoints.find(
    item => item.entryName === entryName,
  )?.absoluteEntryDir;

  const entryDirs = DOC_EXT.map(
    item => `${entryDir}${path.sep}${DOCUMENT_FILE_NAME}.${item}`,
  );
  
  const fallbackDirs = fallbackDir
    ? DOC_EXT.map(item =>
        [fallbackDir, 'src', `${DOCUMENT_FILE_NAME}.${item}`].join(path.sep),
      )
    : [];

  const docFile = findExists([...entryDirs, ...fallbackDirs]);
  return docFile || undefined;
}

/**
 * 生成虚拟模块内容
 */
function generateVirtualModuleContent(documentPath: string, entryName: string): string {
  return `
// Virtual module for Document.tsx compilation
import React from 'react';
import ReactDomServer from 'react-dom/server';
import { DocumentContext } from '@modern-js/runtime/document';

// Import the actual Document component
import DocumentComponent from '${documentPath.replace(/\\/g, '/')}';

// Export a function that renders the document to HTML string
export function renderDocument(documentParams) {
  const HTMLElement = React.createElement(
    DocumentContext.Provider,
    { value: documentParams },
    React.createElement(DocumentComponent, null)
  );
  
  return ReactDomServer.renderToStaticMarkup(HTMLElement);
}

// Export the original component as well
export { default as DocumentComponent } from '${documentPath.replace(/\\/g, '/')}';
export default renderDocument;
`;
}

/**
 * Document 虚拟模块插件
 * 将 Document.tsx 文件作为虚拟模块注入到主 bundler 中进行编译
 */
export class DocumentVirtualModulePlugin {
  private options: DocumentVirtualModulePluginOptions;
  private virtualModules: Map<string, string> = new Map();
  private documentPaths: Map<string, string> = new Map();

  constructor(options: DocumentVirtualModulePluginOptions) {
    this.options = options;
  }

  apply(compiler: Rspack.Compiler): void {
    const { webpack } = compiler;
    
    // 1. 在编译开始前准备虚拟模块
    compiler.hooks.beforeCompile.tapAsync(
      'DocumentVirtualModulePlugin',
      (params, callback) => {
        this.prepareVirtualModules();
        callback();
      }
    );

    // 2. 创建虚拟文件系统
    compiler.hooks.compilation.tap(
      'DocumentVirtualModulePlugin', 
      (compilation) => {
        // 注册虚拟模块解析器
        compilation.hooks.normalModuleFactory.tap(
          'DocumentVirtualModulePlugin',
          (normalModuleFactory) => {
            normalModuleFactory.hooks.resolve.tapAsync(
              'DocumentVirtualModulePlugin',
              (resolveData, callback) => {
                const { request } = resolveData;
                
                if (request && request.startsWith(VIRTUAL_MODULE_PREFIX)) {
                  const virtualContent = this.virtualModules.get(request);
                  if (virtualContent) {
                    // 创建虚拟模块
                    const virtualModule = {
                      ...resolveData,
                      request: `data:text/javascript;charset=utf-8,${encodeURIComponent(virtualContent)}`,
                    };
                    return callback(null, virtualModule);
                  }
                }
                
                callback();
              }
            );
          }
        );
      }
    );

    // 3. 处理模块解析
    compiler.hooks.normalModuleFactory.tap(
      'DocumentVirtualModulePlugin',
      (normalModuleFactory) => {
        normalModuleFactory.hooks.beforeResolve.tapAsync(
          'DocumentVirtualModulePlugin',
          (resolveData, callback) => {
            if (!resolveData) return callback();
            
            const { request } = resolveData;
            if (request && request.startsWith(VIRTUAL_MODULE_PREFIX)) {
              const virtualContent = this.virtualModules.get(request);
              if (virtualContent) {
                // 直接返回虚拟模块内容
                resolveData.request = `!!${path.resolve(__dirname, 'document-loader.js')}!${request}`;
              }
            }
            
            callback();
          }
        );
      }
    );
  }

  /**
   * 为每个入口准备虚拟模块
   */
  private prepareVirtualModules(): void {
    const { entrypoints, appDirectory } = this.options;
    
    // 获取所有入口名称
    const entryNames = entrypoints.map(entry => entry.entryName);
    
    for (const entryName of entryNames) {
      const documentPath = getDocumentByEntryName(
        entrypoints,
        entryName,
        appDirectory
      );
      
      if (documentPath && fs.existsSync(documentPath)) {
        const virtualModuleId = `${VIRTUAL_MODULE_PREFIX}${entryName}`;
        const virtualContent = generateVirtualModuleContent(documentPath, entryName);
        
        this.virtualModules.set(virtualModuleId, virtualContent);
        this.documentPaths.set(entryName, documentPath);
      }
    }
  }

  /**
   * 获取入口对应的虚拟模块 ID
   */
  getVirtualModuleId(entryName: string): string | undefined {
    const virtualModuleId = `${VIRTUAL_MODULE_PREFIX}${entryName}`;
    return this.virtualModules.has(virtualModuleId) ? virtualModuleId : undefined;
  }

  /**
   * 检查入口是否有对应的 Document 文件
   */
  hasDocument(entryName: string): boolean {
    return this.documentPaths.has(entryName);
  }

  /**
   * 获取入口对应的 Document 文件路径
   */
  getDocumentPath(entryName: string): string | undefined {
    return this.documentPaths.get(entryName);
  }
}