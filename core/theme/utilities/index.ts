// @imports
import type { PackageTypes } from '../../constants/index.types';
import _breakpoints, { BreakpointsTypes } from './breakpoints';
import colors from './colors';
import _radii, { RadiiTypes } from './radius';
import _space, { SpacingTypes } from './spacing';
import typography from './typography';
import zIndices from './z-index';

import { isPackageWeb } from '@/core/helpers/base';
import { convertObjectDimensionsUnit } from '@/core/helpers/layout';

// @file declarations
const utilities = (arg?: PackageTypes) => {
  const isWeb = isPackageWeb(arg);

  const space = isWeb
    ? (convertObjectDimensionsUnit(_space) as SpacingTypes)
    : _space;

  const breakpoints = isWeb
    ? (convertObjectDimensionsUnit(_breakpoints) as BreakpointsTypes)
    : _breakpoints;

  const radii = isWeb
    ? (convertObjectDimensionsUnit(_radii) as RadiiTypes)
    : _radii;

  return {
    breakpoints,
    colors,
    space,
    radii,
    zIndices,
    ...typography(arg),
  };
};

// @exports
export default utilities;
