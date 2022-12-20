"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4503],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(18249),i=(n(52983),n(44993));const o={title:"Entries",sidebar_position:2},a=void 0,l={unversionedId:"guides/concept/entries",id:"guides/concept/entries",title:"Entries",description:"Entries are Modern.js default file convention, and each entry in the project is a separate page, corresponding to a server level route.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/concept/entries.md",sourceDirName:"guides/concept",slug:"/guides/concept/entries",permalink:"/v2/en/docs/guides/concept/entries",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Entries",sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"Upgrade",permalink:"/v2/en/docs/guides/get-started/upgrade"},next:{title:"\u57fa\u7840\u529f\u80fd",permalink:"/v2/en/docs/guides/basic-features/"}},s={},p=[{value:"Single Entry and Multiple Entries",id:"single-entry-and-multiple-entries",level:2},{value:"Entry conditions",id:"entry-conditions",level:2},{value:"Difference between entries",id:"difference-between-entries",level:2},{value:"routes",id:"routes",level:3},{value:"App",id:"app",level:3},{value:"Index",id:"index",level:3},{value:"configuration",id:"configuration",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Entries are Modern.js default file convention, and each entry in the project is a separate page, corresponding to a server level route."),(0,i.kt)("p",null,"Many configurations, such as HTML templates, Meta information, whether SSR is enabled, SSG, server level routing rules are divided by the entry dimension."),(0,i.kt)("h2",{id:"single-entry-and-multiple-entries"},"Single Entry and Multiple Entries"),(0,i.kt)("p",null,"Modern.js initialization project is a single entry, the project structure is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 modern-app-env.d.ts\n\u2502\xa0\xa0 \u2514\u2500\u2500 routes\n\u2502\xa0\xa0     \u251c\u2500\u2500 index.css\n\u2502\xa0\xa0     \u251c\u2500\u2500 layout.tsx\n\u2502\xa0\xa0     \u2514\u2500\u2500 page.tsx\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 modern.config.ts\n\u251c\u2500\u2500 pnpm-lock.yaml\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 tsconfig.json\n")),(0,i.kt)("p",null,"Modern.js can easily switch from single entry to multiple entry. You can execute ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run new")," under the project to create entry through generator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'? Action: Create project element\n? Create project element: New "entry"\n? Entry name: new-entry\n')),(0,i.kt)("p",null,"After execution, the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/")," directory will become the following structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 modern-app-env.d.ts\n\u251c\u2500\u2500 myapp\n\u2502\xa0\xa0 \u2514\u2500\u2500 routes\n\u2502\xa0\xa0     \u251c\u2500\u2500 index.css\n\u2502\xa0\xa0     \u251c\u2500\u2500 layout.tsx\n\u2502\xa0\xa0     \u2514\u2500\u2500 page.tsx\n\u2514\u2500\u2500 new-entry\n    \u2514\u2500\u2500 routes\n        \u251c\u2500\u2500 index.css\n        \u251c\u2500\u2500 layout.tsx\n        \u2514\u2500\u2500 page.tsx\n")),(0,i.kt)("p",null,"The original code was moved to the directory with the same name as the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", and a new directory was created."),(0,i.kt)("p",null,"After executing ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),", you can see that a ",(0,i.kt)("inlineCode",{parentName:"p"},"/new-entry")," route has been added, and the migrated code route has not changed."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Modern.js will use the directory with the same name as the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," as the main entry, the default route is ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),", and the default route for other entries is ",(0,i.kt)("inlineCode",{parentName:"p"},"/{entryName}"),".")),(0,i.kt)("h2",{id:"entry-conditions"},"Entry conditions"),(0,i.kt)("p",null,"By default, the Modern.js entry currently scans the file under ",(0,i.kt)("inlineCode",{parentName:"p"},"src/"),", identifies the entry, and generates the corresponding server level route."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can change the entry directory to another directory by ",(0,i.kt)("a",{parentName:"p",href:"/docs/configure/app/source/entries-dir"},"source.entriesDir"),".")),(0,i.kt)("p",null,"Not all first-level directories under ",(0,i.kt)("inlineCode",{parentName:"p"},"src/")," will become project entrances. The directory where the entry is located must meet one of the following four conditions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Directory with ",(0,i.kt)("inlineCode",{parentName:"li"},"routes/")),(0,i.kt)("li",{parentName:"ol"},"Has the ",(0,i.kt)("inlineCode",{parentName:"li"},"App.[jt]sx?")," file"),(0,i.kt)("li",{parentName:"ol"},"With ",(0,i.kt)("inlineCode",{parentName:"li"},"index.[jt]sx?")," file"),(0,i.kt)("li",{parentName:"ol"},"With ",(0,i.kt)("inlineCode",{parentName:"li"},"pages/")," directory (compatible Modern.js 1.0)")),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/")," directory satisfies the entry feature, the Modern.js considers the current project to be a single entry application."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Single entry The default entry name is ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),".")),(0,i.kt)("p",null,"When the project is not a single-entry application, Modern.js further look at the first-level directory under ",(0,i.kt)("inlineCode",{parentName:"p"},"src/"),"."),(0,i.kt)("h2",{id:"difference-between-entries"},"Difference between entries"),(0,i.kt)("p",null,"Entries to different conventions have different behaviors."),(0,i.kt)("h3",{id:"routes"},"routes"),(0,i.kt)("p",null,"If the entry is the ",(0,i.kt)("inlineCode",{parentName:"p"},"routes/")," convention, Modern.js will scan the files under ",(0,i.kt)("inlineCode",{parentName:"p"},"routes")," at startup, and automatically generate the client route based on the file convention(react-router)."),(0,i.kt)("p",null,"For details, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/routes"},"Routing"),"."),(0,i.kt)("h3",{id:"app"},"App"),(0,i.kt)("p",null,"If the entry is the ",(0,i.kt)("inlineCode",{parentName:"p"},"App.[jt]sx?")," convention, the developer can freely set the client route in this file, or not set the client route."),(0,i.kt)("p",null,"For details, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/routes"},"Routing"),"."),(0,i.kt)("h3",{id:"index"},"Index"),(0,i.kt)("p",null,"Typically, the above two modes are sufficient, but when developers need to take over the React mount logic themselves, or take over the Webpack entry entirely, the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.[jt]sx?"),"convention can be used."),(0,i.kt)("p",null,"If the entry is the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.[jt]sx?")," convention, the Modern.js determines the build behavior based on whether the file has a default component export."),(0,i.kt)("p",null,"For details, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/concept/entries#%E8%87%AA%E5%AE%9A%E4%B9%89-app"},"customized App"),"."),(0,i.kt)("h2",{id:"configuration"},"configuration"),(0,i.kt)("p",null,"In Modern.js, you can manually configure the entry in ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.[jt]s"),", in addition to using the file convention to generate the entry."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Details can be found in ",(0,i.kt)("a",{parentName:"p",href:"/docs/configure/app/source/entries"},"source.entries"),".")))}d.isMDXComponent=!0}}]);