import '@modern-js/runtime/registry/main';
import {
  RscClientRoot,
  createFromReadableStream,
  rscStream,
} from '@modern-js/render/client';
import { RuntimeContextProvider } from '@modern-js/runtime';
import { render } from '@modern-js/runtime/browser';
import { createRoot } from '@modern-js/runtime/react';

// 不使用 rsc, 不用变
// const DefaultModernRoot = ({ children }: { children: React.ReactNode }) => (
//   <>{children}</>
// );

// const ModernRoot = createRoot(DefaultModernRoot);

const data = createFromReadableStream(rscStream);

// render(
//   <RuntimeContextProvider>
//     <ModernRoot>
//       <RscClientRoot data={data} />
//     </ModernRoot>
//   </RuntimeContextProvider>,
//   'root',
// );

// render(
//   <ModernRoot>
//     <RscClientRoot data={data} />
//   </ModernRoot>,
//   'root',
// );

render(<RscClientRoot data={data} />, 'root');

// 不同的入口形式（开不开启 rsc）
