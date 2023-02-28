import type { PopoverThemedDefaultProps } from '../components.types';
import { addTransitionsHandler } from '../css/transitions';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { getBaseStyle } from './base';

// @defaults
export const popoverDefaults = {};

// @themes
type PopoverSystemThemeParams = SystemThemeParams & PopoverThemedDefaultProps;

export const popoverContentDefaultStyle = (
  options: PopoverSystemThemeParams
) => {
  const { theme, type = 'web' } = options;

  const arrowSize = theme.space[2];

  const arrowHalfSize = theme.space[1];

  const { borderColor } = getBaseStyle(options);

  const baseStyle = `
    position: relative;
    border: 1px solid ${borderColor};
    border-radius: ${theme.radii.md};
    max-width: ${theme.breakpoints[0]};
    z-index: ${theme.zIndices.popover};
    visibility: hidden;
    box-shadow: ${theme.shadows.sm};
    

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
