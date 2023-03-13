// @imports
import themeUtilities from '../utilities/';

import type { PackageTypes } from '@/core/constants/index.types';

// @file declarations

const spinner = (arg?: PackageTypes) => {
  const { space } = themeUtilities(arg);

  const size = {
    'xs': space[4],
    'sm': space[5],
    'md': space[6],
    'lg': space[8],
    'xl': space[10],
    '2xl': space[14],
  };
  const borderWidths = {
    'xs': '2px',
    'sm': '2px',
    'md': '2px',
    'lg': '3px',
    'xl': '3px',
    '2xl': '4px',
  };

  return {
    size,
    borderWidths,
  };
};

// @types definitions
export type SpinnerType = ReturnType<typeof spinner>;

// @exports
export default spinner;
