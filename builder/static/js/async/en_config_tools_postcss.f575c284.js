"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[1596],{27958:function(s,l,e){e.r(l),e.d(l,{content:function(){return r},frontmatter:function(){return c},toc:function(){return o}});var n=e(39980);const c=void 0,o=[{id:"function-type",text:"Function Type",depth:3},{id:"object-type",text:"Object Type",depth:3},{id:"util-functions",text:"Util Functions",depth:3},{id:"addplugins",text:"addPlugins",depth:4}],r="\"- Type: `Object | Function`\\n- Default:\\n\\n```js\\nconst defaultOptions = {\\n  postcssOptions: {\\n    plugins: [\\n      require('postcss-flexbugs-fixes'),\\n      require('postcss-custom-properties'),\\n      require('postcss-initial'),\\n      require('postcss-page-break'),\\n      require('postcss-font-variant'),\\n      require('postcss-media-minmax'),\\n      require('postcss-nesting'),\\n      require('autoprefixer')({\\n        flexbox: 'no-2009',\\n      }),\\n    ],\\n    // CSS Source Map enabled by default in development environment\\n    sourceMap: isDev,\\n  },\\n};\\n```\\n\\nBuilder integrates PostCSS by default, you can configure [postcss-loader](https://github.com/webpack-contrib/postcss-loader) through `tools.postcss`.\\n\\n### Function Type\\n\\nWhen the value is a Function, the internal default config is passed as the first parameter, and the config object can be modified directly without returning, or an object can be returned as the final result; the second parameter is a set of tool functions for modifying the postcss-loader config.\\n\\nFor example, you need to add a PostCSS plugin on the basis of the original plugin, and push a new plugin to the postcssOptions.plugins array:\\n\\n```ts\\nexport default {\\n  tools: {\\n    postcss: opts => {\\n      opts.postcssOptions.plugins.push(require('postcss-px-to-viewport'));\\n    },\\n  },\\n};\\n```\\n\\nWhen you need to pass parameters to the PostCSS plugin, you can pass them in by function parameters:\\n\\n```js\\nexport default {\\n  tools: {\\n    postcss: opts => {\\n      const viewportPlugin = require('postcss-px-to-viewport')({\\n        viewportWidth: 375,\\n      });\\n      opts.postcssOptions.plugins.push(viewportPlugin);\\n    },\\n  },\\n};\\n```\\n\\n`tools.postcss` can return a config object and completely replace the default config:\\n\\n```js\\nexport default {\\n  tools: {\\n    postcss: () => {\\n      return {\\n        postcssOptions: {\\n          plugins: [require('postcss-px-to-viewport')],\\n        },\\n      };\\n    },\\n  },\\n};\\n```\\n\\n### Object Type\\n\\nWhen this value is an Object, it is merged with the default config via `Object.assign`. Note that `Object.assign` is a shallow copy and will completely overwrite the built-in `presets` or `plugins` array, please use it with caution.\\n\\n```js\\nexport default {\\n  tools: {\\n    postcss: {\\n      // Because `Object.assign` is used, the default postcssOptions will be overwritten.\\n      postcssOptions: {\\n        plugins: [require('postcss-px-to-viewport')],\\n      },\\n    },\\n  },\\n};\\n```\\n\\n### Util Functions\\n\\n#### addPlugins\\n\\n- Type: `(plugins: PostCSSPlugin | PostCSSPlugin[]) => void`\\n\\nFor adding additional PostCSS plugins, You can pass in a single PostCSS plugin, or an array of PostCSS plugins.\\n\\n```js\\nexport default {\\n  tools: {\\n    postcss: (config, { addPlugins }) => {\\n      // Add a PostCSS Plugin\\n      addPlugins(require('postcss-preset-env'));\\n      // Add multiple PostCSS Plugins\\n      addPlugins([require('postcss-preset-env'), require('postcss-import')]);\\n    },\\n  },\\n};\\n```\\n\\n:::tip\\nBuilder uses the PostCSS v8 version. When you use third-party PostCSS plugins, please pay attention to whether the PostCSS version is compatible. Some legacy plugins may not work in PostCSS v8.\\n:::\\n\"";function i(s){const l=Object.assign({ul:"ul",li:"li",code:"code",div:"div",button:"button",pre:"pre",span:"span",p:"p",a:"a",h3:"h3",h4:"h4"},s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["Type: ",(0,n.jsx)(l.code,{children:"Object | Function"})]}),"\n",(0,n.jsx)(l.li,{children:"Default:"}),"\n"]}),"\n",(0,n.jsxs)(l.div,{className:"language-js",children:[(0,n.jsx)(l.div,{className:""}),(0,n.jsxs)(l.div,{className:"modern-code-content",children:[(0,n.jsx)(l.button,{className:"copy"}),(0,n.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(l.code,{children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"const"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"defaultOptions"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"="}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"postcssOptions"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"plugins"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" ["})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"require"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"postcss-flexbugs-fixes"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"require"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"postcss-custom-properties"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"require"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"postcss-initial"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"require"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"postcss-page-break"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"require"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"postcss-font-variant"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"require"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"postcss-media-minmax"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"require"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"postcss-nesting"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"require"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"autoprefixer"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:")("}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"flexbox"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"no-2009"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    ]"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#616E88"},children:"// CSS Source Map enabled by default in development environment"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"sourceMap"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"isDev"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(l.p,{children:["Builder integrates PostCSS by default, you can configure ",(0,n.jsx)(l.a,{href:"https://github.com/webpack-contrib/postcss-loader",target:"_blank",rel:"nofollow",children:"postcss-loader"})," through ",(0,n.jsx)(l.code,{children:"tools.postcss"}),"."]}),"\n",(0,n.jsxs)(l.h3,{id:"function-type",children:[(0,n.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"}),"Function Type"]}),"\n",(0,n.jsx)(l.p,{children:"When the value is a Function, the internal default config is passed as the first parameter, and the config object can be modified directly without returning, or an object can be returned as the final result; the second parameter is a set of tool functions for modifying the postcss-loader config."}),"\n",(0,n.jsx)(l.p,{children:"For example, you need to add a PostCSS plugin on the basis of the original plugin, and push a new plugin to the postcssOptions.plugins array:"}),"\n",(0,n.jsxs)(l.div,{className:"language-ts",children:[(0,n.jsx)(l.div,{className:""}),(0,n.jsxs)(l.div,{className:"modern-code-content",children:[(0,n.jsx)(l.button,{className:"copy"}),(0,n.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(l.code,{children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"tools"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"postcss"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"opts"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"=>"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"opts"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"."}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"postcssOptions"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"."}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"plugins"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"."}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"push"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"require"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"postcss-px-to-viewport"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"))"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,n.jsx)(l.p,{children:"When you need to pass parameters to the PostCSS plugin, you can pass them in by function parameters:"}),"\n",(0,n.jsxs)(l.div,{className:"language-js",children:[(0,n.jsx)(l.div,{className:""}),(0,n.jsxs)(l.div,{className:"modern-code-content",children:[(0,n.jsx)(l.button,{className:"copy"}),(0,n.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(l.code,{children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"tools"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"postcss"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"opts"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"=>"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"const"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"viewportPlugin"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"="}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"require"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"postcss-px-to-viewport"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:")("}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"viewportWidth"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#B48EAD"},children:"375"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"opts"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"."}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"postcssOptions"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"."}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"plugins"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"."}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"push"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"viewportPlugin"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"tools.postcss"})," can return a config object and completely replace the default config:"]}),"\n",(0,n.jsxs)(l.div,{className:"language-js",children:[(0,n.jsx)(l.div,{className:""}),(0,n.jsxs)(l.div,{className:"modern-code-content",children:[(0,n.jsx)(l.button,{className:"copy"}),(0,n.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(l.code,{children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"tools"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"postcss"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"()"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"=>"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"return"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"postcssOptions"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"plugins"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" ["}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"require"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"postcss-px-to-viewport"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:")]"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(l.h3,{id:"object-type",children:[(0,n.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"}),"Object Type"]}),"\n",(0,n.jsxs)(l.p,{children:["When this value is an Object, it is merged with the default config via ",(0,n.jsx)(l.code,{children:"Object.assign"}),". Note that ",(0,n.jsx)(l.code,{children:"Object.assign"})," is a shallow copy and will completely overwrite the built-in ",(0,n.jsx)(l.code,{children:"presets"})," or ",(0,n.jsx)(l.code,{children:"plugins"})," array, please use it with caution."]}),"\n",(0,n.jsxs)(l.div,{className:"language-js",children:[(0,n.jsx)(l.div,{className:""}),(0,n.jsxs)(l.div,{className:"modern-code-content",children:[(0,n.jsx)(l.button,{className:"copy"}),(0,n.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(l.code,{children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"tools"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"postcss"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#616E88"},children:"// Because `Object.assign` is used, the default postcssOptions will be overwritten."})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"postcssOptions"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"plugins"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" ["}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"require"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"postcss-px-to-viewport"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:")]"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(l.h3,{id:"util-functions",children:[(0,n.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#util-functions",children:"#"}),"Util Functions"]}),"\n",(0,n.jsxs)(l.h4,{id:"addplugins",children:[(0,n.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#addplugins",children:"#"}),"addPlugins"]}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["Type: ",(0,n.jsx)(l.code,{children:"(plugins: PostCSSPlugin | PostCSSPlugin[]) => void"})]}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:"For adding additional PostCSS plugins, You can pass in a single PostCSS plugin, or an array of PostCSS plugins."}),"\n",(0,n.jsxs)(l.div,{className:"language-js",children:[(0,n.jsx)(l.div,{className:""}),(0,n.jsxs)(l.div,{className:"modern-code-content",children:[(0,n.jsx)(l.button,{className:"copy"}),(0,n.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(l.code,{children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"tools"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"postcss"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"config"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"addPlugins"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"})"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"=>"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#616E88"},children:"// Add a PostCSS Plugin"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"addPlugins"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"require"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"postcss-preset-env"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"))"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#616E88"},children:"// Add multiple PostCSS Plugins"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"addPlugins"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"(["}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"require"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"postcss-preset-env"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"require"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"postcss-import"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:")])"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(l.div,{className:"modern-directive tip",children:[(0,n.jsx)(l.p,{className:"modern-directive-title",children:"TIP"}),(0,n.jsx)(l.div,{className:"modern-directive-content",children:(0,n.jsx)(l.p,{children:"\nBuilder uses the PostCSS v8 version. When you use third-party PostCSS plugins, please pay attention to whether the PostCSS version is compatible. Some legacy plugins may not work in PostCSS v8."})})]})]})}l.default=function(s={}){const{wrapper:l}=s.components||{};return l?(0,n.jsx)(l,Object.assign({},s,{children:(0,n.jsx)(i,s)})):i(s)}}}]);