"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5100],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(18249),a=(n(52983),n(44993));const o={sidebar_position:2},i="Project Generator",l={unversionedId:"guides/topic-detail/generator/project",id:"guides/topic-detail/generator/project",title:"Project Generator",description:"Modern.js provides @modern-js/create as a project generator for Modern.js project creation.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/topic-detail/generator/project.md",sourceDirName:"guides/topic-detail/generator",slug:"/guides/topic-detail/generator/project",permalink:"/v2/en/docs/guides/topic-detail/generator/project",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"\u4f7f\u7528 Github \u76f8\u5173\u5de5\u5177",permalink:"/v2/en/docs/guides/topic-detail/changesets/github"},next:{title:"Generator Configuration",permalink:"/v2/en/docs/guides/topic-detail/generator/config/common"}},p={},c=[{value:"Use",id:"use",level:2},{value:"Params",id:"params",level:2},{value:"projectDir",id:"projectdir",level:3},{value:"--version",id:"--version",level:3},{value:"--lang",id:"--lang",level:3},{value:"-c, --config",id:"-c---config",level:3},{value:"--no-need-install",id:"--no-need-install",level:3},{value:"--dist-tag &lt;distTag&gt;",id:"--dist-tag-disttag",level:3},{value:"--registry <registry/>",id:"--registry-",level:3},{value:"--debug",id:"--debug",level:3},{value:"--mwa",id:"--mwa",level:3},{value:"--module",id:"--module",level:3},{value:"--monorepo",id:"--monorepo",level:3},{value:"--plugin &lt;plugin&gt;",id:"--plugin-plugin",level:3},{value:"--generator &lt;generator&gt;",id:"--generator-generator",level:3},{value:"--packages &lt;packages&gt;",id:"--packages-packages",level:3}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"project-generator"},"Project Generator"),(0,a.kt)("p",null,"Modern.js provides ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/create")," as a project generator for Modern.js project creation."),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("p",null,"There is no need to install ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/create")," globally, just execute the tool directly with npx:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx @modern-js/create [projectDir]\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Use npx to get the latest version of ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/create")," every time.")),(0,a.kt)("h2",{id:"params"},"Params"),(0,a.kt)("h3",{id:"projectdir"},"[projectDir]"),(0,a.kt)("p",null,"Project directory name."),(0,a.kt)("p",null,"When executing the above command, the 'projectDir` folder will be created in the current directory by default, and the initialization project will be in this folder. When this parameter is empty, the initialization project will be directly generated in the current directory."),(0,a.kt)("h3",{id:"--version"},"--version"),(0,a.kt)("p",null,"Get the ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/create")," tool version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx @modern-js/create --version\n\n[INFO] @modern-js/create v2.0.0\n")),(0,a.kt)("h3",{id:"--lang"},"--lang"),(0,a.kt)("p",null,"Specifies the execution language, supports ",(0,a.kt)("inlineCode",{parentName:"p"},"zh")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"en"),"."),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/create")," will automatically identify the user's system language, choose to use Chinese or English, if the recognition fails or you want to specify the language manually, you can use this parameter."),(0,a.kt)("h3",{id:"-c---config"},"-c, --config"),(0,a.kt)("p",null,"Specifies the project default configuration."),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/create")," will have interaction problems such as language selection and package management tools during execution. When you need to specify these configuration contents in advance, you can pass in this field."),(0,a.kt)("p",null,"This field is a JSON character string, for example when running a package management tool:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'npx @modern-js/create --config \'{"packageManager": "pnpm"}\'\n')),(0,a.kt)("p",null,"Specific configuration information viewable ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/config/common"},"Project Configuration"),"."),(0,a.kt)("h3",{id:"--no-need-install"},"--no-need-install"),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/create")," automatically installs dependency after the project is created, use this parameter to ignore the install dependency step."),(0,a.kt)("h3",{id:"--dist-tag-disttag"},"--dist-tag <distTag",">"),(0,a.kt)("p",null,"Specifies the generator and Modern.js dependency versions."),(0,a.kt)("p",null,"A smaller micro-generator will be executed during the execution of ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/create"),", and the version number of the micro-generator that can be executed with this parameter and the version number of the corresponding installation Modern.js related dependencies."),(0,a.kt)("h3",{id:"--registry-"},"--registry ",(0,a.kt)("registry",null)),(0,a.kt)("p",null,"Execute the npm registry to get the generator and npm packages."),(0,a.kt)("h3",{id:"--debug"},"--debug"),(0,a.kt)("p",null,"Displays debug log information during generator execution."),(0,a.kt)("h3",{id:"--mwa"},"--mwa"),(0,a.kt)("p",null,"One-click to create an application engineering solution project."),(0,a.kt)("p",null,"With this parameter, ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/create")," will create the application project with the configuration default value."),(0,a.kt)("h3",{id:"--module"},"--module"),(0,a.kt)("p",null,"One-click to create a module engineering solution project."),(0,a.kt)("p",null,"With this parameter, ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/create")," will create the module project with the configuration default value."),(0,a.kt)("h3",{id:"--monorepo"},"--monorepo"),(0,a.kt)("p",null,"One-click to create a Monorepo engineering solution project."),(0,a.kt)("p",null,"With this parameter, ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/create")," will create the Monorepo project with the configuration default value."),(0,a.kt)("h3",{id:"--plugin-plugin"},"--plugin <plugin",">"),(0,a.kt)("p",null,"Specifies the generator plugin."),(0,a.kt)("p",null,"Modern.js support the use of the generator plug-in custom Modern.js the default project type or add the project type scenes, the parameter user specifies the customized generator plugin."),(0,a.kt)("p",null,"For custom generator plugins, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/plugin/abstract"},"Development Generator Plugin"),"."),(0,a.kt)("h3",{id:"--generator-generator"},"--generator <generator",">"),(0,a.kt)("p",null,"Specifies the microgenerator."),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/create")," will execute the microgenerator Modern.js framework build-in. If you need to execute a customized microgenerator, and you need to use the posture of'npx @modern-js/create ', you can use this parameter directly."),(0,a.kt)("p",null,"For custom microgenerators, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/codesmith/introduce"},"Develop Microgenerator"),"."),(0,a.kt)("h3",{id:"--packages-packages"},"--packages <packages",">"),(0,a.kt)("p",null,"A project is created by specifying a specific package version dependency."),(0,a.kt)("p",null,"If you need to specify a specific package version when creating a project, you can use this parameter. This parameter will lock the package version number in the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," of the project root directory by configuration ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm.overrides")," (package management tool selects pnpm) or ",(0,a.kt)("inlineCode",{parentName:"p"},"resolutions"),"."),(0,a.kt)("p",null,"The parameter value is a JSON character string."))}d.isMDXComponent=!0}}]);