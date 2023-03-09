import type { ApplyDefaultThemeHandlerProps } from '../constants/index.types';
import defaultTheme, { ThemeKeys, ThemeType } from '../theme';
import { getBreakpoints } from '../theme/utilities/breakpoints';
import { convertNestObjectToNonNestedObject, isObject } from './base';
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
    const cssValue = reactCSS[key].replace("'", '');
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

  /**
   * check if value doesn't exist in theme
   * or if value is an rgb or rgba color
   */
  if ((!value.includes('.') || value.includes('rgb')) && !themeObj[value]) {
    return value;
  }

  const splitValue = value.split('.');

  let res = themeObj[splitValue[0]];

  if (isObject(res) && splitValue?.[1]) {
    res = res[splitValue[1]];
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

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');

    // @ts-ignore
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${
      alpha || 1
    })`;
  }

  console.error('Bad Hex: ', hex);

  return hex;
};
