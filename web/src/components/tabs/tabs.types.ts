import type { RefObject } from 'react';

import type {
  TabsThemedDefaultProps,
  TabsItemThemedDefaultProps,
  TabsListThemedStyledProps,
  TabsPanelThemedStyledProps,
} from '@/core/styled/components.types';

export interface TabsProps extends TabsThemedDefaultProps {
  isActive?: boolean;
}

export interface TabsListProps extends TabsListThemedStyledProps {}

export interface TabsItemProps extends TabsItemThemedDefaultProps {}

export interface TabsPanelProps extends TabsPanelThemedStyledProps {}

export interface UseTabsProps extends TabsProps {
  item?: string;
  panelRef?: RefObject<HTMLDivElement>;
}

export interface TabsContextProps extends TabsProps {
  updateValue?: (arg: string, options?: { onMounted?: boolean }) => void;
  storeValues?: (arg: string) => void;
  allValues?: string[];
  togglePanel?: () => void;
}
