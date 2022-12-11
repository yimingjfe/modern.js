import path from 'path';
import {
  LOADER_EXPORT_NAME,
  META_EXPORT_NAME,
} from '../../src/analyze/constants';
import { parseRouteModule } from '../../src/analyze/utils';

describe('parse module', () => {
  test('parse Route Module', async () => {
    const routeModulePath = path.join(
      __dirname,
      './fixtures/nested-routes/user/profile/page.tsx',
    );
    const routeModuleExports = await parseRouteModule(routeModulePath);
    expect(routeModuleExports).toHaveProperty(LOADER_EXPORT_NAME);
    expect(routeModuleExports).toHaveProperty(META_EXPORT_NAME);
  });
});
