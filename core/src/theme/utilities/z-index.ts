// @file declarations
const zIndices = {
  hide: -1,
  auto: 'auto',
  base: 0,
  fore: 10,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  toast: 1700,
  tooltip: 1800,
};

// @types definitions
export type zIndicesType = typeof zIndices;
export type zIndicesKey = keyof zIndicesType;

// @exports
export default zIndices;
