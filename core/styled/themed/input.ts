import type { InputThemedDefaultProps } from '../components.types';
import { flexCenterXStyle, flexCenterYStyle, transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import {
  getBaseStyle,
  getThemeMode,
  styleModeHandler,
  variantModeHandler,
} from './base';
import { getNativeTextFont } from './text';

import { packagePrefix } from '@/core/constants';
import { isPackageNative } from '@/core/helpers/base';
import {
  convertHexToRgbaHandler,
  convertReactCSSToCSSHandler,
} from '@/core/helpers/theme';

// @defaults
export const inputDefaults = {
  disabledOpacity: 0.5,
  colorScheme: 'blue',
  activeOpacity: 0.8,
  size: 'md',
  state: 'default',
  leftIconClassName: `${packagePrefix}-input_icon-left`,
  rightIconClassName: `${packagePrefix}-input_icon-right`,
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

export const nativeBorderColor: any = variantModeHandler('state', {
  default: { light: 'gray.100', dark: 'gray.700' },
  focused: { light: 'blue.500', dark: 'blue.600' },
  invalid: { light: 'red.500', dark: 'red.600' },
  disabled: { light: 'gray.200', dark: 'gray.600' },
});

export const hoverBorderColor: any = variantModeHandler('state', {
  default: { light: 'gray.200', dark: 'gray.600' },
  focused: { light: 'blue.500', dark: 'blue.600' },
  invalid: { light: 'red.500', dark: 'red.300' },
  disabled: { light: 'gray.200', dark: 'gray.600' },
});

export const focusBorderColor: any = variantModeHandler('state', {
  default: { light: 'blue.500', dark: 'blue.600' },
  focused: { light: 'blue.500', dark: 'blue.600' },
  invalid: { light: 'red.500', dark: 'red.300' },
});

export const hintColor: any = variantModeHandler('state', {
  default: { light: 'gray.500', dark: 'gray.300' },
  focused: { light: 'gray.500', dark: 'gray.300' },
  invalid: { light: 'red.500', dark: 'red.300' },
  disabled: { light: 'gray.500', dark: 'gray.300' },
});

export const inputSizeVariant = (options: InputSystemThemeParams) => {
  const { theme, type = 'web', size = inputDefaults.size } = options;

  const isNative = isPackageNative(type);

  const {
    height: inputHeights,
    fontSizes,
    borderRadius: inputRadii,
  } = theme.components.input;

  const height = inputHeights[size as keyof typeof inputHeights];

  const fontSize = fontSizes[size as keyof typeof fontSizes];

  const borderRadius = inputRadii[size as keyof typeof inputRadii];

  const styles = {
    ...(isNative ? {} : { fontSize }),
    height,
    borderRadius,
  };

  return convertReactCSSToCSSHandler(styles);
};

// @styles
export const inputPseudoStyle = (option: InputSystemThemeParams) => {
  const {
    theme,
    type = 'web',
    focus,
    _active,
    _focus,
    _disabled,
    _hover,
    _placeholder,
    removeFocusBoxShadow,
  } = option;

  const { isDark } = getThemeMode(theme);

  const borderColor = isDark ? theme.colors.blue[200] : theme.colors.blue[600];

  const { backgroundColor: baseBgColor } = getBaseStyle({ theme });

  const boxShadow = removeFocusBoxShadow
    ? ''
    : `
    ${baseBgColor} 0px 0px 0px 1px, ${convertHexToRgbaHandler(
        borderColor,
        0.5
      )} 0px 0px 0px 3px
  `;

  const baseStyle = `
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}

    :active {
      ${convertReactCSSToCSSHandler(_active)}
    }

    :disabled {
      cursor: not-allowed;
      ${convertReactCSSToCSSHandler(_disabled)}
    }

    :focus {
      ${focus || ''}
      box-shadow: ${boxShadow};
      ${convertReactCSSToCSSHandler(_focus)}
    }

    :hover {
      ${convertReactCSSToCSSHandler(_hover)}
    }

    ::placeholder {
      ${convertReactCSSToCSSHandler(_placeholder)}
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const inputDefaultStyle = (option: InputSystemThemeParams) => {
  const { theme, type = 'web', size = inputDefaults.size } = option;
  const {
    fontSizes,
    placeholderFontSizes,
    paddingX: inputPaddingX,
    borderRadius: inputRadii,
  } = theme.components.input;

  const borderRadius = inputRadii[size as keyof typeof inputRadii];

  const fontSize = fontSizes[size as keyof typeof fontSizes];

  const placeholderFontSize =
    placeholderFontSizes[size as keyof typeof fontSizes];

  const paddingX = inputPaddingX[size as keyof typeof inputPaddingX];

  const { paddingLeft, paddingRight } = getPadding({
    ...option,
    property: paddingX,
  });

  const { color } = getBaseStyle({ theme });

  const baseStyle = `
    outline: 0;
    color: ${color};
    padding: 0 ${paddingRight} 0 ${paddingLeft};
    border-radius: ${borderRadius};
  `;

  const native = `
    ${baseStyle}
    height: 100%;
    flex: 1;
    font-size: ${fontSize};
    ${getNativeTextFont(option)}
  `;

  const web = `
    ${baseStyle}
    ${flexCenterYStyle}
    width: 100%;
    appearance: none;
    white-space: nowrap;
    font-size: inherit;
    height: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: ${theme.colors.transparent};

    ::placeholder {
      color: ${styleModeHandler({
        light: 'gray.400',
        dark: 'gray.400',
        theme,
      })};
      font-size: ${placeholderFontSize};
    }

    ${inputPseudoStyle({
      ...option,
      removeFocusBoxShadow: true,
    })}
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const inputContainerDefaultStyle = (option: InputSystemThemeParams) => {
  const { theme, type = 'web', disabled } = option;

  const opacity = disabled ? inputDefaults.disabledOpacity : 1;

  const baseStyle = `
    ${transitionStyle()}
    opacity: ${opacity};
    position: relative;
    color: ${styleModeHandler({ light: 'gray.500', dark: 'gray.50', theme })};
  `;

  const native = `
    ${baseStyle}
    ${flexCenterXStyle}
    flex-direction: row;
    overflow: hidden;
    border-width: 1px;
    border-style: solid;
  `;

  const web = `
    ${baseStyle}

    .${inputDefaults.leftIconClassName},
    .${inputDefaults.rightIconClassName} {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%
    }

    .${inputDefaults.rightIconClassName} {
      left: auto;
      right: 0;
    }
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
    ${getNativeTextFont(option)}
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

const getPadding = (options: InputSystemThemeParams) => {
  const { icon, property, rightIcon, theme } = options;

  const leftIconExist = !!icon;
  const rightIconExist = !!rightIcon;

  const iconSize = theme.components.iconButton.width.md;

  return {
    paddingLeft: leftIconExist ? iconSize : property,
    paddingRight: rightIconExist ? iconSize : property,
  };
};
