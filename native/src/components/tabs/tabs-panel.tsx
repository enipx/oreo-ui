// @imports
import React from 'react';
import { View } from '../view';

import { useTabsContext } from './tabs-context';
import type { TabsPanelProps } from './tabs.types';
import { useTabs } from './use-tabs';

// @exports
export const TabsPanel: React.FC<TabsPanelProps> = (props) => {
  const { children, value, ...otherProps } = props;

  const tabsValue = useTabsContext();

  const { isActive } = useTabs({
    item: value,
    value: tabsValue?.value || '',
  });

  if (!isActive) return null;

  return (
    <View padding="4" {...otherProps}>
      {children}
    </View>
  );
};
