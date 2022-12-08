"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8927],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,y=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(18249),o=(n(52983),n(44993));const a={title:"CSS-In-JS API"},i=void 0,p={unversionedId:"apis/app/runtime/utility/css-in-js",id:"apis/app/runtime/utility/css-in-js",title:"CSS-In-JS API",description:"Use Style Component to write CSS.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/apis/app/runtime/utility/css-in-js.md",sourceDirName:"apis/app/runtime/utility",slug:"/apis/app/runtime/utility/css-in-js",permalink:"/v2/en/docs/apis/app/runtime/utility/css-in-js",draft:!1,tags:[],version:"current",frontMatter:{title:"CSS-In-JS API"},sidebar:"apisAppSidebar",previous:{title:"Middleware",permalink:"/v2/en/docs/apis/app/runtime/web-server/middleware"},next:{title:"Head",permalink:"/v2/en/docs/apis/app/runtime/utility/head"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Function Signature",id:"function-signature",level:2},{value:"Example",id:"example",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use Style Component to write CSS."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import styled from '@modern-js/runtime/styled';\n")),(0,o.kt)("h2",{id:"function-signature"},"Function Signature"),(0,o.kt)("p",null,"see ",(0,o.kt)("a",{parentName:"p",href:"https://styled-components.com/docs/api"},"styled-component API"),"\u3002"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import styled from '@modern-js/runtime/styled';\n\nconst Button = styled.button`\n  background: palevioletred;\n  border-radius: 3px;\n  border: none;\n  color: white;\n`;\n\nconst TomatoButton = styled(Button)`\n  background: tomato;\n`;\n\nfunction ButtonExample(){\n  return (\n    <>\n      <Button>I'm purple.</Button>\n      <br />\n      <TomatoButton>I'm red.</TomatoButton>\n    </>\n  );\n};\n")))}c.isMDXComponent=!0}}]);