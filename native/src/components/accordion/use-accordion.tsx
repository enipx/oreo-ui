// @imports
import type { UserAccordionProps } from './accordion.types';

import { isArray, isString } from '@oreo-ui/core/dist/helpers/base';

// @exports
export const useAccordion = (options: UserAccordionProps) => {
  const { value = '', item = '', allowMultiple } = options;

  const isActive = isArray(value)
    ? value?.includes(item || '')
    : value === item;

  const updateValue = (_item: string) => {
    let res = (value as unknown as string[]) || [];

    /**
     * if value is empty just return item
     */
    if (!value) return [_item];

    if (isArray(value)) {
      /**
       * check if array contains item
       */
      if (value.includes(_item)) {
        // remove item
        res = res?.filter?.((_i: string) => _i !== _item);
      } else {
        // add item
        res = allowMultiple ? [...res, _item] : [_item];
      }
    }

    if (isString(value)) {
      /**
       * check if res is item
       */
      if (value === _item) {
        // remove item
        res = [''];
      } else {
        // add item
        res = allowMultiple ? [...res, _item] : [_item];
      }
    }

    return res;
  };

  return { isActive, value, updateValue };
};
