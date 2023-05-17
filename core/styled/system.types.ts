import type { ThemeProviderProps, DefaultTheme } from './web';
export interface ProviderThemedStyledProps
  extends Partial<ThemeProviderProps<DefaultTheme>> {}

export type ObjectOrArray<T, K extends keyof any = keyof any> =
  | T[]
  | Record<K, T | Record<K, T> | T[]>;

export type Scale = ObjectOrArray<number | string>;

export type TLengthStyledSystem = string | 0 | number;

export interface Theme {
  breakpoints?: ObjectOrArray<number | string | symbol> | undefined;
  mediaQueries?: { [size: string]: string } | undefined;
  space?: ObjectOrArray<any> | undefined;
  fontSizes?: ObjectOrArray<any> | undefined;
  colors?: ObjectOrArray<any> | undefined;
  fonts?: ObjectOrArray<any> | undefined;
  fontWeights?: ObjectOrArray<any> | undefined;
  lineHeights?: ObjectOrArray<any> | undefined;
  letterSpacings?: ObjectOrArray<any> | undefined;
  sizes?: ObjectOrArray<any> | undefined;
  borders?: ObjectOrArray<any> | undefined;
  borderStyles?: ObjectOrArray<any> | undefined;
  borderWidths?: ObjectOrArray<any> | undefined;
  radii?: ObjectOrArray<any> | undefined;
  shadows?: ObjectOrArray<any> | undefined;
  zIndices?: ObjectOrArray<any> | undefined;
  buttons?: ObjectOrArray<any> | undefined;
  colorStyles?: ObjectOrArray<any> | undefined;
  textStyles?: ObjectOrArray<any> | undefined;
}

export type RequiredTheme = Required<Theme>;

export type ResponsiveValue<T, ThemeType extends Theme = RequiredTheme> =
  | T
  | null
  | (T | null)[]
  | { [key in (ThemeValue<'breakpoints', ThemeType> & string) | number]?: T };

export type ThemeValue<
  K extends keyof ThemeType,
  ThemeType,
  TVal = any
> = ThemeType[K] extends TVal[]
  ? number
  : ThemeType[K] extends Record<infer E, TVal>
  ? E
  : ThemeType[K] extends ObjectOrArray<infer F>
  ? F
  : never;

