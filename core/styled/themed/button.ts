import { variant } from 'styled-system';
import styledTheme from 'styled-theming';

import { ObjectTypes, PackageTypes } from '../../constants/index.types';
import { ThemeType } from '../../theme';
import { flexCenterStyle } from '../css';

import { isPackageNative } from '@/core/helpers/base';
import { SpacingKeys } from '@/core/theme/utilities/spacing';

type StyledThemeProps = ObjectTypes;

// @button themes
export const buttonBackgroundColor = styledTheme.variants(
  'mode',
  'colorScheme',
  {
    blue: {
      light: ({ theme }: StyledThemeProps) => theme.colors.blue[500],
    },
    green: { light: ({ theme }: StyledThemeProps) => theme.colors.green[500] },
    red: { light: ({ theme }: StyledThemeProps) => theme.colors.red[500] },
    yellow: {
      light: ({ theme }: StyledThemeProps) => theme.colors.yellow[500],
    },
    gray: { light: ({ theme }: StyledThemeProps) => theme.colors.gray[50] },
    transparent: {
      light: ({ theme }: StyledThemeProps) => theme.colors.transparent,
    },
  }
);

export const buttonColor = styledTheme.variants('mode', 'colorScheme', {
  blue: { light: ({ theme }: StyledThemeProps) => theme.colors.white },
  green: { light: ({ theme }: StyledThemeProps) => theme.colors.white },
  red: { light: ({ theme }: StyledThemeProps) => theme.colors.white },
  yellow: { light: ({ theme }: StyledThemeProps) => theme.colors.white },
  gray: { light: ({ theme }: StyledThemeProps) => theme.colors.black },
  transparent: { light: ({ theme }: StyledThemeProps) => theme.colors.black },
});

export const buttonSizeVariant = (theme: ThemeType, type?: PackageTypes) => {
  const isNative = isPackageNative(type);

  return variant({
    prop: 'size',
    variants: {
      xs: {
        ...(isNative ? {} : { fontSize: theme.fontSizes.xs }),
        height: theme.space[6],
        px: 2,
        borderRadius: theme.radii.sm,
      },
      sm: {
        ...(isNative ? {} : { fontSize: theme.fontSizes.xs }),
        height: theme.space[8],
        px: 3,
        borderRadius: theme.radii.sm,
      },
      lg: {
        ...(isNative ? {} : { fontSize: theme.fontSizes.md }),
        height: theme.space[12],
        px: 6,
      },
    },
  });
};

export const buttonDefaultStyle = (theme: ThemeType, type?: PackageTypes) => {
  if (isPackageNative(type)) {
    return `
    ${flexCenterStyle}
    border-radius: ${theme.radii.md};
    height: ${theme.space[10]};
  `;
  }

  return `
    ${flexCenterStyle}
    appearance: none;
    border: 0;
    border-radius: ${theme.radii.md};
    cursor: pointer;
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.medium};
    height: ${theme.space[10]};
    line-height: ${theme.lineHeights[0]};
    outline: 0;
    padding-left: ${theme.space[4]};
    padding-right: ${theme.space[4]};
    white-space: nowrap;
    width: auto;
  `;
};

export const buttonIconSpacing: Record<string, SpacingKeys> = {
  xs: 'sm',
  sm: 'md',
  md: 'md',
  lg: 'md',
};
