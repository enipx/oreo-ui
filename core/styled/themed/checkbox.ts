import { flexCenterStyle, positionCenterStyle, transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { styleModeHandler } from './base';
import { inputPseudoStyle } from './input';

import { convertReactCSSToCSSHandler } from '@/core/helpers/theme';

// @checkbox themes
export const checkboxDefaults = {
  disabledOpacity: 0.5,
  activeOpacity: 0.8,
  size: 'md',
};

export const checkboxCheckedStyle = (options: SystemThemeParams) => {
  const {
    theme,
    type = 'web',
    indeterminate,
    size = checkboxDefaults.size,
  } = options;

  const isSmall = size === 'sm';

  const rotateProperty = indeterminate ? 'rotate(0deg)' : 'rotate(-45deg)';

  const borderWidth = () => {
    const defaultWidth = '2px';

    if (isSmall) {
      return indeterminate ? defaultWidth : '1px';
    }

    return defaultWidth;
  };

  const getHeight = (value: string) => {
    return indeterminate ? 0 : value;
  };

  const getTop = (value: string) => {
    return indeterminate ? '50%' : value;
  };

  const sizes = {
    sm: {
      width: '0.3rem',
      height: getHeight('0.2rem'),
    },
    md: {
      width: '0.5rem',
      height: getHeight('0.3rem'),
    },
    lg: {
      width: '0.55rem',
      height: getHeight('0.3rem'),
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
      border: ${borderWidth()} solid ${theme.colors.white};
      border-top: 0;
      border-right: 0;
      ${positionCenterStyle({ transfrom: rotateProperty })}
      top: ${isSmall ? getTop('49%') : getTop('45%')};
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const checkboxDefaultStyle = (options: SystemThemeParams) => {
  const { theme, type = 'web', disabled, checked } = options;

  const cursor = disabled ? 'not-allowed' : 'pointer';

  const borderColor = () => {
    if (checked) {
      return styleModeHandler({
        light: 'blue.500',
        dark: 'blue.600',
        theme,
      });
    }

    if (disabled) {
      return styleModeHandler({
        light: 'gray.200',
        dark: 'gray.600',
        theme,
      });
    }

    return styleModeHandler({
      light: 'gray.100',
      dark: 'gray.700',
      theme,
    });
  };

  const backgroundColor = () => {
    if (checked) {
      return styleModeHandler({
        light: 'blue.500',
        dark: 'blue.600',
        theme,
      });
    }

    if (disabled) {
      return styleModeHandler({
        light: 'gray.200',
        dark: 'gray.600',
        theme,
      });
    }

    return theme.colors.transparent;
  };

  const checkedBackgroundColor = disabled
    ? theme.colors.gray[200]
    : theme.colors.blue[500];

  const checkedBorderColor = checkedBackgroundColor;

  const hoverBorderColor = styleModeHandler({
    theme,
    light: 'gray.200',
    dark: 'gray.600',
  });

  const baseStyle = `
    ${flexCenterStyle}
    appearance: none;
    box-shadow: none;
    position: relative;
    margin: 0;
    outline: 0;
    padding: 0;
    border: 1px solid ${borderColor()};
    background-color: ${backgroundColor()};
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${transitionStyle()}
    ${baseStyle}
    cursor: ${cursor};

    + label {
      cursor: ${cursor};
    }

    :after {
      content: '';
      display: block;
      ${positionCenterStyle()}
    }

    :checked {
      background-color: ${checkedBackgroundColor};
      border-color: ${checkedBorderColor};
    }

    :hover {
      border-color: ${hoverBorderColor};
    }

    ${inputPseudoStyle({
      ...options,
      focus: `border-color: ${hoverBorderColor};`,
    })}

    :disabled {
      cursor: not-allowed;
    
      + label {
        cursor: not-allowed;
      }
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const getInputsSizing = (options: SystemThemeParams) => {
  const { theme, isSwitch, isRadio } = options;

  const { checkbox, switch: themeSwitch, radio } = theme.components;

  if (isRadio) {
    return radio;
  }

  if (isSwitch) {
    return themeSwitch;
  }

  return checkbox;
};

export const checkboxSizeVariant = (options: SystemThemeParams) => {
  const { size = checkboxDefaults.size } = options;

  const input = getInputsSizing(options);

  const width = input.width[size as keyof typeof input.width];
  const height = input.height[size as keyof typeof input.height];
  const borderRadius =
    input.borderRadius[size as keyof typeof input.borderRadius];

  const styles = {
    width,
    height,
    borderRadius,
  };

  return convertReactCSSToCSSHandler(styles);
};
