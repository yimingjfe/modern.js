"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[6952],{36197:function(s,e,l){l.r(e),l.d(e,{content:function(){return r},frontmatter:function(){return c},toc:function(){return o}});var n=l(39980);const c=void 0,o=[{id:"object-type",text:"Object Type",depth:3},{id:"function-type",text:"Function Type",depth:3},{id:"util-function",text:"Util Function",depth:3},{id:"addexcludes",text:"addExcludes",depth:4}],r='"- Type: `Object | Function`\\n- Default:\\n\\n```js\\nconst defaultOptions = {\\n  lessOptions: {\\n    javascriptEnabled: true,\\n  },\\n  // CSS Source Map enabled by default in development environment\\n  sourceMap: isDev,\\n};\\n```\\n\\nYou can modify the config of [less-loader](https://github.com/webpack-contrib/less-loader) via `tools.less`.\\n\\n### Object Type\\n\\nWhen `tools.less` is configured as `Object` type, it is merged with the default config through Object.assign in a shallow way. It should be noted that `lessOptions` is merged through deepMerge in a deep way. For example:\\n\\n```js\\nexport default {\\n  tools: {\\n    less: {\\n      lessOptions: {\\n        javascriptEnabled: false,\\n      },\\n    },\\n  },\\n};\\n```\\n\\n### Function Type\\n\\nWhen `tools.less` is a Function, the default config is passed as the first parameter, which can be directly modified or returned as the final result. The second parameter provides some utility functions that can be called directly. For example:\\n\\n```js\\nexport default {\\n  tools: {\\n    less(config) {\\n      // Modify the config of lessOptions\\n      config.lessOptions = {\\n        javascriptEnabled: false,\\n      };\\n    },\\n  },\\n};\\n```\\n\\n### Util Function\\n\\n#### addExcludes\\n\\n- Type: `(excludes: RegExp | RegExp[]) => void`\\n\\nUsed to specify which files `less-loader` does not compile, You can pass in one or more regular expressions to match the path of less files, for example:\\n\\n```js\\nexport default {\\n  tools: {\\n    less(config, { addExcludes }) {\\n      addExcludes(/node_modules/);\\n    },\\n  },\\n};\\n```\\n"';function a(s){const e=Object.assign({ul:"ul",li:"li",code:"code",div:"div",button:"button",pre:"pre",span:"span",p:"p",a:"a",h3:"h3",h4:"h4"},s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Type: ",(0,n.jsx)(e.code,{children:"Object | Function"})]}),"\n",(0,n.jsx)(e.li,{children:"Default:"}),"\n"]}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"defaultOptions"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"lessOptions"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"javascriptEnabled"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"true"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#616E88"},children:"// CSS Source Map enabled by default in development environment"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"sourceMap"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"isDev"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.p,{children:["You can modify the config of ",(0,n.jsx)(e.a,{href:"https://github.com/webpack-contrib/less-loader",target:"_blank",rel:"nofollow",children:"less-loader"})," via ",(0,n.jsx)(e.code,{children:"tools.less"}),"."]}),"\n",(0,n.jsxs)(e.h3,{id:"object-type",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"}),"Object Type"]}),"\n",(0,n.jsxs)(e.p,{children:["When ",(0,n.jsx)(e.code,{children:"tools.less"})," is configured as ",(0,n.jsx)(e.code,{children:"Object"})," type, it is merged with the default config through Object.assign in a shallow way. It should be noted that ",(0,n.jsx)(e.code,{children:"lessOptions"})," is merged through deepMerge in a deep way. For example:"]}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"tools"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"less"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"lessOptions"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"javascriptEnabled"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"false"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.h3,{id:"function-type",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"}),"Function Type"]}),"\n",(0,n.jsxs)(e.p,{children:["When ",(0,n.jsx)(e.code,{children:"tools.less"})," is a Function, the default config is passed as the first parameter, which can be directly modified or returned as the final result. The second parameter provides some utility functions that can be called directly. For example:"]}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"tools"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"less"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"("}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"config"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:")"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"#616E88"},children:"// Modify the config of lessOptions"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"config"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"."}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"lessOptions"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"javascriptEnabled"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"false"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.h3,{id:"util-function",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#util-function",children:"#"}),"Util Function"]}),"\n",(0,n.jsxs)(e.h4,{id:"addexcludes",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"}),"addExcludes"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Type: ",(0,n.jsx)(e.code,{children:"(excludes: RegExp | RegExp[]) => void"})]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["Used to specify which files ",(0,n.jsx)(e.code,{children:"less-loader"})," does not compile, You can pass in one or more regular expressions to match the path of less files, for example:"]}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"tools"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"less"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"("}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"config"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"addExcludes"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"})"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"addExcludes"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"/"}),(0,n.jsx)(e.span,{style:{color:"#EBCB8B"},children:"node_modules"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"/"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,n.jsx)(e,Object.assign({},s,{children:(0,n.jsx)(a,s)})):a(s)}}}]);