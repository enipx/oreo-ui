import type {
  TabsThemedDefaultProps,
  TabsListThemedStyledProps,
  TabsPanelThemedStyledProps,
  TabsItemThemedStyledProps,
} from '@oreo-ui/core/dist/styled/components.types';
import type { RefObject } from 'react';

export interface TabsProps extends TabsThemedDefaultProps {
  isActive?: boolean;
}

export interface TabsListProps extends TabsListThemedStyledProps {}

export interface TabsItemProps extends TabsItemThemedStyledProps {}

export interface TabsPanelProps extends TabsPanelThemedStyledProps {
  ref?: RefObject<HTMLDivElement>;
}

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
