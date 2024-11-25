import { startTransition, use, useEffect, useState } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import {
  createFromFetch,
  createFromReadableStream,
  encodeReply,
} from 'react-server-dom-webpack/client';
import { rscStream } from 'rsc-html-stream/client';

function fetchRSC() {
  const url = '/rsc';
  const content = createFromFetch(
    fetch(url, {
      headers: {
        Accept: 'text/x-component',
      },
    }),
    {
      callServer,
    },
  );
  return content;
}

const isUseServerAction = false;

export async function callServer(id: string, args: any[]): Promise<any> {
  const response = fetch('/', {
    method: 'POST',
    headers: {
      Accept: 'text/x-component',
      'rsc-action': id,
    },
    body: await encodeReply(args),
  });
  if (isUseServerAction) {
    const res = createFromFetch(response, {
      callServer,
    });
    return res;
  } else {
    const { returnValue, root } = await createFromFetch(response, {
      callServer,
    });
    return returnValue;
  }
}

const data = createFromReadableStream(rscStream);

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
function Error({ error }: FallbackProps) {
  return (
    <div>
      <h1>Application Error</h1>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{error.stack}</pre>
    </div>
  );
}

// for call server
let updateRoot: (root: React.ReactNode) => void;

interface RootProps {
  data: Promise<React.ReactNode>;
}

function Root({ data }: RootProps) {
  const res = use(data);
  const [root, setRoot] = useState<React.ReactNode>(res);
  updateRoot = setRoot;
  return <>{root}</>;
}

hydrateRoot(document.body, <Root data={data} />);
