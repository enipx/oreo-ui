// @imports
import type { ReactHTML, SVGProps } from 'react';

import type { PackageTypes, ThemeModeKeys } from '../constants/index.types';
import type { BreakpointsObjectKeys } from '../theme/utilities/breakpoints';
import type { IconSizingKeys } from '../theme/utilities/sizing';
import type { FontKeys } from '../theme/utilities/typography';
import type { ReactNativeStyledInterface, DefaultTheme } from './native';
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
} from './system';

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
    BorderProps,
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
  | 'shadow'
  | 'all';

export type ThemeStyledCategoriesArrayProps = ThemeStyledCategoriesProps[];

export type SystemThemeParams = Record<string, any> & {
  theme: DefaultTheme;
  type?: PackageTypes;
  packageType?: PackageTypes;
  disabled?: boolean;
  mode?: ThemeModeKeys;
  colorScheme?: string;
  rounded?: boolean;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  resize?: string;
  index?: number;
  styleType?: 'css' | 'react';
  fontKey?: FontKeys;
};

export type SystemThemeReturnType = { [key in PackageTypes]: string };

export type StyledThemeProps = Record<string, any>;

export type WebSvgProps = SVGProps<SVGElement> &
  ThemeTypeProps & {
    size?: IconSizingKeys;
    altColor?: string;
  };

export type NativeSvgProps = SVGProps<SVGElement> &
  ThemeTypeProps & {
    size?: IconSizingKeys;
    altColor?: string;
  };

export type ResponsiveValue<T> =
  | T
  | Partial<Record<BreakpointsObjectKeys | 'base', T>>;
