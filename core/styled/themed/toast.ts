import {
  ToastThemedDefaultProps,
  ToastWebPositionTypes,
} from '../components.types';
import { flexCenterXStyle, transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';

// @defaults
export const toastDefaults = {};

// @themes
type ToastSystemThemeParams = SystemThemeParams & ToastThemedDefaultProps;

export const getToastPositionStyle = (options: ToastSystemThemeParams) => {
  const { position } = options;

  const positions: {
    [key in ToastWebPositionTypes]: string;
  } = {
    'bottom': `
    bottom: 0;
    justify-content: center;
    top: auto;
    `,
    'bottom-left': `
    bottom: 0;
    justify-content: flex-start;
    top: auto;
    `,
    'bottom-right': `
    bottom: 0;
    justify-content: flex-end;
    top: auto;
    `,
    'top': `
      bottom: auto;
      justify-content: center;
      top: 0;
    `,
    'top-left': `
    bottom: auto;
    justify-content: flex-start;
    top: 0;
    `,
    'top-right': `
    bottom: auto;
    justify-content: flex-end;
    top: 0;
    `,
  };

  return positions[position || 'bottom'];
};

export const toastContainerDefaultStyle = (options: ToastSystemThemeParams) => {
  const { theme, type = 'web' } = options;

  const baseStyle = `
    width: 100%;
    display: flex;
    justify-content: center;
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    ${transitionStyle()}
    ${flexCenterXStyle}
    left: 0;
    padding: ${theme.space[4]};
    position: fixed;
    top: 0;
    z-index: ${theme.zIndices.modal};
    ${getToastPositionStyle(options)}
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};
