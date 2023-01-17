import type { ThemeProviderProps, DefaultTheme } from 'styled-components';

export interface ProviderThemedStyledProps
  extends Partial<ThemeProviderProps<DefaultTheme>> {}
