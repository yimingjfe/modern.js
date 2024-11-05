import type { Module } from 'webpack';

const MODERN_RSC_INFO = 'modernRscInfo';

export function setBuildInfo(mod: Module, property: Record<string, any>) {
  mod.buildInfo = mod.buildInfo || {};

  Object.assign(mod.buildInfo, property);
}

export function setRscBuildInfo(mod: Module, property: Record<string, any>) {
  mod.buildInfo = mod.buildInfo || {};
  const rscBuildInfo = mod.buildInfo[MODERN_RSC_INFO] || {};

  Object.assign(rscBuildInfo, property);
  setBuildInfo(mod, { [MODERN_RSC_INFO]: rscBuildInfo });
}

export function getRscBuildInfo(mod: Module) {
  return mod.buildInfo?.[MODERN_RSC_INFO] || {};
}

export function isCssModule(mod: Module) {
  return getRscBuildInfo(mod).isCssModule;
}
