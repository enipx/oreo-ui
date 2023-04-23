import type { TextThemedStyledProps } from '../components.types';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { getBaseStyle, getUtilitiesValue } from './base';

import { isPackageNative } from '@/core/helpers/base';
import { convertReactCSSToCSSHandler } from '@/core/helpers/theme';
import type {
  FontSizeKeys,
  FontWeightKeys,
} from '@/core/theme/utilities/typography';

// @types
type TextSystemThemeParams = SystemThemeParams & TextThemedStyledProps;

export const getNativeTextFont = (option: TextSystemThemeParams) => {
  const { theme } = option;
  if (theme.fonts.body) {
    return `
      font-family: ${theme.fonts.body};
    `;
  }

  return '';
};

export const getTextStyles = (option: TextSystemThemeParams) => {
  const { theme, type, fontSize, fontWeight } = option;

  const isNative = isPackageNative(type);

  const getSize = (size: FontSizeKeys) => {
    return (
      getUtilitiesValue({ theme, key: 'fontSizes', value: fontSize }) ||
      theme.fontSizes[size]
    );
  };

  const getWeight = (weight: FontWeightKeys) => {
    return `${theme.fontWeights[weight]}`;
  };

  const { borderColor } = getBaseStyle(option);

  const baseStyles = {
    fontWeight:
      getUtilitiesValue({ theme, key: 'fontWeights', value: fontWeight }) ||
      getWeight('bold'),
  };

  const styles: { [key: string]: React.CSSProperties } = {
    h1: {
      ...baseStyles,
      fontSize: getSize('2xl'),
    },
    h2: {
      ...baseStyles,
      fontSize: getSize('xl'),
    },
    h3: {
      ...baseStyles,
      fontSize: getSize('lg'),
    },
    h4: {
      ...baseStyles,
      fontSize: getSize('md'),
    },
    h5: {
      ...baseStyles,
      fontSize: getSize('sm'),
    },
    h6: {
      ...baseStyles,
      fontSize: getSize('xs'),
    },
    kbd: {
      ...baseStyles,
      ...(isNative
        ? theme.fonts.mono
          ? { fontFamily: theme.fonts.mono }
          : {}
        : { fontFamily: theme.fonts.mono }),
      fontSize: getSize('xs'),
      borderStyle: 'solid',
      borderColor,
      borderWidth: '1px 1px 3px',
      borderRadius: theme.radii.md,
      padding: `${theme.space[0.5]} ${theme.space[2]}`,
      whiteSpace: 'nowrap',
    },
    strong: {
      ...baseStyles,
    },
    sub: {
      bottom: `-${theme.space[1]}`,
    },
    sup: {
      top: `${theme.space[1]}`,
    },
  };

  const style = styles?.[option.as as keyof typeof styles];

  return convertReactCSSToCSSHandler(style);
};

export const textTruncateStyle = (option: TextSystemThemeParams) => {
  const { numberOfLines } = option;

  const styles = numberOfLines
    ? `
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${numberOfLines};
  `
    : '';

  return styles;
};

export const textDefaultStyle = (option: TextSystemThemeParams) => {
  const { theme, type = 'web', textTransform } = option;

  const baseStyle = `
    text-transform: ${textTransform || 'none'};
    ${getTextStyles(option)}
  `;

  const native = `
    ${baseStyle}
    ${getNativeTextFont(option)}
    font-size: ${theme.fontSizes.md};
  `;

  const web = `
    ${baseStyle}
    ${textTruncateStyle(option)}
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};
