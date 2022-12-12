"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8277],{44993:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(52983);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),u=a,k=c["".concat(i,".").concat(u)]||c[u]||m[u]||p;return t?r.createElement(k,o(o({ref:n},d),{},{components:t})):r.createElement(k,o({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=c;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<p;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},86860:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var r=t(18249),a=(t(52983),t(44993));const p={sidebar_position:1},o="\u4f9d\u8d56\u5b89\u88c5\u95ee\u9898",l={unversionedId:"guides/troubleshooting/dependencies",id:"guides/troubleshooting/dependencies",title:"\u4f9d\u8d56\u5b89\u88c5\u95ee\u9898",description:"\u5982\u4f55\u5347\u7ea7\u9879\u76ee\u4e2d\u7684 Modern.js \u5230\u6700\u65b0\u7248\u672c\uff1f",source:"@site/../../packages/toolkit/main-doc/zh/guides/troubleshooting/dependencies.md",sourceDirName:"guides/troubleshooting",slug:"/guides/troubleshooting/dependencies",permalink:"/v2/en/docs/guides/troubleshooting/dependencies",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"Hook \u5217\u8868",permalink:"/v2/en/docs/guides/topic-detail/framework-plugin/hook-list"}},i={},s=[{value:"\u5982\u4f55\u5347\u7ea7\u9879\u76ee\u4e2d\u7684 Modern.js \u5230\u6700\u65b0\u7248\u672c\uff1f",id:"\u5982\u4f55\u5347\u7ea7\u9879\u76ee\u4e2d\u7684-modernjs-\u5230\u6700\u65b0\u7248\u672c",level:3},{value:"\u5982\u4f55\u9501\u5b9a\u9879\u76ee\u4e2d\u7684\u67d0\u4e2a\u4f9d\u8d56\u7248\u672c\uff1f",id:"\u5982\u4f55\u9501\u5b9a\u9879\u76ee\u4e2d\u7684\u67d0\u4e2a\u4f9d\u8d56\u7248\u672c",level:3},{value:"\u5982\u4f55\u67e5\u770b\u9879\u76ee\u91cc\u67d0\u4e2a\u4f9d\u8d56\u5b9e\u9645\u5b89\u88c5\u7684\u7248\u672c\uff1f",id:"\u5982\u4f55\u67e5\u770b\u9879\u76ee\u91cc\u67d0\u4e2a\u4f9d\u8d56\u5b9e\u9645\u5b89\u88c5\u7684\u7248\u672c",level:3},{value:"\u5b89\u88c5\u4f9d\u8d56\u65f6\u63d0\u793a The engine &quot;node&quot; is incompatible\uff1f",id:"\u5b89\u88c5\u4f9d\u8d56\u65f6\u63d0\u793a-the-engine-node-is-incompatible",level:3},{value:"\u5347\u7ea7\u4f9d\u8d56\u540e\u51fa\u73b0 ReactNode \u7c7b\u578b\u9519\u8bef\uff1f",id:"\u5347\u7ea7\u4f9d\u8d56\u540e\u51fa\u73b0-reactnode-\u7c7b\u578b\u9519\u8bef",level:3},{value:"\u6267\u884c pnpm install \u4e4b\u540e\uff0c\u63a7\u5236\u53f0\u51fa\u73b0 peer dependencies \u76f8\u5173 warning\uff1f",id:"\u6267\u884c-pnpm-install-\u4e4b\u540e\u63a7\u5236\u53f0\u51fa\u73b0-peer-dependencies-\u76f8\u5173-warning",level:3}],d={toc:s};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f9d\u8d56\u5b89\u88c5\u95ee\u9898"},"\u4f9d\u8d56\u5b89\u88c5\u95ee\u9898"),(0,a.kt)("h3",{id:"\u5982\u4f55\u5347\u7ea7\u9879\u76ee\u4e2d\u7684-modernjs-\u5230\u6700\u65b0\u7248\u672c"},"\u5982\u4f55\u5347\u7ea7\u9879\u76ee\u4e2d\u7684 Modern.js \u5230\u6700\u65b0\u7248\u672c\uff1f"),(0,a.kt)("p",null,"Modern.js \u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"upgrade")," \u547d\u4ee4\u652f\u6301\u9879\u76ee\u5347\u7ea7\u5230\u6700\u65b0\u7684 Modern.js \u7248\u672c\u3002"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run upgrade"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm run upgrade\n\n> modern upgrade\n\n[INFO] [\u9879\u76ee\u7c7b\u578b]: \u5e94\u7528\n[INFO] [Modern.js \u6700\u65b0\u7248\u672c]: 2.0.0\n[INFO] [\u5f53\u524d\u9879\u76ee Modern.js \u4f9d\u8d56\u5df2\u7ecf\u4e3a\u6700\u65b0\u7248\u672c]: 2.0.0\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u9879\u76ee package.json \u4e2d\u7684\u4f9d\u8d56\u5df2\u7ecf\u66f4\u6539\u5230\u6700\u65b0\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u4e86\u89e3\u4e0d\u540c\u7248\u672c\u4e4b\u95f4\u7684\u66f4\u65b0\u5185\u5bb9\uff0c\u53ef\u4ee5\u67e5\u770b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Modern.js \u53d1\u7248\u65e5\u5fd7\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/modern-js-dev/modern.js/releases"},"Modern.js/releases"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5404\u4e2a package \u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"CHANGELOG.md")," \u6587\u4ef6\u3002")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u5982\u4f55\u9501\u5b9a\u9879\u76ee\u4e2d\u7684\u67d0\u4e2a\u4f9d\u8d56\u7248\u672c"},"\u5982\u4f55\u9501\u5b9a\u9879\u76ee\u4e2d\u7684\u67d0\u4e2a\u4f9d\u8d56\u7248\u672c\uff1f"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u9501\u5b9a\u9879\u76ee\u4e2d\u7684\u67d0\u4e2a\u4f9d\u8d56\u7684\u7248\u672c\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8fdb\u884c\u64cd\u4f5c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"yarn")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528 yarn \u7684\u9879\u76ee\uff0c\u8bf7\u5728",(0,a.kt)("strong",{parentName:"p"},"\u9879\u76ee\u6839\u76ee\u5f55"),"\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff0c\u7136\u540e\u91cd\u65b0\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resolutions": {\n    "package-name": "^1.0.0"\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"pnpm")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528 pnpm \u7684\u9879\u76ee\uff0c\u8bf7\u5728",(0,a.kt)("strong",{parentName:"p"},"\u9879\u76ee\u6839\u76ee\u5f55"),"\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff0c\u7136\u540e\u91cd\u65b0\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm i"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "overrides": {\n      "package-name": "^1.0.0"\n    }\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"npm")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528 npm \u7684\u9879\u76ee\uff0c\u8bf7\u5728",(0,a.kt)("strong",{parentName:"p"},"\u9879\u76ee\u6839\u76ee\u5f55"),"\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff0c\u7136\u540e\u91cd\u65b0\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "overrides": {\n    "package-name": "^1.0.0"\n  }\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e monorepo \u573a\u666f\uff0c\u53ea\u80fd\u5728\u9879\u76ee\u6839\u76ee\u5f55\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u9501\u5b9a\u4f9d\u8d56\u7248\u672c\uff0c\u5e76\u4e14\u4f1a\u5f71\u54cd monorepo \u4e2d\u7684\u6240\u6709 package\u3002")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u5982\u4f55\u67e5\u770b\u9879\u76ee\u91cc\u67d0\u4e2a\u4f9d\u8d56\u5b9e\u9645\u5b89\u88c5\u7684\u7248\u672c"},"\u5982\u4f55\u67e5\u770b\u9879\u76ee\u91cc\u67d0\u4e2a\u4f9d\u8d56\u5b9e\u9645\u5b89\u88c5\u7684\u7248\u672c\uff1f"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u5305\u7ba1\u7406\u5668\u81ea\u5e26\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ls")," \u547d\u4ee4\u6765\u67e5\u770b\u9879\u76ee\u91cc\u4f9d\u8d56\u7684\u7248\u672c\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e9b\u57fa\u672c\u7684\u793a\u4f8b\uff0c\u8be6\u7ec6\u7528\u6cd5\u8bf7\u67e5\u770b\u5404\u4e2a\u5305\u7ba1\u7406\u5668\u7684\u6587\u6863\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"npm / yarn")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528 npm \u6216 yarn \u7684\u9879\u76ee\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm ls")," \u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npm ls @modern-js/core"),"\uff0c\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"project\n\u2514\u2500\u252c @modern-js/app-tools@1.6.10\n  \u2514\u2500\u2500 @modern-js/core@1.12.4\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"pnpm")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528 pnpm \u7684\u9879\u76ee\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm ls")," \u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm ls @modern-js/core --depth Infinity"),"\uff0c\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"devDependencies:\n@modern-js/app-tools 1.7.0\n\u2514\u2500\u2500 @modern-js/core 1.13.0\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u5b89\u88c5\u4f9d\u8d56\u65f6\u63d0\u793a-the-engine-node-is-incompatible"},'\u5b89\u88c5\u4f9d\u8d56\u65f6\u63d0\u793a The engine "node" is incompatible\uff1f'),(0,a.kt)("p",null,"\u5b89\u88c5\u4f9d\u8d56\u65f6\u5982\u679c\u51fa\u73b0\u4ee5\u4e0b\u62a5\u9519\u63d0\u793a\uff0c\u8bf4\u660e\u5f53\u524d\u73af\u5883\u4f7f\u7528\u7684 Node.js \u7248\u672c\u8fc7\u4f4e\uff0c\u9700\u8981\u5347\u7ea7 Node.js \u5230\u66f4\u9ad8\u7248\u672c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'The engine "node" is incompatible with this module.\n\nExpected version ">=14.17.6". Got "12.20.1"\n')),(0,a.kt)("p",null,"\u4f7f\u7528 Modern.js \u65f6\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/download/release/latest-v14.x/"},"Node.js 14.x")," \u6216 ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/download/release/latest-v16.x/"},"Node.js 16.x")," \u7684\u6700\u65b0\u7248\u672c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u5f53\u524d\u73af\u5883\u7684 Node.js \u7248\u672c\u4f4e\u4e8e\u4e0a\u8ff0\u8981\u6c42\u7684\u7248\u672c\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," \u6216 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Schniz/fnm"},"fnm")," \u7b49\u5de5\u5177\u8fdb\u884c\u7248\u672c\u5207\u6362\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4f7f\u7528 nvm \u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u5b89\u88c5 Node.js v14\nnvm install 14\n\n# \u5207\u6362\u5230 Node 14\nnvm use 14\n\n# \u5c06 Node 14 \u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u7248\u672c\nnvm default 14\n")),(0,a.kt)("p",null,"\u5728\u672c\u5730\u5f00\u53d1\u73af\u5883\u63a8\u8350\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Schniz/fnm"},"fnm"),"\uff0c\u5b83\u7684\u7528\u6cd5\u4e0e nvm \u76f8\u4f3c\uff0c\u4f46\u62e5\u6709\u6bd4 nvm \u66f4\u597d\u7684\u6027\u80fd\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u5347\u7ea7\u4f9d\u8d56\u540e\u51fa\u73b0-reactnode-\u7c7b\u578b\u9519\u8bef"},"\u5347\u7ea7\u4f9d\u8d56\u540e\u51fa\u73b0 ReactNode \u7c7b\u578b\u9519\u8bef\uff1f"),(0,a.kt)("p",null,"\u5347\u7ea7\u9879\u76ee\u7684\u4f9d\u8d56\u540e\uff0c\u5982\u679c\u51fa\u73b0\u4ee5\u4e0b\u7c7b\u578b\u62a5\u9519\uff0c\u8bf4\u660e\u9879\u76ee\u4e2d\u5b89\u88c5\u4e86\u9519\u8bef\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"@types/react")," \u7248\u672c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"The types returned by 'render()' are incompatible between these types.\nType 'React.ReactNode' is not assignable to type 'import(\"/node_modules/@types/react/index\").ReactNode'.\nType '{}' is not assignable to type 'ReactNode'.\n")),(0,a.kt)("p",null,"\u51fa\u73b0\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f React 18 \u4e0e React 16/17 \u4e2d\u7684 ReactNode \u7c7b\u578b\u5b9a\u4e49\u4e0d\u540c\uff0c\u5982\u679c\u9879\u76ee\u4e2d\u51fa\u73b0\u591a\u4e2a\u4e0d\u540c ",(0,a.kt)("inlineCode",{parentName:"p"},"@types/react")," \u7248\u672c\uff0c\u5c31\u4f1a\u51fa\u73b0 ReactNode \u7c7b\u578b\u51b2\u7a81\uff0c\u5bfc\u81f4\u4ee5\u4e0a\u62a5\u9519\u3002"),(0,a.kt)("p",null,"\u89e3\u51b3\u65b9\u6cd5\u4e3a\u5c06\u9879\u76ee\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"@types/react")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"@types/react-dom")," \u9501\u5b9a\u5728\u7edf\u4e00\u7684\u7248\u672c\u4e0a\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"v17"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@types/react": "^17",\n  "@types/react-dom": "^17"\n}\n')),(0,a.kt)("p",null,"\u5173\u4e8e\u9501\u5b9a\u4f9d\u8d56\u7248\u672c\u7684\u65b9\u6cd5\uff0c\u8bf7\u53c2\u8003\u4e0a\u65b9\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5982\u4f55\u9501\u5b9a\u9879\u76ee\u4e2d\u7684\u67d0\u4e2a\u4f9d\u8d56\u7248\u672c\uff1f"),"\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u6267\u884c-pnpm-install-\u4e4b\u540e\u63a7\u5236\u53f0\u51fa\u73b0-peer-dependencies-\u76f8\u5173-warning"},"\u6267\u884c pnpm install \u4e4b\u540e\uff0c\u63a7\u5236\u53f0\u51fa\u73b0 peer dependencies \u76f8\u5173 warning\uff1f"),(0,a.kt)("p",null,"\u51fa\u73b0\u8be5\u8b66\u544a\u7684\u539f\u56e0\u662f\uff0c\u67d0\u4e9b\u4e09\u65b9 npm \u5305\u58f0\u660e\u7684 peer dependencies \u7248\u672c\u8303\u56f4\u4e0e Modern.js \u4e2d\u5b89\u88c5\u7684\u7248\u672c\u8303\u56f4\u4e0d\u4e00\u81f4\u3002"),(0,a.kt)("p",null,"\u7edd\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0cpeer dependencies \u7684\u8b66\u544a\u4e0d\u4f1a\u5f71\u54cd\u9879\u76ee\u8fd0\u884c\uff0c\u4e0d\u9700\u8981\u989d\u5916\u8fdb\u884c\u5904\u7406\uff0c\u8bf7\u5ffd\u7565\u76f8\u5173 warning\u3002"))}m.isMDXComponent=!0}}]);