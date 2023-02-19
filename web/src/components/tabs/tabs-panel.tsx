// @imports
import { View } from '@components/view';
import { useRef } from 'react';

import { useTabsContext } from './tabs-context';
import type { TabsPanelProps } from './tabs.types';
import { useTabs } from './use-tabs';

// @exports
export const TabsPanel: React.FC<TabsPanelProps> = (props) => {
  const { children, value, color, ...otherProps } = props;

  const panelRef = useRef<HTMLDivElement>(null);

  const TabsValue = useTabsContext();

  const { isActive } = useTabs({
    item: value,
    panelRef,
    ...TabsValue,
  });

  if (!isActive) return null;

  return (
    <View ref={panelRef} padding="4" {...otherProps}>
      {children}
    </View>
  );
};
