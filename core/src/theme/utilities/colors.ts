// @file declarations
export const colorsScheme = {
  blackAlpha: {
    50: 'rgba(0, 0, 0, 0.05)',
    100: 'rgba(0, 0, 0, 0.1)',
    200: 'rgba(0, 0, 0, 0.2)',
    300: 'rgba(0, 0, 0, 0.3)',
    400: 'rgba(0, 0, 0, 0.4)',
    500: 'rgba(0, 0, 0, 0.5)',
    600: 'rgba(0, 0, 0, 0.6)',
    700: 'rgba(0, 0, 0, 0.7)',
    800: 'rgba(0, 0, 0, 0.8)',
    900: 'rgba(0, 0, 0, 0.9)',
  },

  whiteAlpha: {
    50: 'rgba(255, 255, 255, 0.05)',
    100: 'rgba(255, 255, 255, 0.1)',
    200: 'rgba(255, 255, 255, 0.2)',
    300: 'rgba(255, 255, 255, 0.3)',
    400: 'rgba(255, 255, 255, 0.4)',
    500: 'rgba(255, 255, 255, 0.5)',
    600: 'rgba(255, 255, 255, 0.6)',
    700: 'rgba(255, 255, 255, 0.7)',
    800: 'rgba(255, 255, 255, 0.8)',
    900: 'rgba(255, 255, 255, 0.9)',
  },

  gray: {
    50: '#EBEDF0',
    100: '#DADEE4',
    200: '#C9CED7',
    300: '#B8BFCB',
    400: '#758098',
    500: '#53617F',
    600: '#424E66',
    700: '#323A4C',
    800: '#212733',
    900: '#111319',
  },

  red: {
    50: '#FBECEC',
    100: '#F7D8D8',
    200: '#F3C5C5',
    300: '#E68B8B',
    400: '#DE6464',
    500: '#D63D3D',
    600: '#AB3131',
    700: '#802525',
    800: '#561818',
    900: '#2B0C0C',
  },

  green: {
    50: '#EBF7F1',
    100: '#D8EFE3',
    200: '#B1DFC6',
    300: '#8ACFAA',
    400: '#63BF8D',
    500: '#3CAF71',
    600: '#308C5A',
    700: '#246944',
    800: '#18462D',
    900: '#0C2317',
  },

  blue: {
    50: '#E9F0FE',
    100: '#D3E2FD',
    200: '#BDD3FC',
    300: '#7AA7F8',
    400: '#4E8AF6',
    500: '#226DF4',
    600: '#1B57C3',
    700: '#144192',
    800: '#0E2C62',
    900: '#071631',
  },

  yellow: {
    50: '#FFF9E5',
    100: '#FFF2CC',
    200: '#FFE599',
    300: '#FFD966',
    400: '#FFCC33',
    500: '#FFBF00',
    600: '#CC9900',
    700: '#997300',
    800: '#664C00',
    900: '#332600',
  },

  purple: {
    50: '#F2EEFA',
    100: '#E4DCF6',
    200: '#CAB9ED',
    300: '#AF97E4',
    400: '#9574DB',
    500: '#7A51D2',
    600: '#6241A8',
    700: '#49317E',
    800: '#312054',
    900: '#18102A',
  },

  orange: {
    50: '#FDF1E7',
    100: '#FBE2D0',
    200: '#F8C6A1',
    300: '#F4A972',
    400: '#F18D43',
    500: '#ED7014',
    600: '#BE5A10',
    700: '#8E430C',
    800: '#5F2D08',
    900: '#2F1604',
  },

  indigo: {
    50: '#EEEDFE',
    100: '#DDDBFE',
    200: '#BBB6FD',
    300: '#9A92FB',
    400: '#786DFA',
    500: '#5649F9',
    600: '#453BCC',
    700: '#352C9F',
    800: '#241E73',
    900: '#140F46',
  },
};

const colors = {
  black: '#000000',
  white: '#FFFFFF',
  transparent: 'transparent',
  current: 'currentColor',
  ...colorsScheme,
};

// @types definitions
export type ColorsSchemeKeys = keyof typeof colorsScheme;

export type DefaultColorsSchemeKeys = Exclude<
  ColorsSchemeKeys,
  'blackAlpha' | 'whiteAlpha'
>;

export type DefaultColorsVariantsType =
  | 'solid'
  | 'subtle'
  | 'outline'
  | 'ghost'
  | 'link';

export type ColorsKeys = typeof colors;

// @exports
export default colors;
