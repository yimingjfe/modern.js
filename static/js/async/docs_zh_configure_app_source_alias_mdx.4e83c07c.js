(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_alias_mdx"],{73303:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var s=r("9880"),i=r("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",div:"div",h4:"h4",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"Record<string, string | string[]> | Function"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["设置文件引用的别名，对应 webpack 的 ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolvealias",target:"_blank",rel:"noopener noreferrer",children:"resolve.alias"})," 配置。"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["对于 TypeScript 项目，只需要在 ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," 中配置 ",(0,s.jsx)(n.a,{href:"https://www.typescriptlang.org/tsconfig#paths",target:"_blank",rel:"noopener noreferrer",children:"compilerOptions.paths"})," 即可，Builder 会自动识别 ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," 里的别名，因此不需要额外配置 ",(0,s.jsx)(n.code,{children:"alias"})," 字段。\n"]})})]}),"\n",(0,s.jsxs)(n.h4,{id:"object-类型",children:["Object 类型",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"alias"})," 的值可以定义为 Object 类型，其中的相对路径会自动被 Builder 转换为绝对路径。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["以上配置完成后，如果在代码中引用 ",(0,s.jsx)(n.code,{children:"@common/Foo.tsx"}),", 则会映射到 ",(0,s.jsx)(n.code,{children:"<root>/src/common/Foo.tsx"})," 路径上。"]}),"\n",(0,s.jsxs)(n.h4,{id:"function-类型",children:["Function 类型",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"alias"})," 的值定义为函数时，可以接受预设的 alias 对象，并对其进行修改。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: alias => {\n      alias['@common'] = './src/common';\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"也可以在函数中返回一个新对象作为最终结果，新对象会覆盖预设的 alias 对象。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: alias => {\n      return {\n        '@common': './src/common',\n      };\n    },\n  },\n};\n"})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},11735:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return a},title:function(){return o},toc:function(){return t},default:function(){return d}});var s=r("9880"),i=r("23169"),c=r.ir(r("73303")),a={sidebar_label:"alias"},o="source.alias",t=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourcealias",children:["source.alias",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcealias",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourcealias",target:"_blank",rel:"noopener noreferrer",children:"source.alias"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(c.default,{})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);