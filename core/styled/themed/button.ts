import { variant } from 'styled-system';
import styledTheme from 'styled-theming';

import { ObjectTypes, PackageTypes } from '../../constants/index.types';
import { ThemeType } from '../../theme';
import { flexCenterStyle } from '../css';
import { SystemThemeParams } from '../index.types';

import { isPackageNative } from '@/core/helpers/base';
import { SpacingKeys } from '@/core/theme/utilities/spacing';
import { FontSizeKeys } from '@/core/theme/utilities/typography';

type StyledThemeProps = ObjectTypes;

// @button themes
const buttonDisabledOpacity = 0.5;
const buttonDefaultColorScheme = 'blue';

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

export const buttonHoverBackgroundColor = styledTheme.variants(
  'mode',
  'colorScheme',
  {
    blue: {
      light: ({ theme }: StyledThemeProps) => theme.colors.blue[600],
    },
    green: { light: ({ theme }: StyledThemeProps) => theme.colors.green[600] },
    red: { light: ({ theme }: StyledThemeProps) => theme.colors.red[600] },
    yellow: {
      light: ({ theme }: StyledThemeProps) => theme.colors.yellow[600],
    },
    gray: { light: ({ theme }: StyledThemeProps) => theme.colors.gray[50] },
    transparent: {
      light: ({ theme }: StyledThemeProps) => theme.colors.gray[50],
    },
  }
);

export const buttonHoverBorderColor = styledTheme.variants(
  'mode',
  'colorScheme',
  {
    blue: {
      light: ({ theme }: StyledThemeProps) => theme.colors.blue[600],
    },
    green: { light: ({ theme }: StyledThemeProps) => theme.colors.green[600] },
    red: { light: ({ theme }: StyledThemeProps) => theme.colors.red[600] },
    yellow: {
      light: ({ theme }: StyledThemeProps) => theme.colors.yellow[600],
    },
    gray: { light: ({ theme }: StyledThemeProps) => theme.colors.gray[100] },
    transparent: {
      light: ({ theme }: StyledThemeProps) => theme.colors.gray[50],
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

export const buttonStateVariant = (option: SystemThemeParams) => {
  const { theme, colorScheme = buttonDefaultColorScheme } = option;
  const { mode = 'light' } = theme;

  const modeBackgroundColor = {
    blue: {
      light: theme.colors.blue[600],
    },
    green: { light: theme.colors.green[600] },
    red: { light: theme.colors.red[600] },
    yellow: {
      light: theme.colors.yellow[600],
    },
    gray: { light: theme.colors.gray[50] },
    transparent: {
      light: theme.colors.gray[50],
    },
  };

  const modeBorderColor = {
    blue: {
      light: theme.colors.blue[600],
    },
    green: { light: theme.colors.green[600] },
    red: { light: theme.colors.red[600] },
    yellow: {
      light: theme.colors.yellow[600],
    },
    gray: { light: theme.colors.gray[100] },
    transparent: {
      light: theme.colors.gray[50],
    },
  };

  const backgroundColor = (modeBackgroundColor as ObjectTypes)[colorScheme][
    mode
  ];
  const borderColor = (modeBorderColor as ObjectTypes)[colorScheme][mode];

  return variant({
    prop: 'state',
    variants: {
      focused: {
        backgroundColor,
        borderColor,
      },
      hovered: {
        backgroundColor,
        borderColor,
      },
      disabled: {
        opacity: buttonDisabledOpacity,
      },
    },
  });
};

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
      md: {
        px: 4,
      },
    },
  });
};

export const buttonDefaultStyle = (option: SystemThemeParams) => {
  const { theme, type, disabled } = option;

  const opacity = disabled ? buttonDisabledOpacity : 1;

  if (isPackageNative(type)) {
    return `
    ${flexCenterStyle}
    border-radius: ${theme.radii.md};
    height: ${theme.space[10]};
    opacity: ${opacity};
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
    opacity: ${opacity};
  `;
};

export const buttonIconSpacing: Record<string, SpacingKeys> = {
  xs: 'sm',
  sm: 'md',
  md: 'md',
  lg: 'md',
};

export const buttonTextsize: Record<string, FontSizeKeys> = {
  xs: 'xs',
  sm: 'sm',
  md: 'sm',
  lg: 'md',
};
