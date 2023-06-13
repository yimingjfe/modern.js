(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_css-extract_mdx"],{56160:function(n,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i}});var r=s("9880"),t=s("23169");function c(n){var e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3"},(0,t.useMDXComponents)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"类型："})," ",(0,r.jsx)(e.code,{children:"Object | Function"})]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"默认值："})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const defaultOptions = {\n  // Loader 配置\n  loaderOptions: {},\n  // Plugin 配置\n  pluginOptions: {\n    // cssPath 默认为 static/css, cssFilename 默认为 [name].[contenthash:8].css\n    filename: `${cssPath}/${cssFilename}`,\n    chunkFilename: `${cssPath}/async/${cssFilename}`,\n    ignoreOrder: true,\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"打包工具："})," ",(0,r.jsx)(e.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["通过 ",(0,r.jsx)(e.code,{children:"tools.cssExtract"})," 可以更改 ",(0,r.jsx)(e.a,{href:"https://github.com/webpack-contrib/mini-css-extract-plugin",target:"_blank",rel:"noopener noreferrer",children:"mini-css-extract-plugin"})," 的配置。"]}),"\n",(0,r.jsxs)(e.h3,{id:"object-类型",children:["Object 类型",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"当此值为 Object 类型时，与默认配置通过 Object.assign 合并。比如："}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    cssExtract: {\n      pluginOptions: {\n        filename: 'static/css/[name].[contenthash:8].css',\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"function-类型",children:["Function 类型",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"当此值为 Function 类型时，默认配置作为第一个参数传入，你可以直接修改配置对象，也可以返回一个对象作为最终配置。比如："}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    cssExtract: config => {\n      config.pluginOptions.filename = 'static/css/[name].[contenthash:8].css';\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.p,{children:["更多配置细节可参考 ",(0,r.jsx)(e.a,{href:"https://github.com/webpack-contrib/mini-css-extract-plugin",target:"_blank",rel:"noopener noreferrer",children:"mini-css-extract-plugin"}),"。"]})]})}var i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,t.useMDXComponents)(),n.components).wrapper;return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(c,n)})):c(n)}},27060:function(n,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var s in e)Object.defineProperty(n,s,{enumerable:!0,get:e[s]})}(e,{frontmatter:function(){return i},title:function(){return a},toc:function(){return o},default:function(){return d}});var r=s("9880"),t=s("23169"),c=s.ir(s("56160")),i={sidebar_label:"cssExtract"},a="tools.cssExtract",o=[];function l(n){var e=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,t.useMDXComponents)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"toolscssextract",children:["tools.cssExtract",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#toolscssextract",children:"#"})]}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive tip",children:[(0,r.jsx)(e.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsxs)(e.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,r.jsx)(e.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolscssextract",target:"_blank",rel:"noopener noreferrer",children:"tools.cssExtract"}),"。\n"]})})]}),"\n","\n",(0,r.jsx)(c.default,{})]})}var d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,t.useMDXComponents)(),n.components).wrapper;return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(l,n)})):l(n)}}}]);