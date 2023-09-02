// @imports
import themeUtilities from '../utilities/';

import type { PackageTypes } from '@/constants/index.types';
import { isPackageNative } from '@/helpers/base';
import { add } from '@/helpers/number';

// @file declarations
const themeSwitch = (arg?: PackageTypes) => {
  const { space, radii } = themeUtilities(arg);

  const isNative = isPackageNative(arg);

  const width = {
    sm: isNative ? space[9] : space[7],
    md: isNative ? `${add(space[10], space[1])}px` : space[9],
    lg: isNative ? `${add(space[12], space[1])}px` : space[12],
  };

  const height = {
    sm: isNative ? space[5] : space[4],
    md: isNative ? space[6] : space[5],
    lg: isNative ? space[7] : space[7],
  };

  const borderRadius = {
    sm: radii.full,
    md: radii.full,
    lg: radii.full,
  };

  const controlSize = {
    sm: isNative ? `${add(space[3], space[1])}px` : space[3],
    md: isNative ? `${add(space[4], space[1])}px` : space[4],
    lg: isNative ? `${add(space[5], space[1])}px` : space[6],
  };

  return {
    width,
    height,
    borderRadius,
    control: {
      width: controlSize,
      height: controlSize,
    },
  };
};

// @types definitions
export type SwitchType = ReturnType<typeof themeSwitch>;

// @exports
export default themeSwitch;
