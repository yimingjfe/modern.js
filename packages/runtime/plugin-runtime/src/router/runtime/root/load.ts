import { matchRoutes, Location, RouteObject, Params } from 'react-router-dom';
import type { NestedRoute } from '@modern-js/types';
import { matchClientRoutes, RouteMatch } from './utils';

declare const __webpack_chunk_load__: (chunkId: string) => Promise<void>;

interface RouteAssets {
  [routeId: string]: {
    chunkIds?: (string | number)[];
    assets?: string[];
  };
}

interface RouteManifest {
  routeAssets: RouteAssets;
  enableFetchParallel?: boolean;
  enableLogging?: boolean;
}

interface LoggerOptions {
  enableLogging?: boolean;
}

class Logger {
  static logger: Logger;

  static getLogger(options: LoggerOptions) {
    if (this.logger) {
      return this.logger;
    }
    this.logger = new Logger(options);
    return this.logger;
  }

  private enableLogging?: boolean;

  constructor(options: LoggerOptions) {
    this.enableLogging = options.enableLogging;
  }

  log(...args: string[]) {
    if (this.enableLogging) {
      // eslint-disable-next-line no-console
      console.log(...args);
    }
  }
}

export function handleLoad(
  routes: NestedRoute[],
  location: Location,
  routeManifest: RouteManifest,
  matches: RouteMatch<NestedRoute>[],
) {
  if (!routeManifest || !routeManifest.enableFetchParallel === false) {
    return;
  }

  const { routeAssets } = routeManifest;
  Logger.getLogger({ enableLogging: routeManifest.enableLogging }).log(
    'handle page load',
  );
  matches?.forEach(match => loadRouteModule(match.route, routeAssets));
}

export async function loadRouteModule(
  route: NestedRoute,
  routeAssets: RouteAssets,
): Promise<string[] | void> {
  const routeId = route.id;
  if (!routeId) {
    return;
  }
  if (!routeAssets[routeId]) {
    return;
  }

  const { chunkIds } = routeAssets[routeId];
  if (!chunkIds) {
    return;
  }

  try {
    await Promise.all(
      chunkIds.map(chunkId => {
        return __webpack_chunk_load__(String(chunkId));
      }),
    );
  } catch (error) {
    console.error(error);
  }
}
