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

import { PackageTypes, ThemeModeKeys } from '../constants/index.types';

// @file declarations
export type ThemeTypeProps = {
  theme?: DefaultTheme;
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
    LayoutProps,
    FlexboxProps,
    SpaceProps,
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

export type SystemThemeParams = {
  theme: DefaultTheme;
  type?: PackageTypes;
  disabled?: boolean;
  mode?: ThemeModeKeys;
  colorScheme?: string;
};
