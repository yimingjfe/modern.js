import type { Rspack } from '@rsbuild/core';
import type { Entrypoint } from '@modern-js/types/cli';
import type { AppNormalizedConfig } from '@modern-js/app-tools';

/**
 * Document 虚拟模块插件选项
 */
export interface DocumentVirtualModulePluginOptions {
  /** 入口点配置 */
  entrypoints: Entrypoint[];
  /** 应用根目录 */
  appDirectory: string;
  /** 内部目录 */
  internalDirectory: string;
  /** 是否启用调试模式 */
  debug?: boolean;
  /** 自定义 Document 文件名 */
  documentFileName?: string;
  /** 支持的文件扩展名 */
  supportedExtensions?: string[];
}

/**
 * Document 参数类型
 */
export interface DocumentParams {
  /** 进程环境变量 */
  processEnv: NodeJS.ProcessEnv;
  /** 配置信息 */
  config: {
    output: AppNormalizedConfig['output'];
  };
  /** 入口名称 */
  entryName: string;
  /** 模板参数 */
  templateParams: Record<string, unknown>;
}

/**
 * 虚拟模块映射类型
 */
export interface VirtualModuleMap {
  /** 虚拟模块 ID 到内容的映射 */
  content: Map<string, string>;
  /** 入口名称到 Document 路径的映射 */
  documentPaths: Map<string, string>;
  /** 入口名称到虚拟模块 ID 的映射 */
  moduleIds: Map<string, string>;
}

/**
 * Document 渲染函数类型
 */
export interface DocumentRenderFunction {
  (documentParams: DocumentParams): string;
}

/**
 * 编译后的 Document 模块类型
 */
export interface CompiledDocumentModule {
  /** 默认导出的渲染函数 */
  default?: DocumentRenderFunction;
  /** 命名导出的渲染函数 */
  renderDocument?: DocumentRenderFunction;
  /** 原始 Document 组件 */
  DocumentComponent?: React.ComponentType<any>;
}

/**
 * HTML 插件上下文类型
 */
export interface HtmlPluginContext {
  htmlWebpackPlugin: {
    tags: {
      headTags: Array<{
        tagName: string;
        attributes?: Record<string, any>;
        innerHTML?: string;
      }>;
      bodyTags: Array<{
        tagName: string;
        attributes?: Record<string, any>;
        innerHTML?: string;
      }>;
    };
  };
}

/**
 * Document Loader 选项类型
 */
export interface DocumentLoaderOptions {
  /** 入口名称 */
  entryName?: string;
  /** 目标环境 */
  target?: string;
  /** 是否启用调试 */
  debug?: boolean;
  /** 自定义转换选项 */
  transformOptions?: Record<string, any>;
}

/**
 * 错误类型枚举
 */
export enum DocumentErrorPhase {
  COMPILATION = 'compilation',
  RENDERING = 'rendering',
  VIRTUAL_MODULE = 'virtual-module',
  LOADER = 'loader',
}

/**
 * Document 错误接口
 */
export interface DocumentError extends Error {
  /** 入口名称 */
  entryName?: string;
  /** Document 文件路径 */
  documentPath?: string;
  /** 错误阶段 */
  phase?: DocumentErrorPhase;
  /** 原始错误 */
  originalError?: Error;
  /** 错误代码 */
  code?: string;
  /** 额外的错误信息 */
  details?: Record<string, any>;
}

/**
 * 错误处理器选项
 */
export interface ErrorHandlerOptions {
  /** 最大重试次数 */
  maxRetries?: number;
  /** 是否启用 fallback HTML */
  enableFallback?: boolean;
  /** 自定义 fallback HTML 生成器 */
  fallbackGenerator?: (entryName: string, templateParameters: Record<string, unknown>) => string;
}

/**
 * Partials 内容类型
 */
export interface PartialsContent {
  /** 顶部内容 */
  partialsTop: string;
  /** 头部内容 */
  partialsHead: string;
  /** 主体内容 */
  partialsBody: string;
}

/**
 * HTML 处理结果类型
 */
