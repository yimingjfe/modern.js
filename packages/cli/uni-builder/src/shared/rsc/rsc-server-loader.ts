import path from 'node:path';
import MagicString from 'magic-string';
import type { LoaderContext } from 'webpack';
import {
  type ClientReference,
  type ClientReferencesMap,
  type ServerReferencesMap,
  type SourceMap,
  getExportNames,
  isClientModule,
  parseSource,
} from './common';
import {
  getModuleUseServerInfo,
  getServerActions,
  parseSourceWithOxc,
} from './parse-with-oxc';

type ServerLoaderOptions = {
  readonly clientReferencesMap: ClientReferencesMap;
  readonly serverReferencesMap: ServerReferencesMap;
};

export default async function rscServerLoader(
  this: LoaderContext<ServerLoaderOptions>,
  source: string,
  sourceMap: SourceMap,
) {
  this.cacheable(true);
  const callback = this.async();
  const { clientReferencesMap, serverReferencesMap } = this.getOptions();
  const clientReferences: ClientReference[] = [];
  const { resourcePath } = this;
  const ast = await parseSource(source);
  const isClientComponent = await isClientModule(ast);

  if (isClientComponent) {
    // TODO: should be changed to runtime of modern.js
    const importsCode = `
'use client';

import { registerClientReference } from "react-server-dom-webpack/server";
function createClientReferenceProxy(exportName) {
  return () => {
    throw new Error(\`Attempted to call \${exportName}() from the server but \${exportName} is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.\`);
  };
}`;

    const exportNames = await getExportNames(ast);
    const exportsCode = exportNames
      .map(exportName => {
        const id = `${path.relative(process.cwd(), resourcePath)}#${exportName || ''}`;
        clientReferences.push({ id, exportName });
        if (exportName === 'default') {
          return `export default registerClientReference(() => {
  throw new Error("Attempted to call the default export of ${resourcePath} from the server but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "${id}", "");`;
        } else {
          return `export const ${exportName} = registerClientReference(createClientReferenceProxy("${exportName}"), "${id}", "${exportName}");`;
        }
      })
      .join('\n');

    if (clientReferences.length > 0) {
      clientReferencesMap.set(resourcePath, clientReferences);
    }

    return callback(null, `${importsCode}\n${exportsCode}`);
  } else {
    const ast = await parseSourceWithOxc(source, resourcePath);
    const moduleUseServerInfo = getModuleUseServerInfo(ast);
    const serverFunctions = getServerActions(ast);
    const serverReferenceExportNames: string[] = serverFunctions
      .map(serverFunc => serverFunc.exportName)
      .filter(Boolean) as string[];

    if (serverReferenceExportNames.length > 0) {
      serverReferencesMap.set(resourcePath, {
        exportNames: serverReferenceExportNames,
      });
    }

    if (serverFunctions.length > 0) {
      const ms = new MagicString(source);
      serverFunctions.forEach(serverFunction => {
        ms.appendRight(
          serverFunction.span.end,
          `\nregisterServerReference(${serverFunction.localName}, module.id, "${serverFunction.exportName || serverFunction.localName}");`,
        );
      });

      const useServerPos = moduleUseServerInfo ? moduleUseServerInfo.end : 0;
      ms.appendRight(
        useServerPos,
        `\nimport { registerServerReference } from "react-server-dom-webpack/server";`,
      );

      return callback(null, ms.toString());
    }
  }

  return callback(null, source, sourceMap);
}
