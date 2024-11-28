import path from 'path';
import {
  RscClientPlugin as WebpackRscClientPlugin,
  RscServerPlugin as WebpackRscServerPlugin,
} from '@modern-js/uni-builder/rsc';
import { applyBaseConfig } from '../../utils/applyBaseConfig';

const appToolsPath = require.resolve('@modern-js/app-tools');
const uniBuilderRscPath = require.resolve('@modern-js/uni-builder/rsc', {
  paths: [appToolsPath],
});

const rscClientLoaderPath = path.join(
  path.dirname(uniBuilderRscPath),
  'rsc-client-loader',
);

const rscServerLoaderPath = path.join(
  path.dirname(uniBuilderRscPath),
  'rsc-server-loader',
);

const rscSsrLoaderPath = path.join(
  path.dirname(uniBuilderRscPath),
  'rsc-ssr-loader',
);

const rscCssLoaderPath = path.join(
  path.dirname(uniBuilderRscPath),
  'rsc-css-loader',
);

const clientReferencesMap = new Map();
const serverReferencesMap = new Map();

const webpackRscLayerName = `react-server`;

const styles = new Set<string>();

const CSS_RULE_NAMES = ['less', 'css', 'scss', 'sass'];

export default applyBaseConfig({
  runtime: {
    state: false,
    router: false,
  },
  server: {
    ssr: {
      mode: 'stream',
    },
  },
  output: {
    minify: false,
  },
  tools: {
    babel(config, { modifyPresetReactOptions }) {
      modifyPresetReactOptions({
        runtime: 'automatic',
      });
    },

    webpack(config) {
      // @ts-ignore
      config.entry.main = {
        import: [config.entry.main[0]],
        layer: webpackRscLayerName,
      };
      config.experiments = {
        ...config.experiments,
        layers: true,
      };
    },

    bundlerChain(chain, { isServer }) {
      if (isServer) {
        chain.name('server');
        // chain.entryPoints.clear();
        // chain.entry('main').add({
        //   import: [path.resolve(__dirname, './src/index.server.tsx')],
        // });

        chain.experiments({
          ...chain.experiments,
          layers: true,
        });

        const jsRule = chain.module.rule('js');
        const babelUse = jsRule.use('babel');
        const babelLoaderPath = require.resolve('babel-loader', {
          paths: [
            require.resolve('@modern-js/uni-builder', {
              paths: [require.resolve('@modern-js/app-tools')],
            }),
          ],
        });
        const babelOptions = babelUse.get('options');

        chain.module.rules.delete('js');

        // babel-loader 待在前面，保证 ts 和 tsx 被编译了
        chain.module
          .rule('js')
          .test(/\.(?:js|jsx|mjs|cjs|ts|tsx|mts|cts)$/)
          .oneOf('rsc-server')
          .issuerLayer(webpackRscLayerName)
          .use('rsc-server-loader')
          .loader(rscServerLoaderPath)
          .options({
            clientReferencesMap,
            serverReferencesMap,
          })
          .end()
          .use('babel')
          .loader(babelLoaderPath)
          .options({
            ...babelOptions,
            exclude: /node_modules\/(?!\.modern-js)/,
          })
          .end()
          .end()
          .oneOf('rsc-ssr')
          .use('rsc-ssr-loader')
          .loader(rscSsrLoaderPath)
          .options({
            serverReferencesMap,
          })
          .end()
          .use('babel')
          .loader(babelLoaderPath)
          .options({
            ...babelOptions,
            exclude: /node_modules\/(?!\.modern-js)/,
          })
          .end()
          .end()
          .oneOf('general-js')
          .end();

        chain.module
          .rule('server-module')
          .resource([
            /render\/.*\/server\/rsc/,
            // /index\.server/,
            // /App\.tsx/,
            // /runtime-global-context/,
          ])
          .layer(webpackRscLayerName)
          .end();

        chain.module
          .rule('client-module')
          .resource([
            /runtime-utils/,
            /core\/context/,
            /core\/loader/,
            /core\/react/,
            /core\/server/,
          ])
          .layer('default')
          .end();

        chain
          .plugin('rsc-server-plugin')
          .use(WebpackRscServerPlugin, [{ styles }]);

        chain.module
          .rule(webpackRscLayerName)
          .issuerLayer(webpackRscLayerName)
          .resolve.conditionNames.merge([webpackRscLayerName, '...']);

        CSS_RULE_NAMES.forEach(ruleName => {
          const rule = chain.module.rules.get(ruleName);
          if (rule) {
            chain.module
              .rule(ruleName)
              .use('custom-loader')
              .before('ignore-css')
              .loader(rscCssLoaderPath);
          }
        });

        chain.module.rule('css').uses.delete('ignore-css');
      } else {
        chain.name('client');
        chain.dependencies(['server']);
        chain.module
          .rule('js')
          .use('rsc-client-loader')
          .loader(rscClientLoaderPath)
          .options({
            serverReferencesMap,
            callServerImport: path.resolve(
              __dirname,
              'src/framework/client-entry',
            ),
          })
          .before('babel')
          .end();
        chain
          .plugin('rsc-client-plugin')
          .use(WebpackRscClientPlugin, [{ styles }]);
      }
    },
  },
});
