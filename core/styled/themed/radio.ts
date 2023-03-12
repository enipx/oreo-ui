import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { styleModeHandler } from './base';
import { checkboxDefaultStyle, checkboxSizeVariant } from './checkbox';

// @checkbox themes
export const radioDefaults = {
  disabledOpacity: 0.5,
  activeOpacity: 0.8,
  size: 'md',
};

export const radioCheckedStyle = (options: SystemThemeParams) => {
  const { theme, type = 'web', size = radioDefaults.size } = options;

  const { checked } = theme.components.radio;

  type SizeKey = keyof typeof checked.width;

  const checkedWidth = checked.width[size as SizeKey];
  const checkedHeight = checked.height[size as SizeKey];

  const baseStyle = ``;

  const native = `
    ${baseStyle}
  `;

  const web = `
    :checked:after {
      ${baseStyle}
      width: ${checkedWidth};
      height: ${checkedHeight};
      border-radius: 50%;
      background-color: ${styleModeHandler({
        light: 'white',
        dark: 'gray.900',
        theme,
      })};
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const radioDefaultStyle = checkboxDefaultStyle;

export const radioSizeVariant = (options: SystemThemeParams) => {
  return checkboxSizeVariant({ ...options, isRadio: true });
};

// @utilities
export const radioDataExist = (data?: any[]) => data && data.length > 0;
