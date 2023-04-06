// @imports
import themeUtilities from '../utilities/';

import type { PackageTypes } from '@/core/constants/index.types';

// @file declarations

const pinInput = (arg?: PackageTypes) => {
  const { space, radii, fontSizes: themeFontSizes } = themeUtilities(arg);

  const size = {
    xs: space[6],
    sm: space[8],
    md: space[10],
    lg: space[12],
  };

  const borderRadius = {
    xs: radii.md,
    sm: radii.md,
    md: radii.md,
    lg: radii.base,
  };

  const fontSizes = {
    xs: themeFontSizes.sm,
    sm: themeFontSizes.sm,
    md: themeFontSizes.sm,
    lg: themeFontSizes.md,
  };

  const placeholderFontSizes = {
    xs: themeFontSizes.xs,
    sm: themeFontSizes.sm,
    md: themeFontSizes.sm,
    lg: themeFontSizes.md,
  };

  const marginLeft = {
    xs: space[2],
    sm: space[3],
    md: space[3],
    lg: space[4],
  };

  return {
    height: size,
    width: size,
    borderRadius,
    fontSizes,
    placeholderFontSizes,
    marginLeft,
  };
};

// @types definitions
export type PinInputType = ReturnType<typeof pinInput>;

// @exports
export default pinInput;
