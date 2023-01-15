// @imports
import React from 'react';

import { ThemeProvider, DefaultTheme } from 'styled-components/native';

import type { OreoProviderProps } from './provider.types';

import defaultTheme from '@/core/theme';

// @file declarations
export type { DefaultTheme };

export const OreoProvider = (props: OreoProviderProps) => {
  const { theme = defaultTheme, children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
