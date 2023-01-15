import type { ContainerThemedStyledProps } from '@/core/styled/components.types';
import type { StatusBarProps, StatusBarStyle } from 'react-native';
import type { ScrollViewProps } from '../scroll-view';

export interface ContainerProps extends ContainerThemedStyledProps {
  /**
   * device status bar props
   */
  statusBarProps?: StatusBarProps;
  /**
   * sets the color of the status bar text
   */
  statusBar?: StatusBarStyle;
  /**
   * enable scroll view on container
   */
  scrollable?: boolean;
  /**
   * set scroll view props
   */
  scrollViewProps?: ScrollViewProps;
}
