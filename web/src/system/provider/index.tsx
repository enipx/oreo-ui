// @imports
import { ThemeProvider } from 'styled-components';

import { OreoProviderProps } from './provider.types';

import defaultTheme from '@/core/theme';

// @file declarations
export const DefaultTheme = defaultTheme;

export const OreoProvider = (props: OreoProviderProps) => {
  const { theme = defaultTheme, children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
