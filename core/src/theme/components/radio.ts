// @imports
import themeUtilities from '../utilities/';

import type { PackageTypes } from '@/core/constants/index.types';
import { isPackageNative } from '@/core/helpers/base';
import { add } from '@/core/helpers/number';

// @file declarations
const radio = (arg?: PackageTypes) => {
  const { space, radii } = themeUtilities(arg);

  const isNative = isPackageNative(arg);

  const size = {
    sm: isNative ? `${add(space[3], space[1])}px` : space[3],
    md: isNative ? `${add(space[4], space[1])}px` : space[4],
    lg: isNative ? `${add(space[5], space[1])}px` : space[5],
  };

  const checkedSize = {
    sm: isNative ? space[1.5] : space[1],
    md: isNative ? space[2] : space[1.5],
    lg: isNative ? space[3] : space[2],
  };

  const borderRadius = {
    sm: radii.full,
    md: radii.full,
    lg: radii.full,
  };

  return {
    width: size,
    height: size,
    borderRadius,
    checked: {
      width: checkedSize,
      height: checkedSize,
    },
  };
};

// @types definitions
export type RadioType = ReturnType<typeof radio>;

// @exports
export default radio;
