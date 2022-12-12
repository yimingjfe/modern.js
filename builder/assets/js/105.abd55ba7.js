(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{328:function(t,a,s){"use strict";s.r(a);var e=s(4),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript"}},[t._v("#")]),t._v(" TypeScript")]),t._v(" "),a("p",[t._v("Builder 对 TypeScript 的转译和类型检查做了默认支持，无需任何配置即可在项目中使用 "),a("code",[t._v(".ts")]),t._v(" 和 "),a("code",[t._v(".tsx")]),t._v(" 文件。")]),t._v(" "),a("h2",{attrs:{id:"typescript-转译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-转译"}},[t._v("#")]),t._v(" TypeScript 转译")]),t._v(" "),a("p",[t._v("Builder 有三种可选方式处理 TypeScript 文件。")]),t._v(" "),a("p",[a("strong",[t._v("Babel")])]),t._v(" "),a("p",[t._v("在默认配置下，源码中所有的 TypeScript 文件会经过 Babel 转译。\n可能你在查阅较老旧的资料时会发现，Babel 无法处理 "),a("code",[t._v("const enum")]),t._v(" 以及 "),a("code",[t._v("namespace alias")]),t._v(" 语法，但是其实在 "),a("a",{attrs:{href:"https://babeljs.io/blog/2021/07/26/7.15.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("7.15"),a("OutboundLink")],1),t._v(" 版本已经得到了支持。Babel 无需手动开启，直接在项目中使用 TypeScript 文件即可。")]),t._v(" "),a("p",[a("strong",[t._v("ts-loader")])]),t._v(" "),a("p",[t._v("ts-loader 使用 TypeScript 官方的 TSC 转译。当开启 ts-loader 后 TypeScript 文件不会再经过 Babel 编译处理，但处理后的 JavaScript 产物仍然会由 Babel 进行语法降级以及 Polyfill 注入。")]),t._v(" "),a("p",[t._v("开启 ts-loader(使用默认配置):")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tools"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    tsLoader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("更详细配置可见 "),a("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-tsloader"}},[t._v("tools.tsLoader")]),t._v("。\n如果开启 ts-loader，默认不会启用类型检查，只会进行转译。")],1),t._v(" "),a("p",[a("strong",[t._v("SWC")])]),t._v(" "),a("p",[t._v("如果想要更快的项目构建速度，并且项目没有依赖某些自定义的 Babel 插件，那么也可以选择 SWC 来对 JavaScript 和 TypeScript 进行转译和压缩。Builder 的 SWC 插件默认支持 TypeScript, TSX, Decorator，使用方式可见 "),a("RouterLink",{attrs:{to:"/zh/plugins/plugin-swc.html"}},[t._v("SWC 插件")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"为什么默认使用-babel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么默认使用-babel"}},[t._v("#")]),t._v(" 为什么默认使用 Babel")]),t._v(" "),a("p",[t._v("Babel 除了没有类型检查以外，对 TypeScript 语法支持已经非常完善，而类型检查可以借助另外的工具更好地进行。转译到低版本的 JavaScript 时，某些语法 Babel 会处理得更符合标准，例如 Babel 会将类成员初始化为 undefined，将类方法标记不可枚举等行为。如果启用 ts-loader，为了更精确的语法降级和 Polyfill，最后还是会将处理后的产物再次经过 Babel 处理，产生不必要的性能开销。")]),t._v(" "),a("h2",{attrs:{id:"类型检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型检查"}},[t._v("#")]),t._v(" 类型检查")]),t._v(" "),a("p",[t._v("目前生产可用的类型检查工具只有官方的 TSC，TSC 类型检查耗时在大项目中往往是很慢的过程，Builder 中默认使用 tsChecker("),a("a",{attrs:{href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("fork-ts-checker-webpack-plugin"),a("OutboundLink")],1),t._v(") 在构建过程中异步进行类型检查，不阻塞项目的启动。")]),t._v(" "),a("p",[t._v("配置 tsChecker(使用默认配置):")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tools"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    tsChecker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("更多配置可见 "),a("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-tschecker"}},[t._v("tsChecker 配置")]),t._v("。\n如果开启 ts-loader 并且手动配置了 "),a("code",[t._v("compileOnly: false")]),t._v("，请关闭 tsChecker，避免重复类型检查。")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("STC")]),t._v(" "),a("p",[t._v("SWC 作者新开源的基于 Rust 的类型检查工具 "),a("a",{attrs:{href:"https://github.com/dudykr/stc",target:"_blank",rel:"noopener noreferrer"}},[t._v("STC"),a("OutboundLink")],1),t._v(" 目前还不可用于生产，还在起步阶段，不推荐用于项目中，等待之后更成熟，会集成到 Builder 的 SWC 插件中作为实验功能，敬请期待。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);