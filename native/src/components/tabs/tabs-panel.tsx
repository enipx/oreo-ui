// @imports
import React, { useMemo } from 'react';
import { View } from '../view';

import { useTabsContext } from './tabs-context';
import type { TabsPanelProps } from './tabs.types';
import { useTabs } from './use-tabs';

// @exports
export const TabsPanel: React.FC<TabsPanelProps> = (props) => {
  const { children, value, ...otherProps } = props;

  // const tabsContextValue = useTabsContext();

  const tabsValue = '';

  const { isActive } = useTabs({
    item: value,
    value: tabsValue,
  });

  return useMemo(() => {
    if (!isActive) {
      return null;
    }

    return (
      <View padding="4" {...otherProps}>
        {children}
      </View>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabsValue]);
};
