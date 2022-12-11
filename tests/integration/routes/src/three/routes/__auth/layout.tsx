import { Outlet, Link } from '@modern-js/runtime/router';
import { useEffect } from 'react';
import { authManager } from '../auth';

export default function Layout() {
  useEffect(() => {
    authManager.signin(() => {
      console.log('signin', authManager.isAuthenticated);
    });
  });
  return (
    <div>
      auth layout
      <Link to="/user/profile">user profile</Link>
      {<Outlet />}
    </div>
  );
}
