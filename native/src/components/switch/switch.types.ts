import type { RadioThemedDefaultProps } from '@oreo-ui/core/dist/styled/components.types';
import type { TouchableOpacityProps } from 'react-native';

export type SwitchDefaultType = RadioThemedDefaultProps &
  TouchableOpacityProps & {
    checked?: boolean;
  };

export interface SwitchProps extends SwitchDefaultType {
  onChange?: (checked: boolean) => void;
}
