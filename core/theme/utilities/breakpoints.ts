// @file declarations
const breakpoints = ['375', '576', '768', '992', '1280', '1440'];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints['2xl'] = breakpoints[5];

// @types definitions
export type BreakpointsTypes = typeof breakpoints;

export type BreakpointsKeys = keyof BreakpointsTypes;

// @exports
export default breakpoints;
