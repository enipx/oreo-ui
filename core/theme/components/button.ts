// @imports
import themeUtilities from '../utilities/';

import type { PackageTypes } from '@/core/constants/index.types';
import { isPackageNative } from '@/core/helpers/base';

// @file declarations

const button = (arg?: PackageTypes) => {
  const { space, radii, fontSizes: themeFontSizes } = themeUtilities(arg);

  const isNative = isPackageNative(arg);

  const height = {
    xs: space[6],
    sm: space[8],
    md: space[10],
    lg: space[12],
  };

  const borderRadius = {
    xs: radii.sm,
    sm: radii.sm,
    md: radii.sm,
    lg: radii.md,
  };

  const fontSizes = {
    xs: isNative ? themeFontSizes.sm : themeFontSizes.xs,
    sm: themeFontSizes.sm,
    md: isNative ? themeFontSizes.md : themeFontSizes.sm,
    lg: isNative ? themeFontSizes.lg : themeFontSizes.md,
  };

  const paddingX = {
    xs: space[2],
    sm: space[3],
    md: space[4],
    lg: space[6],
  };

  return {
    height,
    borderRadius,
    fontSizes,
    paddingX,
  };
};

// @types definitions
export type ButtonType = ReturnType<typeof button>;

// @exports
export default button;
