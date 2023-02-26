import type { TooltipThemedDefaultProps } from '../components.types';
import { addTransitionsHandler } from '../css/transitions';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { getColorSchemeStyle } from './base';

// @defaults
export const badgeDefaults = {};

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

  const arrowSize = theme.space[2];

  const arrowHalfSize = theme.space[1];

  const baseStyle = `
    position: relative;
    background-color: ${backgroundColor};
    color: ${color};
    font-weight: ${theme.fontWeights.medium};
    font-size: ${theme.fontSizes.xs};
    border-radius: ${theme.radii.sm};
    max-width: ${theme.breakpoints[0]};
    z-index: ${theme.zIndices.tooltip};
    padding: ${padding};
    visibility: hidden;

    ${addTransitionsHandler([{ name: 'fade', duration: '300ms' }])}

    &[data-show="true"] {
      visibility: visible;
    }
  
    &[data-show="true"] > .arrow::before {
      visibility: visible;
    }

    .arrow,
    .arrow::before {
      position: absolute;
      width: ${arrowSize};
      height: ${arrowSize};
      background: inherit;
      transition: top 0.3s ease-in, bottom 0.3s ease-in, left 0.3s ease-in,
        right 0.3s ease-in;
    }

    .arrow {
      visibility: hidden;
    }
  
    .arrow::before {
      visibility: hidden;
      content: "";
      transform: rotate(45deg);
    }

    &[data-popper-placement^="top"] > .arrow {
      bottom: -${arrowHalfSize};
    }
  
    &[data-popper-placement^="bottom"] > .arrow {
      top: -${arrowHalfSize};
    }
  
    &[data-popper-placement^="left"] > .arrow {
      right: -${arrowHalfSize};
    }
  
    &[data-popper-placement^="right"] > .arrow {
      left: -${arrowHalfSize};
    }
  
    .arrow[data-hide="true"]::before {
      visibility: hidden !important;
    }
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
