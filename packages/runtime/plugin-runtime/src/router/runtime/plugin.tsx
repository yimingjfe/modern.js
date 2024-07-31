import React, { useContext, useMemo } from 'react';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  createRoutesFromElements,
  useMatches,
  useLocation,
  RouteObject,
  useHref,
} from '@modern-js/runtime-utils/router';
import { parsedJSONFromElement } from '@modern-js/runtime-utils/parsed';
import type { RouterSubscriber } from '@modern-js/runtime-utils/remix-router';
import { merge } from '@modern-js/runtime-utils/merge';
import { getGlobalLayoutApp, getGlobalRoutes } from '../../core/context';
import { Plugin, RuntimeReactContext } from '../../core';
import { modifyRoutes as modifyRoutesHook } from './hooks';
import { deserializeErrors, renderRoutes, urlJoin } from './utils';
import type { RouterConfig, Routes } from './types';

// eslint-disable-next-line import/no-mutable-exports
export let finalRouteConfig: RouterConfig['routesConfig'] = {
  routes: [],
};
// eslint-disable-next-line import/no-mutable-exports
export let beforeCreateRouter = true;
// support csr only, it is not allowed to use in ssr app.
export function modifyRoutes(modifyFunction: (routes: Routes) => Routes) {
  if (beforeCreateRouter) {
    const { routes: originRoutes } = finalRouteConfig;
    const newRoutes = modifyFunction(originRoutes);
    finalRouteConfig.routes = newRoutes;
  } else {
    console.error(
      'It is not allowed to modify routes config after create router.',
    );
  }
}

export const routerPlugin = (
  userConfig: Partial<RouterConfig> = {},
): Plugin => {
  return {
    name: '@modern-js/plugin-router',
    registerHook: {
      modifyRoutes: modifyRoutesHook,
    },
    setup: api => {
      let routes: RouteObject[] = [];
      window._SERVER_DATA = parsedJSONFromElement('__MODERN_SERVER_DATA__');
      return {
        beforeRender(context) {
          context.router = {
            useMatches,
            useLocation,
            useHref,
          };

          Object.defineProperty(context, 'routes', {
            get() {
              return routes;
            },
          });
        },
        wrapRoot: App => {
          const pluginConfig: Record<string, any> =
            api.useRuntimeConfigContext();
          const {
            serverBase = [],
            supportHtml5History = true,
            basename = '',
            routesConfig,
            createRoutes,
          } = merge(pluginConfig.router || {}, userConfig) as RouterConfig;
          const select = (pathname: string) =>
            serverBase.find(baseUrl => pathname.search(baseUrl) === 0) || '/';
          finalRouteConfig = {
            routes: getGlobalRoutes(),
            globalApp: getGlobalLayoutApp(),
            ...routesConfig,
          };
          // can not get routes config, skip wrapping React Router.
          // e.g. App.tsx as the entrypoint
          if (!finalRouteConfig.routes && !createRoutes) {
            return App;
          }

          const getRouteApp = () => {
            const useCreateRouter = (props: any) => {
              const runtimeContext = useContext(RuntimeReactContext);
              /**
               * _internalRouterBaseName: garfish plugin params, priority
               * basename: modern config file config
               */
              const baseUrl = (
                runtimeContext._internalRouterBaseName ||
                window._SERVER_DATA?.router.baseUrl ||
                select(location.pathname)
              ).replace(/^\/*/, '/');
              const _basename =
                baseUrl === '/' ? urlJoin(baseUrl, basename) : baseUrl;

              let hydrationData = window._ROUTER_DATA;

              const { unstable_getBlockNavState: getBlockNavState } =
                runtimeContext;

              return useMemo(() => {
                if (hydrationData?.errors) {
                  hydrationData = {
                    ...hydrationData,
                    errors: deserializeErrors(hydrationData.errors),
                  };
                }

                routes = createRoutes
                  ? createRoutes()
                  : createRoutesFromElements(
                      renderRoutes({
                        routesConfig: finalRouteConfig,
                        props,
                      }),
                    );

                const runner = (api as any).useHookRunners();
                routes = runner.modifyRoutes(routes);

                const router = supportHtml5History
                  ? createBrowserRouter(routes, {
                      basename: _basename,
                      hydrationData,
                    })
                  : createHashRouter(routes, {
                      basename: _basename,
                      hydrationData,
                    });

                const originSubscribe = router.subscribe;

                router.subscribe = (listener: RouterSubscriber) => {
                  const wrapedListener: RouterSubscriber = (...args) => {
                    const blockRoute = getBlockNavState
                      ? getBlockNavState()
                      : false;

                    if (blockRoute) {
                      return;
                    }
                    // eslint-disable-next-line consistent-return
                    return listener(...args);
                  };
                  return originSubscribe(wrapedListener);
                };

                Object.defineProperty(runtimeContext, 'remixRouter', {
                  get() {
                    return router;
                  },
                  configurable: true,
                  enumerable: true,
                });

                return router;
              }, [
                finalRouteConfig,
                props,
                _basename,
                hydrationData,
                getBlockNavState,
              ]);
            };

            return (props => {
              beforeCreateRouter = false;
              const router = useCreateRouter(props);

              return <RouterProvider router={router} />;
            }) as React.ComponentType<any>;
          };

          return getRouteApp();
        },
        pickContext: pickedContext => {
          const { remixRouter } = pickedContext;

          // two scenarios: 1. remixRouter is not existed in conventional routes;
          // 2. useRuntimeContext can be called by users before hoc hooks execute
          if (!remixRouter) {
            return pickedContext;
          }

          // only export partial common API from remix-router
          const router = {
            ...pickedContext.router,
            navigate: remixRouter.navigate,
            get location() {
              return remixRouter.state.location;
            },
          };

          return {
            ...pickedContext,
            router,
          };
        },
      };
    },
  };
};
