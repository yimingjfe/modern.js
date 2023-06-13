(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_plugin_system_introduction_mdx"],{86827:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var o in n)Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}(n,{frontmatter:function(){return i},title:function(){return s},toc:function(){return a},default:function(){return c}});var r=o("9880"),t=o("23169"),i={},s="Introduction",a=[];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",img:"img",strong:"strong",ul:"ul",li:"li",code:"code"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"introduction",children:["Introduction",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The plugin system is a crucial part of Modern.js Doc, which allows you to easily extend the abilities of the framework during the process of building a site. So, what ability can you extend with plugins? Let's take a look at the overall architecture of Modern.js first."}),"\n",(0,r.jsx)(n.p,{children:"The overall architecture of Modern.js Doc is shown in the figure below:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/edenx-doc/arch-en.png",alt:"Modern.js Doc Architecture"})}),"\n",(0,r.jsxs)(n.p,{children:["The overall framework is divided into two parts: ",(0,r.jsx)(n.strong,{children:"Node Side"})," and ",(0,r.jsx)(n.strong,{children:"Browser Runtime"}),". Through the plugin system, you can easily extend the abilities of these two parts. Specifically, you can extend the ability to:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/plugin/system/plugin-api#markdown",children:(0,r.jsx)(n.strong,{children:"Markdown/MDX compilation"})}),"。You can add ",(0,r.jsx)(n.a,{href:"https://github.com/remarkjs/remark",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.code,{children:"remark"})}),"/",(0,r.jsx)(n.a,{href:"https://github.com/rehypejs/rehype",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.code,{children:"rehype"})})," plugins to extend the compliation ability of Markdown/MDX."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/plugin/system/plugin-api#addpages",children:(0,r.jsx)(n.strong,{children:"Add custom page"})}),". On the basis of the framework's conventional routing, you can also add new routes through plugins, such as adding a ",(0,r.jsx)(n.code,{children:"/blog"})," route to display a list of blogs, and the content is defined by yourself."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/plugin/system/plugin-api#builderconfig",children:(0,r.jsx)(n.strong,{children:"Custom build tool behavior"})}),".In the framework plugin, you can customize the config of the underlying build tool ",(0,r.jsx)(n.a,{href:"https://rspack.dev",target:"_blank",rel:"noopener noreferrer",children:"Rspack"}),", such as ",(0,r.jsx)(n.code,{children:"define"}),", ",(0,r.jsx)(n.code,{children:"alias"}),", and you can also add custom Rspack plugins."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/plugin/system/plugin-api#extendpagedata",children:(0,r.jsx)(n.strong,{children:"Extend page metadata"})}),". For each page, some metadata will be calculated inside the framework, such as ",(0,r.jsx)(n.code,{children:"title"}),", ",(0,r.jsx)(n.code,{children:"description"}),", etc. You can extend the calculation logic of these metadata through plugins, and pass ",(0,r.jsx)(n.a,{href:"/api/client-api/api-runtime#usepagedata",children:"usePageData"})," hook access."]}),"\n",(0,r.jsxs)(n.li,{children:["Insert some ",(0,r.jsx)(n.a,{href:"/plugin/system/plugin-api#beforebuild/afterbuild",children:(0,r.jsx)(n.strong,{children:"custom logic"})})," before and after the build process. Such as closing some event listeners after the build process ends."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/plugin/system/plugin-api#globaluicomponents",children:(0,r.jsx)(n.strong,{children:"Add global components"})}),". Modern.js Doc internally uses React for rendering. You can flexibly extend the runtime page by defining global React components, such as ",(0,r.jsx)(n.code,{children:"adding a global BackToTop (return to top) component"}),", ",(0,r.jsx)(n.code,{children:"adding a global side effect logic"}),"."]}),"\n"]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);