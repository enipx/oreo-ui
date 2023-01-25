import type { CheckboxThemedDefaultProps } from '@/core/styled/components.types';
import type { TouchableOpacityProps } from 'react-native';

import type { CheckboxSizeType } from '@/core/styled/components.types';
import type { IconSizingKeys } from '@/core/theme/utilities/sizing';

export interface CheckboxProps
  extends CheckboxThemedDefaultProps,
    TouchableOpacityProps {
  onChange?: (checked: boolean) => void;

  checked?: boolean;
}

export type CheckboxCheckedIconSizeType = {
  [key in CheckboxSizeType]: IconSizingKeys;
};
