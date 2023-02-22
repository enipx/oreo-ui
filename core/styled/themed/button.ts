import { variant } from 'styled-system';

import type {
  ButtonThemedStyledProps,
  IconButtonThemedStyledProps,
} from '../components.types';
import { flexCenterStyle, transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { getColorSchemeStyle } from './base';

import { isPackageNative } from '@/core/helpers/base';
import type { RadiiKeys } from '@/core/theme/utilities/radius';
import type { SpacingKeys } from '@/core/theme/utilities/spacing';
import type { FontSizeKeys } from '@/core/theme/utilities/typography';

// @types
type ButtonSystemThemeParams = SystemThemeParams & ButtonThemedStyledProps;
type IconButtonSystemThemeParams = SystemThemeParams &
  IconButtonThemedStyledProps;

// @themes
export const buttonDefaults = {
  disabledOpacity: 0.5,
  activeOpacity: 0.8,
  colorScheme: 'blue',
  size: 'md',
};

export const iconButtonDefaults = {
  disabledOpacity: 0.5,
  activeOpacity: 0.8,
  colorScheme: 'gray',
  size: 'md',
};

// @styles
export const buttonStateVariant = (options: ButtonSystemThemeParams) => {
  const { theme, colorScheme, variant: buttonVariant, mode } = options;

  const { borderColor, hoverBackgroundColor } = getColorSchemeStyle({
    theme,
    colorScheme: colorScheme || 'blue',
    variant: buttonVariant || 'solid',
    mode,
  });

  return variant({
    prop: 'state',
    variants: {
      focused: {
        backgroundColor: hoverBackgroundColor,
        borderColor,
      },
      hovered: {
        backgroundColor: hoverBackgroundColor,
        borderColor,
      },
      disabled: {
        opacity: buttonDefaults.disabledOpacity,
      },
    },
  });
};

export const buttonSizeVariant = (options: ButtonSystemThemeParams) => {
  const { theme, type = 'web', rounded } = options;

  const isNative = isPackageNative(type);

  const getBorderRadius = (size: RadiiKeys) => {
    return rounded ? theme.radii.full : theme.radii[size];
  };

  return variant({
    prop: 'size',
    variants: {
      xs: {
        ...(isNative ? {} : { fontSize: theme.fontSizes.xs }),
        height: theme.space[6],
        px: 2,
        borderRadius: getBorderRadius('sm'),
      },
      sm: {
        ...(isNative ? {} : { fontSize: theme.fontSizes.xs }),
        height: theme.space[8],
        px: 3,
        borderRadius: getBorderRadius('sm'),
      },
      lg: {
        ...(isNative ? {} : { fontSize: theme.fontSizes.md }),
        height: theme.space[12],
        px: 6,
        borderRadius: getBorderRadius('md'),
      },
      md: {
        ...(isNative ? {} : { fontSize: theme.fontSizes.sm }),
        height: theme.space[10],
        px: 4,
        borderRadius: getBorderRadius('md'),
      },
    },
  });
};

export const buttonDefaultStyle = (options: ButtonSystemThemeParams) => {
  const {
    theme,
    type = 'web',
    disabled,
    colorScheme,
    variant,
    fullWidth,
  } = options;

  const { backgroundColor, color, borderColor, hoverBackgroundColor } =
    getColorSchemeStyle({
      theme,
      colorScheme: colorScheme || 'blue',
      variant: variant || 'solid',
    });

  const opacity = disabled ? buttonDefaults.disabledOpacity : 1;
  const width = fullWidth ? '100%' : 'auto';

  const baseStyle = `
    ${flexCenterStyle}
    ${transitionStyle()}
    opacity: ${opacity};
    background-color: ${backgroundColor};
    border-width: 1px;
    border-style: solid;
    border-color: ${borderColor};
  `;

  const native = `
    ${baseStyle}
    ${!fullWidth ? 'align-self: flex-start;' : ''}
  `;

  const web = `
    ${baseStyle}
    appearance: none;
    cursor: pointer;
    font-weight: ${theme.fontWeights.medium};
    line-height: ${theme.lineHeights[0]};
    outline: 0;
    white-space: nowrap;
    width: ${width};
    color: ${color};

    :hover,
    :active,
    :focus {
      background-color: ${hoverBackgroundColor};
      text-decoration: ${variant === 'link' ? 'underline' : 'auto'}
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const buttonTextDefaultStyle = (options: ButtonSystemThemeParams) => {
  const { theme, type = 'web', colorScheme, variant } = options;

  const { color } = getColorSchemeStyle({
    theme,
    colorScheme: colorScheme || 'blue',
    variant: variant || 'solid',
  });

  const baseStyle = `
    font-weight: ${theme.fontWeights.medium};
    color: ${color};
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

// @Icon Button
export const iconButtonDefaultStyle = (
  options: IconButtonSystemThemeParams
) => {
  const { theme, type = 'web', disabled, colorScheme, variant } = options;

  const { backgroundColor, color, iconBorderColor, hoverBackgroundColor } =
    getColorSchemeStyle({
      theme,
      colorScheme: colorScheme || 'gray',
      variant: variant || 'ghost',
    });

  const opacity = disabled ? iconButtonDefaults.disabledOpacity : 1;

  const baseStyle = `
    ${flexCenterStyle}
    ${transitionStyle()}
    opacity: ${opacity};
    flex-shrink: 0;
    background-color: ${backgroundColor};
    border-width: 1px;
    border-style: solid;
    border-color: ${iconBorderColor};
  `;

  const native = `
    ${baseStyle}
    align-self: flex-start;
  `;

  const web = `
    ${baseStyle}
    appearance: none;
    cursor: pointer;
    line-height: ${theme.lineHeights[0]};
    outline: 0;
    white-space: nowrap;
    color: ${color};

    :hover,
    :active,
    :focus {
      background-color: ${hoverBackgroundColor};
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const iconButtonSizeVariant = (options: IconButtonSystemThemeParams) => {
  const { theme, rounded } = options;

  const getBorderRadius = (key: RadiiKeys) => {
    return rounded ? theme.radii.full : theme.radii[key];
  };

  return variant({
    prop: 'size',
    variants: {
      xs: {
        size: theme.space[6],
        borderRadius: getBorderRadius('sm'),
      },
      sm: {
        size: theme.space[8],
        borderRadius: getBorderRadius('sm'),
      },
      lg: {
        size: theme.space[12],
        borderRadius: getBorderRadius('md'),
      },
      md: {
        size: theme.space[10],
        borderRadius: getBorderRadius('md'),
      },
    },
  });
};

export const buttonIconSpacing: Record<string, SpacingKeys> = {
  xs: 'sm',
  sm: 'md',
  md: 'md',
  lg: 'md',
};

export const buttonTextsize: Record<string, FontSizeKeys> = {
  xs: 'xs',
  sm: 'sm',
  md: 'sm',
  lg: 'md',
};
