// @imports
import React from 'react';

import { mergedObjectsHandler } from '@/core/helpers/base';
import { ThemeProvider, DefaultTheme } from '@/core/styled/native';

import type { OreoProviderProps } from './provider.types';

import defaultTheme from '@/core/theme';
import { ToastProvider } from '../../components/toast';

// @file declarations
export type { DefaultTheme };

export const OreoProvider = (props: OreoProviderProps) => {
  const { theme: specifiedTheme, children } = props;

  const theme = mergedObjectsHandler(defaultTheme(), specifiedTheme);

  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  );
};
