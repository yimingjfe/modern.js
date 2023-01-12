"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[3756],{13120:function(s,l,e){e.r(l),e.d(l,{content:function(){return o},frontmatter:function(){return c},toc:function(){return r}});var n=e(39980);const c=void 0,r=[{id:"object-\u7c7b\u578b",text:"Object \u7c7b\u578b",depth:3},{id:"function-\u7c7b\u578b",text:"Function \u7c7b\u578b",depth:3},{id:"\u5de5\u5177\u51fd\u6570",text:"\u5de5\u5177\u51fd\u6570",depth:3},{id:"addincludes",text:"addIncludes",depth:4},{id:"addexcludes",text:"addExcludes",depth:4}],o='"- Type: `Object | Function | undefined`\\n- Default: `undefined`\\n\\n\u9879\u76ee\u4e2d\u9ed8\u8ba4\u4e0d\u5f00\u542f ts-loader\uff0c\u5f53 `tools.tsLoader` \u4e0d\u4e3a undefined \u5219\u8868\u793a\u5f00\u542f ts-loader\uff0c\u540c\u65f6\u7981\u7528 babel-loader \u5bf9 TypeScript \u7684\u7f16\u8bd1\u3002\\n\\n### Object \u7c7b\u578b\\n\\n\u5f53\u6b64\u503c\u4e3a Object \u7c7b\u578b\u65f6\uff0c\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u901a\u8fc7 Object.assign \u5408\u5e76\u3002\\n\\n\u9ed8\u8ba4\u914d\u7f6e\u5982\u4e0b:\\n\\n```json\\n{\\n  \\"compilerOptions\\": {\\n    \\"target\\": \\"es5\\",\\n    \\"module\\": \\"ESNext\\"\\n  },\\n  \\"transpileOnly\\": true,\\n  \\"allowTsInNodeModules\\": true\\n}\\n```\\n\\n\u4f60\u53ef\u4ee5\u901a\u8fc7 `tools.tsLoader` \u914d\u7f6e\u9879\u6765\u8986\u76d6\u9ed8\u8ba4\u914d\u7f6e:\\n\\n```ts\\nexport default {\\n  tools: {\\n    tsLoader: {\\n      allowTsInNodeModules: false,\\n    },\\n  },\\n};\\n```\\n\\n### Function \u7c7b\u578b\\n\\n\u5f53\u6b64\u503c\u4e3a Function \u7c7b\u578b\u65f6\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4f5c\u4e3a\u7b2c\u4e00\u53c2\u6570\u4f20\u5165\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u4f5c\u4e3a\u6700\u7ec8\u914d\u7f6e\uff1b\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u4fee\u6539 `ts-loader` \u914d\u7f6e\u5de5\u5177\u51fd\u6570\u96c6\u5408\uff1a\\n\\n```ts\\nexport default {\\n  tools: {\\n    tsLoader: opts => {\\n      opts.allowTsInNodeModules = false;\\n    },\\n  },\\n};\\n```\\n\\n### \u5de5\u5177\u51fd\u6570\\n\\n`tools.tsLoader` \u7684\u503c\u4e3a Function \u7c7b\u578b\u65f6\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u53ef\u7528\u7684\u5de5\u5177\u51fd\u6570\u5982\u4e0b\uff1a\\n\\n#### addIncludes\\n\\n\u7c7b\u578b: `(includes: string | RegExp | Array<string | RegExp>) => void`\\n\\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u53ea\u4f1a\u7f16\u8bd1 src \u76ee\u5f55\u4e0b\u7684\u4e1a\u52a1\u4ee3\u7801\uff0c\u4f7f\u7528 addIncludes \u53ef\u4ee5\u6307\u5b9a ts-loader \u7f16\u8bd1 `node_modules` \u4e0b\u7684\u4e00\u4e9b\u6587\u4ef6\u3002\u6bd4\u5982:\\n\\n```ts\\nexport default {\\n  tools: {\\n    tsLoader: (config, { addIncludes }) => {\\n      addIncludes([/node_modules\\\\/react/]);\\n    },\\n  },\\n};\\n```\\n\\n#### addExcludes\\n\\n\u7c7b\u578b: `(excludes: string | RegExp | Array<string | RegExp>) => void`\\n\\n\u548c `addIncludes` \u76f8\u53cd\uff0c\u6307\u5b9a `ts-loader` \u7f16\u8bd1\u65f6\u6392\u9664\u67d0\u4e9b\u6587\u4ef6\u3002\\n\\n\u4f8b\u5982\u4e0d\u7f16\u8bd1 src/example \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\uff1a\\n\\n```ts\\nexport default {\\n  tools: {\\n    tsLoader: (config, { addExcludes }) => {\\n      addExcludes([/src\\\\/example\\\\//]);\\n    },\\n  },\\n};\\n```\\n"';function d(s){const l=Object.assign({ul:"ul",li:"li",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre",span:"span",h4:"h4"},s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["Type: ",(0,n.jsx)(l.code,{children:"Object | Function | undefined"})]}),"\n",(0,n.jsxs)(l.li,{children:["Default: ",(0,n.jsx)(l.code,{children:"undefined"})]}),"\n"]}),"\n",(0,n.jsxs)(l.p,{children:["\u9879\u76ee\u4e2d\u9ed8\u8ba4\u4e0d\u5f00\u542f ts-loader\uff0c\u5f53 ",(0,n.jsx)(l.code,{children:"tools.tsLoader"})," \u4e0d\u4e3a undefined \u5219\u8868\u793a\u5f00\u542f ts-loader\uff0c\u540c\u65f6\u7981\u7528 babel-loader \u5bf9 TypeScript \u7684\u7f16\u8bd1\u3002"]}),"\n",(0,n.jsxs)(l.h3,{id:"object-\u7c7b\u578b",children:[(0,n.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7c7b\u578b",children:"#"}),"Object \u7c7b\u578b"]}),"\n",(0,n.jsx)(l.p,{children:"\u5f53\u6b64\u503c\u4e3a Object \u7c7b\u578b\u65f6\uff0c\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u901a\u8fc7 Object.assign \u5408\u5e76\u3002"}),"\n",(0,n.jsx)(l.p,{children:"\u9ed8\u8ba4\u914d\u7f6e\u5982\u4e0b:"}),"\n",(0,n.jsxs)(l.div,{className:"language-json",children:[(0,n.jsx)(l.div,{className:""}),(0,n.jsxs)(l.div,{className:"modern-code-content",children:[(0,n.jsx)(l.button,{className:"copy"}),(0,n.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(l.code,{children:[(0,n.jsx)(l.span,{className:"line",children:(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:'"'}),(0,n.jsx)(l.span,{style:{color:"#8FBCBB"},children:"compilerOptions"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:'"'}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:'"'}),(0,n.jsx)(l.span,{style:{color:"#8FBCBB"},children:"target"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:'"'}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:'"'}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"es5"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:'"'}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:'"'}),(0,n.jsx)(l.span,{style:{color:"#8FBCBB"},children:"module"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:'"'}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:'"'}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"ESNext"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:'"'}),(0,n.jsx)(l.span,{style:{color:"#8FBCBB"},children:"transpileOnly"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:'"'}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"true"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:'"'}),(0,n.jsx)(l.span,{style:{color:"#8FBCBB"},children:"allowTsInNodeModules"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:'"'}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"true"})]}),"\n",(0,n.jsx)(l.span,{className:"line",children:(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"})}),"\n",(0,n.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(l.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,n.jsx)(l.code,{children:"tools.tsLoader"})," \u914d\u7f6e\u9879\u6765\u8986\u76d6\u9ed8\u8ba4\u914d\u7f6e:"]}),"\n",(0,n.jsxs)(l.div,{className:"language-ts",children:[(0,n.jsx)(l.div,{className:""}),(0,n.jsxs)(l.div,{className:"modern-code-content",children:[(0,n.jsx)(l.button,{className:"copy"}),(0,n.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(l.code,{children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"tools"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"tsLoader"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"allowTsInNodeModules"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"false"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(l.h3,{id:"function-\u7c7b\u578b",children:[(0,n.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#function-\u7c7b\u578b",children:"#"}),"Function \u7c7b\u578b"]}),"\n",(0,n.jsxs)(l.p,{children:["\u5f53\u6b64\u503c\u4e3a Function \u7c7b\u578b\u65f6\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4f5c\u4e3a\u7b2c\u4e00\u53c2\u6570\u4f20\u5165\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u4f5c\u4e3a\u6700\u7ec8\u914d\u7f6e\uff1b\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u4fee\u6539 ",(0,n.jsx)(l.code,{children:"ts-loader"})," \u914d\u7f6e\u5de5\u5177\u51fd\u6570\u96c6\u5408\uff1a"]}),"\n",(0,n.jsxs)(l.div,{className:"language-ts",children:[(0,n.jsx)(l.div,{className:""}),(0,n.jsxs)(l.div,{className:"modern-code-content",children:[(0,n.jsx)(l.button,{className:"copy"}),(0,n.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(l.code,{children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"tools"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"tsLoader"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"opts"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"=>"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"opts"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"."}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"allowTsInNodeModules"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"="}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"false;"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(l.h3,{id:"\u5de5\u5177\u51fd\u6570",children:[(0,n.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5de5\u5177\u51fd\u6570",children:"#"}),"\u5de5\u5177\u51fd\u6570"]}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"tools.tsLoader"})," \u7684\u503c\u4e3a Function \u7c7b\u578b\u65f6\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u53ef\u7528\u7684\u5de5\u5177\u51fd\u6570\u5982\u4e0b\uff1a"]}),"\n",(0,n.jsxs)(l.h4,{id:"addincludes",children:[(0,n.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#addincludes",children:"#"}),"addIncludes"]}),"\n",(0,n.jsxs)(l.p,{children:["\u7c7b\u578b: ",(0,n.jsx)(l.code,{children:"(includes: string | RegExp | Array<string | RegExp>) => void"})]}),"\n",(0,n.jsxs)(l.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u53ea\u4f1a\u7f16\u8bd1 src \u76ee\u5f55\u4e0b\u7684\u4e1a\u52a1\u4ee3\u7801\uff0c\u4f7f\u7528 addIncludes \u53ef\u4ee5\u6307\u5b9a ts-loader \u7f16\u8bd1 ",(0,n.jsx)(l.code,{children:"node_modules"})," \u4e0b\u7684\u4e00\u4e9b\u6587\u4ef6\u3002\u6bd4\u5982:"]}),"\n",(0,n.jsxs)(l.div,{className:"language-ts",children:[(0,n.jsx)(l.div,{className:""}),(0,n.jsxs)(l.div,{className:"modern-code-content",children:[(0,n.jsx)(l.button,{className:"copy"}),(0,n.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(l.code,{children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"tools"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"tsLoader"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"config"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"addIncludes"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"})"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"=>"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"addIncludes"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"(["}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"/"}),(0,n.jsx)(l.span,{style:{color:"#EBCB8B"},children:"node_modules\\/react"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"/"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"])"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(l.h4,{id:"addexcludes",children:[(0,n.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"}),"addExcludes"]}),"\n",(0,n.jsxs)(l.p,{children:["\u7c7b\u578b: ",(0,n.jsx)(l.code,{children:"(excludes: string | RegExp | Array<string | RegExp>) => void"})]}),"\n",(0,n.jsxs)(l.p,{children:["\u548c ",(0,n.jsx)(l.code,{children:"addIncludes"})," \u76f8\u53cd\uff0c\u6307\u5b9a ",(0,n.jsx)(l.code,{children:"ts-loader"})," \u7f16\u8bd1\u65f6\u6392\u9664\u67d0\u4e9b\u6587\u4ef6\u3002"]}),"\n",(0,n.jsx)(l.p,{children:"\u4f8b\u5982\u4e0d\u7f16\u8bd1 src/example \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\uff1a"}),"\n",(0,n.jsxs)(l.div,{className:"language-ts",children:[(0,n.jsx)(l.div,{className:""}),(0,n.jsxs)(l.div,{className:"modern-code-content",children:[(0,n.jsx)(l.button,{className:"copy"}),(0,n.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(l.code,{children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"tools"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"tsLoader"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"config"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"addExcludes"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"})"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"=>"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"addExcludes"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"(["}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"/"}),(0,n.jsx)(l.span,{style:{color:"#EBCB8B"},children:"src\\/example\\/"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"/"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"])"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(l.span,{className:"line"})]})})]})]})]})}l.default=function(s={}){const{wrapper:l}=s.components||{};return l?(0,n.jsx)(l,Object.assign({},s,{children:(0,n.jsx)(d,s)})):d(s)}}}]);