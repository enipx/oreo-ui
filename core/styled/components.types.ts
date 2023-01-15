import type { BreakpointsKeys } from '../theme/utilities/breakpoints';
import type { LayoutThemeStyledProps } from './index.types';

export interface ViewThemedStyledProps extends LayoutThemeStyledProps {
  /**
   * align children horizontally and vertically
   */
  flexCenter?: boolean;
  /**
   * align children vertically
   */
  flexCenterY?: boolean;
  /**
   * align children horizontally
   */
  flexCenterX?: boolean;
}

export interface ContainerThemedStyledProps extends ViewThemedStyledProps {
  /**
   * set container max width
   */
  type?: BreakpointsKeys;
}
