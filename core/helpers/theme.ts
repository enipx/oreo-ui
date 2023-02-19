import type { ApplyDefaultThemeHandlerProps } from '../constants/index.types';
import defaultTheme, { ThemeKeys } from '../theme';
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
