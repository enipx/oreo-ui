// @imports
import { cssVariablePrefix } from '../constants';
import type { ObjectTypes, PackageTypes } from '../constants/index.types';

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

/**
 *
 * returns package type
 */
export const isPackageWeb = (arg?: PackageTypes) => {
  return arg === 'web';
};

export const isPackageNative = (arg?: PackageTypes) => {
  return arg === 'native';
};

/**
 *
 * method checks if index is array last item
 */
export const isArrayLastItem = (options: { array: any[]; index: number }) => {
  const { array, index } = options;

  return array.length - 1 === index;
};

/**
 * undefined check.
 * @param item
 * @returns {boolean}
 */
export const isUndefined = (item: any) => {
  return typeof item === 'undefined';
};

/**
 * string check.
 * @param item
 * @returns {boolean}
 */
export const isString = (item: any) => {
  return typeof item === 'string';
};

/**
 * object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: any) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * array check.
 * @param item
 * @returns {boolean}
 */
export function isArray(item: any) {
  return item && Array.isArray(item);
}

/**
 *
 * @param target : any
 * @param source : any
 * @returns {Object} new object merged together
 */
export const mergedObjectsHandler = (target: any, source: any) => {
  const output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) Object.assign(output, { [key]: source[key] });
        else output[key] = mergedObjectsHandler(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
};

export const iterateObjectHandler: (options: {
  obj: ObjectTypes;
  defaultKey?: string;
  defaultObj?: ObjectTypes;
  prefix?: boolean;
  prefixValue?: string;
}) => ObjectTypes = (options) => {
  const { obj, defaultKey, defaultObj, prefix, prefixValue } = options;

  return Object.entries(obj).reduce((allObj, [key, value]) => {
    let objKey = defaultKey ? `${defaultKey}-${key}` : key;

    objKey = prefix ? `${prefixValue || cssVariablePrefix}-${objKey}` : objKey;

    const allValueObj = {
      ...defaultObj,
      ...allObj,
    };

    if (isObject(value)) {
      return iterateObjectHandler({
        obj: value,
        defaultKey: objKey,
        defaultObj: allValueObj,
      }) as ObjectTypes;
    }

    return {
      ...allValueObj,
      [objKey]: value,
    };
  }, {});
};

/**
 *
 * @param options : ConvertNestObjectToNonNestedObjectOptions
 * @returns : Record<string, any>
 * @NOTE This method convert multi-nested object into a single object
 * with prefix support.
 * This is particular useful while generation css variable for a theme
 */
type ConvertNestObjectToNonNestedObjectOptions = {
  obj: ObjectTypes;
  prefix?: boolean;
  prefixValue?: string;
};

export const convertNestObjectToNonNestedObject = (
  options: ConvertNestObjectToNonNestedObjectOptions
) => {
  const { obj, prefix, prefixValue } = options;

  return iterateObjectHandler({
    obj,
    prefix,
    prefixValue,
  });
};

/**
 *
 * @param options : { length: number }
 * @returns {string}
 */
export const generateUIDHandler = (options?: { length: number }) => {
  const length = options?.length || 8;
  const halfLength = length / 2;

  const uId1 = (Math.random() * 46656) | 0;
  const uId2 = (Math.random() * 46656) | 0;

  let defaultUid = '';

  for (let i = 0; i < halfLength; i++) {
    defaultUid += '0';
  }

  const uId1Length = (defaultUid + uId1.toString(36)).slice(-halfLength);
  const uId2Length = (defaultUid + uId2.toString(36)).slice(-halfLength);

  return uId1Length + uId2Length;
};
