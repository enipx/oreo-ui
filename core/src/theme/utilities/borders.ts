// @imports
import { PackageTypes } from '../../constants/index.types';
import { isPackageWeb } from '../../helpers/base';
import { convertObjectDimensionsUnit } from '../../helpers/layout';

// @file declarations
const borderWidths = {};

const borders = {};

const bordersProps = (arg?: PackageTypes) => {
  const isWeb = isPackageWeb(arg);

  return {
    borderWidths: isWeb
      ? (convertObjectDimensionsUnit(borderWidths) as BorderWidthsTypes)
      : borderWidths,
    borders,
  };
};

// @types definitions
export type BorderWidthsTypes = typeof borderWidths;

export type BorderWidthsKeys = keyof BorderWidthsTypes;

// @exports
export default bordersProps;
