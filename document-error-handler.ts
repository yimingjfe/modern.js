import { createDebugger } from '@modern-js/utils';

const debug = createDebugger('document-error-handler');

export interface DocumentError extends Error {
  entryName?: string;
  documentPath?: string;
  phase?: 'compilation' | 'rendering' | 'virtual-module' | 'loader';
  originalError?: Error;
}

/**
 * Document 错误处理器
 * 统一处理 Document 编译和渲染过程中的各种错误
 */
export class DocumentErrorHandler {
  private static instance: DocumentErrorHandler;
  private errorCounts: Map<string, number> = new Map();
  private maxRetries = 3;

  static getInstance(): DocumentErrorHandler {
    if (!DocumentErrorHandler.instance) {
      DocumentErrorHandler.instance = new DocumentErrorHandler();
    }
    return DocumentErrorHandler.instance;
  }

  /**
   * 处理编译错误
   */
  handleCompilationError(error: Error, entryName: string, documentPath?: string): DocumentError {
    const documentError: DocumentError = {
      ...error,
      name: 'DocumentCompilationError',
      entryName,
      documentPath,
      phase: 'compilation',
      originalError: error,
    };

    debug('Compilation error for entry %s: %o', entryName, error);
    
    // 记录错误次数
    const errorKey = `${entryName}-compilation`;
    const count = (this.errorCounts.get(errorKey) || 0) + 1;
    this.errorCounts.set(errorKey, count);

    if (count >= this.maxRetries) {
      console.error(`Document compilation failed ${this.maxRetries} times for entry: ${entryName}`);
    }

    return documentError;
  }

  /**
   * 处理渲染错误
   */
  handleRenderingError(error: Error, entryName: string, documentParams?: any): DocumentError {
    const documentError: DocumentError = {
      ...error,
      name: 'DocumentRenderingError',
      entryName,
      phase: 'rendering',
      originalError: error,
    };

    debug('Rendering error for entry %s: %o', entryName, error);
    console.error(`Document rendering failed for entry: ${entryName}`, error);

    return documentError;
  }

  /**
   * 处理虚拟模块错误
   */
  handleVirtualModuleError(error: Error, moduleId: string, entryName?: string): DocumentError {
    const documentError: DocumentError = {
      ...error,
      name: 'DocumentVirtualModuleError',
      entryName,
      phase: 'virtual-module',
      originalError: error,
    };

    debug('Virtual module error for module %s: %o', moduleId, error);
    console.error(`Virtual module error for module: ${moduleId}`, error);

    return documentError;
  }

  /**
   * 处理 Loader 错误
   */
  handleLoaderError(error: Error, resourcePath: string): DocumentError {
    const documentError: DocumentError = {
      ...error,
      name: 'DocumentLoaderError',
      documentPath: resourcePath,
      phase: 'loader',
      originalError: error,
    };

    debug('Loader error for resource %s: %o', resourcePath, error);
    console.error(`Document loader error for resource: ${resourcePath}`, error);

    return documentError;
  }

  /**
   * 生成 fallback HTML
   */
  generateFallbackHtml(entryName: string, templateParameters: Record<string, unknown> = {}): string {
    const title = templateParameters.title || 'Modern.js App';
    const meta = templateParameters.meta || '';
    
    debug('Generating fallback HTML for entry: %s', entryName);
    
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  ${meta}
</head>
<body>
  <div id="root"></div>
  <!-- Document compilation failed, using fallback HTML -->
</body>
</html>`;
  }

  /**
   * 检查是否应该重试
   */
  shouldRetry(entryName: string, phase: string): boolean {
    const errorKey = `${entryName}-${phase}`;
    const count = this.errorCounts.get(errorKey) || 0;
    return count < this.maxRetries;
  }

  /**
   * 重置错误计数
   */
  resetErrorCount(entryName: string, phase?: string): void {
    if (phase) {
      const errorKey = `${entryName}-${phase}`;
      this.errorCounts.delete(errorKey);
    } else {
      // 重置所有相关错误计数
      for (const [key] of this.errorCounts) {
        if (key.startsWith(`${entryName}-`)) {
          this.errorCounts.delete(key);
        }
      }
    }
  }

  /**
   * 验证 Document 组件
   */
  validateDocumentComponent(component: any, entryName: string): boolean {
    if (!component) {
      console.warn(`Document component is null/undefined for entry: ${entryName}`);
      return false;
    }

    if (typeof component !== 'function' && typeof component !== 'object') {
      console.warn(`Document component is not a valid React component for entry: ${entryName}`);
      return false;
    }

    return true;
  }

  /**
   * 验证渲染函数
   */
  validateRenderFunction(renderFn: any, entryName: string): boolean {
    if (typeof renderFn !== 'function') {
      console.warn(`Render function is not a function for entry: ${entryName}`);
      return false;
    }

    return true;
  }

  /**
   * 安全渲染 Document
   */
  async safeRenderDocument(
    renderFn: Function,
    documentParams: any,
    entryName: string,
    templateParameters: Record<string, unknown> = {}
  ): Promise<string> {
    try {
      // 验证渲染函数
      if (!this.validateRenderFunction(renderFn, entryName)) {
        throw new Error('Invalid render function');
      }

      // 尝试渲染
      const html = await renderFn(documentParams);
      
      if (typeof html !== 'string') {
        throw new Error('Render function did not return a string');
      }

      return html;
    } catch (error) {
      // 处理渲染错误
      this.handleRenderingError(error as Error, entryName, documentParams);
      
      // 返回 fallback HTML
      return this.generateFallbackHtml(entryName, templateParameters);
    }
  }

  /**
   * 清理资源
   */
  cleanup(): void {
    this.errorCounts.clear();
  }
}

/**
 * 错误边界装饰器
 */
export function withErrorBoundary<T extends (...args: any[]) => any>(
  fn: T,
  errorHandler: (error: Error, ...args: Parameters<T>) => ReturnType<T>
): T {
  return ((...args: Parameters<T>): ReturnType<T> => {
    try {
      return fn(...args);
    } catch (error) {
      return errorHandler(error as Error, ...args);
    }
  }) as T;
}

/**
 * 异步错误边界装饰器
 */
export function withAsyncErrorBoundary<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  errorHandler: (error: Error, ...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>>
): T {
  return (async (...args: Parameters<T>): Promise<Awaited<ReturnType<T>>> => {
    try {
      return await fn(...args);
    } catch (error) {
      return await errorHandler(error as Error, ...args);
    }
  }) as T;
}

// 导出单例实例
export const documentErrorHandler = DocumentErrorHandler.getInstance();