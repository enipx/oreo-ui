import type { CSSProperties } from 'styled-components';

import type { BreakpointsKeys } from '../theme/utilities/breakpoints';
import type {
  LayoutThemeStyledProps,
  TypographyThemeStyledProps,
} from './index.types';
import type {
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
} from './system';

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

  /**
   * button text
   */
  text?: string;

  /**
   * set button state to disabled
   */
  disabled?: boolean;
}

export interface IconButtonThemedStyledProps extends SpaceProps, BorderProps {
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

  /**
   * button text
   */
  text?: string;

  /**
   * set button state to disabled
   */
  disabled?: boolean;

  /**
   * convert icon to a round icon
   */
  rounded?: boolean;
}

export type InputStateType = 'default' | 'focused' | 'invalid' | 'disabled';

export type InputSizeType = 'xs' | 'sm' | 'md' | 'lg';

export type InputThemedDefaultProps = {
  /**
   * set left icon
   */
  icon?: React.ReactNode;
  /**
   * set right icon
   */
  rightIcon?: React.ReactNode;
  /**
   * button state
   */
  state?: InputStateType;
  /**
   * button size
   */
  size?: InputSizeType;
  /**
   * set button state to disabled
   */
  disabled?: boolean;
  /**
   * set input label
   */
  label?: string;
  /**
   * set input hint
   */
  hint?: string;
};

export type PinInputThemedDefaultProps = {
  /**
   * button state
   */
  state?: InputStateType;
  /**
   * button size
   */
  size?: InputSizeType;
  /**
   * set button state to disabled
   */
  disabled?: boolean;
  /**
   * set input label
   */
  label?: string;
  /**
   * set input hint
   */
  hint?: string;
  /**
   * set input hint
   */
  value?: string;
  /**
   * number of inputs
   */
  length?: number;

  /**
   * return function when value changes
   */
  onChange?: (arg: string) => void;

  /**
   * return function when all input fields are filled
   */
  onFilled?: (arg: string) => void;

  /**
   * focus input on mount
   */
  focusOnMounted?: boolean;
};

export interface InputThemedStyledProps
  extends InputThemedDefaultProps,
    SpaceProps,
    BorderProps,
    Omit<LayoutProps, 'size'> {}

export type TextareaThemedDefaultProps = {
  /**
   * set left icon
   */
  icon?: React.ReactNode;
  /**
   * button state
   */
  state?: InputStateType;
  /**
   * set button state to disabled
   */
  disabled?: boolean;
  /**
   * set input label
   */
  label?: string;
  /**
   * set input hint
   */
  hint?: string;
};

export type TextareaResizeType = 'none' | 'both' | 'horizontal' | 'vertical';

export interface TextareaThemedStyledProps
  extends TextareaThemedDefaultProps,
    SpaceProps,
    BorderProps,
    Omit<LayoutProps, 'size'> {}

export type CheckboxSizeType = 'sm' | 'md' | 'lg';

export type CheckboxThemedDefaultProps = {
  /**
   * checkbox size
   */
  size?: CheckboxSizeType;
  /**
   *  marked checkbox as indeterminate
   */
  indeterminate?: boolean;
  /**
   * label
   */
  label?: string;
  /**
   * description
   */
  description?: string;
};
export interface CheckboxThemedStyledProps
  extends CheckboxThemedDefaultProps,
    SpaceProps,
    BorderProps,
    Omit<LayoutProps, 'size'> {}

export type RadioSizeType = CheckboxSizeType;

export type RadioThemedDefaultProps = {
  /**
   * radio id
   */
  id?: string;
  /**
   * radio value
   */
  value?: string;
  /**
   * radio size
   */
  size?: RadioSizeType;
  /**
   * label
   */
  label?: string;
  /**
   * description
   */
  description?: string;

  /**
   * set item to be horizontal
   */
  horizontal?: boolean;
};

export interface RadioThemedStyledProps
  extends RadioThemedDefaultProps,
    SpaceProps,
    BorderProps,
    Omit<LayoutProps, 'size'> {}
