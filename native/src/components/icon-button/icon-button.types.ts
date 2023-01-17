import type { IconButtonThemedStyledProps } from '@/core/styled/components.types';
import type { TouchableOpacityProps } from 'react-native';

export interface IconButtonProps
  extends IconButtonThemedStyledProps,
    Omit<TouchableOpacityProps, 'disabled'> {}
