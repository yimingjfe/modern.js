"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7416],{44993:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>f});var r=l(52983);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(l),f=n,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return l?r.createElement(m,o(o({ref:t},c),{},{components:l})):r.createElement(m,o({ref:t},c))}));function f(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<a;s++)o[s]=l[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,l)}d.displayName="MDXCreateElement"},52726:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=l(18249),n=(l(52983),l(44993));const a={title:"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027",sidebar_position:5},o=void 0,i={unversionedId:"guides/advanced-features/compatibility",id:"guides/advanced-features/compatibility",title:"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027",description:"Polyfill \u6a21\u5f0f",source:"@site/../../packages/toolkit/main-doc/zh/guides/advanced-features/compatibility.md",sourceDirName:"guides/advanced-features",slug:"/guides/advanced-features/compatibility",permalink:"/v2/en/docs/guides/advanced-features/compatibility",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027",sidebar_position:5},sidebar:"guidesSidebar",previous:{title:"\u9759\u6001\u7ad9\u70b9\u751f\u6210\uff08SSG\uff09",permalink:"/v2/en/docs/guides/advanced-features/ssg"},next:{title:"\u4ee3\u7801\u5206\u5272",permalink:"/v2/en/docs/guides/advanced-features/code-split"}},p={},s=[{value:"Polyfill \u6a21\u5f0f",id:"polyfill-\u6a21\u5f0f",level:2},{value:"\u7f16\u8bd1\u65f6 Polyfill",id:"\u7f16\u8bd1\u65f6-polyfill",level:3},{value:"\u8fd0\u884c\u65f6\u6309\u9700 Polyfill",id:"\u8fd0\u884c\u65f6\u6309\u9700-polyfill",level:3},{value:"Browserslist \u914d\u7f6e",id:"browserslist-\u914d\u7f6e",level:2}],c={toc:s};function u(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"polyfill-\u6a21\u5f0f"},"Polyfill \u6a21\u5f0f"),(0,n.kt)("h3",{id:"\u7f16\u8bd1\u65f6-polyfill"},"\u7f16\u8bd1\u65f6 Polyfill"),(0,n.kt)("p",null,"Modern.js \u5728\u7f16\u8bd1\u65f6\u9ed8\u8ba4\u901a\u8fc7 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"core-js")," \u5f15\u5165\u5bf9\u5e94\u7684 Polyfill \u4ee3\u7801\u3002"),(0,n.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u6839\u636e\u9879\u76ee ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/browserslist/browserslist"},"Browserslist")," \u7684\u8bbe\u7f6e\u60c5\u51b5\u5f15\u5165\u6240\u9700\u7684 Polyfill \u4ee3\u7801\uff0c \u8fd9\u6837\u57fa\u672c\u4e0d\u7528\u518d\u62c5\u5fc3\u9879\u76ee\u6e90\u7801\u548c\u7b2c\u4e09\u65b9\u4f9d\u8d56\u7684 Polyfill \u95ee\u9898\u4e86\uff0c\u4f46\u662f\u56e0\u4e3a\u5305\u542b\u4e86\u4e00\u4e9b\u6ca1\u6709\u7528\u5230\u7684 Polyfill \u4ee3\u7801\uff0c\u6240\u4ee5\u6700\u7ec8\u7684\u5305\u5927\u5c0f\u53ef\u80fd\u4f1a\u6709\u6240\u589e\u52a0\u3002"),(0,n.kt)("admonition",{title:"\u6ce8",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u660e\u786e\u7b2c\u4e09\u65b9\u4f9d\u8d56\u4e0d\u9700\u8981 Polyfill \u7684\u573a\u666f\uff0c\u53ef\u4ee5\u8bbe\u7f6e ",(0,n.kt)("a",{parentName:"p",href:"/docs/configure/app/output/polyfill"},(0,n.kt)("inlineCode",{parentName:"a"},"output.polyfill"))," \u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"usage"),", \u8fd9\u6837 Babel \u7f16\u8bd1\u65f6\u53ea\u4f1a\u6839\u636e\u4ee3\u7801\u4e2d\u4f7f\u7528\u5230\u7684\u8bed\u6cd5\u5f15\u5165 Polyfill \u4ee3\u7801\u3002")),(0,n.kt)("h3",{id:"\u8fd0\u884c\u65f6\u6309\u9700-polyfill"},"\u8fd0\u884c\u65f6\u6309\u9700 Polyfill"),(0,n.kt)("p",null,"Modern.js \u4e2d\u8fd8\u63d0\u4f9b\u4e86\u57fa\u4e8e\u6d4f\u89c8\u5668 ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent"},"UA")," \u4fe1\u606f\u7684\u8fd0\u884c\u65f6\u6309\u9700 Polyfill \u65b9\u6848\uff0c\u76f8\u6bd4\u4e8e Babel \u4f18\u52bf\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u63d2\u5165\u5230\u4ee3\u7801\u4e2d\uff0c\u53ea\u6839\u636e\u8bbf\u95ee\u9875\u9762\u7684\u8bbe\u5907\uff0c\u6309\u9700\u4e0b\u53d1 Polyfill \u4ee3\u7801 \uff0c\u51cf\u5c11\u6574\u4f53\u4ee3\u7801\u4f53\u79ef\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u76f8\u540c\u6d4f\u89c8\u5668\u4f1a\u516c\u7528\u4e00\u4efd Polyfill \u4ee3\u7801\u3002\u56e0\u6b64\uff0c\u968f\u7740\u9879\u76ee\u8d8a\u6765\u8d8a\u591a\uff0c\u57fa\u4e8e UA \u7684 Polyfill \u4ee3\u7801\u4e0b\u53d1\u901f\u5ea6\u4f1a\u8d8a\u6765\u8d8a\u5feb\uff0c\u7efc\u5408\u901f\u5ea6\u8d85\u8fc7\u5e38\u89c4\u65b9\u6848\u3002")),(0,n.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5fae\u751f\u6210\u5668\u5f00\u542f\u8be5\u529f\u80fd\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c\uff1a\u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd\uff1a\u542f\u7528\u300c\u57fa\u4e8e UA \u7684 Polyfill\u300d\u529f\u80fd\n")),(0,n.kt)("p",null,"\u5b89\u88c5\u4f9d\u8d56\u540e\uff0c\u914d\u7f6e ",(0,n.kt)("inlineCode",{parentName:"p"},"output.polyfill")," \u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"ua")," \u5e76\u4e14\u6267\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"pnpm run build && pnpm run start")," \u542f\u52a8\u670d\u52a1\u5668\u540e\uff0c\u8bbf\u95ee\u9875\u9762\u53ef\u4ee5\u770b\u5230 HTML \u4ea7\u7269\u4e2d\u5305\u542b\u5982\u4e0b\u811a\u672c:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'<script src="/__polyfill__" crossorigin><\/script>\n')),(0,n.kt)("p",null,"\u5728 Chrome 51 \u4e0b\u8bbf\u95ee\u9875\u9762\u53ef\u4ee5\u770b\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/__polyfill__")," \u8fd4\u56de\u5185\u5bb9\u5982\u4e0b:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/ua-polyfill.png",alt:"ua-polyfill"})),(0,n.kt)("h2",{id:"browserslist-\u914d\u7f6e"},"Browserslist \u914d\u7f6e"),(0,n.kt)("p",null,"Modern.js \u652f\u6301\u5728\u9879\u76ee\u6839\u76ee\u5f55 ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6\u4e2d\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"browserslist")," \u5b57\u6bb5\uff08\u6216\u5355\u72ec\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},".browserslistrc")," \u6587\u4ef6\uff09\u6307\u5b9a\u9879\u76ee\u8986\u76d6\u7684\u76ee\u6807\u6d4f\u89c8\u5668\u8303\u56f4\u3002\u8be5\u503c\u4f1a\u88ab ",(0,n.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env"},(0,n.kt)("inlineCode",{parentName:"a"},"@babel/preset-env"))," \u548c ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/postcss/autoprefixer"},(0,n.kt)("inlineCode",{parentName:"a"},"autoprefixer"))," \u7528\u6765\u786e\u5b9a\u9700\u8981\u8f6c\u6362\u7684 JavaScript \u8bed\u6cd5\u7279\u6027\u548c\u9700\u8981\u6dfb\u52a0\u7684 CSS \u6d4f\u89c8\u5668\u524d\u7f00\u3002"),(0,n.kt)("p",null,"Modern.js \u4e2d\u9ed8\u8ba4\u503c\u5982\u4e0b:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"['> 0.01%', 'not dead', 'not op_mini all']\n")),(0,n.kt)("p",null,"\u53ef\u4ee5\u5728",(0,n.kt)("a",{parentName:"p",href:"https://github.com/browserslist/browserslist"},"\u8fd9\u91cc"),"\u4e86\u89e3\u5982\u4f55\u81ea\u5b9a\u4e49\u6d4f\u89c8\u5668\u8303\u56f4\u3002"))}u.isMDXComponent=!0}}]);