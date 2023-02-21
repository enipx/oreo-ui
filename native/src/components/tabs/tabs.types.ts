import type {
  TabsThemedDefaultProps,
  TabsItemThemedDefaultProps,
  TabsListThemedDefaultProps,
  TabsPanelThemedDefaultProps,
} from '@/core/styled/components.types';
import type { ButtonProps } from '../button';
import type { ViewProps } from '../view';
import type { StyleProp } from 'react-native';
import type { TextProps } from '../text';

export interface TabsProps extends TabsThemedDefaultProps {
  isActive?: boolean;
}

export interface TabsListProps extends TabsListThemedDefaultProps, ViewProps {}

export interface TabsItemProps
  extends Omit<TabsItemThemedDefaultProps, '_active' | '_hover' | '_selected'>,
    ButtonProps {
  title?: string;
  _selected?: StyleProp<ButtonProps>;
  textStyle?: StyleProp<TextProps>;
}

export interface TabsPanelProps
  extends TabsPanelThemedDefaultProps,
    ViewProps {}

export interface UseTabsProps extends TabsProps {
  item?: string;
}

export interface TabsContextProps extends TabsProps {
  updateValue?: (arg: string, options?: { onMounted?: boolean }) => void;
  storeValues?: (arg: string) => void;
  allValues?: string[];
  togglePanel?: () => void;
}
