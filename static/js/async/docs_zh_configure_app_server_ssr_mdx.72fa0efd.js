(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_server_ssr_mdx"],{65341:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},title:function(){return i},toc:function(){return l},default:function(){return t}});var s=r("9880"),c=r("23169"),d={sidebar_label:"ssr"},i="server.ssr",l=[{text:"Boolean 类型",depth:3,id:"boolean-类型"},{text:"Object 类型",depth:3,id:"object-类型"}];function o(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"serverssr",children:["server.ssr",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverssr",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean"})," | ",(0,s.jsx)(n.code,{children:"Object"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"SSR 开关以及相关设置。"}),"\n",(0,s.jsxs)(n.h3,{id:"boolean-类型",children:["Boolean 类型",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-类型",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["当值类型为 ",(0,s.jsx)(n.code,{children:"boolean"})," 时，表示是否开启 SSR 部署模式，默认 ",(0,s.jsx)(n.code,{children:"false"})," 不开启。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    ssr: true,\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"object-类型",children:["Object 类型",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["当值类型为 ",(0,s.jsx)(n.code,{children:"Object"})," 时，可以配置如下属性："]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"mode"}),"：",(0,s.jsx)(n.code,{children:"string = 'string'"}),"，默认为使用 ",(0,s.jsx)(n.code,{children:"renderToString"})," 渲染。配置为 ",(0,s.jsx)(n.code,{children:"stream"})," 开启流式渲染。"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"forceCSR"}),"：",(0,s.jsx)(n.code,{children:"boolean = false"}),"，默认关闭强制 CSR 渲染。配置为 ",(0,s.jsx)(n.code,{children:"true"})," 后，在页面访问时添加 ",(0,s.jsx)(n.code,{children:"?csr=true"})," 即可强制 CSR。"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"inlineScript"}),"：",(0,s.jsx)(n.code,{children:"boolean = true"}),"，默认情况下，SSR 的数据会以内联脚本的方式注入到 HTML 中，并且直接赋值给全局变量。配置为 ",(0,s.jsx)(n.code,{children:"false"})," 后，会下发 JSON，而不是赋值给全局变量。"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    forceCSR: true,\n    mode: 'stream',\n    inlineScript: false,\n  },\n});\n"})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);