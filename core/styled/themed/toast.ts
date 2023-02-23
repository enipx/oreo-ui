import {
  ToastThemedDefaultProps,
  ToastWebPositionTypes,
  ToastNativePositionTypes,
} from '../components.types';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';

import { PackageTypes } from '@/core/constants/index.types';

// @defaults
export const toastDefaults = {
  duration: 4000,
  position: 'bottom',
};

// @themes
type ToastSystemThemeParams = SystemThemeParams & ToastThemedDefaultProps;

export const getToastPositionStyle = (options: ToastSystemThemeParams) => {
  const { flex } = options;

  const position =
    options.pos || (toastDefaults.position as ToastWebPositionTypes);

  type PositionsObjectType = {
    [key in ToastWebPositionTypes]: string;
  };

  const flexPositions: PositionsObjectType = {
    'bottom': `
      justify-content: center;
    `,
    'bottom-left': `
      justify-content: flex-start;
    `,
    'bottom-right': `
      justify-content: flex-end;
    `,
    'top': `
      justify-content: center;
    `,
    'top-left': `
      justify-content: flex-start;
    `,
    'top-right': `
      justify-content: flex-end;
    `,
  };

  const positions: PositionsObjectType = {
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

  return flex ? flexPositions[position] : positions[position];
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
    flex-direction: column;
    position: fixed;
    z-index: ${theme.zIndices.modal};
    left: 0;
    ${getToastPositionStyle(options)}
    padding: ${theme.space[2]};
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const toastBaseContainerDefaultStyle = (
  options: ToastSystemThemeParams
) => {
  const { theme, type = 'web' } = options;

  const baseStyle = `
    display: flex;
    margin: ${theme.space[1.5]};
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    ${getToastPositionStyle({ ...options, flex: true })}
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

// @utilities
export const getToastPositions = (type?: PackageTypes) => {
  const res: {
    native: ToastNativePositionTypes[];
    web: ToastWebPositionTypes[];
  } = {
    native: ['top', 'bottom'],
    web: [
      'bottom',
      'bottom-left',
      'bottom-right',
      'top',
      'top-left',
      'top-right',
    ],
  };

  return res[type || 'web'];
};
