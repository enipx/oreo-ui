// @imports
import React, { useState, useMemo, useEffect } from 'react';

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

  useEffect(() => {
    if (defaultValue && defaultValue !== value) {
      setValue(defaultValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  return useMemo(() => {
    return (
      <TabsContextProvider
        value={{ ...otherProps, updateValue, value, storeValues, allValues }}>
        {children}
      </TabsContextProvider>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, allValues]);
};

Tabs.List = TabsList;
Tabs.Item = TabsItem;
Tabs.Panel = TabsPanel;
