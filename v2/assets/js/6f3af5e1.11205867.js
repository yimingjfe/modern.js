"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9704],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),i=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(18249),o=(n(52983),n(44993));const a={toc:[{value:"Object \u7c7b\u578b",id:"object-\u7c7b\u578b",level:3},{value:"Function \u7c7b\u578b",id:"function-\u7c7b\u578b",level:3},{value:"\u5de5\u5177\u51fd\u6570",id:"\u5de5\u5177\u51fd\u6570",level:3},{value:"addIncludes",id:"addincludes",level:4},{value:"addExcludes",id:"addexcludes",level:4}]};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Object | Function | undefined")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,o.kt)("p",null,"\u9879\u76ee\u4e2d\u9ed8\u8ba4\u4e0d\u5f00\u542f ts-loader\uff0c\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.tsLoader")," \u4e0d\u4e3a undefined \u5219\u8868\u793a\u5f00\u542f ts-loader\uff0c\u540c\u65f6\u7981\u7528 babel-loader \u5bf9 TypeScript \u7684\u7f16\u8bd1\u3002"),(0,o.kt)("h3",{id:"object-\u7c7b\u578b"},"Object \u7c7b\u578b"),(0,o.kt)("p",null,"\u5f53\u6b64\u503c\u4e3a Object \u7c7b\u578b\u65f6\uff0c\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u901a\u8fc7 Object.assign \u5408\u5e76\u3002"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u914d\u7f6e\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "target": "es5",\n    "module": "ESNext"\n  },\n  "transpileOnly": true,\n  "allowTsInNodeModules": true\n}\n')),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.tsLoader")," \u914d\u7f6e\u9879\u6765\u8986\u76d6\u9ed8\u8ba4\u914d\u7f6e:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  tools: {\n    tsLoader: {\n      allowTsInNodeModules: false,\n    },\n  },\n};\n")),(0,o.kt)("h3",{id:"function-\u7c7b\u578b"},"Function \u7c7b\u578b"),(0,o.kt)("p",null,"\u5f53\u6b64\u503c\u4e3a Function \u7c7b\u578b\u65f6\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4f5c\u4e3a\u7b2c\u4e00\u53c2\u6570\u4f20\u5165\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u4f5c\u4e3a\u6700\u7ec8\u914d\u7f6e\uff1b\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader")," \u914d\u7f6e\u5de5\u5177\u51fd\u6570\u96c6\u5408\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  tools: {\n    tsLoader: opts => {\n      opts.allowTsInNodeModules = false;\n    },\n  },\n};\n")),(0,o.kt)("h3",{id:"\u5de5\u5177\u51fd\u6570"},"\u5de5\u5177\u51fd\u6570"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tools.tsLoader")," \u7684\u503c\u4e3a Function \u7c7b\u578b\u65f6\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u53ef\u7528\u7684\u5de5\u5177\u51fd\u6570\u5982\u4e0b\uff1a"),(0,o.kt)("h4",{id:"addincludes"},"addIncludes"),(0,o.kt)("p",null,"\u7c7b\u578b: ",(0,o.kt)("inlineCode",{parentName:"p"},"(includes: string | RegExp | Array<string | RegExp>) => void")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u53ea\u4f1a\u7f16\u8bd1 src \u76ee\u5f55\u4e0b\u7684\u4e1a\u52a1\u4ee3\u7801\uff0c\u4f7f\u7528 addIncludes \u53ef\u4ee5\u6307\u5b9a ts-loader \u7f16\u8bd1 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," \u4e0b\u7684\u4e00\u4e9b\u6587\u4ef6\u3002\u6bd4\u5982:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  tools: {\n    tsLoader: (config, { addIncludes }) => {\n      addIncludes([/node_modules\\/react/]);\n    },\n  },\n};\n")),(0,o.kt)("h4",{id:"addexcludes"},"addExcludes"),(0,o.kt)("p",null,"\u7c7b\u578b: ",(0,o.kt)("inlineCode",{parentName:"p"},"(excludes: string | RegExp | Array<string | RegExp>) => void")),(0,o.kt)("p",null,"\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"addIncludes")," \u76f8\u53cd\uff0c\u6307\u5b9a ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader")," \u7f16\u8bd1\u65f6\u6392\u9664\u67d0\u4e9b\u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\u4e0d\u7f16\u8bd1 src/example \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  tools: {\n    tsLoader: (config, { addExcludes }) => {\n      addExcludes([/src\\/example\\//]);\n    },\n  },\n};\n")))}l.isMDXComponent=!0;const s={title:"tools.tsLoader",sidebar_label:"tsLoader"},d=void 0,i={unversionedId:"configure/app/tools/ts-loader",id:"configure/app/tools/ts-loader",title:"tools.tsLoader",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 tools.tsLoader\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/tools/ts-loader.md",sourceDirName:"configure/app/tools",slug:"/configure/app/tools/ts-loader",permalink:"/v2/docs/configure/app/tools/ts-loader",draft:!1,tags:[],version:"current",frontMatter:{title:"tools.tsLoader",sidebar_label:"tsLoader"},sidebar:"configsAppSidebar",previous:{title:"tsChecker",permalink:"/v2/docs/configure/app/tools/ts-checker"},next:{title:"webpackChain",permalink:"/v2/docs/configure/app/tools/webpack-chain"}},p={},c=[],u={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-tools.html#tools-tsloader"},"tools.tsLoader"),"\u3002")),(0,o.kt)(l,{mdxType:"Main"}))}m.isMDXComponent=!0}}]);