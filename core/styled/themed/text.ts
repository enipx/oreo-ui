import type { TextThemedStyledProps } from '../components.types';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';

// @types
type TextSystemThemeParams = SystemThemeParams & TextThemedStyledProps;

export const getTextFont = (option: TextSystemThemeParams) => {
  const { theme } = option;
  if (theme.fonts.body) {
    return `
      font-family: ${theme.fonts.body};
      color: red;
    `;
  }

  return '';
};

export const textDefaultStyle = (option: TextSystemThemeParams) => {
  const { theme, type = 'web', textTransform } = option;

  const baseStyle = `
    text-transform: ${textTransform || 'none'};
  `;

  const native = `
    ${baseStyle}
    ${getTextFont(option)}
    font-size: ${theme.fontSizes.md};
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
