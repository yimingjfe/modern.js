"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1572],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(18249),a=(n(52983),n(44993));const r={title:"Code Split",sidebar_position:6},i=void 0,l={unversionedId:"guides/advanced-features/code-split",id:"guides/advanced-features/code-split",title:"Code Split",description:"Code Split is a common way to optimizing front-end resource loading. This doc will introduce three methods supported by Modern.js:",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/advanced-features/code-split.md",sourceDirName:"guides/advanced-features",slug:"/guides/advanced-features/code-split",permalink:"/v2/en/docs/guides/advanced-features/code-split",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Code Split",sidebar_position:6},sidebar:"guidesSidebar",previous:{title:"Compatibility",permalink:"/v2/en/docs/guides/advanced-features/compatibility"},next:{title:"ESLint",permalink:"/v2/en/docs/guides/advanced-features/eslint"}},p={},d=[{value:"import",id:"import",level:2},{value:"React.lazy",id:"reactlazy",level:2},{value:"loadable",id:"loadable",level:2}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Code Split is a common way to optimizing front-end resource loading. This doc will introduce three methods supported by Modern.js:"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"When you use Modern.js ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/routes#conventional-routing"},"Conventional routing"),", by default it will do code splitting based on routing components, wrapping ",(0,a.kt)("inlineCode",{parentName:"p"},"Suspense")," components, no need to do code splitting by yourself.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"import")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"React.lazy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"loadable"))),(0,a.kt)("h2",{id:"import"},"import"),(0,a.kt)("p",null,"use dynamic ",(0,a.kt)("inlineCode",{parentName:"p"},"import()"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"import")," The JS modules pass to this API will be packaged into a separate JS file as a new packaging entry, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import('./math').then(math => {\n  console.log(math.add(16, 26));\n});\n")),(0,a.kt)("p",null,"The JS modules corresponding to the './math' path will be packaged in a separate JS file."),(0,a.kt)("h2",{id:"reactlazy"},"React.lazy"),(0,a.kt)("p",null,"The officially way provides by React to split component code."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"SSR is not supported in React 17 and below, and it is recommended that SSR applications for React 17 use loadable.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import React, { Suspense } from 'react';\n\nconst OtherComponent = React.lazy(() => import('./OtherComponent'));\nconst AnotherComponent = React.lazy(() => import('./AnotherComponent'));\n\nfunction MyComponent() {\n  return (\n    <div>\n      <Suspense fallback={<div>Loading...</div>}>\n        <section>\n          <OtherComponent />\n          <AnotherComponent />\n        </section>\n      </Suspense>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"For detail, see ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/code-splitting.html#reactlazy"},"React lazy"),"\u3002"),(0,a.kt)("h2",{id:"loadable"},"loadable"),(0,a.kt)("p",null,"use ",(0,a.kt)("inlineCode",{parentName:"p"},"loadable")," API\uff0cfor example\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import loadable from '@modern-js/runtime/loadable';\n\nconst OtherComponent = loadable(() => import('./OtherComponent'));\n\nfunction MyComponent() {\n  return <OtherComponent />;\n}\n")),(0,a.kt)("p",null,"For detail, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/utility/loadable"},"loadable API"),"\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"SSR is supported out of the box by ",(0,a.kt)("inlineCode",{parentName:"p"},"loadable"),".")))}c.isMDXComponent=!0}}]);