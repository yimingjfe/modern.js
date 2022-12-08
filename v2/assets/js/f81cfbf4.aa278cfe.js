"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1005],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70314:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(52983),a=n(14517);const o="tabItem_cygK";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},38005:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(18249),a=n(52983),o=n(14517),l=n(27250),s=n(62209),i=n(61748),c=n(34333);const p="tabList_N6AO",u="tabItem_Wt3n";function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:b,className:f}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??k.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,s.l)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==h&&!y.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,i.U)(),[w,O]=(0,a.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=b){const e=g[b];null!=e&&e!==w&&y.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,n=T.indexOf(t),r=y[n].value;r!==w&&(x(t),O(r),null!=b&&N(b,String(r)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},f)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:E,onClick:j},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},9145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(18249),a=(n(52983),n(44993)),o=n(38005),l=n(70314);const s={title:"\u200b\u7528 Storybook \u8c03\u8bd5\u7ec4\u4ef6"},i=void 0,c={unversionedId:"tutorials/first-app/c06-css-and-component/6.5-storybook",id:"tutorials/first-app/c06-css-and-component/6.5-storybook",title:"\u200b\u7528 Storybook \u8c03\u8bd5\u7ec4\u4ef6",description:"\u524d\u51e0\u4e2a\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u5f00\u53d1\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 UI \u7ec4\u4ef6\u3002\u7ec4\u4ef6\u5f00\u53d1\u5b8c\u540e\uff0c\u4e00\u822c\u6211\u4eec\u9700\u8981\u5bf9\u5b83\u8fdb\u884c\u8c03\u8bd5\u3002",source:"@site/../../packages/toolkit/main-doc/zh/tutorials/first-app/c06-css-and-component/6.5-storybook.md",sourceDirName:"tutorials/first-app/c06-css-and-component",slug:"/tutorials/first-app/c06-css-and-component/6.5-storybook",permalink:"/v2/docs/tutorials/first-app/c06-css-and-component/6.5-storybook",draft:!1,tags:[],version:"current",frontMatter:{title:"\u200b\u7528 Storybook \u8c03\u8bd5\u7ec4\u4ef6"},sidebar:"tutorialsSidebar",previous:{title:"\u200b\u7ba1\u7406 Design System",permalink:"/v2/docs/tutorials/first-app/c06-css-and-component/6.4-design-system"},next:{title:"\u200b\u6d4b\u8bd5\u7ec4\u4ef6\u200b\u200b\u200b",permalink:"/v2/docs/tutorials/first-app/c06-css-and-component/6.6-testing"}},p={},u=[],m={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u524d\u51e0\u4e2a\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u5f00\u53d1\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 UI \u7ec4\u4ef6\u3002\u7ec4\u4ef6\u5f00\u53d1\u5b8c\u540e\uff0c\u4e00\u822c\u6211\u4eec\u9700\u8981\u5bf9\u5b83\u8fdb\u884c\u8c03\u8bd5\u3002"),(0,a.kt)("p",null,"\u9664\u4e86\u53ef\u4ee5\u76f4\u63a5\u5728\u9879\u76ee\u4e2d\u8fdb\u884c\u8c03\u8bd5\u4ee5\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://storybook.js.org/"},(0,a.kt)("strong",{parentName:"a"},"Storybook"))," \u8fdb\u884c\u8c03\u8bd5\u3002"),(0,a.kt)("p",null,"Modern.js \u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684 Storybook \u80fd\u529b\uff0c\u53ef\u4ee5\u8bc6\u522b\u5e94\u7528\u5de5\u7a0b\u4e0b\u7684 Story \u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run new"),"\uff0c\u542f\u7528\u8be5\u6a21\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u7528\u53ef\u9009\u529f\u80fd\n  ...\n  \u542f\u7528\u300c\u5355\u5143\u6d4b\u8bd5 / \u96c6\u6210\u6d4b\u8bd5\u300d\u529f\u80fd\n\u276f \u542f\u7528\u300cVisual Testing (Storybook)\u300d\u6a21\u5f0f\n")),(0,a.kt)("p",null,"\u5b89\u88c5\u6210\u529f\u540e\uff0c\u6211\u4eec\u9700\u8981\u4e3a\u6211\u4eec\u7684\u7ec4\u4ef6\u6dfb\u52a0 Story \u6587\u4ef6\u3002"),(0,a.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Story \u6587\u4ef6\u662f\u6307 ",(0,a.kt)("inlineCode",{parentName:"p"},"*.stories.[t|j]sx?")," \u683c\u5f0f\u7684\u6587\u4ef6\u3002")),(0,a.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Avatar")," \u7ec4\u4ef6 \u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/components/Avatar/index.stories.tsx")," Story \u6587\u4ef6\u3002"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"touch src/routes/components/Avatar/index.stories.tsx\n"))),(0,a.kt)(l.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"ni src/routes/components/Avatar/index.stories.tsx\n")))),(0,a.kt)("p",null,"\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import Avatar from '.';\n\nexport const DanielTaylorAvatar = () => (\n  <Avatar src=\"https://avatars.dicebear.com/v2/identicon/Daniel Taylor.svg\" />\n);\n\nexport default {\n  title: 'Avatar Demo',\n};\n")),(0,a.kt)("p",null,"\u7136\u540e\u6211\u4eec\u542f\u52a8 Storybook \u8c03\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run dev story\n")),(0,a.kt)("p",null,"\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u754c\u9762\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/mwa-storybook-demo.png",alt:"storybook demo"})),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u914d\u7f6e Storybook\uff0c\u5219\u9700\u8981\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/hooks/config/storybook"},(0,a.kt)("inlineCode",{parentName:"a"},"config/storybook/**"))," \u76ee\u5f55\u4e0b\u8fdb\u884c\u914d\u7f6e\u3002"),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c06/hello-modern-5"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}d.isMDXComponent=!0}}]);