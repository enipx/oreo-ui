import styledTheme from 'styled-theming';

import type { StyledThemeProps } from '../index.types';

// @defaults
export const baseDefaults = {
  size: 'md',
};

// @themes
export const baseBackgroundColor = styledTheme('mode', {
  light: ({ theme }: StyledThemeProps) => theme.colors.white,
  dark: ({ theme }: StyledThemeProps) => theme.colors.gray[900],
});

export const baseColor = styledTheme('mode', {
  light: ({ theme }: StyledThemeProps) => theme.colors.gray[800],
  dark: ({ theme }: StyledThemeProps) => theme.colors.gray[50],
});
