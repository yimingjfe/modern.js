/**
 * basic test of imported packages
 */
import * as PluginRuntime from '../src';
import head from '../src/exports/head';
import loadable from '../src/exports/loadable';
import * as model from '../src/state';
import * as router from '../src/router';
import * as bff from '../src/exports/server';
import * as ssr from '../src/core/server/index';
import * as styled from '../src/exports/styled';

describe('imported packages in plugin runtime', () => {
  it('plugin-runtime', () => {
    expect(PluginRuntime).toBeDefined();
  });

  it('Helmet', () => {
    expect(head).toBeDefined();
  });

  it('@loadable/component', () => {
    expect(loadable).toBeDefined();
  });

  it('model', () => {
    expect(model).toBeDefined();
  });

  it('router', () => {
    expect(router).toBeDefined();
  });

  it('server', () => {
    expect(bff).toBeDefined();
  });

  it('ssr', () => {
    expect(ssr).toBeDefined();
  });

  it('styled', () => {
    expect(styled).toBeDefined();
  });
});
