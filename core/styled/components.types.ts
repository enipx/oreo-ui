import type { CSSProperties } from 'styled-components';

import type { ObjectTypes } from '../constants/index.types';
import type { BreakpointsKeys } from '../theme/utilities/breakpoints';
import type {
  DefaultColorsSchemeKeys,
  DefaultColorsVariantsType,
} from '../theme/utilities/colors';
import { TransitionsType } from './css/transitions';
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

export type ButtonColorSchemeType = DefaultColorsSchemeKeys;

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
   * button color variant
   */
  variant?: DefaultColorsVariantsType;
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
   * set button width to 100%
   */
  fullWidth?: boolean;

  /**
   * set button border radius to round
   */
  rounded?: boolean;
}

export interface IconButtonThemedStyledProps extends SpaceProps, BorderProps {
  /**
   * set left icon
   */
  icon?: React.ReactNode;
  /**
   * icon button color scheme
   */
  colorScheme?: ButtonColorSchemeType;

  /**
   * icon button color variant
   */
  variant?: DefaultColorsVariantsType;
  /**
   * icon button state
   */
  state?: ButtonStateType;
  /**
   * icon button size
   */
  size?: ButtonSizeType;

  /**
   * icon button text
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

  content?: string;
}

export type AlertVariantTypes = 'subtle' | 'filled';

export type AlertColorSchemeTypes =
  | 'gray'
  | 'blue'
  | 'green'
  | 'red'
  | 'orange';

export type AlertIconTypeTypes = 'info' | 'success' | 'warning' | 'danger';

export interface AlertThemedDefaultProps {
  /**
   * item content
   */
  children?: React.ReactNode;

  content?: string;

  colorScheme?: AlertColorSchemeTypes;

  variant?: AlertVariantTypes;

  title?: string | React.ReactNode;

  withCloseButton?: boolean;

  onClose?: () => void;

  icon?: React.ReactNode;

  withIcon?: boolean;

  iconType?: AlertIconTypeTypes;

  showBorder?: boolean;

  transition?: TransitionsType;
}

export interface AlertThemedStyledProps
  extends LayoutThemeStyledProps,
    AlertThemedDefaultProps {}

export type ToastWebPositionTypes =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right';

export type ToastNativePositionTypes = 'top' | 'bottom';

export interface ToastThemedDefaultProps extends AlertThemedDefaultProps {
  /**
   * call method when toast is hide
   */
  onHide?: () => void;

  /**
   * toast position
   */
  pos?: ToastWebPositionTypes;

  /**
   * toast visibility duration
   */
  duration?: number;

  /**
   * used to display custom components
   */
  render?: React.ReactNode;

  /**
   * used to disabled auto hiding of toast after the duration
   */
  disabledAutoHide?: boolean;
}

export type AvatarSizeTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;

export interface AvatarThemedDefaultProps {
  /**
   * image alt text
   */
  alt?: string;

  children?: React.ReactNode;

  size?: AvatarSizeTypes;

  src?: string;

  colorScheme?: DefaultColorsSchemeKeys;

  variant?: DefaultColorsVariantsType;

  imgProps?: ObjectTypes;

  name?: string;

  isGrouped?: boolean;

  isLastItem?: boolean;
}

export interface AvatarGroupThemedDefaultProps {
  size?: AvatarSizeTypes;

  children?: React.ReactNode;

  max?: number;

  colorScheme?: DefaultColorsSchemeKeys;

  variant?: DefaultColorsVariantsType;
}

export type IndicatorSizeTypes = AvatarSizeTypes;

export type IndicatorPositionTypes =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export interface IndicatorThemedDefaultProps {
  value?: string;

  children?: React.ReactNode;

  max?: number;

  colorScheme?: DefaultColorsSchemeKeys;

  size?: IndicatorSizeTypes;

  pos?: IndicatorPositionTypes;

  offset?: string;
}

export interface BadgeThemedDefaultProps extends TypographyProps, ColorProps {
  children?: React.ReactNode;

  colorScheme?: DefaultColorsSchemeKeys;

  variant?: DefaultColorsVariantsType;
}

export type TabsVariantThemedDefaultProps = 'fenced' | 'unstyled' | 'pills';

export interface TabsThemedDefaultProps {
  children?: React.ReactNode;

  colorScheme?: DefaultColorsSchemeKeys;

  colorSchemeVariant?: DefaultColorsVariantsType;

  variant?: TabsVariantThemedDefaultProps;

  /**
   * item value
   */
  value?: string;

  withEqualWidth?: boolean;

  onTabChange?: (arg: string) => void;

  _selected?: React.CSSProperties;

  _hover?: React.CSSProperties;

  _active?: React.CSSProperties;
}

export interface TabsListThemedDefaultProps {
  /**
   * item content
   */
  children?: React.ReactNode;
}

export interface TabsListThemedStyledProps
  extends TabsListThemedDefaultProps,
    ViewThemedStyledProps {}

export interface TabsItemThemedDefaultProps {
  /**
   * item content
   */
  children?: React.ReactNode;

  /**
   * item value
   */
  value: string;

  disabled?: boolean;

  _selected?: React.CSSProperties;

  _hover?: React.CSSProperties;

  _active?: React.CSSProperties;
}

export interface TabsPanelThemedDefaultProps {
  /**
   * item content
   */
  children?: React.ReactNode;

  value?: string;
}

export interface TabsPanelThemedStyledProps
  extends TabsPanelThemedDefaultProps,
    ViewThemedStyledProps {}

export type TableThemedSizeTypes = 'sm' | 'md' | 'lg';
export interface TableThemedDefaultProps {
  /**
   * table content
   */
  children?: React.ReactNode;

  striped?: 'odd' | 'even';

  size?: TableThemedSizeTypes;

  captionPlacement?: 'top' | 'bottom';

  colorScheme?: DefaultColorsSchemeKeys;

  hovered?: boolean;
}

export interface TableHeadThemedDefaultProps extends ViewThemedStyledProps {
  /**
   * table content
   */
  children?: React.ReactNode;
}

export interface TableBodyThemedDefaultProps extends ViewThemedStyledProps {
  /**
   * table content
   */
  children?: React.ReactNode;
}

export interface TableFootThemedDefaultProps extends ViewThemedStyledProps {
  /**
   * table content
   */
  children?: React.ReactNode;
}

export interface ThThemedDefaultProps extends ViewThemedStyledProps {
  /**
   * table content
   */
  children?: React.ReactNode;
}

export interface TrThemedDefaultProps extends ViewThemedStyledProps {
  /**
   * table content
   */
  children?: React.ReactNode;
}

export interface TdThemedDefaultProps extends ViewThemedStyledProps {
  /**
   * table content
   */
  children?: React.ReactNode;
}

export interface TableCaptionThemedDefaultProps extends ViewThemedStyledProps {
  /**
   * table content
   */
  children?: React.ReactNode;
}

export interface AnimatedThemedDefaultProps {
  /**
   * animated content
   */
  children?: React.ReactNode;
}
