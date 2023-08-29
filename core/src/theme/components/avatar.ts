// @imports
import themeUtilities from '../utilities/';

import type { PackageTypes } from '@/constants/index.types';

// @file declarations

const avatar = (arg?: PackageTypes) => {
  const { space, fontSizes: themeFontSizes } = themeUtilities(arg);

  const size = {
    'xs': space[6],
    'sm': space[8],
    'md': space[10],
    'lg': space[12],
    'xl': space[16],
    '2xl': space[20],
  };

  const fontSizes = {
    'xs': themeFontSizes.xs,
    'sm': themeFontSizes.sm,
    'md': themeFontSizes.sm,
    'lg': themeFontSizes.sm,
    'xl': themeFontSizes.md,
    '2xl': themeFontSizes.lg,
  };

  const initialsFontSizes = {
    'xs': themeFontSizes.xs,
    'sm': themeFontSizes.sm,
    'md': themeFontSizes.md,
    'lg': themeFontSizes.lg,
    'xl': themeFontSizes.xl,
    '2xl': themeFontSizes['2xl'],
  };

  const borderWidths = {
    'xs': '2px',
    'sm': '2px',
    'md': '2px',
    'lg': '3px',
    'xl': '3px',
    '2xl': '4px',
  };

  const groupSpacing = {
    'xs': `-${space[2]}`,
    'sm': `-${space[2.5]}`,
    'md': `-${space[3]}`,
    'lg': `-${space[4]}`,
    'xl': `-${space[4]}`,
    '2xl': `-${space[5]}`,
  };

  return {
    size,
    fontSizes,
    initialsFontSizes,
    borderWidths,
    groupSpacing,
  };
};

// @types definitions
export type AvatarType = ReturnType<typeof avatar>;

// @exports
export default avatar;
