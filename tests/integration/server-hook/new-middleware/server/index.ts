import path from 'node:path';
import { UnstableMiddleware } from '@modern-js/runtime/server';
import { injectAssets } from '@modern-js/plugin-server/runtime';
import { Var } from '../shared';

function time(): UnstableMiddleware {
  return async (c, next) => {
    const start = Date.now();

    await next();

    const end = Date.now();

    c.response.headers.set('server-timing', `render; dur=${end - start}`);
  };
}

// eslint-disable-next-line node/no-unsupported-features/node-builtins, node/prefer-global/url-search-params
function parseQuery(request: Request): URLSearchParams {
  // eslint-disable-next-line node/no-unsupported-features/node-builtins, node/prefer-global/url
  const url = new URL(request.url);

  return url.searchParams;
}

function auth(): UnstableMiddleware<Var> {
  function getUserInfo(req: Request) {
    const query = parseQuery(req);

    if (query.get('unlogin')) {
      return null;
    }
    return {
      name: 'Liming',
    };
  }

  // eslint-disable-next-line consistent-return
  return async (c, next) => {
    if (c.request.url.includes('/login')) {
      return next();
    }

    const user = await getUserInfo(c.request);

    if (!user) {
      return c.redirect('/login');
    }

    c.set('user', user);

    await next();
  };
}

function getLangauge() {
  return 'en';
}

function injectMessage(): UnstableMiddleware {
  return async (c, next) => {
    await next();

    const language = await getLangauge();

    const { response, request } = c;
    const text = await response.text();

    const newText = text.replace('<html>', `<html lang="${language}">`);

    // eslint-disable-next-line node/no-unsupported-features/node-builtins
    const url = new URL(request.url);

    const newHtml = await injectAssets({
      html: newText,
      pathname: url.pathname,
      distDir: path.resolve(__dirname, '../dist'),
    });
    console.log('nnnnnnnnnnn', newHtml);

    const newheaders = response.headers;
    newheaders.set('x-custom-value', 'modern');

    c.response = c.body(newHtml, {
      status: response.status,
      headers: newheaders,
    });
  };
}

function injectRequestBody(): UnstableMiddleware {
  return async (c, next) => {
    await next();

    const { request, response } = c;

    if (request.method.toUpperCase() === 'POST' && request.body) {
      const requestBody = await request.text();
      c.response = c.body(requestBody, {
        status: response.status,
        headers: response.headers,
      });
    }
  };
}

export const unstableMiddleware: UnstableMiddleware[] = [
  time(),
  injectRequestBody(),
  injectMessage(),
  auth() as unknown as UnstableMiddleware,
];
