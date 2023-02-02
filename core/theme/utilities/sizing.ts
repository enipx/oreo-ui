// @file declarations
const iconSizing = {
  '4xs': 8,
  '3xs': 12,
  '2xs': 14,
  'xs': 16,
  'sm': 18,
  'md': 24,
  'lg': 32,
  'xl': 40,
  '2xl': 48,
  '3xl': 56,
  '4xl': 64,
};

const sizing = {
  'none': 0,
  'xs': 2,
  'sm': 4,
  'md': 8,
  'base': 16,
  'lg': 24,
  'xl': 32,
  '2xl': 40,
  '3xl': 48,
};

// @types definitions
export type SizingType = typeof sizing;

export type SizingKeys = keyof SizingType;

export type IconSizingType = typeof iconSizing;

export type IconSizingKeys = keyof IconSizingType;

// @exports
export { iconSizing };
export default sizing;
