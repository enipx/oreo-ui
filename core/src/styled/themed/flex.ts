import type {
  FlexThemedStyledProps,
  FlexColThemedStyledProps,
  FlexRowThemedStyledProps,
} from '../components.types';
import { flexCenterStyle, flexCenterXStyle, flexCenterYStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { getUtilitiesValue } from './base';

import { getResponsiveStyleHandler } from '@/helpers/theme';

// @defaults
export const flexDefaults = {};

// @themes
type FlexSystemThemeParams = SystemThemeParams & FlexThemedStyledProps;
type FlexColSystemThemeParams = SystemThemeParams & FlexColThemedStyledProps;
type FlexRowSystemThemeParams = SystemThemeParams & FlexRowThemedStyledProps;

export const flexDefaultStyle = (options: FlexSystemThemeParams) => {
  const {
    theme,
    type = 'web',
    row,
    column,
    flexDirection,
    reverse,
    inline,
    center,
    centerX,
    centerY,
    spacing,
    wrap,
  } = options;

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
    ${center ? flexCenterStyle : ''}
    ${centerX ? flexCenterXStyle : ''}
    ${centerY ? flexCenterYStyle : ''}
    flex-direction: ${_flexDirection};
    display: ${flex};
  `;

  const native = `
    ${baseStyle}
    display: flex;
  `;

  const web = `
    ${baseStyle}
    ${wrap ? 'flex-wrap: wrap;' : ''}
    ${spacing ? `gap: ${getUtilitiesValue({ theme, value: spacing })}` : ''}
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

export const flexColDefaultStyle = (options: FlexColSystemThemeParams) => {
  const { theme, type = 'web', col = 1, spacing, spacingX, spacingY } = options;

  const paddingX = getUtilitiesValue({
    theme,
    value: spacingX || spacing || 0,
  });

  const paddingY = getUtilitiesValue({
    theme,
    value: spacingY || spacing || 0,
  });

  const getColWidth = (_col: number) => {
    const totalColWidth = 100 / 12;

    return (totalColWidth * _col).toFixed(2) + '%';
  };

  const colStyle = getResponsiveStyleHandler({
    property: ['flex', 'max-width'],
    props: [col, col],
    replaceValue: {
      1: getColWidth(1),
      2: getColWidth(2),
      3: getColWidth(3),
      4: getColWidth(4),
      5: getColWidth(5),
      6: getColWidth(6),
      7: getColWidth(7),
      8: getColWidth(8),
      9: getColWidth(9),
      10: getColWidth(10),
      11: getColWidth(11),
      12: getColWidth(12),
    },
    theme,
    prependStyle: ['0 0'],
  });

  const baseStyle = `
    position: relative;
    width: 100%;
    padding: ${paddingY} ${paddingX};
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    ${colStyle}
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const flexRowDefaultStyle = (options: FlexRowSystemThemeParams) => {
  const { type = 'web', flexWrap } = options;

  const baseStyle = `
    position: relative;
    width: 100%;
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    flex-wrap: ${flexWrap || 'wrap'};
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};
