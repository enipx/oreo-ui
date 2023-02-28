import type { ImageThemedDefaultProps } from '../components.types';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';

// @defaults
export const imageDefaults = {};

// @themes
type SkeletonSystemThemeParams = SystemThemeParams & ImageThemedDefaultProps;

export const imageDefaultStyle = (options: SkeletonSystemThemeParams) => {
  const { type = 'web', fit } = options;

  const baseStyle = `
  `;

  const native = `
    ${baseStyle}
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
