import type { FlexThemedStyledProps } from '../components.types';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';

// @defaults
export const flexDefaults = {};

// @themes
type FlexSystemThemeParams = SystemThemeParams & FlexThemedStyledProps;

export const flexDefaultStyle = (options: FlexSystemThemeParams) => {
  const { type = 'web', row, column, flexDirection, reverse, inline } = options;

  const _row = reverse ? 'row-reverse' : 'row';

  let _flexDirection = flexDirection || _row;

  if (row) {
    _flexDirection = _row;
  }

  if (column) {
    _flexDirection = reverse ? 'column-reverse' : 'column';
  }

  const flex = inline ? 'inline-flex' : 'flex';

  const baseStyle = `
    display: ${flex};
    flex-direction: ${_flexDirection};
  `;

  const native = `
    ${baseStyle}
    display: flex;
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

export const flexSpacerDefaultStyle = (options: FlexSystemThemeParams) => {
  const { type = 'web' } = options;

  const baseStyle = `
  `;

  const native = `
    ${baseStyle}
    flex: 1;
  `;

  const web = `
    ${baseStyle}
    flex: 1 1 0%;
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};
