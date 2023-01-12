"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2435],{44993:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(52983);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2522:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=t(18249),o=(t(52983),t(44993));const i={toc:[{value:"Example",id:"example",level:4},{value:"Set according to Targets",id:"set-according-to-targets",level:4}]};function a(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type Fields = (string | string[])[];\n\ntype ResolveMainFields = Fields | Record<BuilderTarget, Fields>;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,o.kt)("p",null,"This config will determine which field of ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," you use to import the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," module. Same as the ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/resolve/#resolvemainfields"},"resolve.mainFields")," config of webpack."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  source: {\n    resolveMainFields: ['main', 'browser', 'exports'],\n  },\n};\n")),(0,o.kt)("h4",{id:"set-according-to-targets"},"Set according to Targets"),(0,o.kt)("p",null,"When you build multiple targets at the same time, you can set different mainFields for different targets. At this point, you need to set ",(0,o.kt)("inlineCode",{parentName:"p"},"resolveMainFields")," to an object whose key is the corresponding build target."),(0,o.kt)("p",null,"For example to set different mainFields for ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"node"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    source: {\n      resolveMainFields: {\n        web: ['main', 'browser', 'exports'],\n        node: ['main', 'node', 'exports'],\n      },\n    },\n  },\n};\n")))}a.isMDXComponent=!0;const l={title:"source.resolveMainFields",sidebar_label:"resolveMainFields"},s=void 0,p={unversionedId:"configure/app/source/resolve-main-fields",id:"configure/app/source/resolve-main-fields",title:"source.resolveMainFields",description:"This configuration is Modern.js Builder configuration, more detail can see source.resolveMainFields\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/source/resolve-main-fields.md",sourceDirName:"configure/app/source",slug:"/configure/app/source/resolve-main-fields",permalink:"/v2/en/docs/configure/app/source/resolve-main-fields",draft:!1,tags:[],version:"current",frontMatter:{title:"source.resolveMainFields",sidebar_label:"resolveMainFields"},sidebar:"configsAppSidebar",previous:{title:"resolveExtensionPrefix",permalink:"/v2/en/docs/configure/app/source/resolve-extension-prefix"},next:{title:"appIcon",permalink:"/v2/en/docs/configure/app/html/app-icon"}},c={},u=[],d={toc:u};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, more detail can see ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/en/api/config-source.html#source-resolvemainfields"},"source.resolveMainFields"),"\u3002")),(0,o.kt)(a,{mdxType:"Main"}))}m.isMDXComponent=!0}}]);