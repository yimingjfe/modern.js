# Modern.js Document 虚拟模块插件

这个插件实现了使用主 bundler（Rspack/Webpack）编译 `Document.tsx` 文件，替代原有的 esbuild 编译方式，确保编译环境的一致性。

## 方案概述

采用**虚拟模块 + Loader**方案，通过创建虚拟模块让主 bundler 处理 Document.tsx 文件，避免了 child compiler 的性能开销。

## 核心特性

- ✅ **统一编译环境**：与其他代码使用相同的 bundler 和配置
- ✅ **类型安全**：完整的 TypeScript 类型支持
- ✅ **错误处理**：完善的错误处理和 fallback 机制
- ✅ **性能优化**：避免 child compiler 的开销
- ✅ **向后兼容**：与现有 Modern.js Document 功能完全兼容
- ✅ **调试支持**：详细的调试信息和错误追踪

## 文件结构

```
├── document-virtual-module-plugin.ts       # 基础虚拟模块插件
├── improved-document-virtual-module-plugin.ts  # 改进版插件（推荐）
├── document-loader.js                      # Document 专用 loader
├── document-plugin-integration.ts          # 与现有系统的集成
├── document-error-handler.ts              # 错误处理器
├── document-types.ts                      # TypeScript 类型定义
├── usage-example.ts                       # 使用示例
└── README.md                              # 文档
```

## 快速开始

### 1. 基本用法

```typescript
// modern.config.ts
import { defineConfig } from '@modern-js/app-tools';
import { createDocumentVirtualModulePlugin } from './document-virtual-module-plugin';

export default defineConfig({
  plugins: [
    createDocumentVirtualModulePlugin(),
  ],
});
```

### 2. 高级配置

```typescript
// modern.config.ts
import { defineConfig } from '@modern-js/app-tools';
import { createDocumentVirtualModulePlugin } from './document-virtual-module-plugin';

export default defineConfig({
  plugins: [
    createDocumentVirtualModulePlugin({
      debug: true,
      documentFileName: 'Document',
      supportedExtensions: ['tsx', 'jsx', 'ts', 'js'],
      
      // 错误处理配置
      errorHandler: {
        maxRetries: 3,
        enableFallback: true,
        fallbackGenerator: (entryName, templateParams) => {
          return `<!DOCTYPE html><html><head><title>${templateParams.title}</title></head><body><div id="root"></div></body></html>`;
        },
      },
      
      // 生命周期钩子
      hooks: {
        beforeCompile: async (entries) => {
          console.log('开始编译 Document 文件:', entries);
        },
        afterCompile: async (stats) => {
          console.log(`编译完成: ${stats.successCount}/${stats.entriesCount} 成功`);
        },
        onError: async (error) => {
          console.error('Document 编译错误:', error);
        },
      },
      
      // 缓存配置
      cache: {
        enabled: true,
        maxAge: 300000, // 5分钟
      },
    }),
  ],
});
```

## 工作原理

### 1. 虚拟模块生成

插件为每个入口的 `Document.tsx` 文件创建一个虚拟模块：

```javascript
// 生成的虚拟模块内容示例
import React from 'react';
import ReactDomServer from 'react-dom/server';
import { DocumentContext } from '@modern-js/runtime/document';
import DocumentComponent from './src/Document.tsx';

export function renderDocument(documentParams) {
  const HTMLElement = React.createElement(
    DocumentContext.Provider,
    { value: documentParams },
    React.createElement(DocumentComponent, null)
  );
  
  return ReactDomServer.renderToStaticMarkup(HTMLElement);
}

export default renderDocument;
```

### 2. 主 Bundler 编译

虚拟模块通过主 bundler 进行编译，享受所有配置：
- TypeScript 编译
- JSX 转换
- 代码压缩
- 模块解析
- 插件处理

### 3. HTML 生成

在 `htmlPlugin` 的 `templateContent` 函数中使用编译结果：

```typescript
const templateContent = async ({ htmlWebpackPlugin }) => {
  // 导入编译后的虚拟模块
  const compiledModule = await import(virtualModuleId);
  const renderDocument = compiledModule.default;
  
  // 渲染 HTML
  const html = renderDocument(documentParams);
  
  // 处理占位符和标签
  return processHtmlContent(html, htmlWebpackPlugin);
};
```

