import type { TooltipThemedDefaultProps } from '../components.types';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { getColorSchemeStyle, styleModeHandler } from './base';
import { popoverContentDefaultStyle } from './popover';

// @defaults
export const tooltipDefaults = {};

// @themes
type TooltipSystemThemeParams = SystemThemeParams & TooltipThemedDefaultProps;

export const tooltipDefaultStyle = (options: TooltipSystemThemeParams) => {
  const { theme, type = 'web', colorScheme, variant } = options;

  const { backgroundColor: schemeBackgroundColor, color: schemeColor } =
    getColorSchemeStyle({
      theme,
      colorScheme: colorScheme || 'gray',
      variant: variant || 'solid',
    });

  const defaultBackgroundColor = styleModeHandler({
    theme,
    light: 'gray.500',
    dark: 'gray.200',
  });
  const defaultColor = styleModeHandler({
    theme,
    light: 'white',
    dark: 'gray.900',
  });

  const backgroundColor = colorScheme
    ? schemeBackgroundColor
    : defaultBackgroundColor;
  const color = colorScheme ? schemeColor : defaultColor;

  const padding = `${theme.space[1]} ${theme.space[2]}`;

  const baseStyle = `
    position: relative;
    background-color: ${backgroundColor};
    color: ${color};
    font-weight: ${theme.fontWeights.medium};
    font-size: ${theme.fontSizes.xs};
    border-radius: ${theme.radii.xs};
    z-index: ${theme.zIndices.tooltip};
    padding: ${padding};
    ${popoverContentDefaultStyle(options)}
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
