// @imports
import React, { useState } from 'react';

import { TabsContextProvider } from './tabs-context';
import { TabsItem } from './tabs-item';
import { TabsList } from './tabs-list';
import { TabsPanel } from './tabs-panel';
import type { TabsContextProps, TabsProps } from './tabs.types';

// @exports
export const Tabs = (props: TabsProps) => {
  const { children, value: defaultValue, onTabChange, ...otherProps } = props;

  const [value, setValue] = useState(defaultValue || '');

  const [allValues, setAllValues] = useState<string[]>([]);

  const updateValue: TabsContextProps['updateValue'] = (item, options) => {
    setValue(item);

    if (!options?.onMounted) {
      onTabChange?.(item);
    }
  };

  const storeValues = (item: string) => {
    setAllValues((prev) => [...prev, item]);
  };

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
