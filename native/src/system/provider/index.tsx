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

// @file declarations
export type DefaultTheme = Subset<ThemeType>;

export const OreoProvider = (props: OreoProviderProps) => {
  const { theme: specifiedTheme, children } = props;

  const theme = mergedObjectsHandler(defaultTheme('native'), specifiedTheme);

  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <ModalProvider>{children}</ModalProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};
