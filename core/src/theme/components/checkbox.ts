// @imports
import themeUtilities from '../utilities/';

import type { PackageTypes } from '@/constants/index.types';
import { isPackageNative } from '@/helpers/base';
import { add } from '@/helpers/number';

// @file declarations

const checkbox = (arg?: PackageTypes) => {
  const { space, radii } = themeUtilities(arg);

  const isNative = isPackageNative(arg);

  const size = {
    sm: isNative ? `${add(space[3], space[1])}px` : space[3],
    md: isNative ? `${add(space[4], space[1])}px` : space[4],
    lg: isNative ? `${add(space[5], space[1])}px` : space[5],
  };

  const borderRadius = {
    sm: radii.sm,
    md: radii.sm,
    lg: radii.sm,
  };

  return {
    width: size,
    height: size,
    borderRadius,
  };
};

// @types definitions
export type CheckboxType = ReturnType<typeof checkbox>;

// @exports
export default checkbox;
