import type { CheckboxThemedDefaultProps } from '@oreo-ui/core/dist/styled/components.types';
import type { TouchableOpacityProps } from 'react-native';

import type { CheckboxSizeType } from '@oreo-ui/core/dist/styled/components.types';
import type { IconSizingKeys } from '@oreo-ui/core/dist/theme/utilities/sizing';

export interface CheckboxProps
  extends CheckboxThemedDefaultProps,
    TouchableOpacityProps {
  onChange?: (checked: boolean) => void;

  checked?: boolean;
}

export type CheckboxCheckedIconSizeType = {
  [key in CheckboxSizeType]: IconSizingKeys;
};
