import type { SkeletonThemedDefaultProps } from '../components.types';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';

// @defaults
export const skeletonDefaults = {};

// @themes
type SkeletonSystemThemeParams = SystemThemeParams & SkeletonThemedDefaultProps;

export const skeletonDefaultStyle = (options: SkeletonSystemThemeParams) => {
  const { theme, type = 'web', rounded, count, isLastItem } = options;

  const startColor = options.startColor || theme.colors.gray[50];
  const endColor = options.endColor || theme.colors.gray[100];

  const mb = count && count > 1 && !isLastItem ? theme.space[2] : 0;

  const baseStyle = `
    position: relative;
    width: 100%;
    background-color: ${startColor};
    overflow: hidden;
    z-index: 1;
    margin-bottom: ${mb};
  `;

  const native = `
    ${baseStyle}
    opacity: 0.6;
    border-radius: ${rounded ? theme.radii.full : theme.radii.sm};
  `;

  const web = `
    ${baseStyle}
    border-radius: ${rounded ? '50%' : theme.radii.sm};
    line-height: 1;

    @keyframes skeletonKeyframes {
      100% {
        transform: translateX(100%);
      }
    }
  
    &::after {
      position: absolute;
      content: ' ';
      display: block;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      background-repeat: no-repeat;
      background-image: linear-gradient(90deg, ${startColor}, ${endColor}, ${startColor});
      transform: translateX(-100%);
      animation: skeletonKeyframes 1.5s ease-in-out normal infinite;
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const skeletonBaseDefaultStyle = (
  options: SkeletonSystemThemeParams
) => {
  const { theme, type = 'web' } = options;

  const endColor = options.endColor || theme.colors.whiteAlpha[900];

  const baseStyle = `
    width: ${theme.space[8]};
    background-color: ${endColor};
    height: 100%;
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
