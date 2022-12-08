"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6022,8393],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?o.createElement(f,l(l({ref:t},p),{},{components:n})):o.createElement(f,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var d=2;d<i;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var o=n(18249),a=(n(52983),n(44993)),i=n(15600);const l={sidebar_position:1,title:"model"},r=void 0,s={unversionedId:"apis/app/runtime/model/model_",id:"apis/app/runtime/model/model_",title:"model",description:"The original type of Reduck is complex. The following type definition shows the simplified type information. For the original type, see model\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/apis/app/runtime/model/model_.md",sourceDirName:"apis/app/runtime/model",slug:"/apis/app/runtime/model/model_",permalink:"/v2/en/docs/apis/app/runtime/model/model_",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"model"},sidebar:"apisAppSidebar",previous:{title:"router",permalink:"/v2/en/docs/apis/app/runtime/router/"},next:{title:"useModel",permalink:"/v2/en/docs/apis/app/runtime/model/use-model"}},d={},p=[{value:"model",id:"model",level:2},{value:"define",id:"define",level:2},{value:"Object Type",id:"object-type",level:3},{value:"Function Type",id:"function-type",level:3},{value:"Input",id:"input",level:3},{value:"ModelDesc.state",id:"modeldescstate",level:4},{value:"ModelDesc.actions",id:"modeldescactions",level:4},{value:"ModelDesc.computed",id:"modeldesccomputed",level:4},{value:"ModelDesc.effects",id:"modeldesceffects",level:4}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.default,{mdxType:"ReduckTip"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The original type of Reduck is complex. The following type definition shows the simplified type information. For the original type, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/reduck/blob/main/packages/store/src/model/model.ts"},(0,a.kt)("strong",{parentName:"a"},"model")),"\u3002")),(0,a.kt)("h2",{id:"model"},"model"),(0,a.kt)("p",null,"Create a Model for managing application state."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function model(name: string): { define: function }")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),", the unique id of the Model created.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="example"',title:'"example"'},"model('foo');\n")),(0,a.kt)("h2",{id:"define"},"define"),(0,a.kt)("p",null,"Used to define the detailed structure of the Model, supporting passing in an object type or function type parameter."),(0,a.kt)("h3",{id:"object-type"},"Object Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function define(modelDesc: ModelDesc): Model;")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"modelDesc: ",(0,a.kt)("inlineCode",{parentName:"li"},"ModelDesc"),"\uff0cdefinition of Model structure\uff0cincludes ",(0,a.kt)("inlineCode",{parentName:"li"},"state"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"computed"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"actions"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"effects")," etc. props.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="example"',title:'"example"'},"const fooModel = model('foo').define({\n  state: 'foo',\n  computed: {\n    cFoo: state => `c${state}`,\n  },\n  actions: {\n    setState: (state, value) => {\n      return value;\n    },\n  },\n  effects: {\n    loadState: async () => {\n      // get state from remote\n    },\n  },\n});\n")),(0,a.kt)("h3",{id:"function-type"},"Function Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function define((context: Context, utils: Utils) => ModelDesc): Model;")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"context"),": Reduck Context, can get underlying ",(0,a.kt)("inlineCode",{parentName:"li"},"store")," object. ",(0,a.kt)("inlineCode",{parentName:"li"},"store")," support all Redux Store ",(0,a.kt)("a",{parentName:"li",href:"https://redux.js.org/api/store"},"API"),", also mounts the ",(0,a.kt)("inlineCode",{parentName:"li"},"use")," method for consuming the Model, and the ",(0,a.kt)("inlineCode",{parentName:"li"},"unmount")," method for unmounting the Model."),(0,a.kt)("li",{parentName:"ul"},"utils: commonly used tool like ",(0,a.kt)("inlineCode",{parentName:"li"},"use"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"onMount"),". ",(0,a.kt)("inlineCode",{parentName:"li"},"use")," is the same as ",(0,a.kt)("inlineCode",{parentName:"li"},"store.use"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"onMount")," is the hook function after the Model is mounted.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Utils {\n  use: UseModel;\n  onMount: OnMountHook;\n}\n\ninterface Context {\n  store: ReduxStore & {\n    use: UseModel;\n    unmount: (model: Model) => void;\n  };\n}\n")),(0,a.kt)("p",null,"For example, through ",(0,a.kt)("inlineCode",{parentName:"p"},"use"),", you can get the ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"actions")," of the Model itself and other Models."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="example"',title:'"example"'},"const fooModel = model('foo').define(() => {\n  return {\n    state: 'foo',\n    actions: {\n      setState: (state, value) => {\n        return value;\n      },\n    },\n  };\n});\n\nconst barModel = model('bar').define((_, { use }) => {\n  return {\n    state: 'bar',\n    effects: {\n      syncFoo() {\n        const [state, actions] = use(fooModel);\n        actions.setState(state);\n      },\n    },\n  };\n});\n")),(0,a.kt)("h3",{id:"input"},"Input"),(0,a.kt)("h4",{id:"modeldescstate"},"ModelDesc.state"),(0,a.kt)("p",null,"Define the state of the Model. Technically, any type of ",(0,a.kt)("strong",{parentName:"p"},"State")," is supported, but in practice it is recommended to use a JSON serializable type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface ModelDesc {\n  state: any;\n}\n")),(0,a.kt)("h4",{id:"modeldescactions"},"ModelDesc.actions"),(0,a.kt)("p",null,"Define the Actions of the Model. The function type of Actions is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface ModelDesc {\n  actions: {\n    [actionKey: string]: (state: State, payload: any) => State | void;\n  };\n}\n")),(0,a.kt)("p",null,"Reduck internally integrates ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/immerjs/immer"},"immer"),", which can directly return the original ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),". When the Action has no explicit return value, Reduck internally returns a modified new State object."),(0,a.kt)("h4",{id:"modeldesccomputed"},"ModelDesc.computed"),(0,a.kt)("p",null,"Defines the derived state of the Model. The definition of derived state supports two types:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Depends only on the state of the Model itself")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface ModelDesc {\n  computed: {\n    [computedKey: string]: (state: State) => any;\n  };\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Depends on the state of other Models")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface ModelDesc {\n  computed: {\n    [computedKey: string]: [\n      ...models: Model[],\n      (state: State, ...args: ModelState[]) => any,\n    ];\n  };\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="example"',title:'"example"'},"const fooModel = model('foo').define({\n  state: 'foo',\n});\n\nconst barModel = model('bar').define({\n  state: 'bar',\n  computed: {\n    combineFoo: [fooModel, (state, fooState) => state + fooState],\n  },\n});\n")),(0,a.kt)("h4",{id:"modeldesceffects"},"ModelDesc.effects"),(0,a.kt)("p",null,"Defines the Effects of the Model. The function types defined in Effects are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface ModelDesc {\n  effects: {\n    [effectKey: string]: (...args: any[]) => any;\n  };\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="example"',title:'"example"'},"const fooModel = model('foo').define((context, { use }) => ({\n  state: 'foo',\n  effects: {\n    persist() {\n      const [state] = use(fooModel);\n      localStorage.setItem('state', state);\n    },\n  },\n}));\n")),(0,a.kt)("admonition",{title:"More",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/model/define-model"},"Define Model"),".")))}m.isMDXComponent=!0},15600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=n(18249),a=(n(52983),n(44993));const i={},l=void 0,r={unversionedId:"components/reduck-tip",id:"components/reduck-tip",title:"reduck-tip",description:"By default, the export package name for all APIs in this section is: @modern-js/runtime/model.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/components/reduck-tip.md",sourceDirName:"components",slug:"/components/reduck-tip",permalink:"/v2/en/docs/components/reduck-tip",draft:!1,tags:[],version:"current",frontMatter:{}},s={},d=[],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"information",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"By default, the export package name for all APIs in this section is: ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/model"),"."),(0,a.kt)("p",{parentName:"admonition"},"If Reduck is integrated separately from Modern.js, the export package name is: ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js-reduck/react"),".")))}c.isMDXComponent=!0}}]);