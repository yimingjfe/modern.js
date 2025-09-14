import path from 'path';
import type { Rspack } from '@rsbuild/core';
import { fs, findExists, createDebugger } from '@modern-js/utils';
import type { Entrypoint } from '@modern-js/types/cli';
import {
  type ExtendedDocumentPluginOptions,
  type VirtualModuleMap,
  type CompilationStats,
  type DocumentError,
  type VirtualModuleResolveResult,
  DocumentErrorPhase,
} from './document-types';
import { documentErrorHandler, withAsyncErrorBoundary } from './document-error-handler';

const debug = createDebugger('document-virtual-module-plugin');

// 常量定义
const DOCUMENT_FILE_NAME = 'Document';
const DOC_EXT = ['tsx', 'jsx', 'ts', 'js'];
const VIRTUAL_MODULE_PREFIX = 'virtual:modern-document-';

/**
 * 改进的 Document 虚拟模块插件
 * 支持错误处理、类型安全、性能优化等特性
 */
export class ImprovedDocumentVirtualModulePlugin {
  private options: ExtendedDocumentPluginOptions;
  private virtualModules: VirtualModuleMap;
  private compilationStats: CompilationStats;
  private debug: ReturnType<typeof createDebugger>;

  constructor(options: ExtendedDocumentPluginOptions) {
    this.options = {
      debug: false,
      documentFileName: DOCUMENT_FILE_NAME,
      supportedExtensions: DOC_EXT,
      ...options,
    };

    this.virtualModules = {
      content: new Map(),
      documentPaths: new Map(),
      moduleIds: new Map(),
    };

    this.compilationStats = {
      startTime: 0,
      endTime: 0,
      duration: 0,
      entriesCount: 0,
      successCount: 0,
      failureCount: 0,
      errors: [],
      warnings: [],
    };

    this.debug = createDebugger('document-virtual-module-plugin');

    // 设置全局引用以供 loader 使用
    global.__MODERN_DOCUMENT_VIRTUAL_MODULES__ = this.virtualModules.content;
  }

  apply(compiler: Rspack.Compiler): void {
    const { webpack } = compiler;
    
    // 编译前钩子
    compiler.hooks.beforeCompile.tapAsync(
      'ImprovedDocumentVirtualModulePlugin',
      withAsyncErrorBoundary(
        async (params, callback) => {
          await this.beforeCompile();
          callback();
        },
        async (error, params, callback) => {
          this.handlePluginError(error, 'beforeCompile');
          callback();
        }
      )
    );

    // 编译钩子
    compiler.hooks.compilation.tap(
      'ImprovedDocumentVirtualModulePlugin',
      (compilation) => {
        this.setupCompilationHooks(compilation);
      }
    );

    // 模块工厂钩子
    compiler.hooks.normalModuleFactory.tap(
      'ImprovedDocumentVirtualModulePlugin',
      (normalModuleFactory) => {
        this.setupModuleFactoryHooks(normalModuleFactory);
      }
    );

    // 完成编译钩子
    compiler.hooks.done.tapAsync(
      'ImprovedDocumentVirtualModulePlugin',
      withAsyncErrorBoundary(
        async (stats, callback) => {
          await this.afterCompile();
          callback();
        },
        async (error, stats, callback) => {
          this.handlePluginError(error, 'afterCompile');
          callback();
        }
      )
    );
  }

  /**
   * 编译前处理
   */
  private async beforeCompile(): Promise<void> {
    this.compilationStats.startTime = Date.now();
    this.debug('Starting document compilation...');

    // 调用用户钩子
    if (this.options.hooks?.beforeCompile) {
      const entries = this.options.entrypoints.map(e => e.entryName);
      await this.options.hooks.beforeCompile(entries);
    }

    await this.prepareVirtualModules();
  }

  /**
   * 编译后处理
   */
  private async afterCompile(): Promise<void> {
    this.compilationStats.endTime = Date.now();
    this.compilationStats.duration = this.compilationStats.endTime - this.compilationStats.startTime;

    this.debug('Document compilation completed in %dms', this.compilationStats.duration);

    // 调用用户钩子
    if (this.options.hooks?.afterCompile) {
      await this.options.hooks.afterCompile(this.compilationStats);
    }

    // 更新全局统计信息
    global.__MODERN_DOCUMENT_COMPILATION_STATS__ = this.compilationStats;
  }

