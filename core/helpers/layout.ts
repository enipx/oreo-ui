import { defaultStandardFontSize } from '../theme/utilities/typography';
import { divide } from './number';

/**
 *
 * @param arg: number
 * method returns argument unit in absolute & relative unit
 * px, em, rem
 */
export const getDimensionsUnitHandler = (arg: number) => {
  const relativeValue = divide(arg, defaultStandardFontSize);

  const px = `${arg}px`;
  const em = `${relativeValue}em`;
  const rem = `${relativeValue}rem`;

  return {
    px,
    em,
    rem,
  };
};
