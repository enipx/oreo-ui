import type { TooltipThemedDefaultProps } from '../components.types';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { getColorSchemeStyle } from './base';
import { popoverContentDefaultStyle } from './popover';

// @defaults
export const tooltipDefaults = {};

// @themes
type TooltipSystemThemeParams = SystemThemeParams & TooltipThemedDefaultProps;

export const tooltipDefaultStyle = (options: TooltipSystemThemeParams) => {
  const { theme, type = 'web', colorScheme, variant } = options;

  const { backgroundColor, color } = getColorSchemeStyle({
    theme,
    colorScheme: colorScheme || 'gray',
    variant: variant || 'solid',
  });

  const padding = `${theme.space[1]} ${theme.space[2]}`;

  const baseStyle = `
    position: relative;
    background-color: ${backgroundColor};
    color: ${color};
    font-weight: ${theme.fontWeights.medium};
    font-size: ${theme.fontSizes.xs};
    border-radius: ${theme.radii.sm};
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
