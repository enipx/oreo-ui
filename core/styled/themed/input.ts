import { flexCenterXStyle, transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { variant } from '../system';
import { styleModeHandler, variantModeHandler } from './base';

import { isPackageNative } from '@/core/helpers/base';
import type { SpacingKeys } from '@/core/theme/utilities/spacing';

// @defaults
export const inputDefaults = {
  disabledOpacity: 0.5,
  colorScheme: 'blue',
  activeOpacity: 0.8,
  size: 'md',
  state: 'default',
  selectionColor: 'rgba(34, 109, 204, 0.5)',
};

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

export const inputSizeVariant = (options: SystemThemeParams) => {
  const { theme, type = 'web', icon, rightIcon } = options;

  const getLeftPadding = (property: SpacingKeys) => {
    const iconExist = !!icon;
    return iconExist ? 0 : property;
  };

  const getRightPadding = (property: SpacingKeys) => {
    const iconExist = !!rightIcon;
    return iconExist ? 0 : property;
  };

  const isNative = isPackageNative(type);

  return variant({
    prop: 'size',
    variants: {
      xs: {
        ...(isNative ? {} : { fontSize: theme.fontSizes.sm }),
        height: theme.space[6],
        pl: getLeftPadding(2),
        pr: getRightPadding(2),
        borderRadius: theme.radii.md,
      },
      sm: {
        ...(isNative ? {} : { fontSize: theme.fontSizes.sm }),
        height: theme.space[8],
        pl: getLeftPadding(3),
        pr: getRightPadding(2),
        borderRadius: theme.radii.md,
      },
      md: {
        ...(isNative ? {} : { fontSize: theme.fontSizes.md }),
        height: theme.space[10],
        pl: getLeftPadding(4),
        pr: getRightPadding(2),
        borderRadius: theme.radii.base,
      },
      lg: {
        ...(isNative ? {} : { fontSize: theme.fontSizes.lg }),
        height: theme.space[12],
        pl: getLeftPadding(4),
        pr: getRightPadding(2),
        borderRadius: theme.radii.base,
      },
    },
  });
};

// @styles
export const inputDefaultStyle = (option: SystemThemeParams) => {
  const { theme, type = 'web' } = option;

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
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const inputContainerDefaultStyle = (option: SystemThemeParams) => {
  const { theme, type = 'web', disabled } = option;

  const opacity = disabled ? inputDefaults.disabledOpacity : 1;

  const baseStyle = `
    ${transitionStyle()}
    outline: 0;
    opacity: ${opacity};
    border-width: 1px;
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
    ${flexCenterXStyle}
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const inputFieldDefaultStyle = (option: SystemThemeParams) => {
  const { theme, type = 'web', disabled, resize } = option;

  const opacity = disabled ? inputDefaults.disabledOpacity : 1;

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
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    appearance: none;
    white-space: nowrap;
    font-size: ${theme.fontSizes.sm};
    resize: ${resize || 'auto'};

    ::placeholder {
      font-size: ${theme.fontSizes.sm};
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
