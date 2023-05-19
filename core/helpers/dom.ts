// @imports
/**
 *
 * method returns if window exist
 */
export const domExistsHandler = () => {
  const domExists =
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement;

  return !!domExists;
};

export const preventPageScrollingHandler = (prevent?: boolean) => {
  if (domExistsHandler() && document.body) {
    document.body.style.overflow = prevent ? 'hidden' : 'unset';
  }
};

export const IgnorePropsFromDOM = [
  // space
  'm',
  'margin',
  'mt',
  'marginTop',
  'mr',
  'marginRight',
  'ml',
  'marginLeft',
  'mb',
  'marginBottom',
  'mx',
  'marginX',
  'my',
  'marginY',
  'p',
  'padding',
  'pt',
  'paddingTop',
  'pr',
  'paddingRight',
  'pl',
  'paddingLeft',
  'pb',
  'paddingBottom',
  'px',
  'paddingX',
  'py',
  'paddingY',

  // color
  'color',
  'bg',
  'backgroundColor',
  'opacity',

  // typography
  'fontFamily',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'letterSpacing',
  'textAlign',
  'fontStyle',
  'textTransform',
  'numberOfLines',

  // layout
  'width',
  'height',
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
  'size',
  'display',
  'verticalAlign',
  'overflow',
  'overflowX',
  'overflowY',

  // flexbox
  'alignItems',
  'alignContent',
  'justifyItems',
  'justifyContent',
  'flexWrap',
  'flexDirection',
  'flex',
  'flexGrow',
  'flexShrink',
  'flexBasis',
  'justifySelf',
  'alignSelf',
  'order',

  // grid
  'gridGap',
  'gridRowGap',
  'gridColumnGap',
  'gridColumn',
  'gridRow',
  'gridArea',
  'gridAutoFlow',
  'gridAutoRows',
  'gridAutoColumns',
  'gridTemplateRows',
  'gridTemplateColumns',
  'gridTemplateAreas',

  // bg
  'background',
  'backgroundImage',
  'backgroundSize',
  'backgroundPosition',
  'backgroundRepeat',

  // border
  'border',
  'borderWidth',
  'borderStyle',
  'borderColor',
  'borderRadius',

  'borderTop',
  'borderTopWidth',
  'borderTopStyle',
  'borderTopColor',
  'borderTopLeftRadius',
  'borderTopRightRadius',

  'borderRight',
  'borderRightWidth',
  'borderRightStyle',
  'borderRightColor',

  'borderBottom',
  'borderBottomWidth',
  'borderBottomStyle',
  'borderBottomColor',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',

  'borderLeft',
  'borderLeftWidth',
  'borderLeftStyle',
  'borderLeftColor',

  'borderX',
  'borderY',

  // position
  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',

  // shadow
  'textShadow',
  'boxShadow',

  // variants
  'textStyle',
  'colorStyle',
  'buttonStyle',

  // custom
  'as',
  '_mediaStyle',
  '_css',
  '_hover',
  '_focus',
  '_active',
  '_disabled',
  '_placeholder',
  '_selected',
  '_active',
  '_handle',
  '_track',
  'flexCenter',
  'flexCenterY',
  'flexCenterX',
  'row',
  'column',
  'columns',
  'inline',
  'reverse',
  'spacing',
  'center',
  'centerY',
  'centerX',
  'spacingX',
  'spacingY',
  'icon',
  'rightIcon',
  'leftIcon',
  'activeIcon',
  'iconPosition',
  'iconType',
  'withIcon',
  'variant',
  'colorScheme',
  'state',
  'text',
  'disabled',
  'rounded',
  'loading',
  'loadingText',
  'loadingIcon',
  'hint',
  'label',
  'showPassword',
  'showPasswordIcon',
  'hidePasswordIcon',
  'length',
  'onFilled',
  'focusOnMounted',
  'indeterminate',
  'description',
  'horizontal',
  'domNode',
  'isOpen',
  'modalSize',
  'closeOnOverlayClick',
  'overlayBg',
  'overlayFilter',
  'overlayBlur',
  'overlayOpacity',
  'hideCloseButton',
  'withFooter',
  'footerAlt',
  'footerContent',
  'pos',
  'preventScrolling',
  'overflow',
  'closeOnEscape',
  'removeContentMargin',
  'removeContentPadding',
  'isDrawer',
  'timingFunction',
  'direction',
  'delay',
  'fillMode',
  'iterationCount',
  'allowMultiple',
  'transitionDuration',
  'transition',
  'showBorder',
  'render',
  'disabledAutoHide',
  'isGrouped',
  'isLastItem',
  'imgProps',
  'withEqualWidth',
  'striped',
  'captionPlacement',
  'hovered',
  'whiteSpace',
  'placement',
  'withArrow',
  'startColor',
  'endColor',
  'count',
  'fit',
  'fallbackSrc',
  'fallback',
  'thickness',
  'emptyColor',
  'orientation',
  'breakpoint',
  'above',
  'below',
  'scrollWidth',
  'scrollHeight',
  'scrollBg',
  'scrollHoverBg',
  'updateValue',
  'isActive',
  'col',
  'colStart',
  'colEnd',
];
