import styledTheme from 'styled-theming';

import type { StyledThemeProps, SystemThemeParams } from '../index.types';

import type { ThemeModeKeys } from '@/core/constants/index.types';
import type {
  DefaultColorsSchemeKeys,
  DefaultColorsVariantsType,
} from '@/core/theme/utilities/colors';

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

// @styles
type BaseStyleObjectType = { [key in ThemeModeKeys]: any };

export const getBaseStyle = (options: SystemThemeParams) => {
  const { mode = 'light', theme } = options;

  const color: BaseStyleObjectType = {
    light: theme.colors.gray[800],
    dark: theme.colors.gray[50],
  };

  const backgroundColor: BaseStyleObjectType = {
    light: theme.colors.white,
    dark: theme.colors.gray[900],
  };

  const linkColor: BaseStyleObjectType = {
    light: theme.colors.blue[500],
    dark: theme.colors.blue[200],
  };

  return {
    color: color[mode],
    backgroundColor: backgroundColor[mode],
    linkColor: linkColor[mode],
  };
};

type ColorSchemeStyleOptionsType = SystemThemeParams & {
  colorScheme: DefaultColorsSchemeKeys;
  variant: DefaultColorsVariantsType;
};

export const getColorSchemeStyle = (options: ColorSchemeStyleOptionsType) => {
  const { theme, colorScheme, variant } = options;

  const variants: {
    [key in DefaultColorsVariantsType]: {
      color: string;
      backgroundColor: string;
      borderColor: string;
      iconBorderColor: string;
      hoverBackgroundColor: string;
    };
  } = {
    subtle: {
      backgroundColor: theme.colors[colorScheme][50],
      borderColor: theme.colors[colorScheme][50],
      iconBorderColor: theme.colors[colorScheme][50],
      hoverBackgroundColor: theme.colors[colorScheme][100],
      color: theme.colors[colorScheme][700],
    },
    solid: {
      backgroundColor: theme.colors[colorScheme][500],
      borderColor: theme.colors[colorScheme][500],
      iconBorderColor: theme.colors[colorScheme][500],
      hoverBackgroundColor: theme.colors[colorScheme][600],
      color: theme.colors.white,
    },
    outline: {
      backgroundColor: theme.colors.transparent,
      borderColor: theme.colors[colorScheme][500],
      iconBorderColor: theme.colors[colorScheme][100],
      hoverBackgroundColor: theme.colors[colorScheme][50],
      color: theme.colors[colorScheme][500],
    },
    ghost: {
      backgroundColor: theme.colors.transparent,
      borderColor: theme.colors.transparent,
      iconBorderColor: theme.colors.transparent,
      hoverBackgroundColor: theme.colors[colorScheme][50],
      color: theme.colors[colorScheme][500],
    },
    link: {
      backgroundColor: theme.colors.transparent,
      borderColor: theme.colors.transparent,
      iconBorderColor: theme.colors.transparent,
      hoverBackgroundColor: theme.colors.transparent,
      color: theme.colors[colorScheme][500],
    },
  };

  return variants[variant];
};
