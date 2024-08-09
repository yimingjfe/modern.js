import { applyBaseConfig } from '../../utils/applyBaseConfig';

export default applyBaseConfig({
  runtime: {
    router: true,
  },
  server: {
    ssr: {
      mode: 'stream',
    },
  },
  security: {
    nonce: 'test-nonce',
  },
  source: {
    enableAsyncEntry: true,
  },
});
