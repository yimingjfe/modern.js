const path = require('path');
const { getOptions } = require('loader-utils');

/**
 * Document Loader
 * 专门处理 Document.tsx 虚拟模块的 webpack loader
 * 这个 loader 将虚拟模块转换为可执行的 JavaScript 代码
 */
module.exports = function documentLoader(source) {
  const callback = this.async();
  const options = getOptions(this) || {};

  // 标记这是一个虚拟模块
  this.cacheable(false);

  try {
    // 如果是虚拟模块请求，直接返回预生成的内容
    if (this.resourcePath.startsWith('virtual:modern-document-')) {
      // 从虚拟模块映射中获取内容
      const virtualContent = getVirtualModuleContent(this.resourcePath);
      if (virtualContent) {
        return callback(null, virtualContent);
      }
    }

    // 对于普通的 Document.tsx 文件，进行转换
    const transformedSource = transformDocumentSource(source, options);
    callback(null, transformedSource);

  } catch (error) {
    callback(error);
  }
};

/**
 * 获取虚拟模块内容
 */
function getVirtualModuleContent(resourcePath) {
  // 这里应该从插件实例中获取虚拟模块内容
  // 在实际实现中，可以通过全局变量或者其他方式共享数据
  const virtualModules = global.__MODERN_DOCUMENT_VIRTUAL_MODULES__ || new Map();
  return virtualModules.get(resourcePath);
}

/**
 * 转换 Document 源码
 */
function transformDocumentSource(source, options) {
  const { entryName = 'unknown' } = options;
  
  return `
// Transformed Document module
import React from 'react';
import ReactDomServer from 'react-dom/server';
import { DocumentContext } from '@modern-js/runtime/document';

// Original Document component source
${source}

// Wrapper function for rendering
export function renderDocument(documentParams) {
  const HTMLElement = React.createElement(
    DocumentContext.Provider,
    { value: documentParams },
    React.createElement(Document, null)
  );
  
  return ReactDomServer.renderToStaticMarkup(HTMLElement);
}

// Export both the component and render function
export { default as DocumentComponent } from './Document';
export default renderDocument;
`;
}

// 标记为 ESM 模块
module.exports.raw = false;