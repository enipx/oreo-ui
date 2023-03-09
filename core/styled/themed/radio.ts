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

  const sizes = {
    sm: {
      width: theme.space[1],
      height: theme.space[1],
    },
    md: {
      width: theme.space[1.5],
      height: theme.space[1.5],
    },
    lg: {
      width: theme.space[2],
      height: theme.space[2],
    },
  };

  type SizeKey = keyof typeof sizes;

  const baseStyle = ``;

  const native = `
    ${baseStyle}
  `;

  const web = `
    :checked:after {
      ${baseStyle}
      width: ${sizes[size as SizeKey].width};
      height: ${sizes[size as SizeKey].height};
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
