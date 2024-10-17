import reactServerRegister from 'react-server-dom-webpack/node-register';
import { defineConfig } from '@modern-js/app-tools/server';
import rscServerPlugin from './serverPlugin';

reactServerRegister();
export default defineConfig({
  plugins: [rscServerPlugin()],
});
