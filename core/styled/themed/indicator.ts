import type {
  IndicatorThemedDefaultProps,
  IndicatorPositionTypes,
} from '../components.types';
import { flexCenterStyle, transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { getBaseStyle, getColorSchemeStyle } from './base';

import type { SpacingKeys } from '@/core/theme/utilities/spacing';

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

  const { theme, size } = options;

  const { fontSizes, size: sizes, borderWidths } = theme.components.indicator;

  const borderColor = getBaseStyle(options).backgroundColor;

  const width = sizes[size as keyof typeof sizes];

  const height = width;

  const fontSize = fontSizes[size as keyof typeof sizes];

  const borderWidth = borderWidths[size as keyof typeof sizes];

  const baseSize: SizesObjectType = {
    width: theme.space?.[size as SpacingKeys] || size || '',
    height: theme.space?.[size as SpacingKeys] || size || '',
    fontSize: fontSizes.md,
    borderColor,
    borderWidth: borderWidths.md,
  };

  const sizeStyle: SizesObjectType = {
    width,
    height,
    fontSize,
    borderColor,
    borderWidth,
  };

  return size ? sizeStyle : baseSize;
};

export const getIndicatorPositionStyle = (
  options: IndicatorSystemThemeParams
) => {
  type PositionType = { [key in IndicatorPositionTypes]: string };

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
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    ${transitionStyle()}
    font-size: ${fontSize};
    color: ${color};
    padding: ${theme.space[1]};
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const indicatorTextDefaultStyle = (
  options: IndicatorSystemThemeParams
) => {
  const { theme, type = 'web', colorScheme, variant } = options;

  const { fontSize } = getIndicatorSizeStyle(options);

  const { color } = getColorSchemeStyle({
    theme,
    colorScheme: colorScheme || 'blue',
    variant: variant || 'solid',
  });

  const baseStyle = `
    font-size: ${fontSize};
    color: ${color};
    font-weight: ${theme.fontWeights.semiBold};
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
