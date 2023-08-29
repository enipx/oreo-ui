// @imports
import * as styledComponents from 'styled-components/native';
import type { ReactNativeStyledInterface } from 'styled-components/native';
import themer from 'styled-theming';

import { arrayIncludesValueHandler } from '../helpers/base';
import { theme as defaultThemeHandler, ThemeType } from '../theme';
import type {
  NativeThemeStyledTagProps,
  ThemeStyledCategoriesArrayProps,
  ThemeStyledCategoriesProps,
} from './index.types';
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  variant,
} from './system';

// @file declarations
const {
  default: styled,
  css,
  ThemeProvider,
  useTheme: useStyledTheme,
} = styledComponents as unknown as styledComponents.ReactNativeThemedStyledComponentsModule<ThemeType>;

const defaultTheme = defaultThemeHandler('native');

const baseStyled = (
  tag: NativeThemeStyledTagProps,
  omitProps?: ThemeStyledCategoriesArrayProps
) => {
  const isStyledIgnored = (value: ThemeStyledCategoriesProps) => {
    if (!omitProps) return false;

    if (omitProps?.includes('all')) return true;

    return arrayIncludesValueHandler({ value, array: omitProps });
  };

  const _space = isStyledIgnored('space') ? '' : space;
  const _color = isStyledIgnored('color') ? '' : color;
  const _typography = isStyledIgnored('typography') ? '' : typography;
  const _layout = isStyledIgnored('layout') ? '' : layout;
  const _flexbox = isStyledIgnored('flexbox') ? '' : flexbox;
  const _grid = isStyledIgnored('grid') ? '' : grid;
  const _background = isStyledIgnored('background') ? '' : background;
  const _border = isStyledIgnored('border') ? '' : border;
  const _position = isStyledIgnored('position') ? '' : position;
  const _shadow = isStyledIgnored('shadow') ? '' : shadow;

  return styled[tag]`
    ${
      // @ts-ignore
      _space
    }
    ${_color}
    ${_typography}
    ${_layout}
    ${_flexbox}
    ${_grid}
    ${_background}
    ${_border}
    ${_position}
    ${_shadow}
  `;
};

type DefaultTheme = ThemeType;

export type { ReactNativeStyledInterface, DefaultTheme };

const useTheme: () => ThemeType = useStyledTheme;

export {
  styled,
  css,
  ThemeProvider,
  useTheme,
  variant,
  themer,
  defaultTheme,
  baseStyled,
};
