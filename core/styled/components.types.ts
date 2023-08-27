import type { ObjectTypes, ThemeModeKeys } from '../constants/index.types';
import type {
  BreakpointsKeys,
  BreakpointsObjectKeys,
} from '../theme/utilities/breakpoints';
import type {
  DefaultColorsSchemeKeys,
  DefaultColorsVariantsType,
} from '../theme/utilities/colors';
import type { TransitionsType } from './css/transitions';
import type {
  LayoutThemeStyledProps,
  ResponsiveValue,
  ThemeStyledProps,
  TypographyThemeStyledProps,
} from './index.types';
import type { SpaceProps, LayoutProps, BorderProps } from './system';
import type { CSSProperties } from './web';

export type MediaStyleType = Partial<
  Record<BreakpointsObjectKeys | 'base', CSSProperties>
>;

export type MediaStyleKeyType = keyof MediaStyleType;

export interface ComponentsDefaultProps {
  as?: any;

  _mediaStyle?: MediaStyleType;

  _css?: string;

  _hover?: CSSProperties;

  _focus?: CSSProperties;

  _active?: CSSProperties;

  _disabled?: CSSProperties;

  children?: JSX.Element;
}

export interface ViewThemedStyledProps
  extends ThemeStyledProps,
    ComponentsDefaultProps {
  /**
   * align children horizontally and vertically
   */
  flexCenter?: ResponsiveValue<boolean>;
  /**
   * align children vertically
   */
  flexCenterY?: ResponsiveValue<boolean>;
  /**
   * align children horizontally
   */
  flexCenterX?: ResponsiveValue<boolean>;
}

export interface ContainerThemedStyledProps extends ViewThemedStyledProps {
  /**
   * set container max width
   */
  type?: BreakpointsKeys;
}

export interface FlexThemedStyledProps
  extends Omit<
    ViewThemedStyledProps,
    'flexCenter' | 'flexCenterY' | 'flexCenterX'
  > {
  /**
   * set flex-direction to row
   */
  row?: boolean;

  /**
   * set flex-direction to column
   */
  column?: boolean;

  /**
   * set flex-direction to either row-reverse or column-reverse
   */
  reverse?: boolean;

  /**
   * set display to inline-flex
   */
  inline?: boolean;

  /**
   * give all children specified spacing
   */
  spacing?: string | number;
  /**
   * align children horizontally and vertically
   */
  center?: boolean;
  /**
   * align children vertically
   */
  centerY?: boolean;
  /**
   * align children horizontally
   */
  centerX?: boolean;
}

export interface FlexColThemedStyledProps extends ViewThemedStyledProps {
  col?: ResponsiveValue<number>;
}

export interface FlexRowThemedDefaultProps {
  /**
   * give all children specified spacing
   */
  spacing?: string | number;

  /**
   * give all children specified spacing
   */
  spacingX?: string | number;

  /**
   * give all children specified spacing
   */
  spacingY?: string | number;
}

export interface FlexRowThemedStyledProps
  extends FlexRowThemedDefaultProps,
    FlexThemedStyledProps {}

export interface GridThemedStyledProps extends ThemeStyledProps {
  /**
   * grid content
   */
  children?: JSX.Element;

  /**
   * set grid columns
   */
  columns?: number;

  /**
   * set display to inline-grid
   */
  inline?: boolean;

  /**
   * set grid gap
   */
  spacing?: string | number;

  spacingX?: string | number;

  spacingY?: string | number;
}

export interface GridItemThemedStyledProps extends ThemeStyledProps {
  /**
   * grid content
   */
  children?: JSX.Element;

  col?: ResponsiveValue<number>;

  colStart?: ResponsiveValue<number>;

  colEnd?: ResponsiveValue<number>;
}

export interface TextThemedStyledProps
  extends TypographyThemeStyledProps,
    ComponentsDefaultProps {
  /**
   * set text transform
   */
  textTransform?: CSSProperties['textTransform'];

  numberOfLines?: number;
}

export type ButtonColorSchemeType = DefaultColorsSchemeKeys;

export type ButtonStateType = 'hovered' | 'disabled' | 'focused' | 'default';

export type ButtonSizeType = 'xs' | 'sm' | 'md' | 'lg';

export interface ButtonThemedStyledProps
  extends ThemeStyledProps,
    ComponentsDefaultProps {
  /**
   * set left icon
   */
  icon?: JSX.Element;
  /**
   * set right icon
   */
  rightIcon?: JSX.Element;
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

  /**
   * set loading state
   */
  loading?: boolean;

  /**
   * set loading state text
   */
  loadingText?: string;

  /**
   * set loading state icon
   */
  loadingIcon?: JSX.Element;

  children?: JSX.Element;
}

