// @imports
import type {
  AlertThemedDefaultProps,
  AlertVariantTypes,
  AlertIconTypeTypes,
  AlertColorSchemeTypes,
} from '../components.types';
import { flexCenterStyle } from '../css';
import { addTransitionsHandler } from '../css/transitions';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { styleModeHandler } from './base';

import { add } from '@/helpers/number';
import { convertHexToRgbaHandler } from '@/helpers/theme';

// @defaults
export const alertDefaults = {
  iconClassName: 'alert__icon',
  closeClassName: 'alert__close',
  contentClassName: 'alert__content',
  contentDescrClassName: 'alert__content__description',
  colorScheme: 'gray',
};

type AlertSystemThemeParams = SystemThemeParams & AlertThemedDefaultProps;

// @theme
export const getAlertColors = (option: AlertSystemThemeParams) => {
  const { variant = 'subtle', colorScheme = 'gray', theme, toast } = option;

  const variants: {
    [key in AlertVariantTypes]: {
      color: string;
      backgroundColor: string;
      contentColor: string;
    };
  } = {
    subtle: {
      backgroundColor: styleModeHandler({
        light: `${colorScheme}.50`,
        dark: convertHexToRgbaHandler(
          toast
            ? theme.colors[colorScheme][700]
            : theme.colors[colorScheme][100],
          toast ? 1 : 0.1
        ),
        theme,
      }),
      color: styleModeHandler({
        light: `${colorScheme}.700`,
        dark: `${colorScheme}.200`,
        theme,
      }),
      contentColor: styleModeHandler({
        light: `gray.500`,
        dark: `gray.50`,
        theme,
      }),
    },
    filled: {
      backgroundColor: styleModeHandler({
        light: `${colorScheme}.500`,
        dark: `${colorScheme}.600`,
        theme,
      }),
      color: theme.colors.white,
      contentColor: theme.colors.whiteAlpha[800],
    },
  };

  const backgroundColor = variants[variant].backgroundColor;

  const color = variants[variant].color;

  const contentColor = variants[variant].contentColor;

  return {
    backgroundColor,
    color,
    contentColor,
  };
};

// @styles
export const alertDefaultStyle = (option: AlertSystemThemeParams) => {
  const { theme, type = 'web', showBorder, toast } = option;

  const { xs } = theme.breakpoints;

  const { backgroundColor, color, contentColor } = getAlertColors(option);

  const borderColor = showBorder ? color : theme.colors.transparent;

  const baseStyle = `
    background-color: ${backgroundColor};
    border-radius: ${theme.radii.base};
    border-left: 4px solid ${borderColor};
  `;

  const native = `
    ${baseStyle}
    flex-direction: row;
    border-radius: ${add(theme.radii.base, theme.radii.xs)}px;
    padding-horizontal: ${theme.space[3]};
    padding-vertical: ${theme.space[4]};
    border-left-width: 4px;
    border-left-color: ${borderColor};
  `;

  const web = `
    ${baseStyle}
    display: flex;
    padding: ${theme.space[3]} ${theme.space[3]};
    color: ${color};
    ${toast ? `max-width: ${xs};` : ''}
    ${addTransitionsHandler([{ name: 'fade' }])}

    .alert__icon,
    .alert__close {
      ${flexCenterStyle}
      height: ${theme.space[5]};
      padding: ${theme.space[0.5]};
      width: ${theme.space[5]};
      cursor: pointer;
      color: ${color};
      flex-shrink: 0;

      svg {
        flex-shrink: 0;
      }
    }

    .alert__icon {
      margin-right: ${theme.space[1]};
    }

    .alert__close {
      margin-left: ${theme.space[2]};
    }

    .alert__content {
      flex: 1;
      font-weight: ${theme.fontWeights.medium};
      font-size: ${theme.fontSizes.sm};

      &__description {
        color: ${contentColor};
        font-weight: ${theme.fontWeights.regular};
        margin-top: ${theme.space[2]};
      }
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const alertTitleDefaultStyle = (option: AlertSystemThemeParams) => {
  const { theme, type = 'web', isContent } = option;

  const { color, contentColor } = getAlertColors(option);

  const baseStyle = `
    color: ${isContent ? contentColor : color};
    font-size: ${theme.fontSizes.md};
  `;

  const native = `
    ${baseStyle}
    background-color: ${theme.colors.transparent};
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
export const getAlertIconType = (options: AlertThemedDefaultProps) => {
  const { iconType, colorScheme = 'gray' } = options;

  const icons: { [key in AlertColorSchemeTypes]: AlertIconTypeTypes } = {
    red: 'danger',
    gray: 'info',
    orange: 'warning',
    green: 'success',
    blue: 'info',
  };

  const res: AlertIconTypeTypes = iconType || icons?.[colorScheme] || 'info';

  return res;
};
