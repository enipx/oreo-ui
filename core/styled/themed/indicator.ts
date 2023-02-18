import type {
  IndicatorThemedDefaultProps,
  AvatarSizeTypes,
  IndicatorPostionTypes,
} from '../components.types';
import { flexCenterStyle, transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { getBaseStyle, getColorSchemeStyle } from './base';

import { SpacingKeys } from '@/core/theme/utilities/spacing';

// @defaults
export const indicatorDefaults = {};

// @themes
type IndicatorSystemThemeParams = SystemThemeParams &
  IndicatorThemedDefaultProps;

export const getIndicatorSizeStyle = (options: IndicatorSystemThemeParams) => {
  type SizesObjectType = {
    width: string | number;
    height: string | number;
    fontSize: string | number;
    borderColor: string | number;
    borderWidth: string | number;
  };

  type SizesType = {
    [key in AvatarSizeTypes]: SizesObjectType;
  };

  const { theme, size } = options;

  const borderColor = getBaseStyle(options).backgroundColor;

  const fontSize = theme.fontSizes['2xs'];

  const baseSize: SizesObjectType = {
    width: theme.space?.[size as SpacingKeys] || size || '',
    height: theme.space?.[size as SpacingKeys] || size || '',
    fontSize,
    borderColor,
    borderWidth: '2px',
  };

  const sizes: SizesType = {
    xs: {
      width: theme.space[3],
      height: theme.space[3],
      fontSize,
      borderColor,
      borderWidth: '2px',
    },
    sm: {
      width: theme.space[3.5],
      height: theme.space[3.5],
      fontSize,
      borderColor,
      borderWidth: '2px',
    },
    md: {
      width: theme.space[4],
      height: theme.space[4],
      fontSize,
      borderColor,
      borderWidth: '2px',
    },
    lg: {
      width: theme.space[4.5],
      height: theme.space[4.5],
      fontSize,
      borderColor,
      borderWidth: '2px',
    },
    xl: {
      width: theme.space[5],
      height: theme.space[5],
      fontSize,
      borderColor,
      borderWidth: '3px',
    },
  };

  return sizes?.[size || 'md'] || baseSize;
};

export const getIndicatorPositionStyle = (
  options: IndicatorSystemThemeParams
) => {
  type PositionType = { [key in IndicatorPostionTypes]: string };

  const { pos, offset: _offset } = options;

  const { borderWidth } = getIndicatorSizeStyle(options);

  const offset = _offset || `-${borderWidth}`;

  const styles: PositionType = {
    'bottom-left': `
      bottom: ${offset};
      left: ${offset};
    `,
    'bottom-right': `
      bottom: ${offset};
      right: ${offset};
    `,
    'top-left': `
      top: ${offset};
      left: ${offset};
    `,
    'top-right': `
      top: ${offset};
      right: ${offset};
    `,
  };

  return styles[pos || 'top-right'];
};

export const indicatorDefaultStyle = (options: IndicatorSystemThemeParams) => {
  const { theme, type = 'web', colorScheme, variant } = options;

  const { width, height, fontSize, borderColor, borderWidth } =
    getIndicatorSizeStyle(options);

  const { backgroundColor, color } = getColorSchemeStyle({
    theme,
    colorScheme: colorScheme || 'blue',
    variant: variant || 'solid',
  });

  const baseStyle = `
    position: absolute;
    ${flexCenterStyle}
    min-width: ${width};
    height: ${height};
    border-radius: ${theme.radii.full};
    background-color: ${backgroundColor};
    z-index: ${theme.zIndices.fore};
    border-width: ${borderWidth};
    border-style: solid;
    border-color: ${borderColor};
    ${getIndicatorPositionStyle(options)}
    padding: ${theme.space[1]};
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    ${transitionStyle()}
    font-size: ${fontSize};
    color: ${color};
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};
