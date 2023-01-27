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

export const selectDefaultFontSize = (option: SystemThemeParams) => {
  const { theme } = option;

  const size = option?.size || selectDefaults.size;

  const defaultPadding: ObjectTypes = {
    xs: theme.fontSizes.xs,
    sm: theme.fontSizes.sm,
    md: theme.fontSizes.md,
    lg: theme.fontSizes.lg,
  };

  return defaultPadding[size];
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

export const selectContainerBaseStyle = (option: SystemThemeParams) => {
  const { type = 'web' } = option;

  const { pl } = selectDefaultPadding(option);

  const baseStyle = `
    padding: 0;
    padding-left: ${pl};
  `;

  const native = `
    ${baseStyle}
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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

export const selectPlaceholderBaseStyle = (option: SystemThemeParams) => {
  const { type = 'web' } = option;

  const fontSize = selectDefaultFontSize(option);

  const baseStyle = `
    font-size: ${fontSize};
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
