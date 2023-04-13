// @imports
import React, { useMemo } from 'react';
import { View } from '../view';

import { useTabsContext } from './tabs-context';
import type { TabsPanelProps } from './tabs.types';
import { useTabs } from './use-tabs';

// @exports
export const TabsPanel = (props: TabsPanelProps) => {
  const { children, value, ...otherProps } = props;

  const tabsContextValue = useTabsContext();

  const tabsValue = tabsContextValue?.value || '';

  const { isActive } = useTabs({
    item: value,
    value: tabsValue,
  });

  return useMemo(() => {
    if (!isActive) {
      return null;
    }

    return <View {...otherProps}>{children}</View>;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);
};
