// @imports
import type { UseTabsProps } from './tabs.types';

// @exports
export const useTabs = (options: UseTabsProps) => {
  const { value = '', item = '' } = options;

  const isActive = value === item;

  return { isActive };
};
