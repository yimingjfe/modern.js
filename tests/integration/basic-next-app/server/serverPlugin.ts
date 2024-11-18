import { pathToFileURL } from 'node:url';
import path from 'path';
import type { Context, ServerPlugin } from '@modern-js/server-core';

const handleResponse = async (
  c: Context,
  distDir: string,
  redirectId?: string,
) => {
  const location = c.req.query('location')
    ? JSON.parse(c.req.query('location') as string)
    : '';
  if (redirectId) {
    location.selectedId = redirectId;
  }
  // TODO: temp code
  const { renderRsc, ServerRoot } = await import(
    path.join(distDir, 'bundles/main.js')
  );
  const stream = await renderRsc({
    Component: ServerRoot,
    distDir,
    props: {
      selectedId: location?.selectedId,
      isEditing: location?.isEditing,
      searchText: location?.searchText,
    },
  });
  return c.body(stream, 200);
};

const moduleBasePath = new URL('../src', pathToFileURL(__filename)).href;

export default (): ServerPlugin => ({
  name: 'rsc-server-plugin',
  setup(api) {
    return {
      prepare() {
        const { middlewares, distDirectory } = api.useAppContext();
        middlewares.unshift({
          name: 'rsc',
          method: 'get',
          path: '/rsc',
          handler: async (c, next) => {
            return handleResponse(c, distDirectory);
          },
        });
      },
    };
  },
});
