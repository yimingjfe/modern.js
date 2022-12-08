"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6686],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(18249),a=(n(52983),n(44993));const i={title:"cleanup",sidebar_position:3},o=void 0,p={unversionedId:"apis/app/runtime/testing/cleanup",id:"apis/app/runtime/testing/cleanup",title:"cleanup",description:"\u7528\u4e8e\u5378\u8f7d\u6389\u5f53\u524d\u5df2\u6e32\u67d3\u7684\u6240\u6709\u7ec4\u4ef6\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/runtime/testing/cleanup.md",sourceDirName:"apis/app/runtime/testing",slug:"/apis/app/runtime/testing/cleanup",permalink:"/v2/docs/apis/app/runtime/testing/cleanup",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"cleanup",sidebar_position:3},sidebar:"apisAppSidebar",previous:{title:"loadable",permalink:"/v2/docs/apis/app/runtime/utility/loadable"},next:{title:"act",permalink:"/v2/docs/apis/app/runtime/testing/act"}},l={},c=[{value:"\u4f7f\u7528\u59ff\u52bf",id:"\u4f7f\u7528\u59ff\u52bf",level:2},{value:"\u51fd\u6570\u7b7e\u540d",id:"\u51fd\u6570\u7b7e\u540d",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7528\u4e8e\u5378\u8f7d\u6389\u5f53\u524d\u5df2\u6e32\u67d3\u7684\u6240\u6709\u7ec4\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u59ff\u52bf"},"\u4f7f\u7528\u59ff\u52bf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { cleanup } from '@modenr-js/runtime/testing';\n")),(0,a.kt)("h2",{id:"\u51fd\u6570\u7b7e\u540d"},"\u51fd\u6570\u7b7e\u540d"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function cleanup(): void")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("admonition",{title:"\u6ce8",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u7684\u6d4b\u8bd5\u6846\u67b6\u652f\u6301 afterEach\uff0c\u5e76\u4e14\u5b83\u88ab\u6ce8\u5165\u5230\u4f60\u7684\u6d4b\u8bd5\u73af\u5883\u4e2d\uff08\u5982mocha\u3001Jest\u548cJasmine\uff09\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u4f1a\u9ed8\u8ba4\u5728 afterEach \u94a9\u5b50\u91cc\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"strong"},"cleanup")),"\u3002\u5426\u5219\uff0c\u4f60\u5c06\u9700\u8981\u5728\u6bcf\u6b21\u6d4b\u8bd5\u540e\u8fdb\u884c\u624b\u52a8\u6e05\u7406\u3002")),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://github.com/avajs/ava"},"ava"),"\u6d4b\u8bd5\u6846\u67b6\uff0c\u90a3\u4e48\u4f60\u9700\u8981\u50cf\u8fd9\u6837\u4f7f\u7528test.afterEach\u94a9\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { cleanup, render } from '@modern-js/runtime/testing';\nimport test from 'ava';\n\ntest.afterEach(cleanup);\n\ntest('renders into document', () => {\n  render(<div />);\n  // ...\n});\n\n// ... more tests ...\n")))}u.isMDXComponent=!0}}]);