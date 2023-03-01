import type { ImageThemedDefaultProps } from '../components.types';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';

import { getDimensionsUnitHandler } from '@/core/helpers/layout';
import spacing from '@/core/theme/utilities/spacing';

// @defaults
export const imageDefaults = {
  size: spacing[32],
};

// @themes
type SkeletonSystemThemeParams = SystemThemeParams & ImageThemedDefaultProps;

export const imageDefaultStyle = (options: SkeletonSystemThemeParams) => {
  const { type = 'web', fit, width, height } = options;

  const size = getDimensionsUnitHandler(imageDefaults.size).px;

  const baseStyle = `
  `;

  const native = `
    ${baseStyle}
    width: ${width || size};
    height: ${height || size};
  `;

  const web = `
    ${baseStyle}
    object-fit: ${fit || 'cover'};
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const isSvgHandler = (uri?: string) => {
  return uri?.endsWith('.svg');
};
