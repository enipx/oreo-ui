import { TransitionsTypeObject } from '../css/transitions';
import type { SystemThemeParams } from '../index.types';

// @defaults
export const drawerDefaults = {
  size: 'md',
};

// @styles
export const drawerContentDefaultStyle = (options: SystemThemeParams) => {
  const { isDrawer, pos } = options;

  const baseStyle = `
    border-radius: 0;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  `;

  const top = `
    ${baseStyle}
    top: 0;
    max-width: 100%;
    height: auto;
  `;

  const positions = {
    left: baseStyle,
    right: `
      ${baseStyle}
      left: auto;
      right: 0;
    `,
    top,
    bottom: `
      ${top}
      top: auto;
      bottom: 0;
    `,
  };

  return isDrawer ? positions[pos as keyof typeof positions] : '';
};

export const drawerDefaultTransitions = (
  options: Partial<SystemThemeParams>
) => {
  const { pos } = options;

  const positions: TransitionsTypeObject = {
    top: 'slideTop',
    bottom: 'slideBottom',
    left: 'slideLeft',
    right: 'slideRight',
  };

  return positions[pos];
};
