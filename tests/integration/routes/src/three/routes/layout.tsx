import { Link, Outlet } from '@modern-js/runtime/router';
import React from 'react';
import { AuthProvider } from './auth';

export const loader = async () => {
  return {
    message: 'from  server',
  };
};

export default function Layout() {
  console.log('render root layout');
  return (
    <AuthProvider>
      <div>
        root layout
        <Link to="user">/user</Link>
        <Link to="user/profile">/user/profile</Link>
        <Outlet />
      </div>
    </AuthProvider>
  );
}
