// @imports
import { useEffect, useState } from 'react';

import { TabsContextProvider } from './tabs-context';
import { TabsItem } from './tabs-item';
import { TabsList } from './tabs-list';
import { TabsPanel } from './tabs-panel';
import type { TabsContextProps, TabsProps } from './tabs.types';
import { useTabs } from './use-tabs';

// @exports
export const Tabs = (props: TabsProps) => {
  const { children, value: defaultValue, onTabChange, ...otherProps } = props;

  const [value, setValue] = useState(defaultValue || '');

  const [allValues, setAllValues] = useState<string[]>([]);

  const { updateValue: _updateValue } = useTabs({ value, ...otherProps });

  const updateValue: TabsContextProps['updateValue'] = (item, options) => {
    setValue(_updateValue(item));

    if (!options?.onMounted) {
      onTabChange?.(item);
    }
  };

  const storeValues = (item: string) => {
    setAllValues((prev) => [...prev, item]);
  };

  useEffect(() => {
    if (defaultValue && defaultValue !== value) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <TabsContextProvider
      value={{ ...otherProps, updateValue, value, storeValues, allValues }}>
      {children}
    </TabsContextProvider>
  );
};

Tabs.List = TabsList;
Tabs.Item = TabsItem;
Tabs.Panel = TabsPanel;
