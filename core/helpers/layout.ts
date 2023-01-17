import { defaultStandardFontSize } from '../constants';
import type {
  ObjectTypes,
  DimensionsUnitTypes,
} from '../constants/index.types';
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

export const convertObjectDimensionsUnit = (
  data: any[] | ObjectTypes,
  options?: { dimension: DimensionsUnitTypes }
) => {
  const dimension = options?.dimension || 'rem';

  let res = data;

  // check if data is an array
  if (Array.isArray(data)) {
    res = data.map((value) => {
      const dimensions = getDimensionsUnitHandler(value);

      return dimensions[dimension];
    });
  } else {
    res = Object.entries(data).reduce((attrs, [key, value]) => {
      const dimensions = getDimensionsUnitHandler(value);
      return {
        ...attrs,
        [key]: dimensions[dimension],
      };
    }, {});
  }

  return res;
};
