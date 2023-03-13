import type { InputThemedDefaultProps } from '../components.types';
import { flexCenterXStyle, flexCenterYStyle, transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { styleModeHandler, variantModeHandler } from './base';

import { isPackageNative } from '@/core/helpers/base';
import { convertReactCSSToCSSHandler } from '@/core/helpers/theme';

// @defaults
export const inputDefaults = {
  disabledOpacity: 0.5,
  colorScheme: 'blue',
  activeOpacity: 0.8,
  size: 'md',
  state: 'default',
};

// @types
type InputSystemThemeParams = SystemThemeParams & InputThemedDefaultProps;

// @variants
export const backgroundColor: any = variantModeHandler('state', {
  default: { light: 'white', dark: 'gray.900' },
  focused: { light: 'white', dark: 'gray.900' },
  invalid: { light: 'white', dark: 'gray.900' },
  disabled: { light: 'gray.50', dark: 'gray.800' },
});

export const borderColor: any = variantModeHandler('state', {
  default: { light: 'gray.100', dark: 'gray.700' },
  focused: { light: 'blue.500', dark: 'blue.600' },
  invalid: { light: 'red.500', dark: 'red.600' },
  disabled: { light: 'gray.200', dark: 'gray.600' },
});

export const hoverBorderColor: any = variantModeHandler('state', {
  default: { light: 'gray.200', dark: 'gray.600' },
  focused: { light: 'gray.500', dark: 'gray.300' },
  invalid: { light: 'gray.500', dark: 'gray.300' },
  disabled: { light: 'gray.200', dark: 'gray.600' },
});

export const focusBorderColor: any = variantModeHandler('state', {
  default: { light: 'blue.500', dark: 'blue.600' },
  focused: { light: 'blue.500', dark: 'blue.600' },
  invalid: { light: 'blue.500', dark: 'blue.600' },
});

export const hintColor: any = variantModeHandler('state', {
  default: { light: 'gray.500', dark: 'gray.300' },
  focused: { light: 'gray.500', dark: 'gray.300' },
  invalid: { light: 'red.500', dark: 'red.300' },
  disabled: { light: 'gray.500', dark: 'gray.300' },
});

export const inputSizeVariant = (options: InputSystemThemeParams) => {
  const {
    theme,
    type = 'web',
    icon,
    rightIcon,
    size = inputDefaults.size,
  } = options;

  const isNative = isPackageNative(type);

  const {
    height: inputHeights,
    fontSizes,
    borderRadius: inputRadii,
    paddingX: inputPaddingX,
  } = theme.components.input;

  const height = inputHeights[size as keyof typeof inputHeights];

  const fontSize = fontSizes[size as keyof typeof fontSizes];

  const borderRadius = inputRadii[size as keyof typeof inputRadii];

  const paddingX = inputPaddingX[size as keyof typeof inputPaddingX];

  const getLeftPadding = (property: number | string) => {
    const iconExist = !!icon;
    return iconExist ? 0 : property;
  };

  const getRightPadding = (property: number | string) => {
    const iconExist = !!rightIcon;
    return iconExist ? 0 : property;
  };

  const styles = {
    ...(isNative ? {} : { fontSize }),
    height,
    paddingLeft: getLeftPadding(paddingX),
    paddingRight: getRightPadding(paddingX),
    borderRadius,
  };

  return convertReactCSSToCSSHandler(styles);
};

// @styles
export const inputDefaultStyle = (option: InputSystemThemeParams) => {
  const { theme, type = 'web', size = inputDefaults.size } = option;
  const { fontSizes, placeholderFontSizes } = theme.components.input;

  const fontSize = fontSizes[size as keyof typeof fontSizes];
  const placeholderFontSize =
    placeholderFontSizes[size as keyof typeof fontSizes];

  const baseStyle = `
    border: 0;
    outline: 0;
    background-color: transparent;
    color: ${styleModeHandler({ light: 'gray.500', dark: 'gray.50', theme })};
  `;

  const native = `
    ${baseStyle}
    height: 100%;
    flex: 1;
    font-size: ${fontSize};
  `;

  const web = `
    ${baseStyle}
    width: 100%;
    appearance: none;
    white-space: nowrap;
    font-size: inherit;

    :disabled {
      cursor: not-allowed;
    }

    ::placeholder {
      font-size: ${placeholderFontSize};
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const inputContainerDefaultStyle = (option: InputSystemThemeParams) => {
  const { theme, type = 'web', disabled, state } = option;

  const { focused } = isInputState(state);

  const opacity = disabled ? inputDefaults.disabledOpacity : 1;

  const baseStyle = `
    ${transitionStyle()}
    outline: 0;
    opacity: ${opacity};
    border-width: ${focused ? '2px' : '1px'};
    border-style: solid;
    position: relative;
    overflow: hidden;
    color: ${styleModeHandler({ light: 'gray.500', dark: 'gray.50', theme })};
  `;

  const native = `
    ${baseStyle}
    ${flexCenterXStyle}
    flex-direction: row;
  `;

  const web = `
    ${baseStyle}
    ${flexCenterYStyle}
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const inputFieldDefaultStyle = (option: InputSystemThemeParams) => {
  const {
    theme,
    type = 'web',
    disabled,
    resize,
    size = inputDefaults.size,
  } = option;

  const opacity = disabled ? inputDefaults.disabledOpacity : 1;

  const { fontSizes } = theme.components.input;

  const fontSize = fontSizes[size as keyof typeof fontSizes];

  const baseStyle = `
    ${transitionStyle()}
    opacity: ${opacity};
    width: 100%;
    border-width: 1px;
    border-style: solid;
    position: relative;
    overflow: hidden;
    outline: 0;
    border-radius: ${theme.radii.md};
    padding: ${theme.space.md};
    color: ${styleModeHandler({ light: 'gray.500', dark: 'gray.50', theme })};
    font-size: ${fontSize};
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    appearance: none;
    white-space: nowrap;
    resize: ${resize || 'auto'};

    ::placeholder {
      font-size: ${fontSize};
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

// @utilities
export const isInputDisabled = (state?: string) => {
  return state === 'disabled';
};

export const isInputState = (state?: InputThemedDefaultProps['state']) => {
  return {
    focused: state === 'focused',
  };
};
