import type {
  ApplyDefaultThemeHandlerProps,
  ObjectTypes,
} from '../constants/index.types';
import { MediaStyleKeyType, MediaStyleType } from '../styled/components.types';
import { ResponsiveValue } from '../styled/index.types';
import { DefaultTheme } from '../styled/web';
import defaultTheme, { ThemeKeys, ThemeType } from '../theme';
import { getBreakpoints } from '../theme/utilities/breakpoints';
import { convertNestObjectToNonNestedObject, isArray, isObject } from './base';
import { convertToKebabCaseHandler } from './string';

/**
 *
 * @param arg: ThemeKeys
 * method returns theme property specify
 */
export const getThemeHandler = (arg: ThemeKeys) => {
  return defaultTheme()[arg];
};

export const applyDefaultThemeHandler = ({
  theme = {},
  packageType,
  ...props
}: ApplyDefaultThemeHandlerProps) => {
  // Since styled-components defaults the `theme` prop to an empty object
  // inside of the styled component if a ThemeProvider is not present,
  // we check against the number of keys.
  return {
    ...props,
    theme: Object.keys(theme).length === 0 ? defaultTheme(packageType) : theme,
  };
};

/**
 *
 * @param reactCSS: React.CSSProperties
 * method convert react css to css stylesheet
 */
export const convertReactCSSToCSSHandler = (reactCSS?: React.CSSProperties) => {
  if (!reactCSS) return '';

  const css = Object.keys(reactCSS).reduce((styles, key) => {
    // transform the key from camelCase to kebab-case
    const cssKey = convertToKebabCaseHandler(key);

    // remove ' in value
    // @ts-ignore
    const cssValue = reactCSS?.[key]?.replace?.("'", '');
    // build the result
    // you can break the line, add indent for it if you need
    return `${styles}${cssKey}:${cssValue};`;
  }, '');

  return css;
};

/**
 *
 * @param options : any
 * @returns: string
 * method convert theme to css variable
 *
 */
export const convertThemeToCSSVariableHandler = (options: any) => {
  const { prefix = true } = options;

  const theme = {
    ...options.theme,
    breakpoints: getBreakpoints('web'),
  };

  // convert deep nested object to all single object
  const res = convertNestObjectToNonNestedObject({ obj: theme, prefix });

  return res;
};

export const getThemeValueHandler = (options: {
  theme: ThemeType;
  key?: ThemeKeys;
  value: string;
}) => {
  const { theme, key, value } = options;

  const themeObj = theme[key || 'colors'];

  let res = value;

  /**
   * check if value doesn't exist in theme
   * or if value is an rgb or rgba color
   */
  if (
    !value ||
    ((!value.includes('.') || value.includes('rgb')) && !themeObj[value])
  ) {
    return res;
  }

  const splitValue = value.split('.');

  if (splitValue[0]) {
    res = themeObj[splitValue[0]];

    if (isObject(res) && splitValue?.[1]) {
      res = res[splitValue[1] as any] || res;
    }
  }

  return res;
};

/**
 *
 * @param hex : string
 * @param alpha number
 * @returns return string
 * This method convert hext color code to rgba
 * @source https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
 */
export const convertHexToRgbaHandler = (hex: string, alpha?: number) => {
  let c;

  if (hex === 'transparent') {
    return hex;
  }

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');

    // @ts-ignore
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${
      alpha === undefined ? 1 : alpha
    })`;
  }

  console.error('Bad Hex: ', hex);

  return hex;
};

export const convertMediaStylesToCss = (
  mediaStyle?: MediaStyleType,
  theme?: DefaultTheme
) => {
  const isMediaStyleEmpty = Object.values(mediaStyle || {}).every(
    (media) => Object.keys(media).length === 0
  );

  if (!mediaStyle || isMediaStyleEmpty) return '';

  let css = '';

  Object.entries(mediaStyle).forEach(([key, value]) => {
    const breakpoint = theme?.breakpoints?.[key];

    const style = convertReactCSSToCSSHandler(value as any);

    let mediaCss = `${key} {${style}}`;

    if (breakpoint) {
      mediaCss = `@media screen and (min-width: ${breakpoint}) {${style}}`;
    }

    if (key === 'base') {
      mediaCss = `${style}`;
    }

    css += mediaCss;
  });

  return css;
};

type GetResponsiveStyleHandlerOptions = {
  props?: ResponsiveValue<any>[];
  prependStyle?: string | string[];
  property?: string[];
  replaceValue?: ObjectTypes;
  theme?: DefaultTheme;
  replaceStyle?: React.CSSProperties;
};

export const getResponsiveStyleHandler = (
  options: GetResponsiveStyleHandlerOptions
) => {
  const {
    prependStyle = '',
    props,
    theme,
    property,
    replaceValue,
    replaceStyle,
  } = options;

  if (!props || props.length <= 0) return '';

  let mediaStyle: MediaStyleType = {
    'base': {},
    'xs': {},
    'sm': {},
    'md': {},
    'lg': {},
    'xl': {},
    '2xl': {},
  };

  let mediaCss = '';

  let css = '';

  // 1. map through props array
  props.forEach((prop, index) => {
    const newPrependStyle = isArray(prependStyle)
      ? prependStyle[index]
      : prependStyle;

    // 2. check if prop is an object, Hence a responsive props
    if (isObject(prop)) {
      // 2.1. map through responsive prop
      Object.keys(prop).forEach((key) => {
        const newKey = key as MediaStyleKeyType;

        // 2.2. get current breakpoint value
        const keyValue = prop[newKey];

        // 2.3. prepend breakpoint value
        const value = `${newPrependStyle || ''} ${
          replaceValue?.[keyValue] || keyValue
        }`.trim();

        // 2.4. get css property of this particular props
        const newProps = property ? property?.[index] : '';

        const newkeyObjects = replaceStyle || { [newProps]: value };

        // 2.5. finally add key/value props to all media styles object
        const newMediaStyle: MediaStyleType = {
          ...mediaStyle,
          [newKey]: {
            ...mediaStyle[newKey],
            ...newkeyObjects,
          },
        };

        mediaStyle = newMediaStyle;
      });

      return;
    }

    // 3. if props is not an object then it's not a responsive props
    const valueProp = props?.[index];

    const value = `${newPrependStyle || ''} ${
      replaceValue?.[valueProp as unknown as keyof typeof replaceValue] || props
    }`.trim();

    // 3.1 if replace value exists b
    const valueCss = replaceStyle
      ? convertReactCSSToCSSHandler(replaceStyle)
      : `${property?.[index] || ''}: ${value};`;

    css += valueCss;
  });

  mediaCss = convertMediaStylesToCss(mediaStyle, theme);

  css += mediaCss;

  return css;
};
