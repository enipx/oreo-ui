// @imports
import type { CSSProperties } from 'react';
import defaultStyled, {
  keyframes,
  css,
  ThemeProvider,
  useTheme as useStyledTheme,
  createGlobalStyle,
} from 'styled-components';
import themer from 'styled-theming';

import { arrayIncludesValueHandler } from '../helpers/base';
import { IgnorePropsFromDOM } from '../helpers/dom';
import type { ThemeType } from '../theme';
import type {
  WebThemeStyledTagProps,
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
const styled: typeof defaultStyled =
  typeof defaultStyled === 'function'
    ? defaultStyled
    : defaultStyled['default'];

const baseStyled = (
  tag: WebThemeStyledTagProps,
  omitProps?: ThemeStyledCategoriesArrayProps,
  options?: {
    ignoreProps?: string[];
  }
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

  // @ts-ignore
  return styled[tag].withConfig({
    shouldForwardProp: (prop: string) =>
      ![...IgnorePropsFromDOM, ...(options?.ignoreProps || [])].includes(prop),
  })`
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

const useTheme = useStyledTheme as () => ThemeType;

type DefaultTheme = ThemeType;

export type { DefaultTheme, CSSProperties };

export {
  styled,
  variant,
  themer,
  keyframes,
  baseStyled,
  css,
  ThemeProvider,
  useTheme,
  createGlobalStyle,
};
