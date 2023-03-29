// @imports
import type { PackageTypes } from '../../constants/index.types';

import { isPackageWeb } from '@/core/helpers/base';
import { convertObjectDimensionsUnit } from '@/core/helpers/layout';

// @file declarations
const breakpoints: any = ['375', '576', '768', '992', '1280', '1440'];

const breakpointsObject = {
  'xs': breakpoints[0],
  'sm': breakpoints[1],
  'md': breakpoints[2],
  'lg': breakpoints[3],
  'xl': breakpoints[4],
  '2xl': breakpoints[5],
};

const getBreakpoints = (arg?: PackageTypes) => {
  const isWeb = isPackageWeb(arg);

  return convertObjectDimensionsUnit(breakpointsObject, {
    dimension: isWeb ? 'rem' : 'px',
  }) as BreakpointsObjectTypes;
};

const updateBreakpointsAlias = (bp: any) => {
  const newBreakpoints = bp;

  newBreakpoints.xs = bp[0];
  newBreakpoints.sm = bp[1];
  newBreakpoints.md = bp[2];
  newBreakpoints.lg = bp[3];
  newBreakpoints.xl = bp[4];
  newBreakpoints['2xl'] = bp[5];

  return newBreakpoints as BreakpointsTypes;
};

// @types definitions
export type BreakpointsTypes = typeof breakpoints;

export type BreakpointsKeys = keyof BreakpointsTypes;

export type BreakpointsObjectTypes = typeof breakpointsObject;

export type BreakpointsObjectKeys = keyof BreakpointsObjectTypes;

// @exports
export { breakpointsObject, updateBreakpointsAlias, getBreakpoints };
export default breakpoints;
