(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_hooks_src_routes_mdx"],{67581:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return o},title:function(){return a},toc:function(){return i},default:function(){return d}});var r=t("9880"),s=t("23169"),o={title:"routes/",sidebar_position:2},a="routes/",i=[{text:"Basic Example",depth:2,id:"basic-example"},{text:"Dynamic Routing",depth:2,id:"dynamic-routing"},{text:"Layout Component",depth:2,id:"layout-component"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",ul:"ul",li:"li",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"routes/",children:["routes/",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#routes/",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["The identifier for the entry point when the application uses ",(0,r.jsx)(n.a,{href:"/guides/basic-features/routes#conventional-routing",children:"Conventional Routing"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Conventional routing uses ",(0,r.jsx)(n.code,{children:"routes/"})," as the convention for the entry point and analyzes the files in the ",(0,r.jsx)(n.code,{children:"src/routes"})," directory to obtain the client-side routing configuration."]}),"\n",(0,r.jsxs)(n.p,{children:["Any ",(0,r.jsx)(n.code,{children:"layout.[tj]sx"})," and ",(0,r.jsx)(n.code,{children:"page.[tj]sx"})," under ",(0,r.jsx)(n.code,{children:"src/routes"})," will be used as the application's routes:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",meta:"{3,4}",children:".\n└── routes\n    ├── layout.tsx\n    ├── page.tsx\n    └── user\n        ├── layout.tsx\n        └── page.tsx\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"basic-example",children:["Basic Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basic-example",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["The directory name under ",(0,r.jsx)(n.code,{children:"routes"})," will be used as the mapping of the route URL. ",(0,r.jsx)(n.code,{children:"layout.tsx"})," is used as the layout component and ",(0,r.jsx)(n.code,{children:"page.tsx"})," is used as the content component in the routing. They are the leaf nodes of the entire route. For example, the following directory structure:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n└── routes\n    ├── page.tsx\n    └── user\n        └── page.tsx\n"})}),"\n",(0,r.jsx)(n.p,{children:"will generate two routes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/user"})}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"dynamic-routing",children:["Dynamic Routing",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-routing",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If the directory name of the route file is named with ",(0,r.jsx)(n.code,{children:"[]"}),", the generated route will be used as a dynamic route. For example, the following file directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"└── routes\n    ├── [id]\n    │   └── page.tsx\n    ├── blog\n    │   └── page.tsx\n    └── page.tsx\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"routes/[id]/page.tsx"})," file will be converted to the ",(0,r.jsx)(n.code,{children:"/:id"})," route. Except for the ",(0,r.jsx)(n.code,{children:"/blog"})," route that can be matched exactly, all other ",(0,r.jsx)(n.code,{children:"/xxx"})," routes will be matched to this route."]}),"\n",(0,r.jsxs)(n.p,{children:["In the component, you can use ",(0,r.jsx)(n.a,{href:"/apis/app/runtime/router/router#useparams",children:"useParams"})," to obtain the corresponding named parameter."]}),"\n",(0,r.jsxs)(n.p,{children:["When using the ",(0,r.jsx)(n.a,{href:"/guides/basic-features/data-fetch#the-loader-function",children:"loader"})," function to obtain data, ",(0,r.jsx)(n.code,{children:"params"})," will be passed as an input parameter to the ",(0,r.jsx)(n.code,{children:"loader"})," function, and the corresponding parameter can be obtained through the attribute of ",(0,r.jsx)(n.code,{children:"params"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"layout-component",children:["Layout Component",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#layout-component",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["In the following example, a common layout component can be added to all route components by adding ",(0,r.jsx)(n.code,{children:"layout.tsx"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n└── routes\n    ├── layout.tsx\n    ├── page.tsx\n    └── user\n        ├── layout.tsx\n        └── page.tsx\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the layout component, you can use ",(0,r.jsx)(n.code,{children:"<Outlet>"})," to represent the child components:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:"title=routes/layout.tsx",children:"import { Link, Outlet, useLoaderData } from '@modern-js/runtime/router';\n\nexport default () => {\n  return (\n    <>\n      <Outlet></Outlet>\n    </>\n  );\n};\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive note",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"<Outlet>"})," is a new API in React Router 6. For details, see ",(0,r.jsx)(n.a,{href:"https://reactrouter.com/en/main/components/outlet#outlet",target:"_blank",rel:"noopener noreferrer",children:"Outlet"}),"."]}),"\n"]})]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);