// @imports
import React from 'react';

import { mergedObjectsHandler } from '@/core/helpers/base';
import { ThemeProvider } from '@/core/styled/native';

import type { OreoProviderProps } from './provider.types';

import defaultTheme from '@/core/theme';
import { ToastProvider } from '../../components/toast';
import { ModalProvider } from '../../components/modal';
import type { ThemeType } from '@/core/theme';
import type { Subset } from '@/core/constants/index.types';
import { createContext } from '@/core/utils/context';
import type { ModeContextProviderProps } from '@/core/styled/components.types';
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