export interface SpaceProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'space', ThemeType>
> {
  /** Margin on top, left, bottom and right */
  m?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Margin on top, left, bottom and right */
  margin?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Margin on top */
  mt?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Margin on top */
  marginTop?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Margin on right */
  mr?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Margin on right */
  marginRight?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Margin on bottom */
  mb?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Margin on bottom */
  marginBottom?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Margin on left */
  ml?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Margin on left */
  marginLeft?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Margin on left and right */
  mx?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Margin on left and right */
  marginX?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Margin on top and bottom */
  my?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Margin on top and bottom */
  marginY?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Padding on top, left, bottom and right */
  p?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Padding on top, left, bottom and right */
  padding?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Padding on top */
  pt?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Padding on top */
  paddingTop?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Padding on right */
  pr?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Padding on right */
  paddingRight?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Padding on bottom */
  pb?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Padding on bottom */
  paddingBottom?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Padding on left */
  pl?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Padding on left */
  paddingLeft?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Padding on left and right */
  px?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Padding on left and right */
  paddingX?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Padding on top and bottom */
  py?: ResponsiveValue<TVal, ThemeType> | undefined;
  /** Padding on top and bottom */
  paddingY?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface TextColorProps {
  /**
   * The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
   * By default the raw value of the prop is returned.
   *
   * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
   * Array values are converted into responsive values.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
   */
  color?: any;
}

export interface BackgroundColorProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'colors', ThemeType>
> {
  /**
   * The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
   * By default the raw value of the prop is returned.
   *
   * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
   * Array values are converted into responsive values.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
   */
  bg?: ResponsiveValue<TVal, ThemeType> | undefined;
  backgroundColor?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface OpacityProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The opacity CSS property sets the transparency of an element or the degree to which content
   * behind an element is visible.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
   */
  opacity?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface ColorProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'colors', ThemeType>
> extends TextColorProps,
    BackgroundColorProps<ThemeType, TVal>,
    OpacityProps {}

export interface FontFamilyProps<ThemeType extends Theme = RequiredTheme> {
  fontFamily?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface FontSizeProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'fontSizes', ThemeType>
> {
  /**
   * The fontSize utility parses a component's `fontSize` prop and converts it into a CSS font-size declaration.
   *
   * - Numbers from 0-8 (or `theme.fontSizes.length`) are converted to values on the [font size scale](#default-theme).
   * - Numbers greater than `theme.fontSizes.length` are converted to raw pixel values.
   * - String values are passed as raw CSS values.
   * - And array values are converted into responsive values.
   *
   */
  fontSize?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface FontWeightProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'fontWeights', ThemeType>
> {
  /**
   * The font-weight CSS property specifies the weight (or boldness) of the font.
   *
   * The font weights available to you will depend on the font-family you are using. Some fonts are only available in normal and bold.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
   */
  fontWeight?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface LineHeightProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'lineHeights', ThemeType>
> {
  /**
   * The line-height CSS property sets the amount of space used for lines, such as in text. On block-level elements,
   * it specifies the minimum height of line boxes within the element.
   *
   * On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
   */
  lineHeight?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface FontStyleProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The font-style CSS property specifies whether a font should be styled with a normal, italic,
   * or oblique face from its font-family.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
   */
  fontStyle?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface LetterSpacingProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'letterSpacings', ThemeType>
> {
  /**
   * The letter-spacing CSS property sets the spacing behavior between text characters.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
   */
  letterSpacing?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface TextAlignProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The text-align CSS property specifies the horizontal alignment of an inline or table-cell box.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
   */
  textAlign?: ResponsiveValue<any, ThemeType> | undefined;
}

/**
 * A convenience style group containing props related to typography such as fontFamily, fontSize, fontWeight, etc.
 *
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
export interface TypographyProps<ThemeType extends Theme = RequiredTheme>
  extends FontFamilyProps<ThemeType>,
    FontSizeProps<ThemeType>,
    FontWeightProps<ThemeType>,
    LineHeightProps<ThemeType>,
    LetterSpacingProps<ThemeType>,
    FontStyleProps<ThemeType>,
    TextAlignProps<ThemeType> {}

/**
 * Layout
 */

export interface DisplayProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The display CSS property defines the display type of an element, which consists of the two basic qualities
   * of how an element generates boxes — the outer display type defining how the box participates in flow layout,
   * and the inner display type defining how the children of the box are laid out.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
   */
  display?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface WidthProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   *   The width utility parses a component's `width` prop and converts it into a CSS width declaration.
   *
   *   - Numbers from 0-1 are converted to percentage widths.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And arrays are converted to responsive width styles.
   */
  width?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface MaxWidthProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The max-width CSS property sets the maximum width of an element.
   * It prevents the used value of the width property from becoming larger than the value specified by max-width.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
   */
  maxWidth?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface MinWidthProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The min-width CSS property sets the minimum width of an element.
   * It prevents the used value of the width property from becoming smaller than the value specified for min-width.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
   */
  minWidth?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface HeightProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The height CSS property specifies the height of an element. By default, the property defines the height of the
   * content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
   */
  height?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface MaxHeightProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The max-height CSS property sets the maximum height of an element. It prevents the used value of the height
   * property from becoming larger than the value specified for max-height.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
   */
  maxHeight?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface MinHeightProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The min-height CSS property sets the minimum height of an element. It prevents the used value of the height
   * property from becoming smaller than the value specified for min-height.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
   */
  minHeight?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface SizeProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  size?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface VerticalAlignProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The vertical-align CSS property specifies sets vertical alignment of an inline or table-cell box.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)
   */
  verticalAlign?: ResponsiveValue<TVal, ThemeType> | undefined;
}

/**
 * Flexbox
 */
export interface AlignItemsProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The CSS align-items property sets the align-self value on all direct children as a group. The align-self
   * property sets the alignment of an item within its containing block.
   *
   * In Flexbox it controls the alignment of items on the Cross Axis, in Grid Layout it controls the alignment
   * of items on the Block Axis within their grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
   */
  alignItems?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface AlignContentProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The CSS align-content property sets how the browser distributes space between and around content items
   * along the cross-axis of a flexbox container, and the main-axis of a grid container.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
   */
  alignContent?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface JustifyItemsProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The CSS justify-items property defines the default justify-self for all items of the box, giving them all
   * a default way of justifying each box along the appropriate axis.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)
   */
  justifyItems?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface JustifyContentProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The CSS justify-content property defines how the browser distributes space between and around content items
   * along the main-axis of a flex container, and the inline axis of a grid container.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
   */
  justifyContent?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface FlexWrapProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.
   * If wrapping is allowed, it sets the direction that lines are stacked.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
   */
  flexWrap?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface FlexBasisProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  // TODO: The FlexBasisValue currently really only exists for documentation
  //       purposes, because flex-basis also accepts `Nem` and `Npx` strings.
  //       Not sure there’s a way to still have the union values show up as
  //       auto-completion results.
  flexBasis?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface FlexDirectionProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The flex-direction CSS property specifies how flex items are placed in the flex container defining the main
   * axis and the direction (normal or reversed).
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
   */
  flexDirection?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface FlexProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The flex CSS property specifies how a flex item will grow or shrink so as to fit the space available in
   * its flex container. This is a shorthand property that sets flex-grow, flex-shrink, and flex-basis.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
   */
  flex?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface JustifySelfProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The CSS justify-self property set the way a box is justified inside its alignment container along
   * the appropriate axis.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)
   */
  justifySelf?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface AlignSelfProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The align-self CSS property aligns flex items of the current flex line overriding the align-items value.
   *
   * If any of the item's cross-axis margin is set to auto, then align-self is ignored. In Grid layout align-self
   * aligns the item inside the grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
   */
  alignSelf?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface OrderProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container
   * are sorted by ascending order value and then by their source code order.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/order)
   */
  order?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface FlexGrowProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The flex-grow CSS property sets the flex grow factor of a flex item main size. It specifies how much of the
   * remaining space in the flex container should be assigned to the item (the flex grow factor).
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
   */
  flexGrow?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface FlexShrinkProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger
   * than the flex container, items shrink to fit according to flex-shrink.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
   */
  flexShrink?: ResponsiveValue<any, ThemeType> | undefined;
}
export interface OverflowProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The overflow CSS property sets what to do when an element's content is too big to fit in its block
   * formatting context. It is a shorthand for overflow-x and overflow-y.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
   */
  overflow?: ResponsiveValue<any, ThemeType> | undefined;
  /**
   * The overflow-x CSS property sets what shows when content overflows a block-level element's left
   * and right edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x)
   */
  overflowX?: ResponsiveValue<any, ThemeType> | undefined;
  /**
   * The overflow-y CSS property sets what shows when content overflows a block-level element's top
   * and bottom edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y)
   */
  overflowY?: ResponsiveValue<any, ThemeType> | undefined;
}

