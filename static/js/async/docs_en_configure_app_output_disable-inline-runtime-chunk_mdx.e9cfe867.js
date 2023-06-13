(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_output_disable-inline-runtime-chunk_mdx"],{57006:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var t=i("9880"),r=i("23169");function s(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",a:"a",h3:"h3",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Used to control whether to inline the bundler's runtime code into HTML."}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"What is runtimeChunk"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["Builder will generate a ",(0,t.jsx)(n.code,{children:"builder-runtime.js"})," file in the dist directory, which is the runtime code of webpack or Rspack."]}),"\n",(0,t.jsxs)(n.p,{children:["runtimeChunk is a piece of runtime code, which is provided by webpack or Rspack, that contains the necessary module processing logic, such as module loading, module parsing, etc. See ",(0,t.jsx)(n.a,{href:"https://webpack.js.org/concepts/manifest/#runtime",target:"_blank",rel:"noopener noreferrer",children:"Runtime"})," for details."]}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"In the production environment, Builder will inline the runtimeChunk file into the HTML file by default instead of writing it to the dist directory. This is done to reduce the number of file requests."}),"\n",(0,t.jsxs)(n.h3,{id:"disable-inlining",children:["Disable Inlining",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-inlining",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["If you don't want the runtimeChunk file to be inlined into the HTML file, you can set ",(0,t.jsx)(n.code,{children:"disableInlineRuntimeChunk"})," to ",(0,t.jsx)(n.code,{children:"true"})," and a separate ",(0,t.jsx)(n.code,{children:"builder-runtime.js"})," file will be generated."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableInlineRuntimeChunk: true,\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"merge-into-page-chunk",children:["Merge Into Page Chunk",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#merge-into-page-chunk",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"If you don't want to generate a separate runtimeChunk file, but want the runtimeChunk code to be bundled into the page chunk, you can set the config like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: {\n      optimization: {\n        runtimeChunk: false,\n      },\n    },\n  },\n};\n"})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(s,e)})):s(e)}},62296:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return d},title:function(){return l},toc:function(){return o},default:function(){return c}});var t=i("9880"),r=i("23169"),s=i.ir(i("57006")),d={sidebar_label:"disableInlineRuntimeChunk"},l="output.disableInlineRuntimeChunk",o=[];function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"outputdisableinlineruntimechunk",children:["output.disableInlineRuntimeChunk",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdisableinlineruntimechunk",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputdisableinlineruntimechunk",target:"_blank",rel:"noopener noreferrer",children:"output.disableInlineRuntimeChunk"}),".\n"]})})]}),"\n","\n",(0,t.jsx)(s.default,{})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}}}]);