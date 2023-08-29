import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { getBaseStyle, styleModeHandler } from './base';
import { buttonBaseStyle } from './button';

import { convertHexToRgbaHandler } from '@/core/helpers/theme';

// @defaults
export const dropdownDefaults = {};

// @themes
type DropdownSystemThemeParams = SystemThemeParams;

export const dropdownItemDefaultStyle = (
  options: DropdownSystemThemeParams
) => {
  const { theme, type = 'web' } = options;

  const { borderColor, color } = getBaseStyle(options);

  const defaultStyle = buttonBaseStyle(options as any);

  const padding = `${theme.space[3]} ${theme.space[4]}`;

  const hoverBackgroundColor = styleModeHandler({
    theme,
    light: convertHexToRgbaHandler(theme.colors.gray[50], 0.5),
    dark: convertHexToRgbaHandler(theme.colors.gray[800], 0.5),
  });

  const baseStyle = `
    ${defaultStyle}
    width: 100%;
    border-bottom: 1px solid ${borderColor};
    padding: ${padding};
    color: ${color};

    &:hover {
      background-color: ${hoverBackgroundColor};
    }
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
