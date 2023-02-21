import type {
  TabsListThemedDefaultProps,
  TabsItemThemedDefaultProps,
  TabsThemedDefaultProps,
} from '../components.types';
import { flexCenterYStyle, flexCenterStyle, transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { getBaseStyle, getColorSchemeStyle } from './base';

import { convertReactCSSToCSSHandler } from '@/core/helpers/theme';

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

export const tabsListDefaultStyle = (options: TabsListSystemThemeParams) => {
  const { theme, type = 'web', colorScheme, variant } = options;

  const isVariant = !!colorScheme || !!variant;

  const borderBottomColor = theme.colors.gray[100];

  const borderBottomWidth = {
    default: '2px',
    fenced: '1px',
    none: '0',
  };

  const baseStyle = `
    ${flexCenterYStyle}
    border-bottom: ${
      isVariant
        ? borderBottomWidth[
            (variant as keyof typeof borderBottomWidth) || 'none'
          ]
        : borderBottomWidth.default
    } solid ${borderBottomColor};
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
    colorScheme,
    colorSchemeVariant,
  } = options;

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
        isActive ? theme.colors.gray[100] : theme.colors.transparent
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

  if (colorScheme) {
    const { backgroundColor } = getColorSchemeStyle({
      theme,
      colorScheme,
      variant: colorSchemeVariant || 'subtle',
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
  } = options;

  const { color } = getColorSchemeStyle({
    theme,
    colorScheme: colorScheme || 'blue',
    variant: colorSchemeVariant || 'subtle',
  });

  const { color: baseColor } = getBaseStyle(options);

  const borderBottomColor = isActive ? color : theme.colors.transparent;

  const baseStyle = `
    ${flexCenterStyle}
    border: 0;
    background-color: ${theme.colors.transparent};
    border-bottom: 2px solid ${borderBottomColor};
    margin-bottom: -2px;
  `;

  const native = `
    ${baseStyle}
    padding-vertical: ${theme.space[3]};
    padding-horizontal: ${theme.space[4]};
    align-self: flex-start;
    border-bottom-width: 2px;
    border-bottom-color: ${borderBottomColor};
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
    font-size: ${theme.fontSizes.md};
    padding: ${theme.space[2]} ${theme.space[4]};
    color: ${isActive ? color : baseColor};
    flex: ${withEqualWidth ? 1 : 0};
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
    variant: colorSchemeVariant || 'subtle',
  });

  const { color: baseColor } = getBaseStyle(options);

  const baseStyle = `
    color: ${
      isActive && !getTabsStyleHandler(options).isUnstyled ? color : baseColor
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

  return {
    isUnstyled,
    isFenced,
  };
};
