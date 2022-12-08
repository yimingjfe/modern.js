"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3734],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(18249),a=(n(52983),n(44993));const o={sidebar_position:4,title:"\u52a0\u8f7d\u5b50\u5e94\u7528"},i=void 0,p={unversionedId:"guides/topic-detail/micro-frontend/route-mode",id:"guides/topic-detail/micro-frontend/route-mode",title:"\u52a0\u8f7d\u5b50\u5e94\u7528",description:"\u5728\u5fae\u524d\u7aef\u4e2d\u5206\u4e3a\u4e24\u79cd\u52a0\u8f7d\u5b50\u5e94\u7528\u7684\u65b9\u5f0f\uff1a",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/micro-frontend/route-mode.md",sourceDirName:"guides/topic-detail/micro-frontend",slug:"/guides/topic-detail/micro-frontend/route-mode",permalink:"/v2/en/docs/guides/topic-detail/micro-frontend/route-mode",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u52a0\u8f7d\u5b50\u5e94\u7528"},sidebar:"guidesSidebar",previous:{title:"\u4e3b\u5b50\u5e94\u7528\u901a\u4fe1",permalink:"/v2/en/docs/guides/topic-detail/micro-frontend/communicate"},next:{title:"\u6df7\u5408\u6280\u672f\u6808",permalink:"/v2/en/docs/guides/topic-detail/micro-frontend/mixed-stack"}},l={},s=[{value:"\u5b50\u5e94\u7528\u7ec4\u4ef6",id:"\u5b50\u5e94\u7528\u7ec4\u4ef6",level:2},{value:"\u96c6\u4e2d\u5f0f\u8def\u7531",id:"\u96c6\u4e2d\u5f0f\u8def\u7531",level:2},{value:"\u4e24\u79cd\u6a21\u5f0f\u6df7\u7528",id:"\u4e24\u79cd\u6a21\u5f0f\u6df7\u7528",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u5fae\u524d\u7aef\u4e2d\u5206\u4e3a\u4e24\u79cd\u52a0\u8f7d\u5b50\u5e94\u7528\u7684\u65b9\u5f0f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u5b50\u5e94\u7528\u7ec4\u4ef6")," \u83b7\u53d6\u5230\u6bcf\u4e2a\u5b50\u5e94\u7528\u7684\u7ec4\u4ef6\uff0c\u4e4b\u540e\u5c31\u53ef\u4ee5\u50cf\u4f7f\u7528\u666e\u901a\u7684 React \u7ec4\u4ef6\u4e00\u6837\u6e32\u67d3\u5fae\u524d\u7aef\u7684\u5b50\u5e94\u7528\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u96c6\u4e2d\u5f0f\u8def\u7531")," \u901a\u8fc7\u96c6\u4e2d\u5f0f\u7684\u8def\u7531\u914d\u7f6e\uff0c\u81ea\u52a8\u6839\u636e\u5f53\u524d\u9875\u9762 pathname \u6fc0\u6d3b\u6e32\u67d3\u5bf9\u5e94\u7684\u5b50\u5e94\u7528\u3002")),(0,a.kt)("h2",{id:"\u5b50\u5e94\u7528\u7ec4\u4ef6"},"\u5b50\u5e94\u7528\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"useModuleApps")," API \u53ef\u4ee5\u83b7\u53d6\u5230\u5404\u4e2a\u5b50\u5e94\u7528\u7684\u7ec4\u4ef6\u3002\u7ed3\u5408 ",(0,a.kt)("inlineCode",{parentName:"p"},"router"),"\uff0c\u53ef\u4ee5\u81ea\u63a7\u5f0f\u7684\u6839\u636e\u4e0d\u540c\u7684\u8def\u7531\u6e32\u67d3\u4e0d\u540c\u7684\u5b50\u5e94\u7528\u3002"),(0,a.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u7684\u5b50\u5e94\u7528\u5217\u8868\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},'export default defineConfig({\n  runtime: {\n    masterApp: {\n      manifest: {\n        modules: [\n          {\n            name: "Dashboard",\n            entry: "http://localhost:8081"\n          },\n          {\n            name: "TableList",\n            entry: "http://localhost:8082"\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"\u7f16\u8f91\u4e3b\u5e94\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u6587\u4ef6\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=\u4e3b\u5e94\u7528\uff1aApp.tsx",title:"\u4e3b\u5e94\u7528\uff1aApp.tsx"},"import { useModuleApps } from '@modern-js/plugin-garfish';\nimport { Route, Switch } from '@modern-js/runtime/router';\n\nfunction App() {\n  const { Dashboard, TableList } = useModuleApps();\n\n  return <div>\n    <Switch>\n      <Route path='/dashboard'>\n        <Dashboard />\n      </Route>\n      <Route path='/tablelist'>\n        <TableList />\n      </Route>\n    </ Switch>\n  </div>\n}\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"Route")," \u7ec4\u4ef6\u81ea\u5b9a\u4e49\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"DashBoard")," \u7684\u6fc0\u6d3b\u8def\u7531\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"/dashboard"),"\uff0c ",(0,a.kt)("strong",{parentName:"p"},"TableList")," \u7684\u6fc0\u6d3b\u8def\u7531\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"/tablelist"),"\u3002"),(0,a.kt)("h2",{id:"\u96c6\u4e2d\u5f0f\u8def\u7531"},"\u96c6\u4e2d\u5f0f\u8def\u7531"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u96c6\u4e2d\u5f0f\u8def\u7531")," \u662f\u5c06\u5b50\u5e94\u7528\u7684\u6fc0\u6d3b\u8def\u7531\u96c6\u4e2d\u914d\u7f6e\u7684\u65b9\u5f0f\u3002\u6211\u4eec\u7ed9\u5b50\u5e94\u7528\u5217\u8868\u4fe1\u606f\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"activeWhen")," \u5b57\u6bb5\u6765\u542f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"\u96c6\u4e2d\u5f0f\u8def\u7531"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="modern.config.ts"\xc5 {8,13}',title:'"modern.config.ts"\xc5',"{8,13}":!0},'export default defineConfig({\n  runtime: {\n    masterApp: {\n      manifest: {\n        modules: [\n          {\n            name: "Dashboard",\n            activeWhen: \'/dashboard\',\n            entry: "http://localhost:8081"\n          },\n          {\n            name: TableList,\n            activeWhen: \'/tablelist\',\n            entry: "http://localhost:8082"\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"\u7136\u540e\u5728\u4e3b\u5e94\u7528\u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"useModuleApp")," API \u6765\u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"MApp")," \u5728\u4e3b\u5e94\u7528\u6e32\u67d3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=\u4e3b\u5e94\u7528\uff1aApp.tsx",title:"\u4e3b\u5e94\u7528\uff1aApp.tsx"},"import { useModuleApp } from '@modern-js/runtime';\n\nfunction App() {\n  const MApp = useModuleApp();\n\n  return <div>\n    <MApp />\n  </div>\n}\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u542f\u52a8\u5e94\u7528\u540e\uff0c\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"/dashboard")," \u8def\u7531\uff0c\u4f1a\u6e32\u67d3 ",(0,a.kt)("inlineCode",{parentName:"p"},"Dashboard")," \u5b50\u5e94\u7528\uff0c\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"/tablelist")," \u8def\u7531\uff0c\u4f1a\u6e32\u67d3 ",(0,a.kt)("inlineCode",{parentName:"p"},"TableList")," \u5b50\u5e94\u7528\u3002"),(0,a.kt)("h2",{id:"\u4e24\u79cd\u6a21\u5f0f\u6df7\u7528"},"\u4e24\u79cd\u6a21\u5f0f\u6df7\u7528"),(0,a.kt)("p",null,"\u5f53\u7136 ",(0,a.kt)("strong",{parentName:"p"},"\u5b50\u5e94\u7528\u7ec4\u4ef6")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"\u96c6\u4e2d\u5f0f\u8def\u7531")," \u662f\u53ef\u4ee5\u6df7\u5408\u4f7f\u7528\u7684\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u90e8\u5206\u5b50\u5e94\u7528\u4f5c\u4e3a ",(0,a.kt)("strong",{parentName:"li"},"\u5b50\u5e94\u7528\u7ec4\u4ef6")," \u6fc0\u6d3b\uff0c\u53e6\u5916\u4e00\u90e8\u5206\u4f5c\u4e3a ",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u4e2d\u5f0f\u8def\u7531")," \u6fc0\u6d3b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u90e8\u5206\u5b50\u5e94\u7528\u65e2\u53ef\u4ee5\u4f5c\u4e3a ",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u4e2d\u5f0f\u8def\u7531")," \u6fc0\u6d3b\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a ",(0,a.kt)("strong",{parentName:"li"},"\u5b50\u5e94\u7528\u7ec4\u4ef6")," \u6fc0\u6d3b\u3002")))}d.isMDXComponent=!0}}]);