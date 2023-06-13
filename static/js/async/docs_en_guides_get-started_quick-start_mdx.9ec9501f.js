(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_get-started_quick-start_mdx"],{96332:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var r=t("9880"),i=t("23169");function s(e){var n=Object.assign({p:"p",code:"code"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(n.p,{children:["After local verification, you can organize the artifacts in ",(0,r.jsx)(n.code,{children:"dist/"})," into the structure required by the server for deployment."]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}},67456:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return c},title:function(){return l},toc:function(){return h},default:function(){return p}});var r=t("9880"),i=t("23169"),s=t.ir(t("22907")),a=t.ir(t("57760")),d=t.ir(t("46218")),o=t.ir(t("96332")),c={title:"Quick Start",sidebar_position:2},l="Quick Start",h=[{text:"Environment",depth:2,id:"environment"},{text:"Installation",depth:2,id:"installation"},{text:"Initialize",depth:2,id:"initialize"},{text:"Development",depth:2,id:"development"},{text:"Configuration",depth:2,id:"configuration"},{text:"Build the project",depth:2,id:"build-the-project"},{text:"Verify",depth:2,id:"verify"},{text:"Deployment",depth:2,id:"deployment"}];function u(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",blockquote:"blockquote"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"quick-start",children:["Quick Start",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"environment",children:["Environment",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#environment",children:"#"})]}),"\n","\n",(0,r.jsx)(s.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"installation",children:["Installation",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#installation",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js provides the ",(0,r.jsx)(n.code,{children:"@modern-js/create"})," tool to create projects. Do not install it globally, use ",(0,r.jsx)(n.code,{children:"npx"})," to run it."]}),"\n",(0,r.jsx)(n.p,{children:"You can create a project in an existing empty directory:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir myapp && cd myapp\nnpx @modern-js/create@latest\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can also create a project directly in a new directory:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest myapp\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"initialize",children:["Initialize",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initialize",children:"#"})]}),"\n","\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"development",children:["Development",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#development",children:"#"})]}),"\n","\n",(0,r.jsx)(d.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"configuration",children:["Configuration",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["In a Modern.js project created using ",(0,r.jsx)(n.code,{children:"@modern-js/create"}),", a ",(0,r.jsx)(n.code,{children:"modern.config.ts"})," file is generated by default."]}),"\n",(0,r.jsx)(n.p,{children:"You can modify the configuration through this file to override the default behavior of Modern.js. For example, to enable SSR, add the following configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n  },\n  server: {\n    ssr: true,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After running ",(0,r.jsx)(n.code,{children:"pnpm run dev"})," again, you can find that the project has completed page rendering on the server in the browser's Network menu."]}),"\n",(0,r.jsxs)(n.h2,{id:"build-the-project",children:["Build the project",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-the-project",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["To build the production artifacts of the project, run ",(0,r.jsx)(n.code,{children:"pnpm run build"})," in the project:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ pnpm run build\n\n> modern build\n\ninfo    Create a production build...\n\ninfo    File sizes after production build:\n\n  File                                      Size         Gzipped\n  dist/static/js/lib-corejs.ffeb7fb8.js     214.96 kB    67.23 kB\n  dist/static/js/lib-react.09721b5c.js      152.61 kB    49.02 kB\n  dist/static/js/218.102e2f39.js            85.45 kB     28.5 kB\n  dist/static/js/lib-babel.a7bba875.js      11.93 kB     3.95 kB\n  dist/html/main/index.html                 5.84 kB      2.57 kB\n  dist/static/js/main.3568a38e.js           3.57 kB      1.44 kB\n  dist/static/css/async/304.c3c481a5.css    2.62 kB      874 B\n  dist/asset-manifest.json                  1.48 kB      349 B\n  dist/static/js/async/304.c45706bc.js      1.4 kB       575 B\n  dist/static/js/async/509.fcb06e14.js      283 B        230 B\n\n Client ✔ done in 3.57s\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By default, the build artifacts are generated in ",(0,r.jsx)(n.code,{children:"dist/"}),", with the following directory structure:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"dist\n├── html\n│\xa0\xa0 └── main\n├── modern.config.json\n├── route.json\n├── routes-manifest.json\n└── static\n    ├── css\n    └── js\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["If you need to customize the directory of the build artifacts, please refer to ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/guide/basic/output-files.html",target:"_blank",rel:"noopener noreferrer",children:"Output files"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"verify",children:["Verify",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#verify",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"pnpm run serve"})," in the project to verify whether the build artifacts run normally locally:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ pnpm run serve\n\n> modern serve\n\nStarting the modern server...\ninfo    App running at:\n\n  > Local:    http://localhost:8080/\n  > Network:  http://192.168.0.1:8080/\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Open ",(0,r.jsx)(n.code,{children:"http://localhost:8000/"})," in the browser, and the content should be consistent with that of ",(0,r.jsx)(n.code,{children:"pnpm run dev"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"deployment",children:["Deployment",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#deployment",children:"#"})]}),"\n","\n",(0,r.jsx)(o.default,{})]})}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}}}]);