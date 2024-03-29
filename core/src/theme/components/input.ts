// @imports
import themeUtilities from '../utilities/';

import type { PackageTypes } from '@/constants/index.types';

// @file declarations

const input = (arg?: PackageTypes) => {
  const { space, radii, fontSizes: themeFontSizes } = themeUtilities(arg);

  const height = {
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

  const paddingX = {
    xs: space[2],
    sm: space[3],
    md: space[4],
    lg: space[4],
  };

  return {
    height,
    borderRadius,
    fontSizes,
    placeholderFontSizes,
    paddingX,
    selectionColor: 'rgba(34, 109, 204, 0.5)',
  };
};

// @types definitions
export type InputType = ReturnType<typeof input>;

// @exports
export default input;
