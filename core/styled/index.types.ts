// @imports
import type { ReactHTML } from 'react';
import type {
  ReactNativeStyledInterface,
  DefaultTheme,
} from 'styled-components/native';
import type {
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
} from 'styled-system';

import type { ThemeType } from '../theme';

// @file declarations
export type ThemeTypeProps = {
  theme?: ThemeType;
};

export interface ThemeStyledProps
  extends SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    FlexboxProps,
    GridProps,
    BackgroundProps,
    BorderProps,
    PositionProps,
    ShadowProps,
    ThemeTypeProps {}

export interface LayoutThemeStyledProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,
    GridProps,
    BackgroundProps,
    PositionProps,
    ShadowProps,
    ThemeTypeProps {}

export interface TypographyThemeStyledProps
  extends ColorProps,
    TypographyProps,
    ThemeTypeProps {}

// @styled types definitions
export type WebThemeStyledTagProps = keyof ReactHTML;

export type NativeThemeStyledTagProps =
  keyof ReactNativeStyledInterface<DefaultTheme>;

export type ThemeStyledCategoriesProps =
  | 'space'
  | 'color'
  | 'typography'
  | 'layout'
  | 'flexbox'
  | 'grid'
  | 'background'
  | 'border'
  | 'position'
  | 'shadow';

export type ThemeStyledCategoriesArrayProps = ThemeStyledCategoriesProps[];
