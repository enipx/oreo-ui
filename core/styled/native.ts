// @imports
import * as styledComponents from 'styled-components/native';
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
} from 'styled-system';
import themer from 'styled-theming';

import { arrayIncludesValueHandler } from '../helpers/base';
import { applyDefaultThemeHandler } from '../helpers/theme';
import type {
  NativeThemeStyledTagProps,
  ThemeStyledCategoriesArrayProps,
  ThemeStyledProps,
  ThemeStyledCategoriesProps,
} from './index.types';

// @file declarations
const {
  default: styled,
  css,
  ThemeProvider,
  useTheme,
} = styledComponents as unknown as styledComponents.ReactNativeThemedStyledComponentsModule<ThemeStyledProps>;

export { styled, css, ThemeProvider, useTheme, variant, themer };

export const baseStyled = (
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
