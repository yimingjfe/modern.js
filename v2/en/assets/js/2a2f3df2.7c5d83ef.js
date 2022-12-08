"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[218],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),k=a,d=u["".concat(c,".").concat(k)]||u[k]||m[k]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(18249),a=(n(52983),n(44993));const o={title:"\u6570\u636e\u6a21\u62df",sidebar_position:6},i=void 0,s={unversionedId:"guides/basic-features/mock",id:"guides/basic-features/mock",title:"\u6570\u636e\u6a21\u62df",description:"Modern.js \u63d0\u4f9b\u4e86\u5feb\u901f\u751f\u6210 Mock \u6570\u636e\u7684\u529f\u80fd\uff0c\u80fd\u591f\u8ba9\u524d\u7aef\u72ec\u7acb\u81ea\u4e3b\u5f00\u53d1\uff0c\u4e0d\u88ab\u540e\u7aef\u63a5\u53e3\u963b\u585e\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/basic-features/mock.md",sourceDirName:"guides/basic-features",slug:"/guides/basic-features/mock",permalink:"/v2/en/docs/guides/basic-features/mock",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u6570\u636e\u6a21\u62df",sidebar_position:6},sidebar:"guidesSidebar",previous:{title:"\u4ee3\u7406",permalink:"/v2/en/docs/guides/basic-features/proxy"},next:{title:"\u73af\u5883\u53d8\u91cf",permalink:"/v2/en/docs/guides/basic-features/env-vars"}},c={},l=[{value:"Mock \u6587\u4ef6",id:"mock-\u6587\u4ef6",level:2},{value:"Mock \u6587\u4ef6\u7f16\u5199",id:"mock-\u6587\u4ef6\u7f16\u5199",level:2},{value:"\u8fd4\u56de\u968f\u673a\u6570\u636e",id:"\u8fd4\u56de\u968f\u673a\u6570\u636e",level:2},{value:"\u5ef6\u8fdf\u8fd4\u56de",id:"\u5ef6\u8fdf\u8fd4\u56de",level:2}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Modern.js \u63d0\u4f9b\u4e86\u5feb\u901f\u751f\u6210 Mock \u6570\u636e\u7684\u529f\u80fd\uff0c\u80fd\u591f\u8ba9\u524d\u7aef\u72ec\u7acb\u81ea\u4e3b\u5f00\u53d1\uff0c\u4e0d\u88ab\u540e\u7aef\u63a5\u53e3\u963b\u585e\u3002"),(0,a.kt)("h2",{id:"mock-\u6587\u4ef6"},"Mock \u6587\u4ef6"),(0,a.kt)("p",null,"\u7ea6\u5b9a\u5f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"config/mock")," \u76ee\u5f55\u4e0b\u5b58\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"index.[jt]s")," \u65f6\uff0c\u4f1a\u81ea\u52a8\u5f00\u542f Mock \u529f\u80fd\uff0c\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 config\n\u2502   \u2514\u2500\u2500 mock\n\u2502       \u251c\u2500\u2500 a.json\n\u2502       \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 App.jsx\n\u2514\u2500\u2500 modern.config.js\n")),(0,a.kt)("h2",{id:"mock-\u6587\u4ef6\u7f16\u5199"},"Mock \u6587\u4ef6\u7f16\u5199"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"./config/mock/index.js")," \u6587\u4ef6\u53ea\u9700\u8981\u5bfc\u51fa\u4e00\u4e2a\u5305\u542b\u6240\u6709 Mock API \u7684\u5bf9\u8c61\uff0c\u5bf9\u8c61\u7684\u5c5e\u6027\u7531\u8bf7\u6c42\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"method")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," \u7ec4\u6210\uff0c\u5bf9\u5e94\u7684\u5c5e\u6027\u503c\u53ef\u4ee5\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Function"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  /* \u5c5e\u6027\u4e3a\u5177\u4f53\u7684 method \u548c \u8bf7\u6c42 url\uff0c\u503c\u4e3a object \u6216 array\u4f5c\u4e3a\u8bf7\u6c42\u7684\u7ed3\u679c */\n  'GET /api/getInfo': { data: [1, 2, 3, 4] },\n\n  /* method \u9ed8\u8ba4\u4e3a GET */\n  '/api/getExample': { id: 1 },\n\n  /* \u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u51fd\u6570\u6839\u636e\u8bf7\u6c42\u52a8\u6001\u8fd4\u56de\u6570\u636e\uff0c\u8fd4\u56de\u503c\u53c2\u8003 express middleware */\n  'POST /api/addInfo': (req, res, next) => {\n    res.setHeader('Access-Control-Allow-Origin', '*');\n    res.end('200');\n  },\n};\n")),(0,a.kt)("p",null,"\u4ee3\u7801\u4e2d\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/api/getInfo")," \u65f6\uff0c\u63a5\u53e3\u4f1a\u8fd4\u56de JSON \u683c\u5f0f\u6570\u636e\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},'{ "data": [1, 2, 3, 4] }'),"\u3002"),(0,a.kt)("h2",{id:"\u8fd4\u56de\u968f\u673a\u6570\u636e"},"\u8fd4\u56de\u968f\u673a\u6570\u636e"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"./config/mock/index.js")," \u4e2d\u81ea\u4e3b\u5f15\u5165 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nuysoft/Mock/wiki/Getting-Started"},"Mock.js"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marak/Faker.js/"},"faker.js")," \u7b49\u5e93\u751f\u6210\u968f\u673a\u6570\u636e\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Mock = require('mockjs');\nconst faker = require('faker');\n\nmodule.exports = {\n  '/api/getInfo': Mock.mock({\n     'data|1-10': [{ name: '@cname' }]\n   }) /* => {data: [{name: \"\u8463\u971e\"}, {name: \"\u9b4f\u654f\"},  {name: \"\u77f3\u78ca\"}} */\n  '/a/b': {\n    name: faker.fake(\"{{name.lastName}}, {{name.firstName}} {{name.suffix}}\")\n   }  /* => { name: 'Marks, Dean Sr.'} */\n}\n")),(0,a.kt)("admonition",{title:"\u66f4\u591a\u968f\u673a\u6570\u636e\u751f\u6210\u5e93",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/marak/Faker.js/"},"Faker.js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/chancejs/chancejs"},"Chancejs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nuysoft/Mock/wiki/Getting-Started"},"Mock")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmtrends.com/mockjs-vs-faker-vs-chance"},"https://www.npmtrends.com/mockjs-vs-faker-vs-chance")))),(0,a.kt)("h2",{id:"\u5ef6\u8fdf\u8fd4\u56de"},"\u5ef6\u8fdf\u8fd4\u56de"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u6d4f\u89c8\u5668\u300c \u5f31\u7f51\u6a21\u62df \u300d\u7684\u529f\u80fd\u5b9e\u73b0\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"setTimeout")," \u4e3a\u5355\u4e2a\u63a5\u53e3\u8bbe\u7f6e\u5ef6\u8fdf\uff0c\u4f8b\u5982\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  'api/getInfo': (req, res) => {\n    setTimeout(() => {\n      res.end('delay 2000ms');\n    }, 2000);\n  },\n};\n")))}m.isMDXComponent=!0}}]);