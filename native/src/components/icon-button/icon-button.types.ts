import type { IconButtonThemedStyledProps } from '@oreo-ui/core/dist/styled/components.types';
import type { TouchableOpacityProps } from 'react-native';

export interface IconButtonProps
  extends IconButtonThemedStyledProps,
    Omit<TouchableOpacityProps, keyof IconButtonThemedStyledProps> {}
