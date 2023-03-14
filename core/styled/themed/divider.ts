import type { DividerThemedDefaultProps } from '../components.types';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { baseBorderColorStyle, styleModeHandler } from './base';

import { isPackageNative } from '@/core/helpers/base';
import { convertHexToRgbaHandler } from '@/core/helpers/theme';

// @defaults
export const dividerDefaults = {
  size: 'xs',
};

// @themes
type DividerSystemThemeParams = SystemThemeParams & DividerThemedDefaultProps;

export const dividerDefaultStyle = (options: DividerSystemThemeParams) => {
  const {
    theme,
    type = 'web',
    size = dividerDefaults.size,
    orientation,
  } = options;

  const isNative = isPackageNative(type);

  const borderColor = styleModeHandler({
    theme,
    light: isNative ? 'blackAlpha.50' : 'blackAlpha.100',
    dark: isNative ? 'whiteAlpha.50' : 'whiteAlpha.100',
  });

  const { vertical } = getDividerOrientation(orientation);

  const { borderWidths } = theme.components.divider;

  const themeBorderWidth = borderWidths[size as keyof typeof borderWidths];

  const activeBorderWidth = themeBorderWidth || size;

  const borderWidth = vertical
    ? `
      border-top-width: 0px; 
      border-right-width: 0px;
      border-bottom-width: 0px;
      border-left-width: ${activeBorderWidth};
    `
    : `
      border-top-width: 0px; 
      border-right-width: 0px;
      border-bottom-width: ${activeBorderWidth};
      border-left-width: 0px;
    `;

  const baseStyle = `
    ${borderWidth}
    border-color: ${borderColor};
    border-style: solid;
    ${vertical ? 'height: 100%;' : 'width: 100%;'}
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

// @utilities
export const getDividerOrientation = (
  orientation: DividerSystemThemeParams['orientation']
) => {
  return {
    vertical: orientation === 'vertical',
    horizontal: orientation === 'horizontal',
  };
};