/**
 * A convenience style group containing props related to layout such as width, height, and display.
 *
 * - For length props, Numbers from 0-4 (or the length of theme.sizes) are converted to values on the spacing scale.
 * - For length props, Numbers greater than the length of the theme.sizes array are converted to raw pixel values.
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
export interface LayoutProps<ThemeType extends Theme = RequiredTheme>
  extends WidthProps<ThemeType>,
    HeightProps<ThemeType>,
    MinWidthProps<ThemeType>,
    MinHeightProps<ThemeType>,
    MaxWidthProps<ThemeType>,
    MaxHeightProps<ThemeType>,
    DisplayProps<ThemeType>,
    VerticalAlignProps<ThemeType>,
    SizeProps<ThemeType>,
    OverflowProps<ThemeType> {}

export interface FlexboxProps<ThemeType extends Theme = RequiredTheme>
  extends AlignItemsProps<ThemeType>,
    AlignContentProps<ThemeType>,
    JustifyItemsProps<ThemeType>,
    JustifyContentProps<ThemeType>,
    FlexWrapProps<ThemeType>,
    FlexDirectionProps<ThemeType>,
    FlexProps<ThemeType>,
    FlexGrowProps<ThemeType>,
    FlexShrinkProps<ThemeType>,
    FlexBasisProps<ThemeType>,
    JustifySelfProps<ThemeType>,
    AlignSelfProps<ThemeType>,
    OrderProps<ThemeType> {}

/**
 * Grid Layout
 */

