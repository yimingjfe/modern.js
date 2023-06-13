(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_framework-plugin_extend_mdx"],{88134:function(n,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var s in e)Object.defineProperty(n,s,{enumerable:!0,get:e[s]})}(e,{frontmatter:function(){return r},title:function(){return t},toc:function(){return a},default:function(){return d}});var o=s("9880"),i=s("23169"),r={title:"Extending",sidebar_position:5},t="Extending Plugin Hooks",a=[{text:"Example",depth:2,id:"example"},{text:"Creating Hooks",depth:3,id:"creating-hooks"},{text:"Using Hooks",depth:3,id:"using-hooks"}];function l(n){var e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3"},(0,i.useMDXComponents)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.h1,{id:"extending-plugin-hooks",children:["Extending Plugin Hooks",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#extending-plugin-hooks",children:"#"})]}),"\n",(0,o.jsxs)(e.p,{children:["This section describes how to extend plugin Hooks by dynamically registering ",(0,o.jsx)(e.a,{href:"/guides/topic-detail/framework-plugin/hook",children:"Hook models"}),"."]}),"\n",(0,o.jsxs)(e.h2,{id:"example",children:["Example",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,o.jsx)(e.p,{children:"Here is a simple example to demonstrate how to extend plugin Hooks by adding Hooks that manage console output."}),"\n",(0,o.jsx)(e.p,{children:"First, we initialize an empty project file and add basic dependencies:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"$ npx @modern-js/create@latest modern-js-demo\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"creating-hooks",children:["Creating Hooks",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#creating-hooks",children:"#"})]}),"\n",(0,o.jsx)(e.p,{children:"First, let's create a Hook model:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",meta:"title=config/plugin/myPlugin.ts",children:"import { createWaterfall } from '@modern-js/plugin';\n\nconst message = createWaterfall<string[]>();\n"})}),"\n",(0,o.jsx)(e.p,{children:"then register:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",meta:"title=config/plugin/myPlugin.ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  registerHook: {\n    message,\n  },\n});\n"})}),"\n",(0,o.jsx)(e.p,{children:"add Hook types:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",meta:"title=config/plugin/myPlugin.ts",children:"declare module '@modern-js/core' {\n  export interface Hooks {\n    message: typeof message;\n  }\n}\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"using-hooks",children:["Using Hooks",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#using-hooks",children:"#"})]}),"\n",(0,o.jsxs)(e.p,{children:["Create a plugin and add command handling logic through the ",(0,o.jsx)(e.code,{children:"commands"})," Hook function:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",meta:"title=config/plugin/myPlugin.ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup(api) {\n    return {\n      commands({ program }) {\n        program.command('message').action(async () => {\n          const hookRunners = api.useHookRunners();\n          const messages = hookRunners.message([]);\n          console.log(messages.join('\\n'));\n        });\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.p,{children:["now ",(0,o.jsx)(e.code,{children:"config/plugin/myPlugin.ts"})," is:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",meta:"title=config/plugin/myPlugin.ts",children:"import { createWaterfall } from '@modern-js/plugin';\nimport type { CliPlugin } from '@modern-js/core';\n\nconst message = createWaterfall<string[]>();\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  registerHook: {\n    message,\n  },\n\n  setup(api) {\n    return {\n      commands({ program }) {\n        program.command('message').action(async () => {\n          const hookRunners = api.useHookRunners();\n          const messages = hookRunners.message([]);\n          console.log(messages.join('\\n'));\n        });\n      },\n    };\n  },\n});\n\ndeclare module '@modern-js/core' {\n  export interface Hooks {\n    message: typeof message;\n  }\n}\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Then add this plugin in ",(0,o.jsx)(e.code,{children:"modern.config.ts"}),":"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\nimport myPlugin from './config/plugin/myPlugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Now, run ",(0,o.jsx)(e.code,{children:"npx modern message"}),", and the related logic will be executed, but no information is collected, so the console output is empty."]}),"\n",(0,o.jsx)(e.p,{children:"add:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",meta:"title=config/plugin/otherPlugin.ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'other-plugin',\n\n  setup(api) {\n    return {\n      message(list) {\n        return [...list, '[foo] line 0', '[foo] line 1'];\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsx)(e.p,{children:"add to config:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\nimport myPlugin from './config/plugin/myPlugin';\nimport otherPlugin from './config/plugin/otherPlugin';\n\nexport default defineConfig({\n  plugins: [myPlugin(), otherPlugin()],\n});\n"})}),"\n",(0,o.jsxs)(e.p,{children:["run ",(0,o.jsx)(e.code,{children:"npx modern message"}),", then we can get follow in console:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"$ modern message\n[foo] line 0\n[foo] line 1\n"})}),"\n",(0,o.jsx)(e.p,{children:"By using the above approach, you can extend plugin Hooks with various capabilities."})]})}var d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,i.useMDXComponents)(),n.components).wrapper;return e?(0,o.jsx)(e,Object.assign({},n,{children:(0,o.jsx)(l,n)})):l(n)}}}]);