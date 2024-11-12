import path from 'node:path';
import fs from 'fs/promises';
import { describe, expect, it, vi } from 'vitest';
import type { LoaderContext } from 'webpack';
import type {
  ClientReferencesMap,
  ServerReferencesMap,
} from '../../src/shared/rsc/common';
import rscServerLoader, {
  type WebpackRscServerLoaderOptions,
} from '../../src/shared/rsc/rsc-server-loader';

async function callLoader(
  resourcePath: string,
  clientReferencesMap: ClientReferencesMap,
  serverReferencesMap: ServerReferencesMap,
): Promise<string | Buffer> {
  const input = await fs.readFile(resourcePath);

  return new Promise((resolve, reject) => {
    const context: Partial<LoaderContext<WebpackRscServerLoaderOptions>> = {
      getOptions: () => ({ clientReferencesMap, serverReferencesMap }),
      resourcePath,
      cacheable: vi.fn(),
      callback: (error, content) => {
        if (error) {
          reject(error);
        } else if (content) {
          resolve(content);
        } else {
          reject(
            new Error(
              `Did not receive any content from webpackRscServerLoader.`,
            ),
          );
        }
      },
    };

    resolve(
      rscServerLoader.call(
        context as LoaderContext<WebpackRscServerLoaderOptions>,
        input.toString(`utf-8`),
      ),
    );
  });
}

describe('rscServerLoader', () => {
  it('support use client directive', async () => {
    const resourcePath = path.resolve(
      __dirname,
      `fixtures/client-component.jsx`,
    );
    const output = await callLoader(resourcePath, new Map(), new Map());

    expect(output).toMatchSnapshot();
  });

  it(`should handle inline actions correctly`, async () => {
    const resourcePath = path.resolve(__dirname, `fixtures/inline-actions.tsx`);

    const output = await callLoader(resourcePath, new Map(), new Map());

    expect(output).toMatchSnapshot();
  });

  it(`should handle server module correctly`, async () => {
    const resourcePath = path.resolve(__dirname, `fixtures/server-actions.ts`);

    const output = await callLoader(resourcePath, new Map(), new Map());

    expect(output).toMatchSnapshot();
  });

  it('should generate client manifest correctly', async () => {
    const resourcePath = path.resolve(
      __dirname,
      `fixtures/client-component.jsx`,
    );

    const clientReferencesMap: ClientReferencesMap = new Map();

    await callLoader(resourcePath, clientReferencesMap, new Map());

    expect(Object.fromEntries(clientReferencesMap.entries())).toEqual({
      [resourcePath]: [
        {
          id: 'tests/loaders/fixtures/client-component.jsx#ClassA',
          exportName: 'ClassA',
        },
        {
          id: 'tests/loaders/fixtures/client-component.jsx#ComponentA',
          exportName: 'ComponentA',
        },
        {
          id: 'tests/loaders/fixtures/client-component.jsx#MemoizedComponentA',
          exportName: 'MemoizedComponentA',
        },
        {
          id: 'tests/loaders/fixtures/client-component.jsx#ComponentB',
          exportName: 'ComponentB',
        },
        {
          id: 'tests/loaders/fixtures/client-component.jsx#foo',
          exportName: 'foo',
        },
        {
          id: 'tests/loaders/fixtures/client-component.jsx#ComponentC',
          exportName: 'ComponentC',
        },
        {
          id: 'tests/loaders/fixtures/client-component.jsx#ComponentD',
          exportName: 'ComponentD',
        },
        {
          id: 'tests/loaders/fixtures/client-component.jsx#bar',
          exportName: 'bar',
        },
        {
          id: 'tests/loaders/fixtures/client-component.jsx#ComponentE',
          exportName: 'ComponentE',
        },
        {
          id: 'tests/loaders/fixtures/client-component.jsx#ComponentF',
          exportName: 'ComponentF',
        },
        {
          id: 'tests/loaders/fixtures/client-component.jsx#default',
          exportName: 'default',
        },
      ],
    });
  });

  it('should generate serverReferencesMap correctly', async () => {
    const resourcePath = path.resolve(__dirname, `fixtures/server-actions.ts`);

    const serverReferencesMap = new Map();
    await callLoader(resourcePath, new Map(), serverReferencesMap);

    expect(Object.fromEntries(serverReferencesMap.entries())).toEqual({
      [resourcePath]: { exportNames: [`foo`, `bar`, `b`, `default`] },
    });
  });
});
