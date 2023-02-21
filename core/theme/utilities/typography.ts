import type { PackageTypes } from '@/core/constants/index.types';
import { isPackageWeb } from '@/core/helpers/base';
import { convertObjectDimensionsUnit } from '@/core/helpers/layout';

// @file declarations
const fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const fontSizes = {
  '2xs': 8,
  'xs': 12,
  'sm': 14,
  'md': 16,
  'lg': 18,
  'xl': 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
  '6xl': 60,
  '7xl': 72,
  '8xl': 96,
  '9xl': 128,
};

const fonts = {
  heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  body: `inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
};

const lineHeights = {
  0: 0,
  normal: 'normal',
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: 2,
};

const typography = (arg?: PackageTypes) => {
  const isWeb = isPackageWeb(arg);

  return {
    fontWeights,
    fontSizes: convertObjectDimensionsUnit(fontSizes, {
      dimension: isWeb ? 'rem' : 'px',
    }) as FontSizeTypes,
    fonts,
    lineHeights,
  };
};

// @types definitions
export type FontWeightTypes = typeof fontWeights;

export type FontWeightKeys = keyof FontWeightTypes;

export type FontSizeTypes = typeof fontSizes;

export type FontSizeKeys = keyof FontSizeTypes;

export type FontTypes = typeof fonts;

export type FontKeys = keyof FontTypes;

// @exports
export default typography;
