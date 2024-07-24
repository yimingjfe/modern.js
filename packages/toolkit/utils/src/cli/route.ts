import type { NestedRouteForCli, PageRoute } from '@modern-js/types';
import { lodash } from '../compiled';

const { cloneDeep } = lodash;

export function filterRoutesForServer(
  routes: (NestedRouteForCli | PageRoute)[],
): (NestedRouteForCli | PageRoute)[] {
  const clonedRoutes = cloneDeep(routes);
  const newRoutes = clonedRoutes
    .map(route => {
      if (route.type !== 'nested') {
        return route;
      }
      if (route.children && route.children.length > 0) {
        route.children = filterRoutesForServer(
          route.children,
        ) as NestedRouteForCli[];
      }

      if (route.inValidSSRRoute) {
        return null;
      }

      return route;
    })
    .filter(route => route !== null);

  return newRoutes;
}

export function filterRoutesLoader(
  routes: (NestedRouteForCli | PageRoute)[],
): (NestedRouteForCli | PageRoute)[] {
  const clonedRoutes = cloneDeep(routes);
  const newRoutes = clonedRoutes
    .map(route => {
      if (route.type !== 'nested') {
        return route;
      }
      if (route.children && route.children.length > 0) {
        route.children = filterRoutesLoader(
          route.children,
        ) as NestedRouteForCli[];
      }

      if (route.inValidSSRRoute) {
        delete route.loader;
      }

      return route;
    })
    .filter(route => route !== null);

  return newRoutes;
}
