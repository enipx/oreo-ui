// @imports
import breakpoints from './breakpoints';
import colors from './colors';
import radii from './radius';
import spacing from './spacing';
import typography from './typography';

// @file declarations
const utilities = {
  breakpoints,
  colors,
  space: spacing,
  radii,
  ...typography,
};

// @exports
export default utilities;
