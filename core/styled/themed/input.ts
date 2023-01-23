import styledTheme from 'styled-theming';

import { flexCenterXStyle, transitionStyle } from '../css';
import type {
  StyledThemeProps,
  SystemThemeParams,
  SystemThemeReturnType,
} from '../index.types';
import { variant } from '../system';

import { isPackageNative } from '@/core/helpers/base';
import type { SpacingKeys } from '@/core/theme/utilities/spacing';

// @button themes
export const inputDefaults = {
  disabledOpacity: 0.5,
  colorScheme: 'blue',
  activeOpacity: 0.8,
  size: 'md',
  state: 'default',
  selectionColor: 'rgba(34, 109, 204, 0.5)',
};

export const backgroundColor = styledTheme.variants('mode', 'state', {
  default: { light: ({ theme }: StyledThemeProps) => theme.colors.white },
  focused: { light: ({ theme }: StyledThemeProps) => theme.colors.white },
  invalid: { light: ({ theme }: StyledThemeProps) => theme.colors.white },
  disabled: { light: ({ theme }: StyledThemeProps) => theme.colors.gray[50] },
});

export const borderColor = styledTheme.variants('mode', 'state', {
  default: { light: ({ theme }: StyledThemeProps) => theme.colors.gray[100] },
  focused: { light: ({ theme }: StyledThemeProps) => theme.colors.blue[500] },
  invalid: { light: ({ theme }: StyledThemeProps) => theme.colors.red[500] },
  disabled: { light: ({ theme }: StyledThemeProps) => theme.colors.gray[200] },
});

export const hoverBorderColor = styledTheme.variants('mode', 'state', {
  default: { light: ({ theme }: StyledThemeProps) => theme.colors.gray[200] },
  focused: { light: ({ theme }: StyledThemeProps) => theme.colors.blue[500] },
  invalid: { light: ({ theme }: StyledThemeProps) => theme.colors.red[500] },
  disabled: { light: ({ theme }: StyledThemeProps) => theme.colors.gray[200] },
});

export const focusBorderColor = styledTheme.variants('mode', 'state', {
  default: { light: ({ theme }: StyledThemeProps) => theme.colors.blue[500] },
  focused: { light: ({ theme }: StyledThemeProps) => theme.colors.blue[500] },
  invalid: { light: ({ theme }: StyledThemeProps) => theme.colors.red[500] },
  disabled: { light: ({ theme }: StyledThemeProps) => theme.colors.gray[200] },
});

export const hintColor = styledTheme.variants('mode', 'state', {
  default: { light: ({ theme }: StyledThemeProps) => theme.colors.gray[500] },
  focused: { light: ({ theme }: StyledThemeProps) => theme.colors.gray[500] },
  invalid: { light: ({ theme }: StyledThemeProps) => theme.colors.red[500] },
  disabled: { light: ({ theme }: StyledThemeProps) => theme.colors.gray[500] },
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

export const inputDefaultStyle = (option: SystemThemeParams) => {
  const { type = 'web' } = option;

  const baseStyle = `
    border: 0;
    outline: 0;
    background-color: transparent;
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
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const inputContainerDefaultStyle = (option: SystemThemeParams) => {
  const { type = 'web', disabled } = option;

  const opacity = disabled ? inputDefaults.disabledOpacity : 1;

  const baseStyle = `
    ${transitionStyle()}
    outline: 0;
    opacity: ${opacity};
    border-width: 1px;
    border-style: solid;
    position: relative;
    overflow: hidden;
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
    padding-left: ${theme.space.md};
    padding-right: ${theme.space.md};
    padding-top: ${theme.space.sm};
    padding-bottom: ${theme.space.sm};
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
export const isDisabled = (state?: string) => {
  return state === 'disabled';
};
