import { formatImportPath } from '@modern-js/utils';

const SERVER_ENTRY = `
import {
  #render,
  createRequestHandler,
} from '@#metaName/runtime/ssr/server';

const handleRequest = async (request, ServerRoot, options) => {

  const body = await #render(request, <ServerRoot />, options);

  return new Response(body, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      #headers
    },
  })
};

export const requestHandler = createRequestHandler(handleRequest);
`;

type ServerIndexOptinos = GenHandlerCodeOptions & {
  entryName: string;
};

export const serverIndex = (options: ServerIndexOptinos) => {
  const { metaName = 'modern-js', entryName } = options;

  return `
    import '@${metaName}/runtime/registry/${entryName}';
    ${genHandlerCode(options)}
  `;
};

export type ServerRootTemplateOptions = {
  customEntry?: boolean;
  entry: string;
  srcDirectory: string;
  internalSrcAlias: string;
};

export const serverRootTemplate = (options: ServerRootTemplateOptions) => {
  const { customEntry, entry, srcDirectory, internalSrcAlias } = options;
  return `
  import { createRoot } from '@modern-js/runtime/react';
  import { Fragment, createElement } from 'react';
  import App from '${formatImportPath(
    customEntry
      ? entry
          .replace(/entry\.[tj]sx/, 'App')
          .replace(srcDirectory, internalSrcAlias)
      : entry.replace(srcDirectory, internalSrcAlias).replace(/\.[tj]sx/, ''),
  )}';

  export default function Root() {
    const DefaultRoot = ({ children }) => createElement(Fragment, null, children);

    const ModernRoot = createRoot(DefaultRoot);

    return createElement(ModernRoot, null, createElement(App, null));
  }
  `;
};

type GenHandlerCodeOptions = {
  customServerEntry?: string | false;
  srcDirectory: string;
  internalSrcAlias: string;
  entry: string;
} & TransformServerEntryOptions;

function genHandlerCode({
  mode,
  metaName,
  customServerEntry,
  srcDirectory,
  internalSrcAlias,
}: GenHandlerCodeOptions) {
  if (customServerEntry) {
    return `export { default as requestHandler } from '${formatImportPath(
      customServerEntry.replace(srcDirectory, internalSrcAlias),
    )}'`;
  } else {
    const serverEntry = transformServerEntry(SERVER_ENTRY, {
      metaName: metaName || 'modern-js',
      mode,
    });

    return serverEntry;
  }
}

type TransformServerEntryOptions = {
  metaName?: string;
  mode: 'string' | 'stream';
};

function transformServerEntry(
  source: string,
  options: TransformServerEntryOptions,
) {
  const { metaName = 'modern-js', mode } = options;

  const output = source
    .replace(/#metaName/g, metaName)
    .replace(/#render/g, mode === 'string' ? 'renderString' : 'renderStreaming')
    .replace(
      /#headers/g,
      mode === 'string' ? '' : `'transfer-encoding': 'chunked',`,
    );

  return output;
}
