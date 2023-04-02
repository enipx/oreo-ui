import type { StyledThemeProps, SystemThemeParams } from '../index.types';
import { themer } from '../web';

import type { ThemeModeKeys } from '@/core/constants/index.types';
import {
  convertHexToRgbaHandler,
  getThemeValueHandler,
} from '@/core/helpers/theme';
import type { ThemeType } from '@/core/theme';
import type {
  DefaultColorsSchemeKeys,
  DefaultColorsVariantsType,
} from '@/core/theme/utilities/colors';
import { SpacingKeys } from '@/core/theme/utilities/spacing';

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
      getThemeValueHandler({ theme, value: dark || light }),
  });
};

type VariantModeValuesType = Record<string, { [key in ThemeModeKeys]?: any }>;

export const variantModeHandler = (
  prop: string,
  values: VariantModeValuesType
) => {
  const newValues: VariantModeValuesType = {};

  Object.entries(values).forEach(([key, value]) => {
    newValues[key] = {
      light: ({ theme }: StyledThemeProps) =>
        getThemeValueHandler({ theme, value: value?.light || '' }),
      dark: ({ theme }: StyledThemeProps) =>
        getThemeValueHandler({
          theme,
          value: value?.dark || value?.light || '',
        }),
    };
  });

  return themer.variants('mode', prop, newValues);
};

export const styleModeHandler = (options: {
  light: string;
  dark?: string;
  theme: ThemeType;
}) => {
  const { light, theme } = options;

  const dark = options?.dark || light;

  const mode = theme.mode as ThemeModeKeys;

  const res: BaseStyleObjectType = {
    light: getThemeValueHandler({ theme, value: light }),
    dark: getThemeValueHandler({ theme, value: dark }),
  };

  return res[mode];
};

// @themes
export const baseBackgroundColor = modeHandler('white', 'gray.900');

export const baseColor = modeHandler('gray.700', 'gray.100');

export const baseBorderColor = modeHandler('gray.50', 'gray.800');

export const baseBackgroundColorStyle = (options: StyledThemeProps) => {
  return styleModeHandler({
    theme: options.theme,
    light: 'white',
    dark: 'gray.900',
  });
};

export const baseColorStyle = (options: StyledThemeProps) => {
  return styleModeHandler({
    theme: options.theme,
    light: 'gray.700',
    dark: 'gray.100',
  });
};

export const baseBorderColorStyle = (options: StyledThemeProps) => {
  return styleModeHandler({
    theme: options.theme,
    light: 'gray.50',
    dark: 'gray.800',
  });
};

// @styles
type BaseStyleObjectType = { [key in ThemeModeKeys]: any };

