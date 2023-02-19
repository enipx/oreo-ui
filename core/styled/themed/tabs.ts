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

  const borderBottomWidth = {
    default: '2px',
    fenced: '1px',
    none: '0',
  };

  const baseStyle = `
    ${flexCenterYStyle}
    flex-wrap: nowrap;
    border-bottom: ${
      isVariant
        ? borderBottomWidth[
            (variant as keyof typeof borderBottomWidth) || 'none'
          ]
        : borderBottomWidth.default
    } solid ${theme.colors.gray[100]};
  `;

  const native = `
    ${baseStyle}
    flex-direction: row;
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

export const tabsItemVariantStyle = (options: TabsItemSystemThemeParams) => {
  const {
    theme,
    type = 'web',
    isActive,
    colorScheme,
    colorSchemeVariant,
    variant,
  } = options;

  if (variant === 'unstyled') {
    const { color: baseColor } = getBaseStyle(options);

    const baseStyle = `
      border: 0;
      outline: 0;
      background-color: ${theme.colors.transparent};
    `;

    const native = `
      ${baseStyle}
    `;

    const web = `
      ${baseStyle}
      color: ${baseColor};
    `;

    const res: SystemThemeReturnType = {
      native,
      web,
    };

    return res[type];
  }

  if (variant === 'fenced') {
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
      colorScheme: colorScheme || 'blue',
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

  const baseStyle = `
    ${flexCenterStyle}
    border: 0;
    outline: 0;
    background-color: ${theme.colors.transparent};
    border-bottom: 2px solid ${isActive ? color : theme.colors.transparent};
    margin-bottom: -2px;
    flex: ${withEqualWidth ? 1 : 0};
  `;

  const native = `
    ${baseStyle}
    flex-direction: row;
  `;

  const web = `
    ${baseStyle}
    ${transitionStyle()}
    appearance: none;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    opacity: ${disabled ? '0.5' : '1'};
    white-space: nowrap;
    width: auto;
    font-size: ${theme.fontSizes.md};
    padding: ${theme.space[2]} ${theme.space[4]};
    color: ${isActive ? color : baseColor};
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
