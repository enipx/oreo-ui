import type {
  KeyboardAvoidingViewProps,
  ViewProps as DefaultViewProps,
} from 'react-native';
import type { ViewThemedStyledProps } from '@/core/styled/components.types';

export interface ViewProps extends DefaultViewProps, ViewThemedStyledProps {
  /**
   * enable keyboard avoding view on scroll view
   */
  enableKeyboardAvoidingView?: boolean;
  /**
   * enable keyboard avoding view on scroll view
   */
  keyboardAvoidingViewProps?: KeyboardAvoidingViewProps;
}
