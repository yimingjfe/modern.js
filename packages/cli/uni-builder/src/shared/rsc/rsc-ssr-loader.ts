import type { LoaderContext } from 'webpack';
import {
  type ServerReferencesMap,
  getExportNames,
  isServerModule,
  parseSource,
} from './common';

export type RscSsrLoaderOptions = {
  readonly serverReferencesMap: ServerReferencesMap;
};

export default async function rscSsrLoader(
  this: LoaderContext<RscSsrLoaderOptions>,
  source: string,
) {
  this.cacheable(true);

  const { serverReferencesMap } = this.getOptions();
  const ast = await parseSource(source);
  const hasDeclareServerDirective = await isServerModule(ast);
  const resourcePath = this.resourcePath;

  if (!hasDeclareServerDirective) {
    return source;
  }

  const exportedNames = await getExportNames(ast, true);
  const importsCode = `
    'use server';
  `;

  const exportsCode = exportedNames
    .map(name => {
      return `export const ${name} = () => {throw new Error("Server actions must not be called during server-side rendering.")}`;
    })
    .join('\n');

  if (exportedNames.length > 0) {
    serverReferencesMap.set(resourcePath, {
      exportNames: exportedNames,
    });
  }

  return `${importsCode}\n${exportsCode}`;
}
