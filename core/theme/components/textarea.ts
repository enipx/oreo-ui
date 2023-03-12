// @imports
import themeUtilities from '../utilities/';

import type { PackageTypes } from '@/core/constants/index.types';

// @file declarations

const textarea = (arg?: PackageTypes) => {
  const { space } = themeUtilities(arg);

  const height = space[20];

  return {
    height,
  };
};

// @types definitions
export type TextareaType = ReturnType<typeof textarea>;

// @exports
export default textarea;
