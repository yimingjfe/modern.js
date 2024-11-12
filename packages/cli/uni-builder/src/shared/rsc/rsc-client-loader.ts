import type { LoaderContext } from 'webpack';
import {
  type ServerReferencesMap,
  isServerModule,
  parseSource,
} from './common';

type ClientLoaderOptions = {
  serverReferencesMap: ServerReferencesMap;
  callServerImport?: string;
};

export default async function rscClientLoader(
  this: LoaderContext<ClientLoaderOptions>,
  source: string,
) {
  this.cacheable(true);
  const ast = await parseSource(source);
  const hasUseServerDirective = await isServerModule(ast);

  if (!hasUseServerDirective) {
    return source;
  }

  const { serverReferencesMap, callServerImport = `@modern-js/runtime/rsc` } =
    this.getOptions();

  const moduleInfo = serverReferencesMap.get(this.resourcePath);

  if (!moduleInfo) {
    this.emitError(
      new Error(
        `Could not find server module info in \`serverReferencesMap\` for ${this.resourcePath}.`,
      ),
    );

    return '';
  }

  const { moduleId, exportNames } = moduleInfo;

  if (!moduleId) {
    this.emitError(
      new Error(
        `Could not find server module ID in \`serverReferencesMap\` for ${this.resourcePath}.`,
      ),
    );

    return '';
  }

  const importsCode = `
    import { createServerReference } from "react-server-dom-webpack/client";
    import { callServer } from "${callServerImport}";
  `;

  const exportsCode = exportNames
    .map(item => {
      const name = item;
      if (name === 'default') {
        return `export default createServerReference("${moduleId}", callServer);`;
      } else {
        return `export const ${name} = createServerReference("${moduleId}#${name}", callServer);`;
      }
    })
    .join('\n');

  return `${importsCode}\n${exportsCode}`;
}
