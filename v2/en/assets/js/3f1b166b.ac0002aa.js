"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1069],{44993:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,g=u["".concat(p,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(18249),o=(n(52983),n(44993));const a={},i=void 0,c={unversionedId:"components/micro-master-manifest-config",id:"components/micro-master-manifest-config",title:"micro-master-manifest-config",description:"manifest",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/components/micro-master-manifest-config.md",sourceDirName:"components",slug:"/components/micro-master-manifest-config",permalink:"/v2/en/docs/components/micro-master-manifest-config",draft:!1,tags:[],version:"current",frontMatter:{}},p={},s=[{value:"manifest",id:"manifest",level:2},{value:"getAppList?",id:"getapplist",level:3}],l={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"manifest"},"manifest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface Manifest {\n  getAppList?: () => Array<AppInfo>;\n}\n")),(0,o.kt)("h3",{id:"getapplist"},"getAppList?"),(0,o.kt)("p",null,"Through the ",(0,o.kt)("inlineCode",{parentName:"p"},"getAppList")," configuration, you can customize how to get remote list data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type GetAppList = () => Promise<Array<AppInfo>>;\n")))}m.isMDXComponent=!0}}]);