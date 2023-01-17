// @file declarations
const radii = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  base: 16,
  lg: 20,
  xl: 24,
  full: 99999,
};

// @types definitions
export type RadiiTypes = typeof radii;

export type RadiiKeys = keyof RadiiTypes;

// @exports
export default radii;