export const getBaseStyle = (options: SystemThemeParams) => {
  const { theme } = options;

  const mode = theme.mode as ThemeModeKeys;

  const color: BaseStyleObjectType = {
    light: theme.colors.gray[700],
    dark: theme.colors.gray[100],
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

  const subtleModeStyle = {
    base: styleModeHandler({
      light: `${colorScheme}.50`,
      dark: convertHexToRgbaHandler(theme.colors[colorScheme][50], 0.1),
      theme,
    }),
    border: styleModeHandler({
      light: `${colorScheme}.50`,
      dark: 'transparent',
      theme,
    }),
    hoverBg: styleModeHandler({
      light: `${colorScheme}.100`,
      dark: convertHexToRgbaHandler(theme.colors[colorScheme][100], 0.3),
      theme,
    }),
    hoverBorder: styleModeHandler({
      light: `${colorScheme}.100`,
      dark: 'transparent',
      theme,
    }),
    color: styleModeHandler({
      light: `${colorScheme}.700`,
      dark: `${colorScheme}.50`,
      theme,
    }),
  };

  const solidModeStyle = {
    base: styleModeHandler({
      light: `${colorScheme}.500`,
      dark: `${colorScheme}.600`,
      theme,
    }),
    hoverBg: styleModeHandler({
      light: `${colorScheme}.600`,
      dark: `${colorScheme}.500`,
      theme,
    }),
    color: styleModeHandler({
      light: `white`,
      theme,
    }),
  };

  const outlineModeStyle = {
    base: styleModeHandler({
      light: `transparent`,
      theme,
    }),
    border: styleModeHandler({
      light: `${colorScheme}.500`,
      dark: `${colorScheme}.300`,
      theme,
    }),
    iconBorder: styleModeHandler({
      light: `${colorScheme}.100`,
      dark: `${colorScheme}.700`,
      theme,
    }),
    hoverBg: styleModeHandler({
      light: `${colorScheme}.50`,
      dark: convertHexToRgbaHandler(theme.colors[colorScheme][50], 0.1),
      theme,
    }),
    color: styleModeHandler({
      light: `${colorScheme}.500`,
      dark: `${colorScheme}.400`,
      theme,
    }),
  };

  const ghostModeStyle = {
    base: styleModeHandler({
      light: `transparent`,
      theme,
    }),
    hoverBg: styleModeHandler({
      light: `${colorScheme}.50`,
      dark: convertHexToRgbaHandler(theme.colors[colorScheme][50], 0.1),
      theme,
    }),
    hoverBorder: styleModeHandler({
      light: `${colorScheme}.50`,
      dark: 'transparent',
      theme,
    }),
    color: styleModeHandler({
      light: `${colorScheme}.700`,
      dark: `${colorScheme}.200`,
      theme,
    }),
  };

  const linkModeStyle = {
    base: styleModeHandler({
      light: `transparent`,
      theme,
    }),
    color: styleModeHandler({
      light: `${colorScheme}.500`,
      dark: `${colorScheme}.200`,
      theme,
    }),
  };

  const variants: {
    [key in DefaultColorsVariantsType]: {
      color: string;
      backgroundColor: string;
      borderColor: string;
      iconBorderColor: string;
      hoverBackgroundColor: string;
      hoverBorderColor: string;
    };
  } = {
    subtle: {
      backgroundColor: subtleModeStyle.base,
      borderColor: subtleModeStyle.border,
      iconBorderColor: subtleModeStyle.base,
      hoverBackgroundColor: subtleModeStyle.hoverBg,
      hoverBorderColor: subtleModeStyle.hoverBorder,
      color: subtleModeStyle.color,
    },
    solid: {
      backgroundColor: solidModeStyle.base,
      borderColor: solidModeStyle.base,
      iconBorderColor: solidModeStyle.base,
      hoverBackgroundColor: solidModeStyle.hoverBg,
      hoverBorderColor: solidModeStyle.hoverBg,
      color: solidModeStyle.color,
    },
    outline: {
      backgroundColor: outlineModeStyle.base,
      borderColor: outlineModeStyle.border,
      iconBorderColor: outlineModeStyle.iconBorder,
      hoverBackgroundColor: outlineModeStyle.hoverBg,
      hoverBorderColor: outlineModeStyle.border,
      color: outlineModeStyle.border,
    },
    ghost: {
      backgroundColor: ghostModeStyle.base,
      borderColor: ghostModeStyle.base,
      iconBorderColor: ghostModeStyle.base,
      hoverBackgroundColor: ghostModeStyle.hoverBg,
      hoverBorderColor: ghostModeStyle.hoverBorder,
      color: ghostModeStyle.color,
    },
    link: {
      backgroundColor: linkModeStyle.base,
      borderColor: linkModeStyle.base,
      iconBorderColor: linkModeStyle.base,
      hoverBackgroundColor: linkModeStyle.base,
      hoverBorderColor: linkModeStyle.base,
      color: linkModeStyle.color,
    },
  };

  return variants[variant];
};

export const getSpacingValue = (options: { value?: any; theme: ThemeType }) => {
  const { theme, value } = options;

  return value ? theme.space?.[value as SpacingKeys] || value : '';
};
