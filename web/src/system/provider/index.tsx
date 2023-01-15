// @imports
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { GlobalStyle } from './global';
import { OreoProviderProps } from './provider.types';

import defaultTheme from '@/core/theme';

// @file declarations
export type { DefaultTheme };

export const OreoProvider = (props: OreoProviderProps) => {
  const { theme = defaultTheme, children } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
