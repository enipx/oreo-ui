import type { ViewProps } from '../view';
import type {
  SelectThemedStyledProps,
  SelectThemedDefaultProps,
} from '@/core/styled/components.types';
import type { TouchableOpacityProps } from 'react-native';
import type { FlatListRenderProps } from '@components/flat-list/flat-list.types';

export interface SelectContainerProps
  extends Omit<ViewProps, 'size'>,
    SelectThemedDefaultProps {}

export interface SelectProps
  extends SelectThemedStyledProps,
    Omit<TouchableOpacityProps, 'disabled' | 'size'> {
  /**
   * select options
   */
  data?: any[];

  /**
   * selected value
   */
  value?: any;

  /**
   * this prop is used to identify which
   * item property to display as item value
   */
  valueProperty?: string;

  /**
   * this prop is used to identify which
   * item property to uniquely identify item
   */
  keyProperty?: string;

  /**
   *
   * @param arg : any
   * @returns current selected item
   */
  onChange?: (arg: any) => void;

  /**
   *
   * @param item : FlatListRenderProps
   * @returns used to render custom options
   */
  renderOptions?: (item: FlatListRenderProps) => JSX.Element;
}
