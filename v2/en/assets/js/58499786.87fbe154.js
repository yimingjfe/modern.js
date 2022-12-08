"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1067],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(18249),o=(n(52983),n(44993));const i={sidebar_position:1},a="Why do you need a generator plugin",l={unversionedId:"guides/topic-detail/generator/plugin/abstract",id:"guides/topic-detail/generator/plugin/abstract",title:"Why do you need a generator plugin",description:"Modern.js provides application (MWA), modules and Monorepo three engineering solutions, and by using the @modern-js/create tool can create the initial project template of the three engineering solutions, the initial project template will provide basic code development environment, simple sample code and configuration, etc.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/topic-detail/generator/plugin/abstract.md",sourceDirName:"guides/topic-detail/generator/plugin",slug:"/guides/topic-detail/generator/plugin/abstract",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/abstract",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"Monorepo",permalink:"/v2/en/docs/guides/topic-detail/generator/config/monorepo"},next:{title:"How to use the generator plugin",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/use"}},p={},c=[],s={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"why-do-you-need-a-generator-plugin"},"Why do you need a generator plugin"),(0,o.kt)("p",null,"Modern.js provides application (MWA), modules and Monorepo three engineering solutions, and by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@modern-js/create")," tool can create the initial project template of the three engineering solutions, the initial project template will provide basic code development environment, simple sample code and configuration, etc."),(0,o.kt)("p",null,"Modern.js provides an initialization template that is versatile and can meet some general project development needs."),(0,o.kt)("p",null,"When you use Modern.js in depth, you will inevitably find that every time you create a project, you will make some similar changes specific to your own project, such as modifying the sample code, adding some configuration, enabling some functions, etc."),(0,o.kt)("p",null,"The generator plugin can help you precipitate these individual or team-specific changes. Simply bring the ",(0,o.kt)("inlineCode",{parentName:"p"},"--plugin")," parameter when executing ",(0,o.kt)("inlineCode",{parentName:"p"},"npx @modern-js/create")," to avoid the need to repeatedly modify the project every time the project is created.."),(0,o.kt)("p",null,"The generator plugin is based on the initialization template project provided by the Modern.js, providing methods to add, delete and modify templates, and modifying ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"modernConfig")," configuration and opening functions in a fast way."),(0,o.kt)("p",null,"The generator plugin provides two ways of customization:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Extended engineering: directly customize the three major engineering provided by default.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create engineering scenes: Create corresponding engineering scenes based on the default three major engineering.")),(0,o.kt)("p",null,"The next step will introduce how to use and develop the generator plugin step by step."))}d.isMDXComponent=!0}}]);