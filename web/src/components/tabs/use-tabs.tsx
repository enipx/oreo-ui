// @imports
import type { UseTabsProps } from './tabs.types';

// @exports
export const useTabs = (options: UseTabsProps) => {
  const { value = '', item = '', panelRef } = options;

  const isActive = value === item;

  const updateValue = (_item: string) => {
    const res = _item;

    return res;
  };

  /**
   * used to handle pannel toggles
   */
  const togglePanel = () => {
    if (panelRef && panelRef.current?.style) {
      panelRef.current.style.height = isActive
        ? `${panelRef.current.scrollHeight}px`
        : '0';
    }
  };

  return { isActive, value, updateValue, togglePanel };
};
