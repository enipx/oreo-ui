// @imports
import type { PackageTypes } from '@/core/constants/index.types';

// @file declarations

const dropdown = (_arg?: PackageTypes) => {
  return {
    minWidth: '220px',
  };
};

// @types definitions
export type DropdownType = ReturnType<typeof dropdown>;

// @exports
export default dropdown;
