"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[242],{44993:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(18249),r=(n(52983),n(44993));const o={title:"\u6dfb\u52a0\u4e1a\u52a1\u6a21\u578b\uff08\u72b6\u6001\u7ba1\u7406\uff09"},i=void 0,l={unversionedId:"tutorials/first-app/c06-model",id:"tutorials/first-app/c06-model",title:"\u6dfb\u52a0\u4e1a\u52a1\u6a21\u578b\uff08\u72b6\u6001\u7ba1\u7406\uff09",description:"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u628a\u786c\u7f16\u7801\u7684 mockData \u6539\u6210\u4ece Data Loader \u4e2d\u52a0\u8f7d\u3002",source:"@site/../../packages/toolkit/main-doc/zh/tutorials/first-app/c06-model.md",sourceDirName:"tutorials/first-app",slug:"/tutorials/first-app/c06-model",permalink:"/v2/docs/tutorials/first-app/c06-model",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6dfb\u52a0\u4e1a\u52a1\u6a21\u578b\uff08\u72b6\u6001\u7ba1\u7406\uff09"},sidebar:"tutorialsSidebar",previous:{title:"\u6dfb\u52a0 Loader",permalink:"/v2/docs/tutorials/first-app/c05-loader"},next:{title:"\u6dfb\u52a0\u5bb9\u5668\u7ec4\u4ef6",permalink:"/v2/docs/tutorials/first-app/c07-container"}},p={},s=[{value:"\u5b9e\u73b0 Model",id:"\u5b9e\u73b0-model",level:2},{value:"\u4f7f\u7528 Model",id:"\u4f7f\u7528-model",level:2}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u628a\u786c\u7f16\u7801\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"mockData")," \u6539\u6210\u4ece Data Loader \u4e2d\u52a0\u8f7d\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u4f1a\u8fdb\u4e00\u6b65\u5b9e\u73b0\u9879\u76ee\u7684\u529f\u80fd\uff0c\u4f8b\u5982\u5b9e\u73b0 ",(0,r.kt)("strong",{parentName:"p"},"Archive")," \u6309\u94ae\u7684\u529f\u80fd\uff0c\u628a\u8054\u7cfb\u4eba\u5f52\u6863\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\u4f1a\u5f00\u59cb\u7f16\u5199\u4e00\u4e9b\u8ddf UI \u5b8c\u5168\u65e0\u5173\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u5982\u679c\u7ee7\u7eed\u5199\u5728\u7ec4\u4ef6\u4ee3\u7801\u4e2d\uff0c\u4f1a\u4ea7\u751f\u8d8a\u6765\u8d8a\u591a\u7684\u9762\u6761\u5f0f\u4ee3\u7801\u3002\u4e3a\u6b64\uff0c\u6211\u4eec\u5f15\u5165\u4e86\u4e00\u79cd\u53eb\u505a",(0,r.kt)("strong",{parentName:"p"},"\u4e1a\u52a1\u6a21\u578b\uff08Model\uff09"),"\u7684\u4ee3\u7801\u6a21\u5757\uff0c\u5c06\u8fd9\u4e9b\u4e1a\u52a1\u903b\u8f91\u548c UI \u89e3\u8026\u3002"),(0,r.kt)("h2",{id:"\u5b9e\u73b0-model"},"\u5b9e\u73b0 Model"),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5b8c\u6574\u7684 Model \u9996\u5148\u9700\u8981\u5b9a\u4e49",(0,r.kt)("strong",{parentName:"p"},"\u72b6\u6001\uff08state\uff09"),"\uff0c\u5305\u62ec\u72b6\u6001\u4e2d\u6570\u636e\u7684\u540d\u79f0\u548c\u521d\u59cb\u503c\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 Model \u6765\u7ba1\u7406\u8054\u7cfb\u4eba\u5217\u8868\u7684\u6570\u636e\uff0c\u56e0\u6b64\u5b9a\u4e49\u5982\u4e0b\u6570\u636e\u72b6\u6001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const state = {\n  items: [],\n};\n")),(0,r.kt)("p",null,"\u4f7f\u7528 TS \u8bed\u6cd5\uff0c\u53ef\u4ee5\u5b9a\u4e49\u66f4\u5b8c\u6574\u7684\u7c7b\u578b\u4fe1\u606f\uff0c\u6bd4\u5982 items \u91cc\u6bcf\u4e2a\u5bf9\u8c61\u90fd\u5e94\u8be5\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"email")," \u5b57\u6bb5\u3002\u4e3a\u4e86\u5b9e\u73b0\u5f52\u6863\u529f\u80fd\uff0c\u8fd8\u9700\u8981\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"archived")," \u5b57\u6bb5\u4fdd\u5b58\u8fd9\u4e2a\u8054\u7cfb\u4eba\u662f\u5426\u5df2\u88ab\u5f52\u6863\u7684\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u8fd8\u9700\u8981\u4e00\u4e2a\u5b57\u6bb5\u7528\u6765\u8bbf\u95ee\u6240\u6709\u5df2\u5f52\u6863\u7684\u8054\u7cfb\u4eba\uff0c\u53ef\u4ee5\u5b9a\u4e49 ",(0,r.kt)("strong",{parentName:"p"},"computed")," \u7c7b\u578b\u7684\u5b57\u6bb5\uff0c\u5bf9\u5df2\u6709\u7684\u6570\u636e\u505a\u8f6c\u6362\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const computed = {\n  archived: ({ items }) => {\n    return items.filter(item => item.archived);\n  },\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"computed")," \u7c7b\u578b\u5b57\u6bb5\u7684\u5b9a\u4e49\u65b9\u5f0f\u662f\u51fd\u6570\uff0c\u4f46\u4f7f\u7528\u65f6\u53ef\u4ee5\u50cf\u666e\u901a\u5b57\u6bb5\u4e00\u6837\u901a\u8fc7 state \u8bbf\u95ee\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Modern.js \u96c6\u6210\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://immerjs.github.io/immer/"},"Immer"),"\uff0c\u80fd\u591f\u50cf\u64cd\u4f5c JS \u4e2d\u5e38\u89c4\u7684\u53ef\u53d8\u6570\u636e\u4e00\u6837\uff0c\u53bb\u5199\u8fd9\u79cd\u72b6\u6001\u8f6c\u79fb\u7684\u903b\u8f91\u3002")),(0,r.kt)("p",null,"\u5b9e\u73b0 Archive \u6309\u94ae\u65f6\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"archive")," \u51fd\u6570\uff0c\u8d1f\u8d23\u4fee\u6539\u6307\u5b9a\u8054\u7cfb\u4eba\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"archived")," \u5b57\u6bb5\uff0c\u6211\u4eec\u628a\u8fd9\u79cd\u51fd\u6570\u90fd\u53eb\u4f5c ",(0,r.kt)("strong",{parentName:"p"},"action"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const actions = {\n  archive(draft, payload) {\n    const target = draft.items.find(item => item.email === payload);\n    if (target) {\n      target.archived = true;\n    }\n  },\n};\n")),(0,r.kt)("p",null,"action \u51fd\u6570\u662f\u4e00\u79cd",(0,r.kt)("strong",{parentName:"p"},"\u7eaf\u51fd\u6570"),"\uff0c\u786e\u5b9a\u7684\u8f93\u5165\u5f97\u5230\u786e\u5b9a\u7684\u8f93\u51fa\uff08\u8f6c\u79fb\u540e\u7684\u72b6\u6001\uff09\uff0c\u4e0d\u5e94\u8be5\u6709\u4efb\u4f55\u526f\u4f5c\u7528\u3002"),(0,r.kt)("p",null,"\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f Immer \u63d0\u4f9b\u7684 Draft State\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f action \u88ab\u8c03\u7528\u65f6\u4f20\u5165\u7684\u53c2\u6570\uff08\u540e\u9762\u4f1a\u4ecb\u7ecd\u600e\u4e48\u8c03\u7528\uff09\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u5c1d\u8bd5\u5b8c\u6574\u5b9e\u73b0\u5b83\u4eec\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const state = {\n  items: [],\n  pending: false,\n  error: null,\n};\n\nconst computed = {\n  archived: ({ items }) => {\n    return items.filter(item => item.archived);\n  },\n};\n\nconst actions = {\n  archive(draft, payload) {\n    const target = draft.items.find(item => item.email === payload);\n    if (target) {\n      target.archived = true;\n    }\n  },\n};\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u628a\u4e0a\u9762\u7684\u4ee3\u7801\u8fde\u8d77\u6765\uff0c\u653e\u5728\u540c\u4e00\u4e2a Model \u6587\u4ef6\u91cc\u3002\u9996\u5148\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u521b\u5efa\u65b0\u7684\u6587\u4ef6\u76ee\u5f55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p src/models/\ntouch src/models/contacts.ts\n")),(0,r.kt)("p",null,"\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/models/contacts.ts")," \u7684\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { model } from '@modern-js/runtime/model';\n\ntype State = {\n  items: {\n    avatar: string;\n    name: string;\n    email: string;\n    archived?: boolean;\n  }[];\n  pending: boolean;\n  error: null | Error;\n};\n\nexport default model<State>('contacts').define({\n  state: {\n    items: [],\n    pending: false,\n    error: null,\n  },\n  computed: {\n    archived: ({ items }: State) => items.filter(item => item.archived),\n  },\n  actions: {\n    archive(draft, payload) {\n      const target = draft.items.find(item => item.email === payload)!;\n      if (target) {\n        target.archived = true;\n      }\n    },\n  },\n});\n")),(0,r.kt)("p",null,"\u6211\u4eec\u628a\u4e00\u4e2a\u5305\u542b state\uff0caction \u7b49\u8981\u7d20\u7684 plain object \u79f0\u4f5c ",(0,r.kt)("strong",{parentName:"p"},"Model Spec"),"\uff0cModern.js \u63d0\u4f9b\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/model/model_"},"Model API"),"\uff0c\u53ef\u4ee5\u6839\u636e Model Spec \u751f\u6210 ",(0,r.kt)("strong",{parentName:"p"},"Model"),"\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-model"},"\u4f7f\u7528 Model"),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e2a Model\uff0c\u628a\u9879\u76ee\u7684\u903b\u8f91\u8865\u5145\u8d77\u6765\u3002"),(0,r.kt)("p",null,"\u9996\u5148\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/components/Item/index.tsx"),"\uff0c\u6dfb\u52a0 ",(0,r.kt)("strong",{parentName:"p"},"Archive \u6309\u94ae"),"\u7684 UI \u548c\u4ea4\u4e92\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import Avatar from '../Avatar';\n\ntype InfoProps = {\n  avatar: string;\n  name: string;\n  email: string;\n  archived?: boolean;\n};\n\nconst Item = ({\n  info,\n  onArchive,\n}: {\n  info: InfoProps;\n  onArchive?: () => void;\n}) => {\n  const { avatar, name, email, archived } = info;\n  return (\n    <div className=\"flex p-4 items-center border-gray-200 border-b\">\n      <Avatar src={avatar} />\n      <div className=\"ml-4 custom-text-gray flex-1 flex justify-between\">\n        <div className=\"flex-1\">\n          <p>{name}</p>\n          <p>{email}</p>\n        </div>\n        <button\n          type=\"button\"\n          disabled={archived}\n          onClick={onArchive}\n          className={`text-white font-bold py-2 px-4 rounded-full ${\n            archived\n              ? 'bg-gray-400 cursor-default'\n              : 'bg-blue-500 hover:bg-blue-700'\n          }`}\n        >\n          {archived ? 'Archived' : 'Archive'}\n        </button>\n      </div>\n    </div>\n  );\n};\n\nexport default Item;\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/routes/page.tsx"),"\uff0c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"<Item>")," \u7ec4\u4ef6\u4f20\u9012\u66f4\u591a\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Helmet } from '@modern-js/runtime/head';\nimport { useModel } from '@modern-js/runtime/model';\nimport { useLoaderData } from '@modern-js/runtime/router';\nimport { List } from 'antd';\nimport { name, internet } from 'faker';\nimport Item from '../components/Item';\nimport contacts from '../models/contacts';\n\ntype LoaderData = {\n  code: number;\n  data: {\n    name: string;\n    avatar: string;\n    email: string;\n  }[];\n};\n\nexport const loader = async (): Promise<LoaderData> => {\n  const data = new Array(20).fill(0).map(() => {\n    const firstName = name.firstName();\n    return {\n      name: firstName,\n      avatar: `https://avatars.dicebear.com/api/identicon/${firstName}.svg`,\n      email: internet.email(),\n      archived: false,\n    };\n  });\n\n  return {\n    code: 200,\n    data,\n  };\n};\n\nfunction Index() {\n  const { data } = useLoaderData() as LoaderData;\n  const [{ items }, { archive, setItems }] = useModel(contacts);\n  if (items.length === 0) {\n    setItems(data);\n  }\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>All</title>\n      </Helmet>\n      <List\n        dataSource={items}\n        renderItem={info => (\n          <Item\n            key={info.name}\n            info={info}\n            onArchive={() => {\n              archive(info.email);\n            }}\n          />\n        )}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useModel")," \u662f Modern.js \u63d0\u4f9b\u7684 hooks API\u3002\u53ef\u4ee5\u5728\u7ec4\u4ef6\u4e2d\u63d0\u4f9b Model \u4e2d\u5b9a\u4e49\u7684 state\uff0c\u6216\u901a\u8fc7 actions \u8c03\u7528 Model \u4e2d\u5b9a\u4e49\u7684 side effect \u4e0e action\uff0c\u4ece\u800c\u6539\u53d8 Model \u7684 state\u3002"),(0,r.kt)("p",null,"Model \u662f\u4e1a\u52a1\u903b\u8f91\uff0c\u662f\u8ba1\u7b97\u8fc7\u7a0b\uff0c\u672c\u8eab\u4e0d\u521b\u5efa\u4e5f\u4e0d\u6301\u6709\u72b6\u6001\u3002\u53ea\u6709\u5728\u88ab\u7ec4\u4ef6\u7528 hooks API \u4f7f\u7528\u540e\uff0c\u624d\u5728\u6307\u5b9a\u7684\u5730\u65b9\u521b\u5efa\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"p"},"Archive \u6309\u94ae"),"\uff0c\u53ef\u4ee5\u770b\u5230\u9875\u9762 UI \u53d1\u751f\u4e86\u53d8\u5316\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0a\u8ff0\u4f8b\u5b50\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"useLoaderData")," \u5176\u5b9e\u5728\u6bcf\u6b21\u5207\u6362\u8def\u7531\u65f6\u90fd\u4f1a\u6267\u884c\u3002\u56e0\u4e3a\u6211\u4eec\u5728 Data Loader \u91cc\u4f7f\u7528\u4e86 fake \u6570\u636e\uff0c\u6bcf\u6b21\u8fd4\u56de\u7684\u6570\u636e\u662f\u4e0d\u540c\u7684\u3002\u4f46\u6211\u4eec\u4f18\u5148\u4f7f\u7528\u4e86 Model \u4e2d\u7684\u6570\u636e\uff0c\u56e0\u6b64\u5207\u6362\u8def\u7531\u65f6\u6570\u636e\u6ca1\u6709\u53d1\u751f\u6539\u53d8\u3002")))}c.isMDXComponent=!0}}]);