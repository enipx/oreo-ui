import type {
  TabsListThemedDefaultProps,
  TabsItemThemedDefaultProps,
  TabsThemedDefaultProps,
  TabsVariantThemedDefaultProps,
} from '../components.types';
import { flexCenterYStyle, flexCenterStyle, transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import {
  getBaseStyle,
  getColorSchemeStyle,
  getUtilitiesValue,
  styleModeHandler,
} from './base';

import {
  convertHexToRgbaHandler,
  convertReactCSSToCSSHandler,
} from '@/core/helpers/theme';

// @defaults
export const tabsDefaults = {
  initialsClassName: 'avatar__initials',
  imgClassName: 'avatar__img',
  svgClassName: 'avatar__svg',
  placeholderStrokeWidth: 1.8,
  alt: 'avatar',
};

// @themes
type TabsListSystemThemeParams = SystemThemeParams &
  TabsListThemedDefaultProps &
  TabsThemedDefaultProps;

type TabsItemSystemThemeParams = SystemThemeParams &
  TabsItemThemedDefaultProps &
  TabsThemedDefaultProps;

export const tabListVariantStyle = (options: TabsListSystemThemeParams) => {
  const { theme, type = 'web', variant } = options;

  const variantBackgroundColor: {
    [key in TabsVariantThemedDefaultProps]: string;
  } = {
    pills: styleModeHandler({
      theme,
      light: convertHexToRgbaHandler(theme.colors.gray[50], 0.75),
      dark: convertHexToRgbaHandler(theme.colors.gray[800], 0.5),
    }),
    fenced: theme.colors.transparent,
    unstyled: theme.colors.transparent,
  };

  const backgroundColor = variantBackgroundColor[variant || 'unstyled'];

  if (getTabsStyleHandler(options as any).isPills) {
    const baseStyle = `
      background-color: ${backgroundColor};
      border-radius: ${theme.radii.base};
      padding: ${theme.space[0.75]};
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
  }

  return '';
};

export const tabsListDefaultStyle = (options: TabsListSystemThemeParams) => {
  const { theme, type = 'web', colorScheme, variant, withEqualWidth } = options;

  const isVariant = !!colorScheme || !!variant;

  const borderBottomColor = styleModeHandler({
    theme,
    light: 'gray.100',
    dark: 'gray.700',
  });

  const borderBottomWidth = {
    default: '2px',
    fenced: '1px',
    isPills: '0',
    none: '0',
  };

  const display = withEqualWidth ? 'flex' : 'inline-flex';

  const baseStyle = `
    ${flexCenterYStyle}
    border-bottom: ${
      isVariant
        ? borderBottomWidth[
            (variant as keyof typeof borderBottomWidth) || 'none'
          ]
        : borderBottomWidth.default
    } solid ${borderBottomColor};
    ${tabListVariantStyle(options)}
  `;

  const native = `
    ${baseStyle}
    flex-direction: row;
    border-bottom-width: ${
      isVariant
        ? borderBottomWidth[
            (variant as keyof typeof borderBottomWidth) || 'none'
          ]
        : borderBottomWidth.default
    };
    border-bottom-color: ${borderBottomColor};
  `;

  const web = `
    ${baseStyle}
    flex-wrap: nowrap;
    display: ${display};
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const tabsItemVariantStyle = (options: TabsItemSystemThemeParams) => {
  const {
    theme,
    type = 'web',
    isActive,
    color: customColor,
    colorScheme,
    colorSchemeVariant,
  } = options;

  const { color: defaultColor } = getColorSchemeStyle({
    theme,
    colorScheme: colorScheme || 'blue',
    variant: colorSchemeVariant || 'outline',
  });

  const color =
    getUtilitiesValue({ theme, value: customColor, key: 'colors' }) ||
    defaultColor;

  const borderBottomColor = isActive ? color : theme.colors.transparent;

  if (getTabsStyleHandler(options).isUnstyled) {
    const { color: baseColor } = getBaseStyle(options);

    const baseStyle = `
      border: 0;
      background-color: ${theme.colors.transparent};
    `;

    const native = `
      ${baseStyle}
      border-bottom-width: 0;
    `;

    const web = `
      ${baseStyle}
      outline: 0;
      color: ${baseColor};
    `;

    const res: SystemThemeReturnType = {
      native,
      web,
    };

    return res[type];
  }

  if (getTabsStyleHandler(options).isFenced) {
    const { backgroundColor } = getBaseStyle(options);

    const baseStyle = `
      border: 1px solid ${
        isActive
          ? styleModeHandler({ theme, light: 'gray.100', dark: 'gray.700' })
          : theme.colors.transparent
      };
      border-bottom-width: 0;
      background-color: ${
        isActive ? backgroundColor : theme.colors.transparent
      };
      border-top-left-radius: ${isActive ? theme.radii.md : 0};
      border-top-right-radius: ${isActive ? theme.radii.md : 0};
      margin-bottom: -1px;
    `;

    const native = `
      ${baseStyle}
      margin-bottom: -1px;
    `;

    const web = `
      ${baseStyle}
      font-weight: ${
        isActive ? theme.fontWeights.medium : theme.fontWeights.regular
      };
    `;

    const res: SystemThemeReturnType = {
      native,
      web,
    };

    return res[type];
  }

  if (getTabsStyleHandler(options).isPills) {
    const { color, backgroundColor } = getBaseStyle(options);

    const borderColor = styleModeHandler({
      theme,
      light: 'gray.100',
      dark: 'gray.700',
    });

    const baseStyle = `
      margin-bottom: 0px;
      background-color: ${
        isActive ? backgroundColor : theme.colors.transparent
      };
      border-radius: ${theme.radii.base};
      border-color: ${borderColor};
      border-style: solid;
      border-width: ${isActive ? '1px' : '0'};
    `;

    const native = `
      ${baseStyle}
    `;

    const web = `
      ${baseStyle}
      font-weight: ${
        isActive ? theme.fontWeights.medium : theme.fontWeights.regular
      };
      color: ${color};
    `;

    const res: SystemThemeReturnType = {
      native,
      web,
    };

    return res[type];
  }

  if (colorScheme) {
    const { backgroundColor } = getColorSchemeStyle({
      theme,
      colorScheme,
      variant: colorSchemeVariant || 'link',
    });

    const baseStyle = `
      border-bottom-width: 0;
      border-radius: ${theme.radii.full};
      background-color: ${
        isActive ? backgroundColor : theme.colors.transparent
      };
      margin-bottom: 0px;
    `;

    const native = `
      ${baseStyle}
    `;

    const web = `
      ${baseStyle}
      font-weight: ${
        isActive ? theme.fontWeights.medium : theme.fontWeights.regular
      };
    `;

    const res: SystemThemeReturnType = {
      native,
      web,
    };

    return res[type];
  }

  return `
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${borderBottomColor};
    margin-bottom: -2px;
  `;
};

export const tabsItemDefaultStyle = (options: TabsItemSystemThemeParams) => {
  const {
    theme,
    type = 'web',
    isActive,
    colorScheme,
    disabled,
    colorSchemeVariant,
    withEqualWidth,
    color: customColor,
  } = options;

  const { color: defaultColor } = getColorSchemeStyle({
    theme,
    colorScheme: colorScheme || 'blue',
    variant: colorSchemeVariant || 'outline',
  });

  const color =
    getUtilitiesValue({ theme, value: customColor, key: 'colors' }) ||
    defaultColor;

  const { color: baseColor } = getBaseStyle(options);

  const baseStyle = `
    ${flexCenterStyle}
    border: 0;
    background-color: ${theme.colors.transparent};
  `;

  const native = `
    ${baseStyle}
    padding-vertical: ${theme.space[2]};
    padding-horizontal: ${theme.space[4]};
    align-self: flex-start;
    ${withEqualWidth ? 'flex: 1' : ''}
  `;

  const web = `
    ${baseStyle}
    ${transitionStyle()}
    appearance: none;
    outline: 0;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    opacity: ${disabled ? '0.5' : '1'};
    white-space: nowrap;
    width: auto;
    font-size: ${theme.fontSizes.sm};
    padding: ${theme.space[2]} ${theme.space[4]};
    color: ${isActive ? color : baseColor};
    flex: ${withEqualWidth ? 1 : 0};
    gap: ${theme.space[2]}};
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const tabsItemCustomStyle = (options: TabsItemSystemThemeParams) => {
  const { type = 'web', isActive, _selected, _active, _hover } = options;

  const baseStyle = `
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    ${isActive ? convertReactCSSToCSSHandler(_selected) : ''}

    
    &:hover {
      ${convertReactCSSToCSSHandler(_hover)}
    }

    &.active {
      ${convertReactCSSToCSSHandler(_active)}
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const tabsItemTextDefaultStyle = (
  options: TabsItemSystemThemeParams
) => {
  const {
    theme,
    type = 'web',
    colorScheme,
    colorSchemeVariant,
    isActive,
  } = options;

  const { color } = getColorSchemeStyle({
    theme,
    colorScheme: colorScheme || 'blue',
    variant: colorSchemeVariant || 'outline',
  });

  const { color: baseColor } = getBaseStyle(options);

  const variantType = getTabsStyleHandler(options);

  const baseStyle = `
    color: ${
      isActive && !variantType.isUnstyled && !variantType.isPills
        ? color
        : baseColor
    };
    font-weight: ${
      isActive ? theme.fontWeights.semiBold : theme.fontWeights.medium
    };
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

// @utilities
export const getTabsStyleHandler = (options: TabsItemSystemThemeParams) => {
  const { variant } = options;

  const isUnstyled = variant === 'unstyled';
  const isFenced = variant === 'fenced';
  const isPills = variant === 'pills';

  return {
    isUnstyled,
    isFenced,
    isPills,
  };
};
