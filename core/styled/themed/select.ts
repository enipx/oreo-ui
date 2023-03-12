import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { styleModeHandler } from './base';

// @button themes
export const selectDefaults = {
  disabledOpacity: 0.5,
  colorScheme: 'blue',
  activeOpacity: 0.8,
  size: 'md',
  state: 'default',
};

export const selectDefaultFontSize = (option: SystemThemeParams) => {
  const { theme, size = selectDefaults.size } = option;

  const { fontSizes } = theme.components.select;

  const fontSize = fontSizes[size as keyof typeof fontSizes];

  return fontSize;
};

export const selectDefaultPadding = (option: SystemThemeParams) => {
  const { theme, size = selectDefaults.size } = option;

  const { paddingX: selectPaddingX } = theme.components.input;

  const paddingX = selectPaddingX[size as keyof typeof selectPaddingX];

  const styles = {
    pl: paddingX,
    pr: paddingX,
  };

  return styles;
};

export const selectBaseStyle = (option: SystemThemeParams) => {
  const { type = 'web' } = option;

  const { pl, pr } = selectDefaultPadding(option);

  const fontSize = selectDefaultFontSize(option);

  const baseStyle = `
    padding-left: ${pl};
    padding-right: ${pr};
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    font-size: ${fontSize};
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const selectContainerBaseStyle = (option: SystemThemeParams) => {
  const { type = 'web' } = option;

  const { pl } = selectDefaultPadding(option);

  const baseStyle = `
    padding: 0;
    padding-left: ${pl};
  `;

  const native = `
    ${baseStyle}
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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

export const selectPlaceholderBaseStyle = (option: SystemThemeParams) => {
  const { theme, type = 'web' } = option;

  const fontSize = selectDefaultFontSize(option);

  const baseStyle = `
    font-size: ${fontSize};
    color: ${styleModeHandler({ light: 'gray.500', dark: 'gray.300', theme })};
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
