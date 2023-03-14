// @imports
import type { PackageTypes } from '@/core/constants/index.types';

// @file declarations

const divider = (_arg?: PackageTypes) => {
  const borderWidths = {
    'xs': '1px',
    'sm': '2px',
    'md': '3px',
    'lg': '4px',
    'xl': '8px',
    '2xl': '16px',
  };

  return {
    borderWidths,
  };
};

// @types definitions
export type DividerType = ReturnType<typeof divider>;

// @exports
export default divider;