## API 文档

### DocumentVirtualModulePlugin

主要的插件类，负责虚拟模块的创建和管理。

#### 构造函数选项

```typescript
interface ExtendedDocumentPluginOptions {
  entrypoints: Entrypoint[];           // 入口点配置
  appDirectory: string;                // 应用根目录
  internalDirectory: string;           // 内部目录
  debug?: boolean;                     // 调试模式
  documentFileName?: string;           // Document 文件名
  supportedExtensions?: string[];      // 支持的扩展名
  errorHandler?: ErrorHandlerOptions;  // 错误处理配置
  hooks?: DocumentPluginHooks;         // 生命周期钩子
  cache?: CacheOptions;               // 缓存配置
}
```

#### 主要方法

- `hasDocument(entryName: string): boolean` - 检查入口是否有 Document 文件
- `getVirtualModuleId(entryName: string): string` - 获取虚拟模块 ID
- `getDocumentPath(entryName: string): string` - 获取 Document 文件路径
- `getCompilationStats(): CompilationStats` - 获取编译统计信息

### DocumentErrorHandler

错误处理器，提供统一的错误处理和 fallback 机制。

#### 主要方法

- `handleCompilationError(error, entryName)` - 处理编译错误
- `handleRenderingError(error, entryName)` - 处理渲染错误
- `generateFallbackHtml(entryName, templateParams)` - 生成 fallback HTML
- `safeRenderDocument(renderFn, params, entryName)` - 安全渲染文档

## 错误处理

插件提供了完善的错误处理机制：

### 1. 编译错误

当 Document.tsx 编译失败时：
- 记录详细错误信息
- 支持重试机制
- 提供 fallback HTML

### 2. 渲染错误

当 Document 组件渲染失败时：
- 捕获运行时错误
- 生成默认 HTML
- 记录错误日志

### 3. 模块解析错误

当虚拟模块解析失败时：
- 提供详细的错误信息
- 支持降级处理
- 维护系统稳定性

## 性能优化

### 1. 虚拟模块缓存

- 内存中缓存虚拟模块内容
- 避免重复生成
- 支持缓存失效

### 2. 错误重试机制

- 智能重试策略
- 避免无限重试
- 快速失败机制

### 3. 编译统计

- 详细的性能指标
- 编译时间追踪
- 成功率统计

## 与原有系统的兼容性

插件设计为与现有 Modern.js Document 系统完全兼容：

- ✅ 支持所有现有的 Document 功能
- ✅ 保持相同的 API 接口
- ✅ 兼容现有的配置选项
- ✅ 支持渐进式迁移

## 迁移指南

### 从原有 esbuild 方案迁移

1. **安装新插件**：
   ```typescript
   import { createDocumentVirtualModulePlugin } from './document-virtual-module-plugin';
   ```

2. **替换原有插件**：
   ```typescript
   // 原有
   plugins: [documentPlugin()]
   
   // 新版
   plugins: [createDocumentVirtualModulePlugin()]
   ```

3. **测试验证**：
   - 确保 Document.tsx 正常编译
   - 验证 HTML 输出正确
   - 检查错误处理

## 调试

### 启用调试模式

```typescript
createDocumentVirtualModulePlugin({
  debug: true,
  hooks: {
    afterCompile: async (stats) => {
      console.log('编译统计:', stats);
    },
  },
});
```

### 调试信息

- 虚拟模块创建过程
- 编译时间和性能指标
- 错误详细信息
- 模块解析过程

## 常见问题

### Q: 为什么选择虚拟模块而不是 child compiler？

A: 虚拟模块方案有以下优势：
- 更好的性能（无需额外的编译过程）
- 完全一致的编译环境
- 更简单的实现和维护
- 更好的错误处理

### Q: 如何处理 Document.tsx 中的动态导入？

A: 插件会将 Document.tsx 及其依赖都通过主 bundler 处理，支持所有现代 JavaScript/TypeScript 特性，包括动态导入。

### Q: 是否支持热更新？

A: 是的，由于使用主 bundler 编译，Document.tsx 文件的修改会触发正常的热更新流程。

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个插件。

## 许可证

MIT License