export interface GridGapProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap
   * and column-gap.
   *
   * @deprecated use gap
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)
   */
  gridGap?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface GridColumnGapProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The column-gap CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * @deprecated use column-gap
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)
   */
  gridColumnGap?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface GridRowGapProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The row-gap CSS property sets the size of the gap (gutter) between an element's rows.
   *
   * @deprecated use row-gap
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)
   */
  gridRowGap?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface GridColumnProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The grid-column CSS property is a shorthand property for grid-column-start and grid-column-end specifying
   * a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic)
   * to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)
   */
  gridColumn?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface GridRowProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The grid-row CSS property is a shorthand property for grid-row-start and grid-row-end specifying a grid item’s
   * size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid
   * placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)
   */
  gridRow?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface GridAutoFlowProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The grid-auto-flow CSS property controls how the auto-placement algorithm works, specifying exactly
   * how auto-placed items get flowed into the grid.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
   */
  gridAutoFlow?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface GridAutoColumnsProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The grid-auto-columns CSS property specifies the size of an implicitly-created grid column track.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)
   */
  gridAutoColumns?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface GridAutoRowsProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The grid-auto-rows CSS property specifies the size of an implicitly-created grid row track.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)
   */
  gridAutoRows?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface GridTemplateColumnsProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
   */
  gridTemplateColumns?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface GridTemplateRowsProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The grid-template-rows CSS property defines the line names and track sizing functions of the grid rows.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/row-template-rows)
   */
  gridTemplateRows?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface GridTemplateAreasProps<
  ThemeType extends Theme = RequiredTheme
> {
  /**
   * The grid-template-areas CSS property specifies named grid areas.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)
   */
  gridTemplateAreas?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface GridAreaProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The grid-area CSS property is a shorthand property for grid-row-start, grid-column-start, grid-row-end
   * and grid-column-end, specifying a grid item’s size and location within the grid row by contributing a line,
   * a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)
   */
  gridArea?: ResponsiveValue<any, ThemeType> | undefined;
}
/**
 * A convenience style group containing props related to grid.
 *
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
export interface GridProps<ThemeType extends Theme = RequiredTheme>
  extends GridGapProps<ThemeType>,
    GridColumnGapProps<ThemeType>,
    GridRowGapProps<ThemeType>,
    GridColumnProps<ThemeType>,
    GridRowProps<ThemeType>,
    GridAutoFlowProps<ThemeType>,
    GridAutoColumnsProps<ThemeType>,
    GridAutoRowsProps<ThemeType>,
    GridTemplateColumnsProps<ThemeType>,
    GridTemplateRowsProps<ThemeType>,
    GridTemplateAreasProps<ThemeType>,
    GridAreaProps<ThemeType> {}

/**
 * Background
 */

export interface BackgroundImageProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The background-image CSS property sets one or more background images on an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
   */
  backgroundImage?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface BackgroundSizeProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The background-size CSS property sets the size of the element's background image. The
   * image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
   */
  backgroundSize?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface BackgroundPositionProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The background-position CSS property sets the initial position for each background image. The
   * position is relative to the position layer set by background-origin.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
   */
  backgroundPosition?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface BackgroundRepeatProps<
  ThemeType extends Theme = RequiredTheme
