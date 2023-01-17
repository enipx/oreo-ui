// @file declarations
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
export type SizingKEys = keyof typeof sizing;

// @exports
export default sizing;
