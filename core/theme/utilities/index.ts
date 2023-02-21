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

  const space = convertObjectDimensionsUnit(_space, {
    dimension: isWeb ? 'rem' : 'px',
  }) as SpacingTypes;

  const breakpoints = convertObjectDimensionsUnit(_breakpoints, {
    dimension: isWeb ? 'rem' : 'px',
  }) as BreakpointsTypes;

  const radii = convertObjectDimensionsUnit(_radii, {
    dimension: isWeb ? 'rem' : 'px',
  }) as RadiiTypes;

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
