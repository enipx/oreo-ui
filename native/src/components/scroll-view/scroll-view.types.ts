import type {
  ScrollViewProps as DefaultScrollViewProps,
  RefreshControlProps,
  KeyboardAvoidingViewProps,
} from 'react-native';
import type { ViewThemedStyledProps } from '@/core/styled/components.types';

export interface ScrollViewProps extends DefaultScrollViewProps {
  /**
   * view container props
   */
  viewProps?: ViewThemedStyledProps;
  /**
   * show horizontal scroll indicator
   */
  scrollX?: boolean;
  /**
   * show vertical scroll indicator
   */
  scrollY?: boolean;
  /**
   * enable pull to refresh
   */
  pullToRefresh?: boolean;
  /**
   * call method on pull to refresh
   */
  onPullToRefresh?: () => void;
  /**
   * refreshControl components props
   */
  refreshControlProps?: RefreshControlProps;
  /**
   * enable keyboard avoding view on scroll view
   */
  enableKeyboardAvoidingView?: boolean;
  /**
   * enable keyboard avoding view on scroll view
   */
  keyboardAvoidingViewProps?: KeyboardAvoidingViewProps;
}
