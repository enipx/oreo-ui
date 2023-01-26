import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';

import { ObjectTypes } from '@/core/constants/index.types';
import type { SpacingKeys } from '@/core/theme/utilities/spacing';

// @button themes
export const selectDefaults = {
  disabledOpacity: 0.5,
  colorScheme: 'blue',
  activeOpacity: 0.8,
  size: 'md',
  state: 'default',
  selectionColor: 'rgba(34, 109, 204, 0.5)',
};

export const selectDefaultPadding = (option: SystemThemeParams) => {
  const { theme } = option;

  const size = option?.size || selectDefaults.size;

  const getPadding = (property: SpacingKeys) => {
    return theme.space[property];
  };

  const defaultPadding: ObjectTypes = {
    xs: {
      pl: getPadding(2),
      pr: getPadding(2),
    },
    sm: {
      pl: getPadding(3),
      pr: getPadding(3),
    },
    md: {
      pl: getPadding(3.5),
      pr: getPadding(3.5),
    },
    lg: {
      pl: getPadding(4),
      pr: getPadding(4),
    },
  };

  return defaultPadding[size];
};

export const selectBaseStyle = (option: SystemThemeParams) => {
  const { type = 'web' } = option;

  const { pl, pr } = selectDefaultPadding(option);

  const baseStyle = `
    padding-left: ${pl};
    padding-right: ${pr};
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
