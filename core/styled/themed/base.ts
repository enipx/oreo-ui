import type { StyledThemeProps, SystemThemeParams } from '../index.types';
import { themer } from '../web';

import type { ThemeModeKeys } from '@/core/constants/index.types';
import { getThemeValueHandler } from '@/core/helpers/theme';
import type {
  DefaultColorsSchemeKeys,
  DefaultColorsVariantsType,
} from '@/core/theme/utilities/colors';

// @defaults
export const baseDefaults = {
  size: 'md',
};

// @utilities
export const modeHandler = (light: string, dark: string) => {
  return themer('mode', {
    light: ({ theme }: StyledThemeProps) =>
      getThemeValueHandler({ theme, value: light }),
    dark: ({ theme }: StyledThemeProps) =>
      getThemeValueHandler({ theme, value: dark }),
  });
};

// @themes
export const baseBackgroundColor = modeHandler('white', 'gray.900');

export const baseColor = modeHandler('gray.900', 'gray.50');

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

  const borderColor: BaseStyleObjectType = {
    light: theme.colors.gray[50],
    dark: theme.colors.gray[800],
  };

  const linkColor: BaseStyleObjectType = {
    light: theme.colors.blue[500],
    dark: theme.colors.blue[200],
  };

  return {
    color: color[mode],
    backgroundColor: backgroundColor[mode],
    borderColor: borderColor[mode],
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
      hoverBackgroundColor: theme.colors[colorScheme][50],
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
      color: theme.colors[colorScheme][700],
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
