import type { SpinnerThemedDefaultProps } from '../components.types';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { getBaseStyle, getColorSchemeStyle } from './base';

import { isPackageNative } from '@/core/helpers/base';
import { divide } from '@/core/helpers/number';
import {
  convertHexToRgbaHandler,
  getThemeValueHandler,
} from '@/core/helpers/theme';

// @defaults
export const spinnerDefaults = {
  size: 'md',
  duration: 500,
};

// @themes
type SpinnerSystemThemeParams = SystemThemeParams & SpinnerThemedDefaultProps;

export const spinnerDefaultStyle = (options: SpinnerSystemThemeParams) => {
  const {
    theme,
    type = 'web',
    colorScheme,
    size = spinnerDefaults.size,
    duration = spinnerDefaults.duration,
    color,
    thickness,
    emptyColor: _emptyColor,
  } = options;

  const isNative = isPackageNative(type);

  const { backgroundColor: baseBgColor } = getBaseStyle({
    theme,
  });

  const { backgroundColor } = getColorSchemeStyle({
    theme,
    colorScheme: colorScheme || 'blue',
    variant: 'solid',
  });

  const specifiedBorderColor = getThemeValueHandler({
    theme,
    value: color || '',
  });

  const specifiedEmptyColor = getThemeValueHandler({
    theme,
    value: _emptyColor || '',
  });

  const { size: spinnerSize, borderWidths } = theme.components.spinner;

  const width = spinnerSize[size as keyof typeof spinnerSize];

  const borderWidth = borderWidths[size as keyof typeof borderWidths];

  const borderColor = specifiedBorderColor || backgroundColor;

  const emptyColor = isNative
    ? convertHexToRgbaHandler(baseBgColor, 0.01)
    : theme.colors.transparent;

  const borderRadius = isNative ? `${divide(width, 2)}px` : width;

  const baseStyle = `
    width: ${width};
    height: ${width};
    border-width: ${thickness || borderWidth};
    border-style: solid;
    border-bottom-color: ${specifiedEmptyColor || emptyColor};
    border-top-color: ${borderColor};
    border-left-color: ${borderColor};
    border-right-color: ${borderColor};
    border-radius: ${borderRadius};
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    display: inline-block;
    animation: spin ${duration}ms linear infinite;
  
    @keyframes spin {
       0% {
          transform: rotate(0deg);
       }
  
       100% {
          transform: rotate(360deg);
       }
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};
