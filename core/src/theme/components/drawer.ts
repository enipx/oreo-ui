// @imports
import type { PackageTypes } from '@/core/constants/index.types';
import { isPackageWeb } from '@/core/helpers/base';
import { convertObjectDimensionsUnit } from '@/core/helpers/layout';

// @file declarations
const drawerSizes = {
  xs: 320,
  sm: 384,
  md: 448,
  lg: 512,
  xl: 576,
};

const drawer = (arg?: PackageTypes) => {
  const isWeb = isPackageWeb(arg);

  const sizes = isWeb
    ? (convertObjectDimensionsUnit(drawerSizes) as DrawerSizesTypes)
    : drawerSizes;

  return {
    sizes,
  };
};

// @types definitions
export type DrawerSizesTypes = typeof drawerSizes;

export type DrawerSizesKeys = keyof DrawerSizesTypes;

export type DrawerTypes = typeof drawer;

export type DrawerKeys = keyof DrawerTypes;

// @exports
export { drawerSizes };
export default drawer;
