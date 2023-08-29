import { variant } from 'styled-system';

import type {
  ButtonSizeType,
  ButtonThemedStyledProps,
  IconButtonThemedStyledProps,
} from '../components.types';
import { flexCenterStyle, transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import {
  getBaseStyle,
  getColorSchemeStyle,
  getSpacingValue,
  getThemeMode,
} from './base';

import { packagePrefix } from '@/core/constants';
import { isPackageNative } from '@/core/helpers/base';
import {
  convertHexToRgbaHandler,
  convertReactCSSToCSSHandler,
} from '@/core/helpers/theme';
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
  iconClassName: `${packagePrefix}-button_icon`,
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
  const {
    theme,
    packageType = 'web',
    rounded,
    size = buttonDefaults.size,
  } = options;

  const isNative = isPackageNative(packageType);

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

export const buttonBaseStyle = (options: ButtonSystemThemeParams) => {
  const { theme, packageType = 'web' } = options;

  const baseStyle = `
    appearance: none;
    cursor: pointer;
    outline: 0;
    border: 0;
    background-color: ${theme.colors.transparent};
    font-weight: ${theme.fontWeights.medium};
    font-size: ${theme.fontSizes.sm};
    display: block;
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

  return res[packageType];
};

export const buttonDefaultStyle = (options: ButtonSystemThemeParams) => {
  const {
    theme,
    packageType = 'web',
    disabled,
    colorScheme,
    variant,
    fullWidth,
    width: _width,
    size,
    _hover,
    _focus,
    _active,
  } = options;

  const { isDark } = getThemeMode(theme);

  const { backgroundColor: baseBgColor } = getBaseStyle({ theme });

  const { backgroundColor, color, borderColor, hoverBackgroundColor } =
    getColorSchemeStyle({
      theme,
      colorScheme: colorScheme || 'blue',
      variant: variant || 'solid',
    });

  const opacity = disabled ? buttonDefaults.disabledOpacity : 1;

  const width =
    getSpacingValue({ theme, value: _width }) || fullWidth ? '100%' : 'auto';

  const baseStyle = `
    ${flexCenterStyle}
    ${transitionStyle()}
    opacity: ${opacity};
    background-color: ${backgroundColor};
    border: ${variant === 'outline' ? '1px' : '0'} solid ${borderColor};
  `;

  const native = `
    ${baseStyle}
    ${!fullWidth ? 'align-self: flex-start;' : ''}
    flex-direction: row;
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
    gap: ${getSpacingValue({
      theme,
      value: buttonIconSpacing[size || buttonDefaults.size],
    })};

    :hover,
    :active {
      background-color: ${hoverBackgroundColor};
      text-decoration: ${variant === 'link' ? 'underline' : 'auto'};
    }

    :active {
      ${convertReactCSSToCSSHandler(_active)}
    }

    :hover {
      ${convertReactCSSToCSSHandler(_hover)}
    }

    :focus {
      box-shadow: ${baseBgColor} 0px 0px 0px 2px, ${convertHexToRgbaHandler(
    theme.colors.blue[400],
    isDark ? 0.7 : 0.5
  )} 0px 0px 0px 4px;
      ${convertReactCSSToCSSHandler(_focus)}
    }

    .${buttonDefaults.iconClassName} {
      color: ${color};
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[packageType];
};

export const buttonTextDefaultStyle = (options: ButtonSystemThemeParams) => {
  const {
    theme,
    packageType = 'web',
    colorScheme,
    variant,
    buttonSize,
  } = options;

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

  return res[packageType];
};

// @Icon Button
export const iconButtonDefaultStyle = (
  options: IconButtonSystemThemeParams
) => {
  const {
    theme,
    packageType = 'web',
    disabled,
    colorScheme,
    variant,
    _focus,
    _hover,
    _active,
  } = options;

  const { isDark } = getThemeMode(theme);

  const { backgroundColor: baseBgColor } = getBaseStyle({ theme });

  const {
    backgroundColor,
    color,
    iconBorderColor,
    hoverBackgroundColor,
    borderColor,
  } = getColorSchemeStyle({
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
    border: ${variant === 'outline' ? '1px' : '0'} solid ${borderColor};
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

    :hover {
      ${convertReactCSSToCSSHandler(_hover)}
    }
  
    :focus {
      box-shadow: ${baseBgColor} 0px 0px 0px 2px, ${convertHexToRgbaHandler(
    iconBorderColor,
    isDark ? 0.7 : 0.5
  )} 0px 0px 0px 4px;
      ${convertReactCSSToCSSHandler(_focus)}
    }

    :active {
      ${convertReactCSSToCSSHandler(_active)}
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[packageType];
};

export const iconButtonSizeVariant = (options: IconButtonSystemThemeParams) => {
  const { theme, rounded, size } = options;

  const {
    height: heights,
    width: widths,
    borderRadius: radiis,
  } = theme.components.iconButton;

  const width = widths[size as keyof typeof widths];

  const height = heights[size as keyof typeof heights];

  const borderRadius = rounded
    ? theme.radii.full
    : radiis[size as keyof typeof radiis];

  const styles = {
    height,
    width,
    borderRadius,
  };

  return convertReactCSSToCSSHandler(styles);
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
