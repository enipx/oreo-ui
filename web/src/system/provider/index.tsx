// @imports

import type { Subset } from '@/core/constants/index.types';
import { mergedObjectsHandler } from '@/core/helpers/base';
import type { ModeContextProviderProps } from '@/core/styled/components.types';
import { ThemeProvider } from '@/core/styled/web';
import defaultTheme, { ThemeType } from '@/core/theme';
import { createContext } from '@/core/utils/context';

import { ModalProvider } from '@components/modal';
import { ToastProvider } from '@components/toast';

import { useMode } from '../../hooks/use-mode/use-mode';
import { GlobalStyle } from './global';
import { OreoProviderProps } from './provider.types';
import { StyledComponentsRegistry } from './registry';

// @file declarations
export type DefaultTheme = Subset<ThemeType>;

const [ModeContextProvider, useModeContext] =
  createContext<ModeContextProviderProps>();

export { useModeContext, StyledComponentsRegistry };

export const OreoProvider = (props: OreoProviderProps) => {
  const { theme: specifiedTheme, children } = props;

  const _theme = mergedObjectsHandler(
    defaultTheme('web'),
    specifiedTheme
  ) as ThemeType;

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
        <GlobalStyle theme={theme} />
        <ToastProvider>
          <ModalProvider>{children}</ModalProvider>
        </ToastProvider>
      </ModeContextProvider>
    </ThemeProvider>
  );
};