export interface IconButtonThemedStyledProps
  extends ThemeStyledProps,
    ComponentsDefaultProps {
  /**
   * set left icon
   */
  icon?: JSX.Element;
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
}

export type InputStateType = 'default' | 'focused' | 'invalid' | 'disabled';

export type InputSizeType = 'xs' | 'sm' | 'md' | 'lg';

export interface InputThemedDefaultProps extends ComponentsDefaultProps {
  /**
   * set left icon
   */
  icon?: JSX.Element;
  /**
   * set right icon
   */
  rightIcon?: JSX.Element;
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

  showPasswordIcon?: JSX.Element;

  hidePasswordIcon?: JSX.Element;

  _placeholder?: CSSProperties;
}

export interface PinInputThemedDefaultProps
  extends ComponentsDefaultProps,
    Omit<ThemeStyledProps, 'size'> {
  /**
   * button state
   */
  state?: InputStateType;
  /**
   * button size
   */
  size?: InputSizeType | string;
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

  _placeholder?: CSSProperties;
}

export interface InputThemedStyledProps
  extends InputThemedDefaultProps,
    Omit<ThemeStyledProps, 'size'>,
    Omit<LayoutProps, 'size'> {}

export interface TextareaThemedDefaultProps extends ComponentsDefaultProps {
  /**
   * set left icon
   */
  icon?: JSX.Element;
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

  _placeholder?: CSSProperties;
}

export type TextareaResizeType = 'none' | 'both' | 'horizontal' | 'vertical';

export interface TextareaThemedStyledProps
  extends TextareaThemedDefaultProps,
    ThemeStyledProps,
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
    Omit<ThemeStyledProps, 'size'>,
    ComponentsDefaultProps {}

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
    Omit<ThemeStyledProps, 'size'>,
    ComponentsDefaultProps {}

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
export interface SwitchThemedStyledProps
  extends SwitchThemedDefaultProps,
    Omit<ThemeStyledProps, 'size'>,
    ComponentsDefaultProps {}

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
  icon?: JSX.Element;
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
    Omit<ThemeStyledProps, 'size'>,
    Omit<LayoutProps, 'size'> {}

export interface PortalThemedDefaultProps {
  /**
   * set container max width
   */
  domNode?: HTMLElement;

  children?: JSX.Element;
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
  style?: CSSProperties;
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
  children?: JSX.Element;
  /**
   * set modal title
   */
  title?: string | JSX.Element;
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
  footerContent?: JSX.Element;
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

  /**
   * set default content padding
   */
  removeContentPadding?: boolean;

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
  children?: JSX.Element;

  /**
   * Allow multiple items to be opened at a time
   */
  allowMultiple?: boolean;

  /**
   * replace item icon
   */
  icon?: JSX.Element;

  /**
   * replace item icon when active
   */
  activeIcon?: JSX.Element;

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
  children?: JSX.Element;

  /**
   * item value
   */
  value: string;
}

export interface AccordionButtonThemedDefaultProps
  extends ComponentsDefaultProps {
  /**
   * item content
   */
  children?: JSX.Element;

  text?: string;
}

export interface AccordionPanelThemedDefaultProps {
  /**
   * item content
   */
  children?: JSX.Element;

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
  children?: JSX.Element;

  content?: string;

  colorScheme?: AlertColorSchemeTypes;

  variant?: AlertVariantTypes;

  title?: string | JSX.Element;

  withCloseButton?: boolean;

  onClose?: () => void;

  icon?: JSX.Element;

  withIcon?: boolean;

  iconType?: AlertIconTypeTypes;

  showBorder?: boolean;

  transition?: TransitionsType;
}

export interface AlertThemedStyledProps
  extends LayoutThemeStyledProps,
    AlertThemedDefaultProps,
    ComponentsDefaultProps {}

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
  render?: JSX.Element;

  /**
   * used to disabled auto hiding of toast after the duration
   */
  disabledAutoHide?: boolean;
}

export type AvatarSizeTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface AvatarThemedDefaultProps {
  /**
   * image alt text
   */
  alt?: string;

  children?: JSX.Element;

  size?: AvatarSizeTypes;

  src?: string;

  colorScheme?: DefaultColorsSchemeKeys;

  variant?: DefaultColorsVariantsType;

  imgProps?: ObjectTypes;

  name?: string;

  isGrouped?: boolean;

  isLastItem?: boolean;
}

export interface AvatarThemedStyledProps
  extends Omit<ThemeStyledProps, 'size'>,
    ComponentsDefaultProps,
    AvatarThemedDefaultProps {}

