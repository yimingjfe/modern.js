import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useMatches } from 'react-router-dom';
import type { NestedRoute } from '@modern-js/types';
import { RuntimeReactContext } from '../../../core';
import { handleLoad } from './load';
import { matchClientRoutes, RouteMatch } from './utils';

interface RootProps {
  children: React.ReactNode;
  routes: NestedRoute[];
}

interface MetaProps {
  matches: RouteMatch<NestedRoute>[];
}

function Meta(props: MetaProps) {
  const { matches } = props;
  const [originMeta, setMeta] = useState({});
  useEffect(() => {
    for (const match of matches) {
      const { route } = match;
      if (route.meta) {
        const routeMeta = route.meta;
        Promise.resolve(routeMeta).then(metaModule => {
          const { meta: computeMeta } = metaModule;
          const meta = computeMeta();
          setMeta({
            ...originMeta,
            ...meta,
          });
        });
      }
    }
  }, [matches]);
  console.log('originMeta', originMeta);
  return null;
}

export function RootLayout(props: RootProps) {
  const location = useLocation();
  const context = useContext(RuntimeReactContext);
  const [matches, setMatches] = useState<RouteMatch<NestedRoute>[]>([]);
  useEffect(() => {
    const { routes } = props;
    const matches = matchClientRoutes(routes, location);
    setMatches(matches);
    handleLoad(routes, location, context.routeManifest, matches);
  }, [location]);
  return (
    <>
      <Meta matches={matches} />
      {props.children}
    </>
  );
}
