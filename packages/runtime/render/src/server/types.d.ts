/// <reference types="@modern-js/types/server" />
/// <reference types="react/canary" />
/// <reference types="react-dom/canary" />

declare module 'react-dom/server.edge' {
  export {
    renderToNodeStream,
    renderToReadableStream,
    renderToStaticMarkup,
    renderToStaticNodeStream,
    renderToString,
    version,
  } from 'react-dom/server';
}

declare module 'react-server-dom-webpack/server.edge' {
  export * from '@modern-js/types/server/rsc';
}
declare module 'react-server-dom-webpack/client' {
  export * from '@modern-js/types/server/rsc';
}

declare module 'react-server-dom-webpack/client.edge' {
  export * from '@modern-js/types/server/rsc';
}

// declare module 'react-dom/server.edge' {
//   export * from '@modern-js/types/server/rsc';
// }
