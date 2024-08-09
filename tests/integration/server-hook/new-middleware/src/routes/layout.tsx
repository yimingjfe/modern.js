import './layout.css';
import { Outlet } from '@modern-js/runtime/router';

export default function Layout() {
  return (
    <div className="root-layout">
      <Outlet />
    </div>
  );
}