  /**
   * 设置编译钩子
   */
  private setupCompilationHooks(compilation: Rspack.Compilation): void {
    // 处理资源钩子
    compilation.hooks.processAssets.tap(
      'ImprovedDocumentVirtualModulePlugin',
      () => {
        this.debug('Processing document assets...');
      }
    );

    // 优化钩子
    compilation.hooks.optimize.tap(
      'ImprovedDocumentVirtualModulePlugin',
      () => {
        this.debug('Optimizing document modules...');
      }
    );
  }

  /**
   * 设置模块工厂钩子
   */
  private setupModuleFactoryHooks(normalModuleFactory: any): void {
    // 解析前钩子
    normalModuleFactory.hooks.beforeResolve.tapAsync(
      'ImprovedDocumentVirtualModulePlugin',
      withAsyncErrorBoundary(
        async (resolveData: any, callback: Function) => {
          if (!resolveData) return callback();

          const resolveResult = this.resolveVirtualModule(resolveData.request);
          if (resolveResult.isVirtual) {
            this.debug('Resolving virtual module: %s', resolveResult.moduleId);
            resolveData.request = this.createDataUrl(resolveResult.content!);
          }

          callback();
        },
        async (error, resolveData, callback) => {
          this.handlePluginError(error, 'moduleResolve');
          callback();
        }
      )
    );

    // 解析钩子
    normalModuleFactory.hooks.resolve.tapAsync(
      'ImprovedDocumentVirtualModulePlugin',
      withAsyncErrorBoundary(
        async (resolveData: any, callback: Function) => {
          const { request } = resolveData;
          
          if (request && request.startsWith(VIRTUAL_MODULE_PREFIX)) {
            const virtualContent = this.virtualModules.content.get(request);
            if (virtualContent) {
              const virtualModule = {
                ...resolveData,
                request: this.createDataUrl(virtualContent),
              };
              return callback(null, virtualModule);
            }
          }
          
          callback();
        },
        async (error, resolveData, callback) => {
          this.handlePluginError(error, 'moduleResolve');
          callback();
        }
      )
    );
  }

  /**
   * 准备虚拟模块
   */
  private async prepareVirtualModules(): Promise<void> {
    const { entrypoints, appDirectory } = this.options;
    
    this.compilationStats.entriesCount = entrypoints.length;
    
    for (const entry of entrypoints) {
      try {
        const documentPath = this.findDocumentFile(entry.entryName);
        
        if (documentPath && fs.existsSync(documentPath)) {
          const virtualModuleId = `${VIRTUAL_MODULE_PREFIX}${entry.entryName}`;
          const virtualContent = this.generateVirtualModuleContent(documentPath, entry.entryName);
          
          this.virtualModules.content.set(virtualModuleId, virtualContent);
          this.virtualModules.documentPaths.set(entry.entryName, documentPath);
          this.virtualModules.moduleIds.set(entry.entryName, virtualModuleId);
          
          this.compilationStats.successCount++;
          this.debug('Prepared virtual module for entry: %s', entry.entryName);
        } else {
          this.debug('No document file found for entry: %s', entry.entryName);
        }
      } catch (error) {
        this.handleEntryError(error as Error, entry.entryName);
      }
    }
  }

  /**
   * 查找 Document 文件
   */
  private findDocumentFile(entryName: string): string | undefined {
    const { entrypoints, appDirectory, documentFileName, supportedExtensions } = this.options;
    
    const entryDir = entrypoints.find(
      item => item.entryName === entryName,
    )?.absoluteEntryDir;

    const entryDirs = supportedExtensions!.map(
      ext => `${entryDir}${path.sep}${documentFileName}.${ext}`,
    );
    
    const fallbackDirs = appDirectory
      ? supportedExtensions!.map(ext =>
          [appDirectory, 'src', `${documentFileName}.${ext}`].join(path.sep),
        )
      : [];

    return findExists([...entryDirs, ...fallbackDirs]);
  }

