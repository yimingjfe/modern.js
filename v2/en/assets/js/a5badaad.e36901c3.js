"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1924],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(18249),o=(n(52983),n(44993));const i={title:"tools.esbuild",sidebar_label:"esbuild"},a=void 0,l={unversionedId:"configure/app/tools/esbuild",id:"configure/app/tools/esbuild",title:"tools.esbuild",description:"- Type: Object",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/tools/esbuild.md",sourceDirName:"configure/app/tools",slug:"/configure/app/tools/esbuild",permalink:"/v2/en/docs/configure/app/tools/esbuild",draft:!1,tags:[],version:"current",frontMatter:{title:"tools.esbuild",sidebar_label:"esbuild"},sidebar:"configsAppSidebar",previous:{title:"devServer",permalink:"/v2/en/docs/configure/app/tools/dev-server"},next:{title:"htmlPlugin",permalink:"/v2/en/docs/configure/app/tools/html-plugin"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Object")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("admonition",{title:"About esbuild",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://esbuild.github.io/"},"esbuild")," is a front-end build tool based on Golang. It has the functions of bundling, compiling and minimizing JavaScript code. Compared with traditional tools, the performance is significantly improved. When minimizing code, compared to webpack's built-in terser minimizer, esbuild has dozens of times better performance.")),(0,o.kt)("p",null,"Modern.js provides esbuild plugin that allow you to use esbuild instead of babel-loader, ts-loader and terser for transformation and minification process."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You can set the esbuild compilation behavior through the ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.esbuild")," config."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  tools: {\n    esbuild: {\n      loader: {\n        target: 'chrome61',\n      },\n      minimize: {\n        target: 'chrome61',\n      },\n    },\n  },\n});\n")),(0,o.kt)("p",null,"For config details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/en/plugins/plugin-esbuild.html#config"},"Modern.js Builder - esbuild Plugin Configuration"),"."))}c.isMDXComponent=!0}}]);