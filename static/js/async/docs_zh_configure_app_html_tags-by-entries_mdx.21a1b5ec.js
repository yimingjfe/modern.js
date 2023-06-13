(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_html_tags-by-entries_mdx"],{63687:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var s=r("9880"),t=r("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"Record<string, ArrayOrNot<HtmlInjectTag | HtmlInjectTagHandler>>"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"用于在多页面的场景下，为不同的页面注入不同的标签。"}),"\n",(0,s.jsxs)(n.p,{children:["整体用法与 ",(0,s.jsx)(n.code,{children:"tags"})," 一致，并且可以使用「入口名称」作为 key ，对各个页面进行单独设置。"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tagsByEntries"})," 的优先级高于 ",(0,s.jsx)(n.code,{children:"tags"}),"，因此会覆盖 ",(0,s.jsx)(n.code,{children:"tags"})," 中设置的值。"]}),"\n",(0,s.jsxs)(n.h3,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    tags: [{ tag: 'script', attrs: { src: 'a.js' } }],\n    tagsByEntries: {\n      foo: [{ tag: 'script', attrs: { src: 'b.js' } }],\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["编译后，可以看到页面 ",(0,s.jsx)(n.code,{children:"foo"})," 注入标签："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script src="b.js"></script>\n'})}),"\n",(0,s.jsx)(n.p,{children:"其他页面则注入了："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script src="a.js"></script>\n'})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}},93529:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return a},toc:function(){return d},default:function(){return o}});var s=r("9880"),t=r("23169"),i=r.ir(r("63687")),c={sidebar_label:"tagsByEntries"},a="html.tagsByEntries",d=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"htmltagsbyentries",children:["html.tagsByEntries",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmltagsbyentries",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmltagsbyentries",target:"_blank",rel:"noopener noreferrer",children:"html.tagsByEntries"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(i.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);