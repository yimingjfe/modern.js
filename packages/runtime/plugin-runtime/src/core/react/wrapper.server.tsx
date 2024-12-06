'use client';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { type RuntimeContext, RuntimeReactContext } from '../context';
import { useServerRuntimeContext } from '../server/utils';

export function wrapRuntimeContextProvider(
  App: React.ReactElement,
  contextValue: RuntimeContext,
) {
  return React.createElement(
    RuntimeReactContext.Provider,
    { value: contextValue },
    App,
  );
}

type RuntimeProviderProps = {};

export function RuntimeContextProvider({
  children,
}: PropsWithChildren<RuntimeProviderProps>) {
  const context = useServerRuntimeContext();
  const runtimeContext = context.runtimeContext;
  return (
    <RuntimeReactContext.Provider
      value={{
        ...runtimeContext,
        ssr: true,
      }}
    >
      {children}
    </RuntimeReactContext.Provider>
  );
}
