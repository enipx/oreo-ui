import 'styled-components/native';
import type { ThemeType } from '../core/theme';

// @extends
declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
