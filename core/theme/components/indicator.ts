// @imports
import themeUtilities from '../utilities/';

import type { PackageTypes } from '@/core/constants/index.types';

// @file declarations

const indicator = (arg?: PackageTypes) => {
  const { space, fontSizes: themeFontSizes } = themeUtilities(arg);

  const size = {
    'xs': space[3],
    'sm': space[3.5],
    'md': space[4],
    'lg': space[4.5],
    'xl': space[5],
    '2xl': space[6],
  };

  const fontSizes = {
    'xs': themeFontSizes['2xs'],
    'sm': themeFontSizes['2xs'],
    'md': themeFontSizes['2xs'],
    'lg': themeFontSizes['2xs'],
    'xl': themeFontSizes.xs,
    '2xl': themeFontSizes.xs,
  };

  const borderWidths = {
    'xs': '2px',
    'sm': '2px',
    'md': '2px',
    'lg': '2px',
    'xl': '3px',
    '2xl': '4px',
  };

  return {
    size,
    fontSizes,
    borderWidths,
  };
};

// @types definitions
export type IndicatorType = ReturnType<typeof indicator>;

// @exports
export default indicator;
