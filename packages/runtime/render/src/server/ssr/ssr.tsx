import type {
  ClientManifest,
  SSRManifest,
  SSRModuleMap,
} from '@modern-js/types/server';
import { type ReactNode, use } from 'react';
import type { ReactDOMServerReadableStream } from 'react-dom/server';
// biome-ignore lint/style/useImportType: <explanation>
import { renderToReadableStream } from 'react-dom/server.edge';

type Options = {
  request: Request;
  clientManifest: ClientManifest;
  ssrManifest: SSRManifest;
} & Parameters<typeof renderToReadableStream>[1];

// TODO:临时代码，需要移除 styles，div 等
const ServerRoot = ({
  styles,
  elements,
}: { styles: string[]; elements: Promise<ReactNode[]> }) => {
  const res = use(elements);
  return (
    <>
      {/* <div>
        {styles.map(style => (
          // biome-ignore lint/style/useSelfClosingElements: <explanation>
          <link key={style} rel="stylesheet" href={style}></link>
        ))}
        {res}
      </div>
      &lt;!--&lt;?- SHELL_STREAM_END ?&gt;--&gt; */}
      {res}
      &lt;!--&lt;?- SHELL_STREAM_END ?&gt;--&gt;
    </>
  );
};

function collectStyles(moduleMap: ClientManifest) {
  const styles: string[] = [];
  if (!moduleMap) return [];
  for (const module of Object.values(moduleMap)) {
    if (module.styles) {
      styles.push(...module.styles);
    }
  }
  return styles;
}

function wrapStream(
  stream: ReadableStream,
  originalStream: ReactDOMServerReadableStream,
): ReactDOMServerReadableStream {
  const wrappedStream = Object.create(stream);
  for (const prop of Object.keys(originalStream)) {
    if (!(prop in wrappedStream)) {
      wrappedStream[prop] =
        originalStream[prop as keyof ReactDOMServerReadableStream];
    }
  }
  return wrappedStream as ReactDOMServerReadableStream;
}

export const renderSSRStream = async (
  element: React.ReactElement,
  options: Options,
): Promise<ReturnType<typeof renderToReadableStream>> => {
  const { clientManifest, ssrManifest } = options;
  if (clientManifest && ssrManifest) {
    try {
      const { renderRsc } = await import('../rsc');
      const { createFromReadableStream } = await import(
        'react-server-dom-webpack/client.edge'
      );
      const { injectRSCPayload } = await import('rsc-html-stream/server');
      const stream = await renderRsc({
        element,
        clientManifest,
      });
      const [stream1, stream2] = stream.tee();
      const styles = collectStyles(clientManifest).concat(ssrManifest.styles);
      const elements: Promise<ReactNode[]> = createFromReadableStream(stream1, {
        // Only some canary versions of react19 have this field
        serverConsumerManifest: ssrManifest,
      });
      const htmlStream = await renderToReadableStream(
        <ServerRoot elements={elements} styles={styles} />,
        options,
      );

      const responseStream = wrapStream(
        htmlStream.pipeThrough(injectRSCPayload(stream2)),
        htmlStream,
      );

      return responseStream as ReactDOMServerReadableStream;
    } catch (error) {
      console.error(error);
      throw error;
    }
  } else {
    console.log('render22222222', element);
    return renderToReadableStream(element, options);
  }
};
