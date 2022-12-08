"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9233],{44993:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=r.createContext({}),p=function(e){var t=r.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(f.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,f=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,d=s["".concat(f,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var f in t)hasOwnProperty.call(t,f)&&(c[f]=t[f]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},17961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(18249),o=(n(52983),n(44993));const a={sidebar_label:"fetcher"},i="bff.fetcher",c={unversionedId:"configure/app/bff/fetcher",id:"configure/app/bff/fetcher",title:"bff.fetcher",description:"* Type: string",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/bff/fetcher.md",sourceDirName:"configure/app/bff",slug:"/configure/app/bff/fetcher",permalink:"/v2/en/docs/configure/app/bff/fetcher",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"fetcher"},sidebar:"configsAppSidebar",previous:{title:"ssr",permalink:"/v2/en/docs/configure/app/server/ssr"},next:{title:"prefix",permalink:"/v2/en/docs/configure/app/bff/prefix"}},f={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bfffetcher"},"bff.fetcher"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"Default:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Brower\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"global.fetch")),(0,o.kt)("li",{parentName:"ul"},"Node.js\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://github.com/node-fetch/node-fetch"},"node-fetch"))))),(0,o.kt)("admonition",{title:"Caution",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'First you need to enable the "BFF" function using ',(0,o.kt)("a",{parentName:"p",href:"/docs/apis/app/commands/new"},"new")," command.")),(0,o.kt)("p",null,"Custom ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," function, which can be used for ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," function customization in Native and Mini Program scenarios."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  bff: {\n    fetcher: 'custom-fetch'\n  }\n});\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You need to judge the running environment when you implement the isomorphic fetch function.")))}u.isMDXComponent=!0}}]);