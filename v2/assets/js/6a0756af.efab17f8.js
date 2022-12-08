"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4757],{44993:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>s});var t=r(52983);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),i=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=i(e.components);return t.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=i(r),s=a,f=m["".concat(p,".").concat(s)]||m[s]||d[s]||o;return r?t.createElement(f,c(c({ref:n},u),{},{components:r})):t.createElement(f,c({ref:n},u))}));function s(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52298:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=r(18249),a=(r(52983),r(44993));const o={toc:[]};function c(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},o,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type BuildCacheConfig =\n  | {\n      /**\n       * webpack \u6587\u4ef6\u7f13\u5b58\u7cfb\u7edf\u7684\u7f13\u5b58\u76ee\u5f55\n       */\n      cacheDirectory?: string;\n    }\n  | boolean;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const defaultBuildCacheConfig = {\n  cacheDirectory: './node_modules/.cache/webpack',\n};\n")),(0,a.kt)("p",null,"\u63a7\u5236 Builder \u5728\u6784\u5efa\u8fc7\u7a0b\u4e2d\u7684\u7f13\u5b58\u884c\u4e3a\u3002"),(0,a.kt)("p",null,"Builder \u9ed8\u8ba4\u4f1a\u5f00\u542f\u6784\u5efa\u7f13\u5b58\u6765\u63d0\u5347\u4e8c\u6b21\u6784\u5efa\u7684\u901f\u5ea6\uff0c\u5e76\u9ed8\u8ba4\u628a\u751f\u6210\u7684\u7f13\u5b58\u6587\u4ef6\u5199\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"./node_modules/.cache/webpack")," \u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"buildCache")," \u914d\u7f6e\u7f13\u5b58\u8def\u5f84\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  performance: {\n    buildCache: {\n      cacheDirectory: './node_modules/.custom_cache/webpack',\n    },\n  },\n};\n")),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u5e0c\u671b\u7f13\u5b58\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"buildCache")," \u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," \u5c06\u5176\u7981\u7528\u6389\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  performance: {\n    buildCache: false,\n  },\n};\n")))}c.isMDXComponent=!0;const l={title:"performance.buildCache",sidebar_label:"buildCache"},p=void 0,i={unversionedId:"configure/app/performance/build-cache",id:"configure/app/performance/build-cache",title:"performance.buildCache",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 performance.buildCache\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/performance/build-cache.md",sourceDirName:"configure/app/performance",slug:"/configure/app/performance/build-cache",permalink:"/v2/docs/configure/app/performance/build-cache",draft:!1,tags:[],version:"current",frontMatter:{title:"performance.buildCache",sidebar_label:"buildCache"},sidebar:"configsAppSidebar",previous:{title:"webpack",permalink:"/v2/docs/configure/app/tools/webpack"},next:{title:"bundleAnalyze",permalink:"/v2/docs/configure/app/performance/bundle-analyze"}},u={},d=[],m={toc:d};function s(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"BUILDER",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-performance.html#performance-buildcache"},"performance.buildCache"),"\u3002")),(0,a.kt)(c,{mdxType:"Main"}))}s.isMDXComponent=!0}}]);