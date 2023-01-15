export type DivideParam = string | number;

export const divide = (a: DivideParam, b: DivideParam) => {
  const res = +a / +b;
  return res;
};
