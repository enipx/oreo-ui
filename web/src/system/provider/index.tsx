// @imports
import { ModalProvider } from '@components/modal';
import { ToastProvider } from '@components/toast';

import { useMode } from '../../hooks/use-mode/use-mode';
import { GlobalStyle } from './global';
import { OreoProviderProps } from './provider.types';

import { mergedObjectsHandler } from '@/core/helpers/base';
import { ThemeProvider, DefaultTheme } from '@/core/styled/web';
import defaultTheme, { ThemeType } from '@/core/theme';

// @file declarations
export type { DefaultTheme };

export const OreoProvider = (props: OreoProviderProps) => {
  const { theme: specifiedTheme, children } = props;

  const _theme = mergedObjectsHandler(
    defaultTheme('web'),
    specifiedTheme
  ) as ThemeType;

  const { mode } = useMode({
    mode: _theme.mode,
  });

  const theme: ThemeType = {
    ..._theme,
    mode: mode as any,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <ToastProvider>
        <ModalProvider>{children}</ModalProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};
