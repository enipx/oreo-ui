// @file declarations
const radii = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 6,
  base: 8,
  lg: 16,
  xl: 18,
  full: 99999,
};

// @types definitions
export type RadiiTypes = typeof radii;

export type RadiiKeys = keyof RadiiTypes;

// @exports
export default radii;
