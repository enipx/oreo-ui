// @imports
import themeUtilities from '../utilities/';

import type { PackageTypes } from '@/core/constants/index.types';

// @file declarations

const select = (arg?: PackageTypes) => {
  const { space, fontSizes: themeFontSizes } = themeUtilities(arg);

  const fontSizes = {
    xs: themeFontSizes.sm,
    sm: themeFontSizes.sm,
    md: themeFontSizes.sm,
    lg: themeFontSizes.md,
  };

  const paddingX = {
    xs: space[3],
    sm: space[3],
    md: space[4],
    lg: space[4],
  };

  return {
    fontSizes,
    paddingX,
  };
};

// @types definitions
export type SelectType = ReturnType<typeof select>;

// @exports
export default select;
