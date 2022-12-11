import { Outlet, useLoaderData, redirect } from '@modern-js/runtime/router';

import type { LoaderFunction } from '@modern-js/runtime/router';
import { RequireAuth } from '../RequireAuth';
import { hasAuth } from '../auth';

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const loader: LoaderFunction = async ({ request }) => {
  // if (!hasAuth()) {
  //   return redirect('/three/login');
  // }
  console.log('request user layout start', request);
  await wait(200);
  return {
    message: 'hello user',
  };
};

export default function Layout() {
  const data = useLoaderData() as {
    message: string;
  };
  return (
    // <RequireAuth>
    <div>
      <span>{`${data?.message} layout`}</span>
      {<Outlet />}
    </div>
    // </RequireAuth>
  );
}
