import { variant } from 'styled-system';
import styledTheme from 'styled-theming';

import type { ObjectTypes, PackageTypes } from '../../constants/index.types';
import type { ThemeType } from '../../theme';
import { flexCenterStyle, transitionStyle } from '../css';
import type {
  SystemThemeParams,
  StyledThemeProps,
  SystemThemeReturnType,
} from '../index.types';

import { isPackageNative } from '@/core/helpers/base';
import type { RadiiKeys } from '@/core/theme/utilities/radius';
import type { SpacingKeys } from '@/core/theme/utilities/spacing';
import type { FontSizeKeys } from '@/core/theme/utilities/typography';

// @button themes
export const buttonDefaults = {
  disabledOpacity: 0.5,
  activeOpacity: 0.8,
  colorScheme: 'blue',
  size: 'md',
};

export const iconButtonDefaults = {
  disabledOpacity: 0.5,
  activeOpacity: 0.8,
  colorScheme: 'transparent',
  size: 'md',
};

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
    ghost: {
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
      light: ({ theme }: StyledThemeProps) => theme.colors.transparent,
    },
    ghost: {
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
      light: ({ theme }: StyledThemeProps) => theme.colors.transparent,
    },
    ghost: {
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
  ghost: { light: ({ theme }: StyledThemeProps) => theme.colors.black },
});

export const buttonStateVariant = (option: SystemThemeParams) => {
  const { theme, colorScheme = buttonDefaults.colorScheme } = option;
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
      light: theme.colors.transparent,
    },
    ghost: {
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
      light: theme.colors.transparent,
    },
    ghost: {
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
        opacity: buttonDefaults.disabledOpacity,
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
        borderRadius: theme.radii.md,
      },
      md: {
        ...(isNative ? {} : { fontSize: theme.fontSizes.sm }),
        height: theme.space[10],
        px: 4,
        borderRadius: theme.radii.md,
      },
    },
  });
};

export const buttonDefaultStyle = (option: SystemThemeParams) => {
  const { theme, type = 'web', disabled } = option;

  const opacity = disabled ? buttonDefaults.disabledOpacity : 1;

  const baseStyle = `
    ${flexCenterStyle}
    ${transitionStyle()}
    opacity: ${opacity};
  `;

  const native = baseStyle;

  const web = `
    ${baseStyle}
    appearance: none;
    border: 0;
    cursor: pointer;
    font-weight: ${theme.fontWeights.medium};
    line-height: ${theme.lineHeights[0]};
    outline: 0;
    white-space: nowrap;
    width: auto;
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

// @Icon Button
export const iconButtonDefaultStyle = (option: SystemThemeParams) => {
  const { theme, type = 'web', disabled } = option;

  const opacity = disabled ? iconButtonDefaults.disabledOpacity : 1;

  const baseStyle = `
    ${flexCenterStyle}
    ${transitionStyle()}
    opacity: ${opacity};
    flex-shrink: 0;
  `;

  const native = baseStyle;

  const web = `
    ${baseStyle}
    appearance: none;
    border: 0;
    cursor: pointer;
    line-height: ${theme.lineHeights[0]};
    outline: 0;
    white-space: nowrap;
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};
export const iconButtonSizeVariant = (option: SystemThemeParams) => {
  const { theme, rounded } = option;

  const getBorderRadius = (key: RadiiKeys) => {
    return rounded ? theme.radii.full : theme.radii[key];
  };

  return variant({
    prop: 'size',
    variants: {
      xs: {
        size: theme.space[6],
        borderRadius: getBorderRadius('sm'),
      },
      sm: {
        size: theme.space[8],
        borderRadius: getBorderRadius('sm'),
      },
      lg: {
        size: theme.space[12],
        borderRadius: getBorderRadius('md'),
      },
      md: {
        size: theme.space[10],
        borderRadius: getBorderRadius('md'),
      },
    },
  });
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
