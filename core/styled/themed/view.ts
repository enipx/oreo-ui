import type { ViewThemedStyledProps } from '../components.types';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';

import { getResponsiveStyleHandler } from '@/core/helpers/theme';

// @types
type ViewSystemThemeParams = SystemThemeParams & ViewThemedStyledProps;

// @button themes
export const viewDefaults = {};

export const viewDefaultStyle = (option: ViewSystemThemeParams) => {
  const { theme, type = 'web', flexCenter, flexCenterX, flexCenterY } = option;

  const flexCenterStyle = flexCenter
    ? getResponsiveStyleHandler({
        props: [flexCenter],
        theme,
        replaceStyle: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      })
    : '';

  const flexCenterYStyle = flexCenterY
    ? getResponsiveStyleHandler({
        props: [flexCenterY],
        theme,
        replaceStyle: {
          display: 'flex',
          alignItems: 'center',
        },
      })
    : '';

  const flexCenterXStyle = flexCenterX
    ? getResponsiveStyleHandler({
        props: [flexCenterX],
        theme,
        replaceStyle: {
          display: 'flex',
          justifyContent: 'center',
        },
      })
    : '';

  const baseStyle = `
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    ${flexCenterStyle}
    ${flexCenterXStyle}
    ${flexCenterYStyle}
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};
