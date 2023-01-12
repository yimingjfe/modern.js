"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[4960],{54751:function(e,s,n){n.r(s),n.d(s,{content:function(){return r},frontmatter:function(){return c},toc:function(){return o}});var l=n(39980);const c=void 0,o=[{id:"string-type",text:"String Type",depth:4},{id:"object-type",text:"Object Type",depth:4},{id:"remove-default-value",text:"Remove Default Value",depth:3}],r="\"- Type: `Record<string, false | string | Record<string, string | boolean>>`\\n- Default: `undefined`\\n\\nConfigure the `<meta>` tag of the HTML.\\n\\n#### String Type\\n\\nWhen the `value` of a `meta` object is a string, the `key` of the object is automatically mapped to `name`, and the `value` is mapped to `content`.\\n\\nFor example to set description:\\n\\n```js\\nexport default {\\n  html: {\\n    meta: {\\n      description: 'a description of the page',\\n    },\\n  },\\n};\\n```\\n\\nThe generated `meta` tag in HTML is:\\n\\n```html\\n<meta name=\\\"description\\\" content=\\\"a description of the page\\\" />\\n```\\n\\n#### Object Type\\n\\nWhen the `value` of a `meta` object is an object, the `key: value` of the object is mapped to the attribute of the `meta` tag.\\n\\nIn this case, the `name` and `content` properties will not be set by default.\\n\\nFor example to set `http-equiv`:\\n\\n```js\\nexport default {\\n  html: {\\n    meta: {\\n      'http-equiv': {\\n        'http-equiv': 'x-ua-compatible',\\n        content: 'ie=edge',\\n      },\\n    },\\n  },\\n};\\n```\\n\\nThe `meta` tag in HTML is:\\n\\n```html\\n<meta http-equiv=\\\"x-ua-compatible\\\" content=\\\"ie=edge\\\" />\\n```\\n\\n### Remove Default Value\\n\\nSetting the `value` of the `meta` object to `false` and the meta tag will not be generated.\\n\\nFor example to remove the `imagemode`:\\n\\n```ts\\nexport default {\\n  html: {\\n    meta: {\\n      imagemode: false,\\n    },\\n  },\\n};\\n```\\n\"";function a(e){const s=Object.assign({ul:"ul",li:"li",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre",span:"span",h3:"h3"},e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["Type: ",(0,l.jsx)(s.code,{children:"Record<string, false | string | Record<string, string | boolean>>"})]}),"\n",(0,l.jsxs)(s.li,{children:["Default: ",(0,l.jsx)(s.code,{children:"undefined"})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["Configure the ",(0,l.jsx)(s.code,{children:"<meta>"})," tag of the HTML."]}),"\n",(0,l.jsxs)(s.h4,{id:"string-type",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#string-type",children:"#"}),"String Type"]}),"\n",(0,l.jsxs)(s.p,{children:["When the ",(0,l.jsx)(s.code,{children:"value"})," of a ",(0,l.jsx)(s.code,{children:"meta"})," object is a string, the ",(0,l.jsx)(s.code,{children:"key"})," of the object is automatically mapped to ",(0,l.jsx)(s.code,{children:"name"}),", and the ",(0,l.jsx)(s.code,{children:"value"})," is mapped to ",(0,l.jsx)(s.code,{children:"content"}),"."]}),"\n",(0,l.jsx)(s.p,{children:"For example to set description:"}),"\n",(0,l.jsxs)(s.div,{className:"language-js",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#88C0D0"},children:"html"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"#88C0D0"},children:"meta"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"#88C0D0"},children:"description"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(s.span,{style:{color:"#A3BE8C"},children:"a description of the page"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.p,{children:["The generated ",(0,l.jsx)(s.code,{children:"meta"})," tag in HTML is:"]}),"\n",(0,l.jsxs)(s.div,{className:"language-html",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"<meta"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#8FBCBB"},children:"name"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"="}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,l.jsx)(s.span,{style:{color:"#A3BE8C"},children:"description"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#8FBCBB"},children:"content"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"="}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,l.jsx)(s.span,{style:{color:"#A3BE8C"},children:"a description of the page"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"/>"})]}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.h4,{id:"object-type",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"}),"Object Type"]}),"\n",(0,l.jsxs)(s.p,{children:["When the ",(0,l.jsx)(s.code,{children:"value"})," of a ",(0,l.jsx)(s.code,{children:"meta"})," object is an object, the ",(0,l.jsx)(s.code,{children:"key: value"})," of the object is mapped to the attribute of the ",(0,l.jsx)(s.code,{children:"meta"})," tag."]}),"\n",(0,l.jsxs)(s.p,{children:["In this case, the ",(0,l.jsx)(s.code,{children:"name"})," and ",(0,l.jsx)(s.code,{children:"content"})," properties will not be set by default."]}),"\n",(0,l.jsxs)(s.p,{children:["For example to set ",(0,l.jsx)(s.code,{children:"http-equiv"}),":"]}),"\n",(0,l.jsxs)(s.div,{className:"language-js",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#88C0D0"},children:"html"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"#88C0D0"},children:"meta"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(s.span,{style:{color:"#A3BE8C"},children:"http-equiv"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(s.span,{style:{color:"#A3BE8C"},children:"http-equiv"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(s.span,{style:{color:"#A3BE8C"},children:"x-ua-compatible"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"#88C0D0"},children:"content"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(s.span,{style:{color:"#A3BE8C"},children:"ie=edge"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.p,{children:["The ",(0,l.jsx)(s.code,{children:"meta"})," tag in HTML is:"]}),"\n",(0,l.jsxs)(s.div,{className:"language-html",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"<meta"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#8FBCBB"},children:"http-equiv"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"="}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,l.jsx)(s.span,{style:{color:"#A3BE8C"},children:"x-ua-compatible"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#8FBCBB"},children:"content"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"="}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,l.jsx)(s.span,{style:{color:"#A3BE8C"},children:"ie=edge"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"/>"})]}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.h3,{id:"remove-default-value",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#remove-default-value",children:"#"}),"Remove Default Value"]}),"\n",(0,l.jsxs)(s.p,{children:["Setting the ",(0,l.jsx)(s.code,{children:"value"})," of the ",(0,l.jsx)(s.code,{children:"meta"})," object to ",(0,l.jsx)(s.code,{children:"false"})," and the meta tag will not be generated."]}),"\n",(0,l.jsxs)(s.p,{children:["For example to remove the ",(0,l.jsx)(s.code,{children:"imagemode"}),":"]}),"\n",(0,l.jsxs)(s.div,{className:"language-ts",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"html"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"meta"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"imagemode"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"false"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]})]})}s.default=function(e={}){const{wrapper:s}=e.components||{};return s?(0,l.jsx)(s,Object.assign({},e,{children:(0,l.jsx)(a,e)})):a(e)}}}]);