import type {
  TabsThemedDefaultProps,
  TabsItemThemedDefaultProps,
  TabsListThemedDefaultProps,
  TabsPanelThemedDefaultProps,
} from '@oreo-ui/core/dist/styled/components.types';
import type { ViewProps } from '../view';
import type { StyleProp, ButtonProps } from 'react-native';
import type { TextProps } from '../text';

export interface TabsProps extends TabsThemedDefaultProps {
  isActive?: boolean;
}

export interface TabsListProps
  extends TabsListThemedDefaultProps,
    Omit<ViewProps, 'children'> {}

export interface TabsItemProps
  extends Omit<TabsItemThemedDefaultProps, '_active' | '_hover' | '_selected'>,
    Omit<ButtonProps, keyof TabsItemThemedDefaultProps | 'title'> {
  title?: string;
  _selected?: StyleProp<ButtonProps>;
  textStyle?: StyleProp<TextProps>;
  textProps?: TextProps;
}

export interface TabsItemTextProps extends TextProps {}

export interface TabsPanelProps
  extends TabsPanelThemedDefaultProps,
    Omit<ViewProps, 'children'> {}

export interface UseTabsProps extends TabsProps {
  item?: string;
}

export interface TabsContextProps extends TabsProps {
  updateValue?: (arg: string, options?: { onMounted?: boolean }) => void;
  storeValues?: (arg: string) => void;
  allValues?: string[];
  togglePanel?: () => void;
}
