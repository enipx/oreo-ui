// @imports
import React from 'react';

import { ThemeProvider } from 'styled-components/native';

import type { OreoProviderProps } from './provider.types';

import defaultTheme from '@/core/theme';

// @file declarations
export const DefaultTheme = defaultTheme;

export const OreoProvider = (props: OreoProviderProps) => {
  const { theme = defaultTheme, children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
