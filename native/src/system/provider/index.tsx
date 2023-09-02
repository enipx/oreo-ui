// @imports
import React from 'react';

import { mergedObjectsHandler } from '@oreo-ui/core/dist/helpers/base';
import { ThemeProvider } from '@oreo-ui/core/dist/styled/native';

import type { OreoProviderProps } from './provider.types';

import { theme as defaultTheme } from '@oreo-ui/core/dist/theme';
import { ToastProvider } from '../../components/toast';
import { ModalProvider } from '../../components/modal';
import type { ThemeType } from '@oreo-ui/core/dist/theme';
import type { Subset } from '@oreo-ui/core/dist/constants/index.types';
import { createContext } from '@oreo-ui/core/dist/utils/context';
import type { ModeContextProviderProps } from '@oreo-ui/core/dist/styled/components.types';
import { useMode } from '../../hooks/use-mode';

// @file declarations
export type DefaultTheme = Subset<ThemeType>;

const [ModeContextProvider, useModeContext] =
  createContext<ModeContextProviderProps>();

export { useModeContext };

export const OreoProvider = (props: OreoProviderProps) => {
  const { theme: specifiedTheme, children } = props;

  const _theme = mergedObjectsHandler(defaultTheme('native'), specifiedTheme);

  const {
    mode,
    toggle,
    save: update,
  } = useMode({
    mode: _theme.mode,
    ..._theme.modeOptions,
  });

  const theme: ThemeType = {
    ..._theme,
    mode: mode as any,
  };

  return (
    <ThemeProvider theme={theme}>
      <ModeContextProvider
        value={{
          mode,
          toggle,
          update,
        }}>
        <ToastProvider>
          <ModalProvider>{children}</ModalProvider>
        </ToastProvider>
      </ModeContextProvider>
    </ThemeProvider>
  );
};
