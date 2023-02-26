import type {
  ToastThemedDefaultProps,
  ToastWebPositionTypes,
  ToastNativePositionTypes,
} from '../components.types';
import { addTransitionsHandler, TransitionsType } from '../css/transitions';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';

import type { PackageTypes } from '@/core/constants/index.types';
import { isPackageNative } from '@/core/helpers/base';

// @defaults
export const toastDefaults = {
  duration: 4000,
  position: 'bottom',
  nativePosition: 'top',
};

// @themes
type ToastSystemThemeParams = SystemThemeParams & ToastThemedDefaultProps;

export const getToastPositionStyle = (options: ToastSystemThemeParams) => {
  const { flex, type } = options;

  const position =
    options.pos ||
    ((isPackageNative(type)
      ? toastDefaults.nativePosition
      : toastDefaults.position) as ToastWebPositionTypes);

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
      top: auto;
    `,
    'bottom-left': `
      bottom: 0;
      top: auto;
    `,
    'bottom-right': `
      bottom: 0;
      top: auto;
    `,
    'top': `
      bottom: auto;
      top: 0;
    `,
    'top-left': `
      bottom: auto;
      top: 0;
    `,
    'top-right': `
      bottom: auto;
      top: 0;
    `,
  };

  return flex ? flexPositions[position] : positions[position];
};

export const toastContainerDefaultStyle = (options: ToastSystemThemeParams) => {
  const { theme, type = 'web' } = options;

  const baseStyle = `
    background-color: ${theme.colors.transparent};
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: ${theme.zIndices.modal};
    padding: 0;
    margin: 0;
    left: 0;
    ${getToastPositionStyle(options)}
  `;

  const native = `
    ${baseStyle}
    position: absolute;
    flex: 1;
    justify-content: flex-start;
  `;

  const web = `
    ${baseStyle}
    flex-direction: column;
    position: fixed;
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
  const { theme, type = 'web', render } = options;

  const padding = render ? 0 : `${theme.space[1.5]} ${theme.space[3]}`;

  const baseStyle = `
    background-color: ${theme.colors.transparent};
    display: flex;
    padding: ${padding};
    margin: 0;
    overflow: hidden;
  `;

  const native = `
    ${baseStyle}
    width: 100%;
  `;

  const web = `
    ${baseStyle}
    ${getToastPositionStyle({ ...options, flex: true })}
    ${addTransitionsHandler([
      { name: 'fade' },
      { name: 'fadeTop', keyframeOptions: { yAxis: '-1rem' } },
      { name: 'fadeBottom', keyframeOptions: { yAxis: '1rem' } },
    ])}
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

export const getToastTransition = (pos?: ToastWebPositionTypes) => {
  const res: { [key in ToastWebPositionTypes]: TransitionsType } = {
    'bottom': 'fadeBottom',
    'bottom-left': 'fadeBottom',
    'bottom-right': 'fadeBottom',
    'top': 'fadeTop',
    'top-left': 'fadeTop',
    'top-right': 'fadeTop',
  };

  return res[pos || (toastDefaults.position as ToastWebPositionTypes)];
};