> {
  /**
   * The background-repeat CSS property sets how background images are repeated. A background
   * image can be repeated along the horizontal and vertical axes, or not repeated at all.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
   */
  backgroundRepeat?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface BackgroundProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> extends BackgroundImageProps<ThemeType>,
    BackgroundSizeProps<ThemeType>,
    BackgroundPositionProps<ThemeType>,
    BackgroundRepeatProps<ThemeType> {
  /**
   * The background shorthand CSS property sets all background style properties at once,
   * such as color, image, origin and size, repeat method, and others.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
   */
  background?: ResponsiveValue<TVal, ThemeType> | undefined;
}

/**
 * Borders
 */

export interface BorderWidthProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'borderWidths', ThemeType>
> {
  /**
   * The border-width shorthand CSS property sets the width of all sides of an element's border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width)
   */
  borderWidth?: ResponsiveValue<TVal, ThemeType> | undefined;
  /**
   * The border-top-width CSS property sets the width of the top border of an element.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width)
   */
  borderTopWidth?: ResponsiveValue<TVal, ThemeType> | undefined;
  /**
   * The border-bottom-width CSS property sets the width of the bottom border of an element.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width)
   */
  borderBottomWidth?: ResponsiveValue<TVal, ThemeType> | undefined;
  /**
   * The border-left-width CSS property sets the width of the left border of an element.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width)
   */
  borderLeftWidth?: ResponsiveValue<TVal, ThemeType> | undefined;
  /**
   * The border-right-width CSS property sets the width of the right border of an element.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width)
   */
  borderRightWidth?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface BorderStyleProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The border-style shorthand CSS property sets the style of all sides of an element's border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
   */
  borderStyle?: ResponsiveValue<any, ThemeType> | undefined;
  /**
   * The border-top-style CSS property sets the line style of an element's top border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style)
   */
  borderTopStyle?: ResponsiveValue<any, ThemeType> | undefined;
  /**
   * The border-bottom-style CSS property sets the line style of an element's bottom border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style)
   */
  borderBottomStyle?: ResponsiveValue<any, ThemeType> | undefined;
  /**
   * The border-left-style CSS property sets the line style of an element's left border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style)
   */
  borderLeftStyle?: ResponsiveValue<any, ThemeType> | undefined;
  /**
   * The border-right-style CSS property sets the line style of an element's right border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style)
   */
  borderRightStyle?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface BorderColorProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'colors', ThemeType>
> {
  /**
   * The border-color shorthand CSS property sets the color of all sides of an element's border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)
   */
  borderColor?: ResponsiveValue<TVal, ThemeType> | undefined;
  /**
   * The border-top-color CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties border-color or border-top.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color)
   */
  borderTopColor?: ResponsiveValue<TVal, ThemeType> | undefined;
  /**
   * The border-bottom-color CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties border-color or border-bottom.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color)
   */
  borderBottomColor?: ResponsiveValue<TVal, ThemeType> | undefined;
  /**
   * The border-left-color CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties border-color or border-left.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color)
   */
  borderLeftColor?: ResponsiveValue<TVal, ThemeType> | undefined;
  /**
   * The border-right-color CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties border-color or border-right.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color)
   */
  borderRightColor?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface BorderTopProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The border-top CSS property is a shorthand that sets the values of border-top-width, border-top-style,
   * and border-top-color. These properties describe an element's top border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top)
   */
  borderTop?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface BorderRightProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The border-right CSS property is a shorthand that sets border-right-width, border-right-style,
   * and border-right-color. These properties set an element's right border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right)
   */
  borderRight?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface BorderBottomProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The border-bottom CSS property sets an element's bottom border. It's a shorthand for
   * border-bottom-width, border-bottom-style and border-bottom-color.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom)
   */
  borderBottom?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface BorderLeftProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The border-left CSS property is a shorthand that sets the values of border-left-width,
   * border-left-style, and border-left-color. These properties describe an element's left border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left)
   */
  borderLeft?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface BorderRadiusProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'radii', ThemeType>
> {
  /**
   * The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single
   * radius to make circular corners, or two radii to make elliptical corners.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
   */
  borderRadius?: ResponsiveValue<TVal, ThemeType> | undefined;
  /**
   * The border-top-left-radius CSS property rounds the top-left corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius)
   */
  borderTopLeftRadius?: ResponsiveValue<TVal, ThemeType> | undefined;
  /**
   * The border-top-right-radius CSS property rounds the top-right corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius)
   */
  borderTopRightRadius?: ResponsiveValue<TVal, ThemeType> | undefined;
  /**
   * The border-bottom-left-radius CSS property rounds the bottom-left corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius)
   */
  borderBottomLeftRadius?: ResponsiveValue<TVal, ThemeType> | undefined;
  /**
   * The border-bottom-right-radius CSS property rounds the bottom-right corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius)
   */
  borderBottomRightRadius?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface BordersProps<ThemeType extends Theme = RequiredTheme>
  extends BorderProps<ThemeType>,
    BorderTopProps<ThemeType>,
    BorderRightProps<ThemeType>,
    BorderBottomProps<ThemeType>,
    BorderLeftProps<ThemeType>,
    BorderWidthProps<ThemeType>,
    BorderColorProps<ThemeType>,
    BorderStyleProps<ThemeType>,
    BorderRadiusProps<ThemeType> {}

export interface BorderProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> extends BorderWidthProps<ThemeType>,
    BorderStyleProps<ThemeType>,
    BorderColorProps<ThemeType>,
    BorderRadiusProps<ThemeType>,
    BorderTopProps<ThemeType>,
    BorderRightProps<ThemeType>,
    BorderBottomProps<ThemeType>,
    BorderLeftProps<ThemeType> {
  /**
   * The border CSS property sets an element's border. It's a shorthand for border-width, border-style,
   * and border-color.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
   */
  border?: ResponsiveValue<TVal, ThemeType> | undefined;
  borderX?: ResponsiveValue<TVal, ThemeType> | undefined;
  borderY?: ResponsiveValue<TVal, ThemeType> | undefined;
}

/**
 * Position
 */

export interface ZIndexProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The z-index CSS property sets the z-order of a positioned element and its descendants or
   * flex items. Overlapping elements with a larger z-index cover those with a smaller one.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
   */
  zIndex?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface TopProps<ThemeType extends Theme = RequiredTheme, TVal = any> {
  /**
   * The top CSS property participates in specifying the vertical position of a
   * positioned element. It has no effect on non-positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
   */
  top?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface RightProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The right CSS property participates in specifying the horizontal position of a
   * positioned element. It has no effect on non-positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/right)
   */
  right?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface BottomProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The bottom CSS property participates in specifying the vertical position of a
   * positioned element. It has no effect on non-positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
   */
  bottom?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export interface LeftProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = any
> {
  /**
   * The left CSS property participates in specifying the horizontal position
   * of a positioned element. It has no effect on non-positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/left)
   */
  left?: ResponsiveValue<TVal, ThemeType> | undefined;
}
export interface PositionProps<ThemeType extends Theme = RequiredTheme>
  extends ZIndexProps<ThemeType>,
    TopProps<ThemeType>,
    RightProps<ThemeType>,
    BottomProps<ThemeType>,
    LeftProps<ThemeType> {
  /**
   * The position CSS property specifies how an element is positioned in a document.
   * The top, right, bottom, and left properties determine the final location of positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
   */
  position?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface BoxShadowProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated
   * by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii and color.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
   */
  boxShadow?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface TextShadowProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The `text-shadow` CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied
   * to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from
   * the element, blur radius, and color.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
   */
  textShadow?: ResponsiveValue<any, ThemeType> | undefined;
}

export interface ShadowProps<ThemeType extends Theme = RequiredTheme>
  extends BoxShadowProps<ThemeType>,
    TextShadowProps<ThemeType> {}
