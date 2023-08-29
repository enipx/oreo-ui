// @imports
import type { PackageTypes } from '@/core/constants/index.types';
import { isPackageWeb } from '@/core/helpers/base';
import { convertObjectDimensionsUnit } from '@/core/helpers/layout';

// @file declarations
const modalSizes = {
  xs: 320,
  sm: 384,
  md: 448,
  lg: 512,
  xl: 576,
};

const modal = (arg?: PackageTypes) => {
  const isWeb = isPackageWeb(arg);

  const sizes = isWeb
    ? (convertObjectDimensionsUnit(modalSizes) as ModalSizesTypes)
    : modalSizes;

  return {
    sizes,
  };
};

// @types definitions
export type ModalSizesTypes = typeof modalSizes;

export type ModalSizesKeys = keyof ModalSizesTypes;

export type ModalTypes = typeof modal;

export type ModalKeys = keyof ModalTypes;

// @exports
export { modalSizes };
export default modal;
