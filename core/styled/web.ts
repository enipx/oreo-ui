// @imports
import defaultStyled from 'styled-components';
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
  variant as defaultVariant,
} from 'styled-system';

import { arrayIncludesValueHandler } from '../helpers/base';
import { applyDefaultThemeHandler } from '../helpers/theme';
import type {
  WebThemeStyledTagProps,
  ThemeStyledCategoriesArrayProps,
  ThemeStyledProps,
  ThemeStyledCategoriesProps,
} from './index.types';

// @file declarations
export const styled = defaultStyled;

export const variant = defaultVariant;

export const baseStyled = (
  tag: WebThemeStyledTagProps,
  omitProps?: ThemeStyledCategoriesArrayProps
) => {
  const isStyledIgnored = (value: ThemeStyledCategoriesProps) => {
    if (!omitProps) return false;

    return arrayIncludesValueHandler({ value, array: omitProps });
  };

  return styled(tag).attrs(applyDefaultThemeHandler)<ThemeStyledProps>`
    ${isStyledIgnored('color') ? undefined : color}
    ${isStyledIgnored('space') ? undefined : space}
    ${isStyledIgnored('typography') ? undefined : typography}
    ${isStyledIgnored('layout') ? undefined : layout}
    ${isStyledIgnored('flexbox') ? undefined : flexbox}
    ${isStyledIgnored('grid') ? undefined : grid}
    ${isStyledIgnored('background') ? undefined : background}
    ${isStyledIgnored('border') ? undefined : border}
    ${isStyledIgnored('position') ? undefined : position}
    ${isStyledIgnored('shadow') ? undefined : shadow}
  `;
};
