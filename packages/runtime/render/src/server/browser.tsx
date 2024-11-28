import { startTransition, useEffect, useState } from 'react';
import { use } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { createFromFetch, encodeReply } from 'react-server-dom-webpack/client';
import { rscStream } from 'rsc-html-stream/client';

export async function callServer(id: string, args: any[]): Promise<any> {
  const response = fetch('/', {
    method: 'POST',
    headers: {
      Accept: 'text/x-component',
      'rsc-action': id,
    },
    body: await encodeReply(args),
  });
  const res = createFromFetch(response, {
    callServer,
  });
  return res;
}

interface RootProps {
  data: Promise<React.ReactNode>;
}

export async function RscRoot({ data }: RootProps) {
  const res = use(data);
  const [root, setRoot] = useState<React.ReactNode>(res);
  return <>{root}</>;
}
