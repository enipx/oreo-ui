import type { ButtonThemedStyledProps } from '@/core/styled/components.types';
import type { TouchableOpacityProps } from 'react-native';
import type { TextProps } from '../text';

export interface ButtonProps
  extends ButtonThemedStyledProps,
    Omit<TouchableOpacityProps, 'disabled' | 'children'> {
  textProps?: TextProps;
}
