import 'styled-components';
import type { ThemeType } from '@oreo-ui/core/dist/theme';

// @extends
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
