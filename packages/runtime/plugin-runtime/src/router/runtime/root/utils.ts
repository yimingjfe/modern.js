import { matchRoutes, Location, RouteObject, Params } from 'react-router-dom';
import type { NestedRoute } from '@modern-js/types';

export interface RouteMatch<Route> {
  params: Params;
  pathname: string;
  route: Route;
}

export function matchClientRoutes(
  routes: NestedRoute[],
  location: Location,
): RouteMatch<NestedRoute>[] {
  const matches = matchRoutes(routes as RouteObject[], location);
  return matches as unknown as RouteMatch<NestedRoute>[];
}
