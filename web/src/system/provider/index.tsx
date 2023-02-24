// @imports
import { ToastProvider } from '@components/toast';

import { GlobalStyle } from './global';
import { OreoProviderProps } from './provider.types';

import { mergedObjectsHandler } from '@/core/helpers/base';
import { ThemeProvider, DefaultTheme } from '@/core/styled/web';
import defaultTheme from '@/core/theme';

// @file declarations
export type { DefaultTheme };

export const OreoProvider = (props: OreoProviderProps) => {
  const { theme: specifiedTheme, children } = props;

  const theme = mergedObjectsHandler(defaultTheme('web'), specifiedTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  );
};
