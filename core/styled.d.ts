import 'styled-components';
import type { ThemeType } from './src/theme';

// @extends
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
