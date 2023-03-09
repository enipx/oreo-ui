// @imports
import * as styledComponents from 'styled-components/native';
import themer from 'styled-theming';

import { arrayIncludesValueHandler } from '../helpers/base';
import { applyDefaultThemeHandler } from '../helpers/theme';
import defaultThemeHandler, { ThemeType } from '../theme';
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
  ThemeContext,
  ThemeProvider,
  ThemeConsumer,
  useTheme,
} = styledComponents as unknown as styledComponents.ReactNativeThemedStyledComponentsModule<ThemeType>;

const defaultTheme = defaultThemeHandler('native');

const baseStyled = (
  tag: NativeThemeStyledTagProps,
  omitProps?: ThemeStyledCategoriesArrayProps
) => {
  const isStyledIgnored = (value: ThemeStyledCategoriesProps) => {
    if (!omitProps) return false;

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

  // @ts-ignore
  return styled[tag].attrs(applyDefaultThemeHandler)`
    ${_space}
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

export type DefaultTheme = ThemeType;

export {
  styled,
  css,
  ThemeContext,
  ThemeProvider,
  ThemeConsumer,
  useTheme,
  variant,
  themer,
  defaultTheme,
  baseStyled,
};
