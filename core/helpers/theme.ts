import defaultTheme, { ThemeKeys } from '../theme';

/**
 *
 * @param arg: ThemeKeys
 * method returns theme property specify
 */
export const getThemeHandler = (arg: ThemeKeys) => {
  return defaultTheme[arg];
};

export const applyDefaultThemeHandler = ({ theme = {}, ...props }) => {
  // Since styled-components defaults the `theme` prop to an empty object
  // inside of the styled component if a ThemeProvider is not present,
  // we check against the number of keys.
  return {
    ...props,
    theme: Object.keys(theme).length === 0 ? defaultTheme : theme,
  };
};
