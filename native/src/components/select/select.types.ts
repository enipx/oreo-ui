import type { ViewProps } from '../view';
import type {
  SelectThemedStyledProps,
  SelectThemedDefaultProps,
} from '@/core/styled/components.types';
import type { TouchableOpacityProps } from 'react-native';

export interface SelectContainerProps
  extends Omit<ViewProps, 'size'>,
    SelectThemedDefaultProps {}

export interface SelectProps
  extends SelectThemedStyledProps,
    Omit<TouchableOpacityProps, 'disabled' | 'size'> {}
