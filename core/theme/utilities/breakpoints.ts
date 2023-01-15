// @file declarations
const breakpoints = {
  'xs': 375,
  'sm': 576,
  'md': 768,
  'lg': 992,
  'xl': 1280,
  '2xl': 1440,
};

// @types definitions
export type BreakpointsKeys = keyof typeof breakpoints;

// @exports
export default breakpoints;
