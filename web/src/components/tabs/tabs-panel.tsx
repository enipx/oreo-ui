// @imports
import { useRef, useMemo } from 'react';

import { View } from '@components/view';

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

  return useMemo(() => {
    if (!isActive) {
      return null;
    }

    return (
      <View ref={panelRef} {...otherProps}>
        {children}
      </View>
    );
  }, [isActive]);
};
