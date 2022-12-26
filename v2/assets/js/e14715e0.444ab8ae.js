"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4054],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(52983);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=m(n),u=l,f=d["".concat(p,".").concat(u)]||d[u]||s[u]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var m=2;m<a;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>s});var r=n(18249),l=(n(52983),n(44993));const a={toc:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4}]};function o(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("p",null,"\u79fb\u9664 HTML \u4ea7\u7269\u5bf9\u5e94\u7684\u6587\u4ef6\u5939\u3002\u5f00\u542f\u8be5\u9009\u9879\u540e\uff0c\u751f\u6210\u7684 HTML \u6587\u4ef6\u76ee\u5f55\u4f1a\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"[name]/index.html")," \u53d8\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"[name].html"),"\u3002"),(0,l.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHTML \u4ea7\u7269\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u4e0b\u7684\u7ed3\u6784\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"/dist\n\u2514\u2500\u2500 html\n \xa0  \u2514\u2500\u2500 main\n \xa0\xa0     \u2514\u2500\u2500 index.html\n")),(0,l.kt)("p",null,"\u5f00\u542f ",(0,l.kt)("inlineCode",{parentName:"p"},"html.disableHtmlFolder")," \u914d\u7f6e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  html: {\n    disableHtmlFolder: true,\n  },\n};\n")),(0,l.kt)("p",null,"\u91cd\u65b0\u7f16\u8bd1\u540e\uff0cHTML \u4ea7\u7269\u5728 dist \u4e2d\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"/dist\n\u2514\u2500\u2500 html\n \xa0\xa0 \u2514\u2500\u2500 main.html\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u9700\u8981\u8bbe\u7f6e HTML \u6587\u4ef6\u5728 dist \u76ee\u5f55\u4e2d\u7684\u8def\u5f84\uff0c\u8bf7\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"output.distPath.html")," \u914d\u7f6e\u3002")))}o.isMDXComponent=!0;const i={title:"html.disableHtmlFolder",sidebar_label:"disableHtmlFolder"},p=void 0,m={unversionedId:"configure/app/html/disable-html-folder",id:"configure/app/html/disable-html-folder",title:"html.disableHtmlFolder",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 html.disableHtmlFolder\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/html/disable-html-folder.md",sourceDirName:"configure/app/html",slug:"/configure/app/html/disable-html-folder",permalink:"/v2/docs/configure/app/html/disable-html-folder",draft:!1,tags:[],version:"current",frontMatter:{title:"html.disableHtmlFolder",sidebar_label:"disableHtmlFolder"},sidebar:"configsAppSidebar",previous:{title:"crossorigin",permalink:"/v2/docs/configure/app/html/crossorigin"},next:{title:"faviconByEntries",permalink:"/v2/docs/configure/app/html/favicon-by-entries"}},c={},s=[],d={toc:s};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"BUILDER",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-html.html#html-disablehtmlfolder"},"html.disableHtmlFolder"),"\u3002")),(0,l.kt)(o,{mdxType:"Main"}))}u.isMDXComponent=!0}}]);