/// <reference types="@modern-js/types/server" />
/// <reference types="react/canary" />

declare module 'react-server-dom-webpack/server.edge' {
  export * from '@modern-js/types/server/rsc';
}
declare module 'react-server-dom-webpack/client' {
  export * from '@modern-js/types/server/rsc';
}

declare module 'react-server-dom-webpack/client.edge' {
  export * from '@modern-js/types/server/rsc';
}

declare module 'react-dom/server.edge' {
  export * from '@modern-js/types/server/rsc';
}
