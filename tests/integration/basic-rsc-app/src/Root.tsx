// import { RuntimeContextProvider } from '@modern-js/runtime';
import { createRoot } from '@modern-js/runtime/react';
import { RuntimeContextProvider } from '@modern-js/runtime/wrapper';
import type { ReactNode } from 'react';
import { App } from './App';

// app init config 都待改

const DefaultRoot = ({ children }: { children: ReactNode }) => <>{children}</>;
const ModernRoot = createRoot(DefaultRoot);

export default function Root() {
  // const DefaultRoot = ({ children }) => createElement(Fragment, null, children);

  // return createElement(ModernRoot, null, createElement(App, null));

  // return createElement(
  //   RuntimeContextProvider,
  //   null,
  //   createElement(ModernRoot, null, createElement(App, null)),
  // );

  return (
    <ModernRoot>
      <App />
    </ModernRoot>
  );

  // const context = useServerRuntimeContext();
  // const runtimeContext = context.runtimeContext;

  // return (
  //   <RuntimeContextProvider>
  //     <ModernRoot>
  //       <App />
  //     </ModernRoot>
  //   </RuntimeContextProvider>
  // );
}
