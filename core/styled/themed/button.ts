import { variant } from 'styled-system';

import type {
  ButtonSizeType,
  ButtonThemedStyledProps,
  IconButtonThemedStyledProps,
} from '../components.types';
import { flexCenterStyle, transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { getColorSchemeStyle } from './base';

import { isPackageNative } from '@/core/helpers/base';
import { convertReactCSSToCSSHandler } from '@/core/helpers/theme';
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
  const { theme, colorScheme, variant: buttonVariant } = options;

  const { hoverBorderColor, hoverBackgroundColor } = getColorSchemeStyle({
    theme,
    colorScheme: colorScheme || 'blue',
    variant: buttonVariant || 'solid',
  });

  return variant({
    prop: 'state',
    variants: {
      focused: {
        backgroundColor: hoverBackgroundColor,
        borderColor: hoverBorderColor,
      },
      hovered: {
        backgroundColor: hoverBackgroundColor,
        borderColor: hoverBorderColor,
      },
      disabled: {
        opacity: buttonDefaults.disabledOpacity,
      },
    },
  });
};

export const buttonSizeVariant = (options: ButtonSystemThemeParams) => {
  const { theme, type = 'web', rounded, size = buttonDefaults.size } = options;

  const isNative = isPackageNative(type);

  const {
    height: heights,
    fontSizes,
    borderRadius: radiis,
    paddingX: _paddingX,
  } = theme.components.button;

  const height = heights[size as keyof typeof heights];

  const fontSize = fontSizes[size as keyof typeof fontSizes];

  const borderRadius = rounded
    ? theme.radii.full
    : radiis[size as keyof typeof radiis];

  const paddingX = _paddingX[size as keyof typeof _paddingX];

  const styles = {
    ...(isNative ? {} : { fontSize }),
    height,
    paddingLeft: paddingX,
    paddingRight: paddingX,
    borderRadius,
  };

  return convertReactCSSToCSSHandler(styles);
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

  const {
    backgroundColor,
    color,
    borderColor,
    hoverBorderColor,
    hoverBackgroundColor,
  } = getColorSchemeStyle({
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
      border-color: ${hoverBorderColor};
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
  const { theme, type = 'web', colorScheme, variant, buttonSize } = options;

  const { color } = getColorSchemeStyle({
    theme,
    colorScheme: colorScheme || 'blue',
    variant: variant || 'solid',
  });

  const { fontSizes } = theme.components.button;

  const size: ButtonSizeType = buttonSize || buttonDefaults.size;

  const fontSize = fontSizes[size];

  const baseStyle = `
    font-weight: ${theme.fontWeights.medium};
    color: ${color};
  `;

  const native = `
    ${baseStyle}
    font-size: ${fontSize};
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
