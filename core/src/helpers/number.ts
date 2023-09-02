export type NumberParam = string | number;

export const divide = (a: NumberParam, b: NumberParam) => {
  const res = parseFloat(a.toString()) / parseFloat(b.toString());
  return res;
};

export const minus = (a: NumberParam, b: NumberParam) => {
  const res = parseFloat(a.toString()) - parseFloat(b.toString());
  return res;
};

export const add = (a: NumberParam, b: NumberParam) => {
  const res = parseFloat(a.toString()) + parseFloat(b.toString());
  return res;
};