export interface AvatarGroupThemedDefaultProps {
  size?: AvatarSizeTypes;

  children?: JSX.Element;

  max?: number;

  colorScheme?: DefaultColorsSchemeKeys;

  variant?: DefaultColorsVariantsType;
}

export interface AvatarGroupThemedStyledProps
  extends Omit<LayoutThemeStyledProps, 'size'>,
    AvatarGroupThemedDefaultProps {}

export type IndicatorSizeTypes = AvatarSizeTypes;

export type IndicatorPositionTypes =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export interface IndicatorThemedDefaultProps {
  value?: string;

  children?: JSX.Element;

  max?: number;

  colorScheme?: DefaultColorsSchemeKeys;

  size?: IndicatorSizeTypes;

  pos?: IndicatorPositionTypes;

  offset?: string;
}

export interface BadgeThemedDefaultProps
  extends ThemeStyledProps,
    ComponentsDefaultProps {
  children?: JSX.Element;

  colorScheme?: DefaultColorsSchemeKeys;

  variant?: DefaultColorsVariantsType;

  rounded?: boolean;
}

export type TabsVariantThemedDefaultProps = 'fenced' | 'unstyled' | 'pills';

export interface TabsThemedDefaultProps {
  children?: JSX.Element;

  colorScheme?: DefaultColorsSchemeKeys;

  colorSchemeVariant?: DefaultColorsVariantsType;

  variant?: TabsVariantThemedDefaultProps;

  /**
   * item value
   */
  value?: string;

  withEqualWidth?: boolean;

  onTabChange?: (arg: string) => void;

  _itemStyle?: CSSProperties;

  _selected?: CSSProperties;

  _hover?: CSSProperties;

  _active?: CSSProperties;
}

export interface TabsListThemedDefaultProps {
  /**
   * item content
   */
  children?: JSX.Element;
}

export interface TabsListThemedStyledProps
  extends TabsListThemedDefaultProps,
    ViewThemedStyledProps {}

export interface TabsItemThemedDefaultProps {
  /**
   * item content
   */
  children?: JSX.Element;

  /**
   * item value
   */
  value: string;

  disabled?: boolean;

  _itemStyle?: CSSProperties;

  _selected?: CSSProperties;

  _hover?: CSSProperties;

  _active?: CSSProperties;
}

export interface TabsPanelThemedDefaultProps {
  /**
   * item content
   */
  children?: JSX.Element;

  value?: string;
}

export interface TabsPanelThemedStyledProps
  extends TabsPanelThemedDefaultProps,
    ViewThemedStyledProps {}

export interface TabsItemThemedStyledProps
  extends TabsItemThemedDefaultProps,
    ThemeStyledProps,
    ComponentsDefaultProps {}

export type TableThemedSizeTypes = 'sm' | 'md' | 'lg';
export interface TableThemedDefaultProps {
  /**
   * table content
   */
  children?: JSX.Element;

  striped?: 'odd' | 'even';

  size?: TableThemedSizeTypes;

  captionPlacement?: 'top' | 'bottom';

  colorScheme?: DefaultColorsSchemeKeys;

  hovered?: boolean;

  whiteSpace?: CSSProperties['whiteSpace'];
}

export interface TableContainerThemedDefaultProps
  extends ViewThemedStyledProps {
  /**
   * table content
   */
  children?: JSX.Element;
}

export interface TableHeadThemedDefaultProps extends ViewThemedStyledProps {
  /**
   * table content
   */
  children?: JSX.Element;
}

export interface TableBodyThemedDefaultProps extends ViewThemedStyledProps {
  /**
   * table content
   */
  children?: JSX.Element;
}

export interface TableFootThemedDefaultProps extends ViewThemedStyledProps {
  /**
   * table content
   */
  children?: JSX.Element;
}

export interface ThThemedDefaultProps extends ViewThemedStyledProps {
  /**
   * table content
   */
  children?: JSX.Element;
}

export interface TrThemedDefaultProps extends ViewThemedStyledProps {
  /**
   * table content
   */
  children?: JSX.Element;
}

export interface TdThemedDefaultProps extends ViewThemedStyledProps {
  /**
   * table content
   */
  children?: JSX.Element;
}

export interface TableCaptionThemedDefaultProps extends ViewThemedStyledProps {
  /**
   * table content
   */
  children?: JSX.Element;
}

export interface AnimatedThemedDefaultProps {
  /**
   * animated content
   */
  children?: JSX.Element;
}

