import type {
  AvatarThemedDefaultProps,
  AvatarSizeTypes,
} from '../components.types';
import { flexCenterStyle, transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { getBaseStyle, getColorSchemeStyle } from './base';

import { SpacingKeys } from '@/core/theme/utilities/spacing';

// @defaults
export const avatarDefaults = {
  initialsClassName: 'avatar__initials',
  imgClassName: 'avatar__img',
  svgClassName: 'avatar__svg',
  placeholderStrokeWidth: 1.8,
  alt: 'avatar',
};

// @themes
type AvatarSystemThemeParams = SystemThemeParams & AvatarThemedDefaultProps;

export const getAvatarSizeStyle = (options: AvatarSystemThemeParams) => {
  type SizesObjectType = {
    width: string | number;
    height: string | number;
    fontSize: string | number;
    baseFontSize: string | number;
  };

  type SizesType = {
    [key in AvatarSizeTypes]: SizesObjectType;
  };

  const { theme, size } = options;

  const baseSize: SizesObjectType = {
    width: theme.space?.[size as SpacingKeys] || size || '',
    height: theme.space?.[size as SpacingKeys] || size || '',
    fontSize: theme.fontSizes.md,
    baseFontSize: theme.fontSizes.sm,
  };

  const sizes: SizesType = {
    xs: {
      width: theme.space[6],
      height: theme.space[6],
      fontSize: theme.fontSizes.xs,
      baseFontSize: theme.fontSizes.xs,
    },
    sm: {
      width: theme.space[8],
      height: theme.space[8],
      fontSize: theme.fontSizes.sm,
      baseFontSize: theme.fontSizes.sm,
    },
    md: {
      width: theme.space[10],
      height: theme.space[10],
      fontSize: theme.fontSizes.md,
      baseFontSize: theme.fontSizes.sm,
    },
    lg: {
      width: theme.space[12],
      height: theme.space[12],
      fontSize: theme.fontSizes.lg,
      baseFontSize: theme.fontSizes.sm,
    },
    xl: {
      width: theme.space[16],
      height: theme.space[16],
      fontSize: theme.fontSizes.xl,
      baseFontSize: theme.fontSizes.md,
    },
  };

  return sizes?.[size || 'md'] || baseSize;
};

export const getBorderStyle = (options: AvatarSystemThemeParams) => {
  const { theme, size, isGrouped } = options;

  const borderColor = isGrouped
    ? getBaseStyle(options).backgroundColor
    : theme.colors.transparent;

  const styles: {
    [key in AvatarSizeTypes]: {
      borderWidth: string | number;
      borderColor: string | number;
      spacing: string | number;
    };
  } = {
    xs: {
      borderWidth: '2px',
      borderColor,
      spacing: `-${theme.space[2]}`,
    },
    sm: {
      borderWidth: '2px',
      borderColor,
      spacing: `-${theme.space[2.5]}`,
    },
    md: {
      borderWidth: '2px',
      borderColor,
      spacing: `-${theme.space[3]}`,
    },
    lg: {
      borderWidth: '3px',
      borderColor,
      spacing: `-${theme.space[4]}`,
    },
    xl: {
      borderWidth: '3px',
      borderColor,
      spacing: `-${theme.space[4]}`,
    },
  };

  return styles?.[size || 'md'] || styles.md;
};

export const avatarDefaultStyle = (options: AvatarSystemThemeParams) => {
  const {
    theme,
    type = 'web',
    colorScheme,
    variant,
    isGrouped,
    isLastItem,
  } = options;

  const { width, height, fontSize, baseFontSize } = getAvatarSizeStyle(options);

  const { borderColor, borderWidth, spacing } = getBorderStyle(options);

  const { backgroundColor, color } = getColorSchemeStyle({
    theme,
    colorScheme: colorScheme || 'gray',
    variant: variant || 'subtle',
  });

  const baseStyle = `
    background-color: ${backgroundColor};
    width: ${width};
    height: ${height};
    margin-right: ${isGrouped && !isLastItem ? spacing : 0};
    border-width: ${borderWidth};
    border-style: solid;
    border-color: ${borderColor};
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    ${transitionStyle()}
    ${flexCenterStyle}
    display: inline-flex;
    text-transform: uppercase;
    flex-shrink:0;
    vertical-align: top;
    position: relative;
    border-radius: ${theme.radii.full};
    overflow: hidden;
    color: ${color};
    font-weight: ${theme.fontWeights.medium};
    font-size: ${baseFontSize};

    .${avatarDefaults.initialsClassName} {
      font-size: ${fontSize};
      font-weight: ${theme.fontWeights.semiBold};
    }

    .${avatarDefaults.imgClassName} {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .${avatarDefaults.svgClassName} {
      height: 70%;
      width: 70%;
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const avatarGroupDefaultStyle = (options: AvatarSystemThemeParams) => {
  const { type = 'web' } = options;

  const baseStyle = `
    display: flex;
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
