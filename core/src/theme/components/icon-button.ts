// @imports
import themeUtilities from '../utilities/';

import type { PackageTypes } from '@/constants/index.types';

// @file declarations
const iconButton = (arg?: PackageTypes) => {
  const { space, radii } = themeUtilities(arg);

  const size = {
    xs: space[6],
    sm: space[8],
    md: space[10],
    lg: space[12],
  };

  const borderRadius = {
    xs: radii.sm,
    sm: radii.sm,
    md: radii.sm,
    lg: radii.md,
  };

  return {
    width: size,
    height: size,
    borderRadius,
  };
};

// @types definitions
export type IconButtonType = ReturnType<typeof iconButton>;

// @exports
export default iconButton;
