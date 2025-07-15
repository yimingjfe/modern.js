import type { RuntimeContext } from '@modern-js/runtime';
import { Link, Outlet } from '@modern-js/runtime/router';

declare global {
  interface Window {
    __isBrowser: boolean;
  }
}

export function getTimeSincePageLoadStart() {
  if (
    window.performance &&
    typeof window.performance.getEntriesByType === 'function'
  ) {
    const navigationEntry = performance.getEntriesByType('navigation')[0];
    if (navigationEntry) {
      const pageLoadStartTime = navigationEntry.startTime;
      const currentTime = performance.now();
      const elapsed = currentTime - pageLoadStartTime;
      return elapsed;
    } else {
      console.log('未找到导航性能条目。');
      return null;
    }
  } else {
    console.log('您的浏览器不支持 Performance Navigation Timing API.');
    return null;
  }
}

export const init = (context: RuntimeContext) => {
  window.__isBrowser = context.isBrowser;
  return context;
};

// export const config = (): AppConfig => {
//   return {
//     router: {
//       createRoutes() {
//         return [
//           {
//             path: 'yyy/xxx',
//             element: <div>yyy/xxx</div>,
//           },
//         ];
//       },
//     },
//   }
// };

export default function Layout() {
  const diffTime = getTimeSincePageLoadStart();
  console.log('layout diffTime', diffTime);
  return (
    <div>
      root layout
      <Link to="/user" prefetch="intent">
        /user
      </Link>
      <Link to="/user/profile" prefetch="intent">
        /user/profile
      </Link>
      <Link to="user/111">/user/111</Link>
      <Link className="should-not-revalidate" to="user/222?revalidate=false">
        /user/222
      </Link>
      <Outlet />
    </div>
  );
}
