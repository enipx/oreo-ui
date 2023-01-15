import 'styled-components';
import type { ThemeType } from '../core/theme';

// @extends
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
