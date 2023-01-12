"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2006,1010],{44993:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(52983);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=a.createContext({}),s=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(m.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},l=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=s(t),u=o,k=l["".concat(m,".").concat(u)]||l[u]||d[u]||r;return t?a.createElement(k,p(p({ref:n},c),{},{components:t})):a.createElement(k,p({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,p=new Array(r);p[0]=l;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<r;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},18088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>p,metadata:()=>m,toc:()=>c});var a=t(18249),o=(t(52983),t(44993)),r=t(3087);const p={sidebar_position:3},i=void 0,m={unversionedId:"apis/monorepo/commands/pre",id:"apis/monorepo/commands/pre",title:"pre",description:"\u53ef\u4ee5\u4f7f\u7528 modern pre \u547d\u4ee4\u5728\u6b63\u5f0f\u53d1\u5e03\u524d\u9884\u53d1\u5e03\u4e00\u4e2a\u7248\u672c\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/monorepo/commands/pre.md",sourceDirName:"apis/monorepo/commands",slug:"/apis/monorepo/commands/pre",permalink:"/v2/docs/apis/monorepo/commands/pre",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apisMonorepoSidebar",previous:{title:"change",permalink:"/v2/docs/apis/monorepo/commands/change"},next:{title:"bump",permalink:"/v2/docs/apis/monorepo/commands/bump"}},s={},c=[],d={toc:c};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern pre [options] <enter|exit> [tag]\n\n\u8fdb\u5165\u548c\u9000\u51fa\u9884\u53d1\u5e03\u6a21\u5f0f\n\nOptions:\n  -h, --help  display help for command\n")),(0,o.kt)(r.default,{mdxType:"CommandTip"}),(0,o.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern pre")," \u547d\u4ee4\u5728\u6b63\u5f0f\u53d1\u5e03\u524d",(0,o.kt)("a",{parentName:"p",href:"https://github.com/atlassian/changesets/blob/main/docs/prereleases.md"},"\u9884\u53d1\u5e03"),"\u4e00\u4e2a\u7248\u672c\u3002"),(0,o.kt)("p",null,"\u9996\u5148 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern pre enter <tag>")," \u8fdb\u5165\u9884\u53d1\u5e03\u6a21\u5f0f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx modern pre enter next\n\ud83e\udd8b  success Entered pre mode with tag next\n\ud83e\udd8b  info Run `changeset version` to version packages with prerelease versions\n")),(0,o.kt)("p",null,"\u4e4b\u540e\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern change")," \u547d\u4ee4\u6dfb\u52a0 changeset:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx modern change\n\ud83e\udd8b  Which packages would you like to include? \xb7 package-a, package-b\n\ud83e\udd8b  Which packages should have a major bump? \xb7 No items were selected\n\ud83e\udd8b  Which packages should have a minor bump? \xb7 No items were selected\n\ud83e\udd8b  The following packages will be patch bumped:\n\ud83e\udd8b  package-a@0.1.1\n\ud83e\udd8b  package-b@0.1.1\n\ud83e\udd8b  Please enter a summary for this change (this will be in the changelogs). Submit empty line to open external editor\n\ud83e\udd8b  Summary \xb7 test pre publish\n\ud83e\udd8b  === Releasing the following packages ===\n\ud83e\udd8b  [Patch]\n\ud83e\udd8b    package-a, package-b\n\ud83e\udd8b  \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\ud83e\udd8b  \u2551                                                      ========= NOTE ========                                                       \u2551\n\ud83e\udd8b  \u2551All dependents of these packages that will be incompatible with the new version will be patch bumped when this changeset is applied.\u2551\n\ud83e\udd8b  \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d\n\ud83e\udd8b  Is this your desired changeset? (Y/n) \xb7 true\n\ud83e\udd8b  Changeset added! - you can now commit it\n\ud83e\udd8b\n\ud83e\udd8b  If you want to modify or expand on the changeset summary, you can find it here\n\ud83e\udd8b  info /xxxxxx/monorepo/.changeset/beige-paws-rule.md\n")),(0,o.kt)("p",null,"\u63a5\u7740\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern bump")," \u547d\u4ee4\u66f4\u65b0\u5177\u4f53\u7684\u7248\u672c\u53f7\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx modern bump\n\ud83e\udd8b  warn ===============================IMPORTANT!===============================\n\ud83e\udd8b  warn You are in prerelease mode\n\ud83e\udd8b  warn If you meant to do a normal release you should revert these changes and run `changeset pre exit`\n\ud83e\udd8b  warn You can then run `changeset version` again to do a normal release\n\ud83e\udd8b  warn ----------------------------------------------------------------------\n\ud83e\udd8b  All files have been updated. Review them and commit at your leisure\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"package-a")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"package-b")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7248\u672c\u53f7\u5747\u5df2\u66f4\u65b0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"0.1.2-next.0"),"\u3002"),(0,o.kt)("p",null,"\u63d0\u4ea4\u5b8c\u53d8\u66f4\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern pre exit")," \u547d\u4ee4\u9000\u51fa\u9884\u53d1\u5e03\u6a21\u5f0f\u3002"))}l.isMDXComponent=!0},3087:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=t(18249),o=(t(52983),t(44993));const r={},p=void 0,i={unversionedId:"components/command-tip",id:"components/command-tip",title:"command-tip",description:"pnpm v6 \u548c pnpm v7 \u7248\u672c\u5728\u6267\u884c\u547d\u4ee4\u65f6\u4f7f\u7528\u59ff\u52bf\u4e0d\u5b8c\u5168\u4e00\u81f4\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a",source:"@site/../../packages/toolkit/main-doc/zh/components/command-tip.md",sourceDirName:"components",slug:"/components/command-tip",permalink:"/v2/docs/components/command-tip",draft:!1,tags:[],version:"current",frontMatter:{}},m={},s=[],c={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"pnpm v6 \u548c pnpm v7 \u7248\u672c\u5728\u6267\u884c\u547d\u4ee4\u65f6\u4f7f\u7528\u59ff\u52bf\u4e0d\u5b8c\u5168\u4e00\u81f4\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,o.kt)("p",{parentName:"admonition"},"pnpm v7\uff1a"),(0,o.kt)("p",{parentName:"admonition"},"\u5728\u4f7f\u7528 pnpm \u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684\u547d\u4ee4\u65f6\uff0c\u5982\u679c\u9700\u8981\u4f20\u9012\u53c2\u6570\u81f3 pnpm\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u5230\u547d\u4ee4\u524d\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u4f8b\u5982\u4f7f\u7528 pnpm ",(0,o.kt)("inlineCode",{parentName:"p"},"--filter")," \u53c2\u6570\u6267\u884c prepare \u547d\u4ee4\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pnpm run --filter "./packages/**" prepare\n')),(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u4f20\u9012\u53c2\u6570\u81f3\u547d\u4ee4\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u5230\u547d\u4ee4\u540e\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u4f8b\u5982\uff0c\u5728\u5982\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,o.kt)("p",{parentName:"admonition"},"\u6267\u884c command \u547d\u4ee4\u65f6\u643a\u5e26\u53c2\u6570\u65b9\u5f0f\u4e3a\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run command --options\n")),(0,o.kt)("p",{parentName:"admonition"},"pnpm v6:"),(0,o.kt)("p",{parentName:"admonition"},"\u5728\u5982\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,o.kt)("p",{parentName:"admonition"},"\u5f53\u9700\u8981\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"modern command --option"),"\uff1a"),(0,o.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 pnpm \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run command -- --option"),"\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u56e0\u4e3a pnpm \u5bf9\u4e8e\u547d\u4ee4\u53c2\u6570\u7684\u5904\u7406\u4e0e Yarn \u5e76\u4e0d\u76f8\u540c\uff0c\u4f46\u662f\u4e0e npm \u7c7b\u4f3c\uff1a\u5728\u4e0d\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f pnpm \u7684\u53c2\u6570\uff1b\u5728\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f\u6267\u884c\u811a\u672c\u7684\u53c2\u6570\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u5728\u4e0a\u8ff0\u4f8b\u5b50\u91cc\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"--option")," \u4f20\u9012\u7ed9\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern command"),"\u3002\u5982\u679c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run command --option"),"\uff0c\u5219\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"--option")," \u5c06\u4f20\u9012\u7ed9 pnpm\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u603b\u7ed3\u6765\u8bf4\uff1a"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm v7 \u65f6\uff0c\u5982\u679c\u4f20\u9012\u53c2\u6570\u7ed9 pnpm\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u7f6e\u5230\u547d\u4ee4\u524d")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm v6 \u65f6\uff0c\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u7ed9 pnpm\uff0c\u4e0d\u9700\u8981\u52a0 ",(0,o.kt)("inlineCode",{parentName:"strong"},"--"),"\uff1b\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u662f\u7ed9\u811a\u672c\u4f7f\u7528\uff0c\u9700\u8981\u589e\u52a0 ",(0,o.kt)("inlineCode",{parentName:"strong"},"--")," \u5b57\u7b26\u4e32"),"\u3002")))}d.isMDXComponent=!0}}]);