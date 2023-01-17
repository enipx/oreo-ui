import { CSSProperties } from 'styled-components';
import type {
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
} from 'styled-system';

import type { BreakpointsKeys } from '../theme/utilities/breakpoints';
import type {
  LayoutThemeStyledProps,
  TypographyThemeStyledProps,
} from './index.types';

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

export interface TextThemedStyledProps extends TypographyThemeStyledProps {
  /**
   * set text transform
   */
  textTransform?: CSSProperties['textTransform'];
}

export type ButtonColorSchemeType =
  | 'blue'
  | 'gray'
  | 'green'
  | 'red'
  | 'yellow'
  | 'transparent';

export type ButtonStateType = 'hovered' | 'disabled' | 'focused' | 'default';

export type ButtonSizeType = 'xs' | 'sm' | 'md' | 'lg';

export interface ButtonThemedStyledProps
  extends LayoutProps,
    SpaceProps,
    ColorProps,
    FlexboxProps,
    TypographyProps {
  /**
   * set left icon
   */
  icon?: React.ReactNode;
  /**
   * set right icon
   */
  rightIcon?: React.ReactNode;
  /**
   * button color scheme
   */
  colorScheme?: ButtonColorSchemeType;
  /**
   * button state
   */
  state?: ButtonStateType;
  /**
   * button size
   */
  size?: ButtonSizeType;

  text?: string;

  disabled?: boolean;
}

export interface IconButtonThemedStyledProps extends ViewThemedStyledProps {
  /**
   * set left icon
   */
  icon?: React.ReactNode;
  /**
   * button color scheme
   */
  colorScheme?: ButtonColorSchemeType;
  /**
   * button state
   */
  state?: ButtonStateType;
  /**
   * button size
   */
  size?: ButtonSizeType;

  disabled?: boolean;
}
