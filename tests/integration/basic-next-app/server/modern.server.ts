import { defineConfig } from '@modern-js/app-tools/server';
import reactServerRegister from 'react-server-dom-webpack/node-register';
import rscServerPlugin from './serverPlugin';

// reactServerRegister();
export default defineConfig({
  plugins: [rscServerPlugin()],
});
