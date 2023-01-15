// @imports
import type { ThemeModeKeys } from '../constants/index.types';
import components from './components';
import utilities from './utilities';

// @file declarations
const mode: ThemeModeKeys = 'light';

const theme = {
  ...utilities,
  components,
  mode,
};

// @types definitions
export type ThemeType = typeof theme;
export type ThemeKeys = keyof typeof theme;

// @exports
export default theme;
