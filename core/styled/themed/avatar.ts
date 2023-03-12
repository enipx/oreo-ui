import type { AvatarThemedDefaultProps } from '../components.types';
import { flexCenterStyle, transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { getBaseStyle, getColorSchemeStyle, styleModeHandler } from './base';

// @defaults
export const avatarDefaults = {
  initialsClassName: 'avatar__initials',
  imgClassName: 'avatar__img',
  svgClassName: 'avatar__svg',
  placeholderStrokeWidth: 1.8,
  alt: 'avatar',
  size: 'md',
};

// @themes
type AvatarSystemThemeParams = SystemThemeParams & AvatarThemedDefaultProps;

type AvatarStyleObjectType = {
  width: string | number;
  height: string | number;
  fontSize: string | number;
  initialsFontSize: string | number;
  borderWidth: string | number;
  groupSpacing: string | number;
  borderColor: string | number;
};

export const getAvatarSizeStyle = (options: AvatarSystemThemeParams) => {
  const { theme, size = avatarDefaults.size, isGrouped } = options;

  const { avatar } = theme.components;

  const borderColor = isGrouped
    ? getBaseStyle(options).backgroundColor
    : theme.colors.transparent;

  const width = avatar.size[size as keyof typeof avatar.size];
  const height = width;
  const fontSize = avatar.fontSizes[size as keyof typeof avatar.size];
  const initialsFontSize =
    avatar.initialsFontSizes[size as keyof typeof avatar.size];
  const borderWidth = avatar.borderWidths[size as keyof typeof avatar.size];
  const groupSpacing = avatar.groupSpacing[size as keyof typeof avatar.size];

  const styles: AvatarStyleObjectType = {
    width,
    height,
    fontSize,
    initialsFontSize,
    borderWidth,
    groupSpacing,
    borderColor,
  };

  return styles;
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

  const {
    width,
    height,
    fontSize,
    initialsFontSize,
    borderColor,
    borderWidth,
    groupSpacing,
  } = getAvatarSizeStyle(options);

  const { backgroundColor: schemeBackgroundColor, color } = getColorSchemeStyle(
    {
      theme,
      colorScheme: colorScheme || 'gray',
      variant: variant || 'subtle',
    }
  );

  const defaultBackground = styleModeHandler({
    light: 'gray.100',
    dark: 'gray.700',
    theme,
  });

  const backgroundColor = colorScheme
    ? schemeBackgroundColor
    : defaultBackground;

  const baseStyle = `
    ${flexCenterStyle}
    background-color: ${backgroundColor};
    width: ${width};
    height: ${height};
    margin-right: ${isGrouped && !isLastItem ? groupSpacing : 0};
    border-width: ${borderWidth};
    border-style: solid;
    border-color: ${borderColor};
    position: relative;
    border-radius: ${theme.radii.full};
    overflow: hidden;
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    ${transitionStyle()}
    display: inline-flex;
    text-transform: uppercase;
    flex-shrink:0;
    vertical-align: top;
    color: ${color};
    font-weight: ${theme.fontWeights.medium};
    font-size: ${fontSize};

    .${avatarDefaults.initialsClassName} {
      font-size: ${initialsFontSize};
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

export const avatarTextDefaultStyle = (options: AvatarSystemThemeParams) => {
  const { theme, type = 'web', colorScheme, variant } = options;

  const { fontSize } = getAvatarSizeStyle(options);

  const { color } = getColorSchemeStyle({
    theme,
    colorScheme: colorScheme || 'gray',
    variant: variant || 'subtle',
  });

  const baseStyle = `
    font-size: ${fontSize};
    color: ${color};
    font-weight: ${theme.fontWeights.semiBold};
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
