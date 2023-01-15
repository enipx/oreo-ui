// @file declarations
export const defaultStandardFontSize = 16;

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
  'base': 16,
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
  body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
};

const typography = {
  fontWeights,
  fontSizes,
  fonts,
};

// @types definitions
export type FontWeightKeys = keyof typeof fontWeights;

export type FontSizeKeys = keyof typeof fontSizes;

export type FontKeys = keyof typeof fonts;

// @exports
export default typography;
