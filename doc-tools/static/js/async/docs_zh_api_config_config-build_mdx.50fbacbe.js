(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_api_config_config-build_mdx"],{47013:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return l},title:function(){return o},toc:function(){return c},default:function(){return h}});var d=r("9880"),i=r("23169"),s=r.ir(r("59060")),l={},o="构建配置",c=[{text:"builderConfig",depth:2,id:"builderconfig"},{text:"默认配置",depth:3,id:"默认配置"},{text:"markdown",depth:2,id:"markdown"},{text:"markdown.remarkPlugins",depth:3,id:"markdownremarkplugins"},{text:"markdown.rehypePlugins",depth:3,id:"markdownrehypeplugins"},{text:"markdown.checkDeadLinks",depth:3,id:"markdowncheckdeadlinks"},{text:"markdown.experimentalMdxRs",depth:3,id:"markdownexperimentalmdxrs"},{text:"markdown.showLineNumbers",depth:3,id:"markdownshowlinenumbers"}];function a(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",p:"p",pre:"pre",h3:"h3",blockquote:"blockquote",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"构建配置",children:["构建配置",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#构建配置",children:"#"})]}),"\n",(0,d.jsxs)(n.h2,{id:"builderconfig",children:["builderConfig",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderconfig",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Type: ",(0,d.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["用于自定义 Modern.js Builder 的配置项，完整配置项请查看 ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/api/index.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - API"}),"。"]}),"\n",(0,d.jsxs)(n.p,{children:["比如，将产物目录修改为 ",(0,d.jsx)(n.code,{children:"doc_dist"}),"："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  doc: {\n    builderConfig: {\n      output: {\n        distPath: {\n          root: 'doc_dist',\n        },\n      },\n    },\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"默认配置",children:["默认配置",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认配置",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["如果你需要查看默认的 ",(0,d.jsx)(n.code,{children:"builderConfig"}),"，可以在执行 ",(0,d.jsx)(n.code,{children:"modern dev"})," 或 ",(0,d.jsx)(n.code,{children:"modern build"})," 命令时，添加 ",(0,d.jsx)(n.code,{children:"DEBUG=builder"})," 参数："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"DEBUG=builder modern dev\n"})}),"\n",(0,d.jsxs)(n.p,{children:["在执行后，",(0,d.jsx)(n.code,{children:"doc_build"})," 目录下会生成 ",(0,d.jsx)(n.code,{children:"builder.config.js"})," 文件，里面包含了完整的 ",(0,d.jsx)(n.code,{children:"builderConfig"}),"。"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["请查看 ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/guide/debug/debug-mode.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - 调试模式"})," 来了解更多调试 Builder 的方法。"]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"markdown",children:["markdown",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Type: ",(0,d.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"配置 MDX 相关的编译能力。"}),"\n",(0,d.jsxs)(n.h3,{id:"markdownremarkplugins",children:["markdown.remarkPlugins",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdownremarkplugins",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Type: ",(0,d.jsx)(n.code,{children:"Array"})]}),"\n",(0,d.jsxs)(n.li,{children:["Default: ",(0,d.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"配置 remark 插件。比如："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      remarkPlugins: [\n        [\n          require('remark-autolink-headings'),\n          {\n            behavior: 'wrap',\n          },\n        ],\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"markdownrehypeplugins",children:["markdown.rehypePlugins",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdownrehypeplugins",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Type: ",(0,d.jsx)(n.code,{children:"Array"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"配置 rehype 插件。比如："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      rehypePlugins: [\n        [\n          require('rehype-autolink-headings'),\n          {\n            behavior: 'wrap',\n          },\n        ],\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"markdowncheckdeadlinks",children:["markdown.checkDeadLinks",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdowncheckdeadlinks",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsxs)(n.li,{children:["Default: ",(0,d.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"是否检查死链。比如："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      checkDeadLinks: true,\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,d.jsx)(n.p,{children:"开启这个配置后，框架会基于约定式路由表对文档中的链接进行检查，若出现无法访问的链接，构建会抛出错误并退出。"}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive warning",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsx)(n.p,{children:"不过我们并不推荐在开发阶段使用这个功能，因为它会禁用底层构建工具 webpack 的物理缓存，导致项目启动速度变慢。"})})]}),"\n",(0,d.jsxs)(n.h3,{id:"markdownexperimentalmdxrs",children:["markdown.experimentalMdxRs",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdownexperimentalmdxrs",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"是否使用 MDX 的 Rust 版本编译器，为实验性质功能。比如："}),"\n","\n",(0,d.jsx)(s.default,{}),"\n",(0,d.jsxs)(n.h3,{id:"markdownshowlinenumbers",children:["markdown.showLineNumbers",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdownshowlinenumbers",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["是否显示代码块的行号。默认为 ",(0,d.jsx)(n.code,{children:"false"}),"。"]})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}}}]);