  /**
   * 生成虚拟模块内容
   */
  private generateVirtualModuleContent(documentPath: string, entryName: string): string {
    const relativePath = path.relative(process.cwd(), documentPath).replace(/\\/g, '/');
    
    return `
// Virtual module for Document.tsx compilation - Entry: ${entryName}
// Generated at: ${new Date().toISOString()}
import React from 'react';
import ReactDomServer from 'react-dom/server';
import { DocumentContext } from '@modern-js/runtime/document';

// Import the actual Document component
import DocumentComponent from '${relativePath}';

// Validate Document component
if (!DocumentComponent) {
  throw new Error('Document component not found or invalid for entry: ${entryName}');
}

// Export a function that renders the document to HTML string
export function renderDocument(documentParams) {
  try {
    const HTMLElement = React.createElement(
      DocumentContext.Provider,
      { value: documentParams },
      React.createElement(DocumentComponent, null)
    );
    
    const html = ReactDomServer.renderToStaticMarkup(HTMLElement);
    
    if (typeof html !== 'string') {
      throw new Error('Document render function must return a string');
    }
    
    return html;
  } catch (error) {
    console.error('Error rendering document for entry ${entryName}:', error);
    throw error;
  }
}

// Export metadata
export const metadata = {
  entryName: '${entryName}',
  documentPath: '${documentPath}',
  generatedAt: '${new Date().toISOString()}'
};

// Export the original component as well
export { default as DocumentComponent } from '${relativePath}';
export default renderDocument;
`;
  }

  /**
   * 解析虚拟模块
   */
  private resolveVirtualModule(request: string): VirtualModuleResolveResult {
    if (!request || !request.startsWith(VIRTUAL_MODULE_PREFIX)) {
      return { isVirtual: false };
    }

    const content = this.virtualModules.content.get(request);
    if (!content) {
      return { isVirtual: false };
    }

    const entryName = request.replace(VIRTUAL_MODULE_PREFIX, '');
    const documentPath = this.virtualModules.documentPaths.get(entryName);

    return {
      isVirtual: true,
      moduleId: request,
      content,
      entryName,
      documentPath,
    };
  }

  /**
   * 创建 Data URL
   */
  private createDataUrl(content: string): string {
    return `data:text/javascript;charset=utf-8,${encodeURIComponent(content)}`;
  }

  /**
   * 处理入口错误
   */
  private handleEntryError(error: Error, entryName: string): void {
    const documentError = documentErrorHandler.handleCompilationError(error, entryName);
    this.compilationStats.errors.push(documentError);
    this.compilationStats.failureCount++;

    // 调用用户错误钩子
    if (this.options.hooks?.onError) {
      this.options.hooks.onError(documentError);
    }
  }

  /**
   * 处理插件错误
   */
  private handlePluginError(error: Error, phase: string): void {
    const documentError = documentErrorHandler.handleVirtualModuleError(error, `plugin-${phase}`);
    this.compilationStats.errors.push(documentError);

    // 调用用户错误钩子
    if (this.options.hooks?.onError) {
      this.options.hooks.onError(documentError);
    }
  }

  // 公共方法
  /**
   * 获取入口对应的虚拟模块 ID
   */
  getVirtualModuleId(entryName: string): string | undefined {
    return this.virtualModules.moduleIds.get(entryName);
  }

  /**
   * 检查入口是否有对应的 Document 文件
   */
  hasDocument(entryName: string): boolean {
    return this.virtualModules.documentPaths.has(entryName);
  }

  /**
   * 获取入口对应的 Document 文件路径
   */
  getDocumentPath(entryName: string): string | undefined {
    return this.virtualModules.documentPaths.get(entryName);
  }

  /**
   * 获取编译统计信息
   */
  getCompilationStats(): CompilationStats {
    return { ...this.compilationStats };
  }

  /**
   * 清理资源
   */
  cleanup(): void {
    this.virtualModules.content.clear();
    this.virtualModules.documentPaths.clear();
    this.virtualModules.moduleIds.clear();
    documentErrorHandler.cleanup();
  }
}