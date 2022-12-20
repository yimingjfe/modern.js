"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3186],{44993:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(52983);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42431:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(18249),o=(t(52983),t(44993));const i={sidebar_position:4,title:"\u4e3b\u5b50\u5e94\u7528\u901a\u4fe1"},a=void 0,c={unversionedId:"guides/topic-detail/micro-frontend/c04-communicate",id:"guides/topic-detail/micro-frontend/c04-communicate",title:"\u4e3b\u5b50\u5e94\u7528\u901a\u4fe1",description:"props \u901a\u4fe1",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/micro-frontend/c04-communicate.md",sourceDirName:"guides/topic-detail/micro-frontend",slug:"/guides/topic-detail/micro-frontend/c04-communicate",permalink:"/v2/en/docs/guides/topic-detail/micro-frontend/c04-communicate",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u4e3b\u5b50\u5e94\u7528\u901a\u4fe1"},sidebar:"guidesSidebar",previous:{title:"\u5f00\u53d1\u4e3b\u5e94\u7528",permalink:"/v2/en/docs/guides/topic-detail/micro-frontend/c03-main-app"},next:{title:"\u6df7\u5408\u6280\u672f\u6808",permalink:"/v2/en/docs/guides/topic-detail/micro-frontend/c05-mixed-stack"}},p={},l=[{value:"props \u901a\u4fe1",id:"props-\u901a\u4fe1",level:2},{value:"channel \u901a\u4fe1",id:"channel-\u901a\u4fe1",level:2}],s={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"props-\u901a\u4fe1"},"props \u901a\u4fe1"),(0,o.kt)("p",null,"Modern.js \u4e2d\uff0c\u4f1a\u5c06\u5b50\u5e94\u7528\u5305\u88f9\u6210\u4e00\u4e2a React \u7ec4\u4ef6\uff0c\u76f4\u63a5\u901a\u8fc7\u7ed9 React \u7ec4\u4ef6\u4f20\u9012 ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," \u5373\u53ef\u5b9e\u73b0\u4e3b\u5e94\u7528\u548c\u5b50\u5e94\u7528\u901a\u4fe1\u7684\u76ee\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=\u4e3b\u5e94\u7528\uff1aApp.tsx",title:"\u4e3b\u5e94\u7528\uff1aApp.tsx"},"function App() {\n  const { MApp } = useModuleApps();\n\n  return <div>\n    <MApp count={100} />\n  </div>;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=\u5b50\u5e94\u7528\uff1aApp.tsx",title:"\u5b50\u5e94\u7528\uff1aApp.tsx"},"function App(props) {\n  console.log(props);\n  return ...\n}\n")),(0,o.kt)("p",null,"\u5b50\u5e94\u7528\u5c06\u4f1a\u6253\u5370 ",(0,o.kt)("inlineCode",{parentName:"p"},"{count: 0}"),"\uff0c\u76ee\u524d\u5c1a\u672a\u652f\u6301\u5b50\u5e94\u7528\u6e32\u67d3\u54cd\u5e94\u5f0f\uff0c\u53ca\u65f6\u5728\u4e3b\u5e94\u7528\u4e0a\u66f4\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," \u7684\u6570\u636e\u4e5f\u4e0d\u4f1a\u89e6\u53d1\u89c6\u56fe\u66f4\u65b0"),(0,o.kt)("h2",{id:"channel-\u901a\u4fe1"},"channel \u901a\u4fe1"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.garfishjs.org/api/channel"},"Garfish.channel")," \u7528\u4e8e\u5e94\u7528\u95f4\u7684\u901a\u4fe1\u3002\u5b83\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"EventEmitter2")," \u7684\u5b9e\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// \u5b50\u5e94\u7528\u76d1\u542c\u767b\u5f55\u4e8b\u4ef6\nconst App = () => {\n  const handleLogin = (userInfo) => {\n    console.log(`${userInfo.name} has login`);\n  };\n\n  useEffect(() => {\n    window?.Garfish.channel.on('login', handleLogin);\n    return () => {\n      window?.Garfish.channel.removeListener('login', handleLogin);\n    };\n  });\n};\n\n// \u4e3b\u5e94\u7528\u89e6\u53d1\u76d1\u542c\u4e8b\u4ef6\napi.getLoginInfo.then((res) => {\n  if (res.code === 0) {\n    window.Garfish.channel.emit('login', res.data);\n  }\n});\n")))}u.isMDXComponent=!0}}]);