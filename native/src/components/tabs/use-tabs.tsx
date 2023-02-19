// @imports
import type { UseTabsProps } from './tabs.types';

// @exports
export const useTabs = (options: UseTabsProps) => {
  const { value = '', item = '' } = options;

  const isActive = value === item;

  const updateValue = (_item: string) => {
    const res = _item;

    return res;
  };

  return { isActive, value, updateValue };
};
