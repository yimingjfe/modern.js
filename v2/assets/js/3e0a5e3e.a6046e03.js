"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1388],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(18249),a=(n(52983),n(44993));const i={toc:[{value:"Boolean \u7c7b\u578b",id:"boolean-\u7c7b\u578b",level:4},{value:"String \u7c7b\u578b",id:"string-\u7c7b\u578b",level:4}]};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean | string")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'/'"))),(0,a.kt)("p",null,"\u8bbe\u7f6e\u5f00\u53d1\u73af\u5883\u4e0b\u7684\u9759\u6001\u8d44\u6e90 URL \u524d\u7f00\uff0c\u5bf9\u5e94 webpack \u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/public-path/"},"output.publicPath")," \u914d\u7f6e\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"assetPrefix")," \u4f1a\u5f71\u54cd\u6784\u5efa\u4ea7\u7269\u4e2d\u7edd\u5927\u90e8\u5206\u9759\u6001\u8d44\u6e90\u7684 URL\uff0c\u5305\u62ec JavaScript \u6587\u4ef6\u3001CSS \u6587\u4ef6\u3001\u56fe\u7247\u3001\u89c6\u9891\u7b49\u3002\u5982\u679c\u6307\u5b9a\u4e86\u4e00\u4e2a\u9519\u8bef\u7684\u503c\uff0c\u5219\u5728\u52a0\u8f7d\u8fd9\u4e9b\u8d44\u6e90\u65f6\u53ef\u80fd\u4f1a\u51fa\u73b0 404 \u9519\u8bef\u3002"),(0,a.kt)("p",null,"\u8be5\u914d\u7f6e\u9879\u4ec5\u7528\u4e8e\u5f00\u53d1\u73af\u5883\u3002\u5728\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"output.assetPrefix")," \u914d\u7f6e\u9879\u8fdb\u884c\u8bbe\u7f6e\u3002"),(0,a.kt)("h4",{id:"boolean-\u7c7b\u578b"},"Boolean \u7c7b\u578b"),(0,a.kt)("p",null,"\u5982\u679c\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"assetPrefix")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0cBuilder \u4f1a\u81ea\u52a8\u8ba1\u7b97\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"//ip:port/")," \u4f5c\u4e3a URL \u524d\u7f00\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  dev: {\n    assetPrefix: true,\n  },\n};\n")),(0,a.kt)("p",null,"\u5bf9\u5e94 JS \u6587\u4ef6\u5728\u6d4f\u89c8\u5668\u4e2d\u52a0\u8f7d\u7684\u5730\u5740\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<script defer src="//${ip}:8080/static/js/main.js"><\/script>\n')),(0,a.kt)("p",null,"\u5982\u679c\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"assetPrefix")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," \u6216\u4e0d\u8bbe\u7f6e\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," \u4f5c\u4e3a\u8bbf\u95ee\u524d\u7f00\u3002"),(0,a.kt)("h4",{id:"string-\u7c7b\u578b"},"String \u7c7b\u578b"),(0,a.kt)("p",null,"\u5f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"assetPrefix")," \u7684\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," \u7c7b\u578b\u65f6\uff0c\u5b57\u7b26\u4e32\u4f1a\u4f5c\u4e3a\u524d\u7f00\uff0c\u81ea\u52a8\u62fc\u63a5\u5230\u9759\u6001\u8d44\u6e90\u8bbf\u95ee URL \u4e0a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  dev: {\n    assetPrefix: 'http://example.com/assets/',\n  },\n};\n")),(0,a.kt)("p",null,"\u5bf9\u5e94 JS \u6587\u4ef6\u5728\u6d4f\u89c8\u5668\u4e2d\u52a0\u8f7d\u7684\u5730\u5740\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<script defer src="http://example.com/assets/static/js/main.js"><\/script>\n')))}p.isMDXComponent=!0;const o={title:"dev.assetPrefix",sidebar_label:"assetPrefix"},l=void 0,s={unversionedId:"configure/app/dev/asset-prefix",id:"configure/app/dev/asset-prefix",title:"dev.assetPrefix",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 dev.assetPrefix\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/dev/asset-prefix.md",sourceDirName:"configure/app/dev",slug:"/configure/app/dev/asset-prefix",permalink:"/v2/docs/configure/app/dev/asset-prefix",draft:!1,tags:[],version:"current",frontMatter:{title:"dev.assetPrefix",sidebar_label:"assetPrefix"},sidebar:"configsAppSidebar",previous:{title:"proxy",permalink:"/v2/docs/configure/app/bff/proxy"},next:{title:"hmr",permalink:"/v2/docs/configure/app/dev/hmr"}},c={},u=[],d={toc:u};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"BUILDER",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/api/config-dev.html#dev-assetprefix"},"dev.assetPrefix"),"\u3002")),(0,a.kt)(p,{mdxType:"Main"}))}f.isMDXComponent=!0}}]);