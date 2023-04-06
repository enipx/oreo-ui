// @imports
import type { ThemeModeKeys, PackageTypes } from '../constants/index.types';
import components from './components';
import utilities from './utilities';

// @file declarations
const mode = 'light' as ThemeModeKeys;

const theme = (arg?: PackageTypes) => ({
  ...utilities(arg),
  components: components(arg),
  mode,
});

// @types definitions
export type ThemeType = ReturnType<typeof theme>;
export type ThemeKeys = keyof ThemeType;

// @exports
export default theme;
