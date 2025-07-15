'use client';
import { Outlet } from '@modern-js/runtime/router';
import { Suspense } from 'react';
import UserData from './UserData';
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

export default function UserLayout({ loaderData }: { loaderData: any }) {
  const { user, Profile } = loaderData;
  const diffTime = getTimeSincePageLoadStart();
  console.log('layout diffTime', diffTime);
  return (
    <div className="user-layout">
      user layout
      {Profile}
      <Suspense fallback={<div>Loading...</div>}>
        <UserData userData={user} />
      </Suspense>
      <Outlet />
    </div>
  );
}
