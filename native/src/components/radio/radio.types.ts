import type {
  RadioThemedDefaultProps,
  RadioSizeType,
} from '@oreo-ui/core/dist/styled/components.types';
import type { SpacingKeys } from '@oreo-ui/core/dist/theme/utilities/spacing';
import type { TouchableOpacityProps } from 'react-native';

export type RadioDataType = RadioThemedDefaultProps &
  TouchableOpacityProps & {
    checked?: boolean;
  };

export interface RadioProps extends RadioDataType {
  defaultValue?: string;
  onChange?: (item: RadioDataType) => void;
  data?: RadioDataType[];
}

export type RadioCheckedIconSizeType = {
  [key in RadioSizeType]: SpacingKeys;
};
