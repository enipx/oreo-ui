// @imports
import type { PackageTypes } from '../../constants/index.types';
import _breakpoints, { updateBreakpointsAlias } from './breakpoints';
import colors from './colors';
import _radii, { RadiiTypes } from './radius';
import shadows from './shadows';
import _space, { SpacingTypes } from './spacing';
import typography from './typography';
import zIndices from './z-index';

import { isPackageWeb } from '@/helpers/base';
import { convertObjectDimensionsUnit } from '@/helpers/layout';

// @file declarations
const utilities = (arg?: PackageTypes) => {
  const isWeb = isPackageWeb(arg);

  const space = convertObjectDimensionsUnit(_space, {
    dimension: isWeb ? 'rem' : 'px',
  }) as SpacingTypes;

  const breakpoints = updateBreakpointsAlias(
    convertObjectDimensionsUnit(_breakpoints, {
      dimension: isWeb ? 'rem' : 'px',
    })
  );

  const radii = convertObjectDimensionsUnit(_radii, {
    dimension: isWeb ? 'rem' : 'px',
  }) as RadiiTypes;

  return {
    breakpoints,
    colors,
    space,
    sizes: space,
    radii,
    zIndices,
    shadows,
    ...typography(arg),
  };
};

// @exports
export default utilities;