export interface HtmlProcessingResult {
  /** 处理后的 HTML */
  html: string;
  /** 脚本标签 */
  scripts: string;
  /** 链接标签 */
  links: string;
  /** Meta 标签 */
  metas: string;
  /** 标题 */
  titles: string;
  /** Partials 内容 */
  partials: PartialsContent;
}

/**
 * 虚拟模块解析结果
 */
export interface VirtualModuleResolveResult {
  /** 是否为虚拟模块 */
  isVirtual: boolean;
  /** 模块 ID */
  moduleId?: string;
  /** 模块内容 */
  content?: string;
  /** 入口名称 */
  entryName?: string;
  /** Document 路径 */
  documentPath?: string;
}

/**
 * 编译统计信息
 */
export interface CompilationStats {
  /** 编译开始时间 */
  startTime: number;
  /** 编译结束时间 */
  endTime: number;
  /** 编译耗时 */
  duration: number;
  /** 处理的入口数量 */
  entriesCount: number;
  /** 成功编译的数量 */
  successCount: number;
  /** 失败的数量 */
  failureCount: number;
  /** 错误列表 */
  errors: DocumentError[];
  /** 警告列表 */
  warnings: string[];
}

/**
 * 插件钩子类型
 */
export interface DocumentPluginHooks {
  /** 编译前钩子 */
  beforeCompile?: (entries: string[]) => void | Promise<void>;
  /** 编译后钩子 */
  afterCompile?: (stats: CompilationStats) => void | Promise<void>;
  /** 渲染前钩子 */
  beforeRender?: (entryName: string, documentParams: DocumentParams) => void | Promise<void>;
  /** 渲染后钩子 */
  afterRender?: (entryName: string, html: string) => void | Promise<void>;
  /** 错误处理钩子 */
  onError?: (error: DocumentError) => void | Promise<void>;
}

/**
 * 扩展的插件选项
 */
export interface ExtendedDocumentPluginOptions extends DocumentVirtualModulePluginOptions {
  /** 错误处理选项 */
  errorHandler?: ErrorHandlerOptions;
  /** 插件钩子 */
  hooks?: DocumentPluginHooks;
  /** 缓存选项 */
  cache?: {
    enabled: boolean;
    maxAge?: number;
    cacheDir?: string;
  };
}

/**
 * Webpack/Rspack 兼容性类型
 */
export namespace BundlerCompat {
  export interface Compiler extends Rspack.Compiler {
    // 扩展编译器类型以支持更多特性
  }

  export interface Compilation extends Rspack.Compilation {
    // 扩展编译类型
  }

  export interface Module extends Rspack.Module {
    // 扩展模块类型
  }
}

/**
 * 模块声明 - 扩展全局类型
 */
declare global {
  namespace NodeJS {
    interface Global {
      __MODERN_DOCUMENT_VIRTUAL_MODULES__?: Map<string, string>;
      __MODERN_DOCUMENT_COMPILATION_STATS__?: CompilationStats;
    }
  }
}

/**
 * React 组件相关类型
 */
export interface DocumentComponentProps {
  /** 子组件 */
  children?: React.ReactNode;
  /** HTML 属性 */
  htmlAttributes?: React.HTMLAttributes<HTMLHtmlElement>;
  /** Head 属性 */
  headAttributes?: React.HTMLAttributes<HTMLHeadElement>;
  /** Body 属性 */
  bodyAttributes?: React.HTMLAttributes<HTMLBodyElement>;
}

/**
 * Document 上下文类型
 */
export interface DocumentContextValue extends DocumentParams {
  /** 是否为服务端渲染 */
  isSSR?: boolean;
  /** 请求对象（仅服务端） */
  request?: any;
  /** 响应对象（仅服务端） */
  response?: any;
}

/**
 * 工具函数类型
 */
export interface DocumentUtils {
  /** 查找 Document 文件 */
  findDocumentFile: (entrypoints: Entrypoint[], entryName: string, fallbackDir?: string) => string | undefined;
  /** 生成虚拟模块内容 */
  generateVirtualModuleContent: (documentPath: string, entryName: string) => string;
  /** 验证 Document 组件 */
  validateDocumentComponent: (component: any) => boolean;
  /** 处理占位符替换 */
  processPlaceholders: (html: string, replacements: Record<string, string>) => string;
}