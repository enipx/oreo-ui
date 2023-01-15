// @imports
import type { ObjectTypes } from '../constants/index.types';

/**
 *
 * @param arg: object
 * method returns string with argument values spread as string
 */
export const spreadObjectToStringHandler = (
  arg: ObjectTypes,
  options?: { ignore?: string[] }
) => {
  const res = '';

  Object.entries(arg).forEach(([key, value]) => {
    // check if field should be ignore
    const ignoreField = options?.ignore?.includes(key);

    if (!ignoreField) {
      res.concat(`${value}`);
    }
  });

  return res;
};

/**
 *
 * method returns if value is in array
 */
export const arrayIncludesValueHandler = (options: {
  array: any[];
  value: string;
}) => {
  const { array, value } = options;
  return array.includes(value);
};
