"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[274],{44993:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(52983);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(r),f=i,m=s["".concat(p,".").concat(f)]||s[f]||u[f]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},73856:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(18249),i=(r(52983),r(44993));const a={sidebar_position:2},o="addHelper",l={unversionedId:"guides/topic-detail/generator/plugin/api/file/addHelper",id:"guides/topic-detail/generator/plugin/api/file/addHelper",title:"addHelper",description:"For text files, add a customized Help function of Handlebars\uff0cthe specific viewable documentCustom Helpers.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/topic-detail/generator/plugin/api/file/addHelper.md",sourceDirName:"guides/topic-detail/generator/plugin/api/file",slug:"/guides/topic-detail/generator/plugin/api/file/addHelper",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/file/addHelper",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"Introduction",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/file/introduce"},next:{title:"addPartial",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/file/addPartial"}},p={},d=[{value:"name",id:"name",level:2},{value:"fn",id:"fn",level:2}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"addhelper"},"addHelper"),(0,i.kt)("p",null,"For text files, add a customized Help function of Handlebars\uff0cthe specific viewable document",(0,i.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/guide/#custom-helpers"},"Custom Helpers"),"."),(0,i.kt)("p",null,"This method is available on the ",(0,i.kt)("inlineCode",{parentName:"p"},"onForged")," time to live API parameter."),(0,i.kt)("p",null,"Its type is defined as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type ForgedAPI = {\n  addHelper: (name: string, fn: Handlebars.HelperDelegate) => void;\n  ...\n};\n")),(0,i.kt)("h2",{id:"name"},"name"),(0,i.kt)("p",null,"help function name."),(0,i.kt)("h2",{id:"fn"},"fn"),(0,i.kt)("p",null,"help function."))}u.isMDXComponent=!0}}]);