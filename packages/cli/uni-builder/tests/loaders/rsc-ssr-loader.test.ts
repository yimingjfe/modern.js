import path from 'path';
import url from 'url';
import fs from 'fs/promises';
import { describe, expect, it, vi } from 'vitest';
import type webpack from 'webpack';
import type { LoaderContext } from 'webpack';
import type { ServerReferencesMap } from '../../src/shared/rsc/common';
import rscSsrLoader, {
  type RscSsrLoaderOptions,
} from '../../src/shared/rsc/rsc-ssr-loader';

const currentDirname = path.dirname(url.fileURLToPath(import.meta.url));

async function callLoader(
  resourcePath: string,
  serverReferencesMap: ServerReferencesMap,
): Promise<string | Buffer> {
  const input = await fs.readFile(resourcePath);

  return new Promise((resolve, reject) => {
    const context: Partial<webpack.LoaderContext<RscSsrLoaderOptions>> = {
      getOptions: () => ({ serverReferencesMap }),
      resourcePath,
      cacheable: vi.fn(),
      callback: (error, content) => {
        if (error) {
          reject(error);
        } else if (content !== undefined) {
          resolve(content);
        } else {
          reject(
            new Error(`Did not receive any content from webpackRscSsrLoader.`),
          );
        }
      },
    };

    resolve(
      rscSsrLoader.call(
        context as LoaderContext<RscSsrLoaderOptions>,
        input.toString(`utf-8`),
      ),
    );
  });
}

describe('rscSsrLoader', () => {
  it('should transform server module correctly', async () => {
    const resourcePath = path.resolve(
      currentDirname,
      `fixtures/server-actions.ts`,
    );

    const output = await callLoader(resourcePath, new Map());

    expect(output).toMatchSnapshot();
  });

  it('should not transform non server module', async () => {
    const resourcePath = path.resolve(
      currentDirname,
      `fixtures/client-component.jsx`,
    );

    const output = await callLoader(resourcePath, new Map());

    expect(output).toMatchSnapshot();
  });

  it('should get serverReferencesMap correctly', async () => {
    const serverReferencesMap: ServerReferencesMap = new Map();
    const resourcePath = path.resolve(
      currentDirname,
      `fixtures/server-actions.ts`,
    );

    await callLoader(resourcePath, serverReferencesMap);

    expect(Object.fromEntries(serverReferencesMap.entries())).toEqual({
      [resourcePath]: { exportNames: [`foo`, `bar`, `b`] },
    });
  });
});
