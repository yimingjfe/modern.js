(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_api_config-security_mdx"],{21530:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return a},toc:function(){return d},default:function(){return h}});var s=r("9880"),t=r("23169"),i=r.ir(r("17883")),o=r.ir(r("75352")),c={extractApiHeaders:[2]},a="Security Config",d=[{text:"security.sri",depth:2,id:"securitysri"},{text:"security.checkSyntax",depth:2,id:"securitychecksyntax"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"security-config",children:["Security Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#security-config",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"This section describes some security related configurations in Modern.js Builder."}),"\n",(0,s.jsxs)(n.h2,{id:"securitysri",children:["security.sri",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#securitysri",children:"#"})]}),"\n","\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsxs)(n.h2,{id:"securitychecksyntax",children:["security.checkSyntax",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#securitychecksyntax",children:"#"})]}),"\n","\n",(0,s.jsx)(o.default,{})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},75352:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var s=r("9880"),t=r("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type CheckSyntax =\n  | boolean\n  | {\n      targets: string[];\n      exclude?: RegExp | Array<RegExp>;\n    };\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Analyzes the build output files for the presence of high-level syntax that is incompatible with the current browserslist. If present, the details will be printed in the terminal."}),"\n",(0,s.jsxs)(n.h3,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  security: {\n    checkSyntax: true,\n    exclude: /node_modules\\/foo/,\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"security.checkSyntax"})," is specified as ",(0,s.jsx)(n.code,{children:"true"}),", targets will be recognized as the browserslist set by the project. For details, please refer to ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/zh/guide/advanced/browser-compatibility.html",target:"_blank",rel:"noopener noreferrer",children:"Browserslist"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"When enabled, it will be detected in the production environment, and when an incompatible advanced syntax is detected, it will not only print the error logs on the terminal but also exit the build process."}),"\n",(0,s.jsxs)(n.h3,{id:"error-log",children:["Error Log",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#error-log",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"The format of the error log is as follows, including the source file, output location, error reason and source code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"error [Syntax Checker] Find some syntax errors after production build:\n\n   ERROR#1:\n   source - /node_modules/foo/index.js:1:0\n   output - /Project/dist/static/js/main.3f7a4d7e.js:2:39400\n   reason - The keyword 'const' is reserved (2:39400)\n   code - const foo = 'bar';\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"solution",children:["Solution",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#solution",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"If a syntax error is detected, you can handle it in the following ways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you want to downgrade this syntax to ensure good code compatibility, you can compile the corresponding module through the ",(0,s.jsx)(n.code,{children:"source.include"})," config."]}),"\n",(0,s.jsx)(n.li,{children:"If you don't want to downgrade the syntax, you can adjust the project's browserslist to match the syntax."}),"\n",(0,s.jsxs)(n.li,{children:["If you do not want to check the syntax of certain products, you can use the ",(0,s.jsx)(n.code,{children:"checkSyntax.exclude"})," configuration to exclude the files to be checked."]}),"\n"]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}},17883:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var s=r("9880"),t=r("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",a:"a",h4:"h4"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type SRIOptions =\n  | {\n      hashFuncNames?: string[];\n      enabled?: 'auto' | boolean;\n      hashLoading?: 'eager' | 'lazy';\n    }\n  | boolean;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bundler:"})," ",(0,s.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Adding an integrity attribute (",(0,s.jsx)(n.code,{children:"integrity"}),") to sub-resources introduced by HTML allows the browser to verify the integrity of the introduced resource, thus preventing tampering with the downloaded resource."]}),"\n",(0,s.jsxs)(n.p,{children:["Enabling this option will set the webpack ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/configuration/output/#outputcrossoriginloading",target:"_blank",rel:"noopener noreferrer",children:"output.crossOriginLoading"})," configuration item to ",(0,s.jsx)(n.code,{children:"anonymous"}),"."]}),"\n",(0,s.jsxs)(n.h4,{id:"introduce-sri",children:["Introduce SRI",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduce-sri",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Subresource Integrity (SRI) is a security feature that enables browsers to verify that resources they fetch (for example, from a CDN) are delivered without unexpected manipulation. It works by allowing you to provide a cryptographic hash that a fetched resource must match."}),"\n",(0,s.jsx)(n.p,{children:"For script tags, the result is to refuse to execute the code; for CSS links, the result is not to load the styles."}),"\n",(0,s.jsxs)(n.p,{children:["For more on subresource integrity, see ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity",target:"_blank",rel:"noopener noreferrer",children:"Subresource Integrity - MDN"}),"."]}),"\n",(0,s.jsxs)(n.h4,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["By default, ",(0,s.jsx)(n.code,{children:"SRI"})," is not turned on, and when it is, its default configuration is as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'{\n  hashFuncNames: [\'sha384\'];\n  enabled: "auto",\n  hashLoading: "eager",\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can customize the configuration items according to your own needs:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  security: {\n    sri: {\n      hashFuncNames: ['sha-256'],\n      enabled: true,\n      hashLoading: 'lazy',\n    },\n  },\n};\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);