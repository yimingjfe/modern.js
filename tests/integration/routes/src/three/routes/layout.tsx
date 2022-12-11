import { Link, Outlet } from '@modern-js/runtime/router';

export const loader = async () => {
  return {
    message: 'from  server',
  };
};

export const meta = () => {
  return {
    title: 'root layout',
  };
};

// const cc = async () => {
//   const a = await import('./a');
//   console.log(a);
// };

// const bb = async () => {
//   const a = await import('./a');
//   console.log(a);
// };

// cc();

// bb();

export default function Layout() {
  return (
    <div>
      root layout
      <Link to="user">/user</Link>
      <Link to="user/profile">/user/profile</Link>
      <Outlet />
    </div>
  );
}
