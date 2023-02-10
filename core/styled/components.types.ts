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
  | 'ghost'
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

  as?: any;
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
export interface CheckboxThemedStyledProps extends CheckboxThemedDefaultProps {}

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

export interface RadioThemedStyledProps extends RadioThemedDefaultProps {}

export type SwitchSizeType = CheckboxSizeType;

export type SwitchThemedDefaultProps = {
  /**
   * switch size
   */
  size?: SwitchSizeType;
  /**
   * label
   */
  label?: string;
  /**
   * description
   */
  description?: string;
};
export interface SwitchThemedStyledProps extends SwitchThemedDefaultProps {}

export type SelectStateType = InputStateType;

export type SelectSizeType = InputSizeType;

export type SelectDataType = {
  value: string;
  title: string;
};

export type SelectThemedDefaultProps = {
  /**
   * replace dropdown icon
   */
  icon?: React.ReactNode;
  /**
   * button state
   */
  state?: SelectStateType;
  /**
   * button size
   */
  size?: SelectSizeType;
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
   * set default place
   */
  placeholder?: string;

  /**
   * set data
   */
  data?: SelectDataType[];
};

export interface SelectThemedStyledProps
  extends SelectThemedDefaultProps,
    SpaceProps,
    BorderProps,
    Omit<LayoutProps, 'size'> {}

export interface PortalThemedDefaultProps {
  /**
   * set container max width
   */
  domNode?: HTMLElement;

  children?: React.ReactNode;
}

export type ModalSizesType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | string;

export type ModalPositionTypes = 'top' | 'center' | 'bottom';

export interface ModalThemedDefaultProps {
  /**
   * set container max width
   */
  isOpen?: boolean;
  /**
   * call function when modal is opened
   */
  onOpen?: () => void;
  /**
   * call function when modal is closed
   */
  onClose?: () => void;
  /**
   * set modal size
   */
  size?: ModalSizesType;
  modalSize?: ModalSizesType;
  /**
   * add custom style to modal
   */
  style?: React.CSSProperties;
  /**
   * close modal on overlat click
   */
  closeOnOverlayClick?: boolean;

  overlayBg?: string;

  overlayFilter?: string;

  overlayBlur?: string;

  overlayOpacity?: number;
  /**
   * modal content
   */
  children?: React.ReactNode;
  /**
   * set modal title
   */
  title?: string | React.ReactNode;
  /**
   * set if to show modal header close icon or not
   */
  hideCloseButton?: boolean;
  /**
   * set footer modal
   */
  withFooter?: boolean;
  /**
   * set footer display alternative
   */
  footerAlt?: boolean;
  /**
   * set footer display alternative
   */
  footerContent?: React.ReactNode;
  /**
   * set modal content position
   */
  pos?: ModalPositionTypes;
  /**
   * prevent page scrolling when modal is opened
   */
  preventScrolling?: boolean;
  /**
   * set modal overflow
   */
  overflow?: 'inside' | 'outside';

  closeOnEscape?: boolean;

  /**
   * set default content margin on native
   */
  removeContentMargin?: boolean;

  isDrawer?: boolean;
}

export type DrawerPositionTypes = 'top' | 'right' | 'bottom' | 'left';
export interface DrawerThemedDefaultProps {
  /**
   * set drawer content position
   */
  pos?: DrawerPositionTypes;
}

export interface CSSAnimationThemedDefaultProps {
  duration?: string;
  delay?: string;
  iterationCount?: string;
  direction?: string;
  timingFunction?: string;
  fillMode?: string;
}

export type AccordionIconPositionTypes = 'left' | 'right';

export type AccordionVariantTypes = 'default' | 'separated';

export interface AccordionThemedDefaultProps {
  /**
   * item content
   */
  children?: React.ReactNode;

  /**
   * Allow multiple items to be opened at a time
   */
  allowMultiple?: boolean;

  /**
   * replace item icon
   */
  icon?: React.ReactNode;

  /**
   * replace item icon when active
   */
  activeIcon?: React.ReactNode;

  /**
   * change icon position
   */
  iconPosition?: AccordionIconPositionTypes;

  /**
   * change accordion type
   */
  variant?: AccordionVariantTypes;

  /**
   * item value
   */
  value?: string | string[];

  transitionDuration?: number;
}

export interface AccordionItemThemedDefaultProps {
  /**
   * item content
   */
  children?: React.ReactNode;

  /**
   * item value
   */
  value: string;
}

export interface AccordionButtonThemedDefaultProps {
  /**
   * item content
   */
  children?: React.ReactNode;

  text?: string;
}

export interface AccordionPanelThemedDefaultProps {
  /**
   * item content
   */
  children?: React.ReactNode;
}
