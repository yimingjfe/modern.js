import {
  createRequestHandler,
  renderStreaming,
} from '@modern-js/runtime/ssr/server';
import Root from './RootProxy';

const handleRequest = async (request, ServerRoot, options) => {
  const body = await renderStreaming(request, <Root />, options);

  return new Response(body, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'transfer-encoding': 'chunked',
    },
  });
};

const requestHandler = createRequestHandler(handleRequest);

export default requestHandler;