export type PopperThemedPlacementTypes =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export interface TooltipThemedDefaultProps {
  /**
   * tooltip content
   */
  children?: JSX.Element;

  /**
   * label
   */
  label?: string;

  /**
   * tooltip placement
   */
  placement?: PopperThemedPlacementTypes;

  colorScheme?: DefaultColorsSchemeKeys;

  variant?: DefaultColorsVariantsType;

  /**
   * show tooltip arrow
   */
  withArrow?: boolean;

  /**
   * delay before tooltip is open
   */
  openDelay?: number;

  /**
   * delay before tooltip is close
   */
  closeDelay?: number;

  /**
   * set controlled value
   */
  opened?: boolean;

  /**
   * called after content is opened
   */
  onClose?: () => void;

  /**
   * called after content is closed
   */
  onOpen?: () => void;
}

export interface PopoverThemedDefaultProps {
  /**
   * tooltip content
   */
  children?: JSX.Element;

  /**
   * tooltip placement
   */
  placement?: PopperThemedPlacementTypes;

  colorScheme?: DefaultColorsSchemeKeys;

  variant?: DefaultColorsVariantsType;

  /**
   * show tooltip arrow
   */
  withArrow?: boolean;

  /**
   * delay before tooltip is open
   */
  openDelay?: number;

  /**
   * delay before tooltip is close
   */
  closeDelay?: number;

  closeOnClickOutside?: boolean;

  closeOnEscape?: boolean;

  /**
   * set controlled value
   */
  opened?: boolean;

  /**
   * called after content is opened
   */
  onClose?: () => void;

  /**
   * called after content is closed
   */
  onOpen?: () => void;
}

export interface PopoverContentThemedStyledProps
  extends ViewThemedStyledProps {}

export interface SkeletonThemedDefaultProps
  extends LayoutProps,
    BorderProps,
    SpaceProps {
  /**
   * tooltip content
   */
  children?: JSX.Element;

  /**
   * check if content is loading
   */
  loading?: boolean;

  /**
   * set placeholder start color
   */
  startColor?: string;

  /**
   * set placeholder end color
   */
  endColor?: string;

  /**
   * number of time to
   */
  count?: number;

  /**
   * set border radius to 50%
   */
  rounded?: boolean;
}

export interface ImageThemedDefaultProps extends ThemeStyledProps {
  /**
   * image source
   */
  src?: string;

  /**
   * image alt
   */
  alt?: string;

  /**
   * Object-fit property
   */
  fit?: CSSProperties['objectFit'];

  fallbackSrc?: string;

  fallback?: JSX.Element;
}

export type SpinnerSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface SpinnerThemedDefaultProps {
  colorScheme?: DefaultColorsSchemeKeys;

  size?: SpinnerSizeType | string;

  duration?: number;

  thickness?: string;

  color?: string;

  emptyColor?: string;
}

export type DividerSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type DividerOrientationType = 'vertical' | 'horizontal';

export interface DividerThemedDefaultProps {
  colorScheme?: DefaultColorsSchemeKeys;

  size?: DividerSizeType;

  orientation?: DividerOrientationType;

  ref?: any;
}

export interface DividerThemedStyledProps
  extends DividerThemedDefaultProps,
    Omit<ThemeStyledProps, 'size'> {}

export interface ShowThemedDefaultProps {
  children?: JSX.Element;

  /**
   * show item at breakpoint
   */
  breakpoint?: string;

  /**
   * show item when breakpoint is above the specified point
   */
  above?: BreakpointsObjectKeys;

  /**
   * show item when breakpoint is below the specified point
   */
  below?: BreakpointsObjectKeys;
}

export interface ShowNativeThemedDefaultProps {
  children?: JSX.Element;
  /**
   * show item when breakpoint is above the specified point
   */
  above?: number;

  /**
   * show item when breakpoint is below the specified point
   */
  below?: number;
}

export interface HideThemedDefaultProps extends ShowThemedDefaultProps {}

export interface ScrollbarThemedDefaultProps {
  children?: JSX.Element;

  /**
   * set scrollbar track style
   */
  _track?: CSSProperties;

  /**
   * set scrollbar thumb style
   */
  _handle?: CSSProperties;

  /**
   * set scrollbar thumb hover style
   */
  _hover?: CSSProperties;

  /**
   * set scroll width
   */
  scrollWidth?: string;

  scrollHeight?: string;

  scrollBg?: string;

  scrollHoverBg?: string;
}

export interface ScrollbarThemedStyledProps
  extends ViewThemedStyledProps,
    ScrollbarThemedDefaultProps {}

export interface ModeContextProviderProps {
  mode: string;
  toggle: () => void;
  update: (arg: ThemeModeKeys) => void;
}
