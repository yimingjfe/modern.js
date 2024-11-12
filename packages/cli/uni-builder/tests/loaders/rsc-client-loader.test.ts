import path from 'path';
import fs from 'fs/promises';
import { type Mock, describe, expect, it, vi } from 'vitest';
import type webpack from 'webpack';
import type { ServerReferencesMap } from '../../src/shared/rsc/common';
import rscClientLoader from '../../src/shared/rsc/rsc-client-loader';

type RscClientLoaderOptions = any;

async function callLoader(
  resourcePath: string,
  options: RscClientLoaderOptions,
  emitError?: Mock<any[], (error: Error) => void>,
): Promise<string | Buffer> {
  const input = await fs.readFile(resourcePath);

  return new Promise((resolve, reject) => {
    const context: Partial<webpack.LoaderContext<RscClientLoaderOptions>> = {
      getOptions: () => options,
      resourcePath,
      cacheable: vi.fn(),
      emitError,
      callback: (error, content) => {
        if (error) {
          reject(error);
        } else if (content !== undefined) {
          resolve(content);
        } else {
          reject(
            new Error(`Did not receive any content from RscClientLoader.`),
          );
        }
      },
    };

    resolve(
      rscClientLoader.call(
        context as webpack.LoaderContext<RscClientLoaderOptions>,
        input.toString(`utf-8`),
      ),
    );
  });
}

describe('rscClientLoader', () => {
  it('should transform the input with `use server` directive', async () => {
    const resourcePath = path.resolve(__dirname, 'fixtures/server-actions.ts');
    const serverReferencesMap: ServerReferencesMap = new Map([
      [resourcePath, { moduleId: `test`, exportNames: [`foo`, `bar`] }],
    ]);

    const result = await callLoader(resourcePath, { serverReferencesMap });

    expect(result).toMatchSnapshot();
  });

  it('should not transform the input if it does not have `use server` directive', async () => {
    const resourcePath = path.resolve(
      __dirname,
      'fixtures/client-loader-client.ts',
    );

    const serverReferencesMap: ServerReferencesMap = new Map([
      [resourcePath, { moduleId: `test`, exportNames: [`foo`, `bar`] }],
    ]);

    const output = await callLoader(resourcePath, { serverReferencesMap });

    expect(output).toMatchSnapshot();
  });

  it('support a custom callServer', async () => {
    const resourcePath = path.resolve(__dirname, 'fixtures/server-actions.ts');

    const serverReferencesMap: ServerReferencesMap = new Map([
      [resourcePath, { moduleId: `test`, exportNames: [`foo`] }],
    ]);

    const callServerImport = `sdk/call-server`;

    const output = await callLoader(resourcePath, {
      serverReferencesMap,
      callServerImport,
    });

    expect(output).toMatchSnapshot();
  });

  it('should emit an error is module info is missing', async () => {
    const resourcePath = path.resolve(__dirname, 'fixtures/server-actions.ts');

    const serverReferencesMap: ServerReferencesMap = new Map();
    const emitError = vi.fn();

    const output = await callLoader(
      resourcePath,
      { serverReferencesMap },
      emitError,
    );

    expect(emitError.mock.calls).toEqual([
      [
        new Error(
          `Could not find server module info in \`serverReferencesMap\` for ${resourcePath}.`,
        ),
      ],
    ]);

    expect(output).toEqual(``);
  });
});
