import { transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { styleModeHandler } from './base';
import { checkboxDefaultStyle, checkboxSizeVariant } from './checkbox';

// @checkbox themes
export const switchDefaults = {
  disabledOpacity: 0.5,
  activeOpacity: 1,
  size: 'md',
  controlX: '1px',
};

export const switchSizing = (options: SystemThemeParams) => {
  const { theme, control, size = switchDefaults.size } = options;

  const { control: controlSize } = theme.components.switch;

  const res = {
    width: controlSize.width[size as keyof typeof controlSize.width],
    height: controlSize.height[size as keyof typeof controlSize.height],
  };

  if (control) {
    return {
      width: `calc(${res.width} + ${switchDefaults.controlX})`,
      height: '',
    };
  }

  return res;
};

export const switchCheckedStyle = (options: SystemThemeParams) => {
  const { theme, packageType = 'web', size = switchDefaults.size } = options;

  const { width: controlWidth } = switchSizing({
    ...options,
    size,
    control: true,
  });

  const baseStyle = `
    background-color: ${styleModeHandler({
      theme,
      light: 'blue.500',
    })};
    border-color: ${styleModeHandler({
      theme,
      light: 'blue.500',
    })};
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    &:checked {
      ${baseStyle}

      &::after {
        left: auto;
        right: ${controlWidth};
        transform: translate(100%, -50%);
      }
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[packageType];
};

export const switchBaseStyle = (options: SystemThemeParams) => {
  const {
    theme,
    packageType = 'web',
    disabled,
    size = switchDefaults.size,
    checked,
  } = options;

  const { width, height } = switchSizing({ ...options, size });

  const baseStyle = `
    background-color: ${styleModeHandler({
      theme,
      light: 'gray.300',
      dark: 'gray.400',
    })};
    border-color: ${styleModeHandler({
      theme,
      light: 'gray.300',
      dark: 'gray.400',
    })};
    opacity: ${disabled ? switchDefaults.disabledOpacity : 1};
  `;

  const nativeControlColor = checked
    ? styleModeHandler({
        theme,
        light: 'blue.500',
      })
    : styleModeHandler({
        theme,
        light: 'gray.300',
        dark: 'gray.400',
      });

  const native = `
    ${baseStyle}
    background-color: ${nativeControlColor};
    border-color: ${nativeControlColor};
    flex-direction: row;
    justify-content: ${checked ? 'flex-end' : 'flex-start'};
    padding-left: ${switchDefaults.controlX};
    padding-right: ${switchDefaults.controlX};
  `;

  const web = `
    ${baseStyle}

    &::after {
      content: '';
      width: ${width};
      height: ${height};
      border-radius: 50%;
      background-color: ${styleModeHandler({
        theme,
        light: 'white',
      })};
      left: ${switchDefaults.controlX};
      transform: translate(0%, -50%);
      ${transitionStyle()}
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[packageType];
};

export const switchControlBaseStyle = (options: SystemThemeParams) => {
  const { theme, packageType = 'web', size = switchDefaults.size } = options;

  const { width, height } = switchSizing({ ...options, size });

  const baseStyle = `
    background-color: ${styleModeHandler({
      theme,
      light: 'white',
    })};
    border-radius: ${theme.radii.full};
    width: ${width};
    height: ${height};
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

  return res[packageType];
};

export const switchDefaultStyle = checkboxDefaultStyle;

export const switchSizeVariant = (options: SystemThemeParams) => {
  return checkboxSizeVariant({ ...options, isSwitch: true });
};
