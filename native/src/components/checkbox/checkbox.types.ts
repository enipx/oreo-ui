import type { CheckboxThemedStyledProps } from '@oreo-ui/core/dist/styled/components.types';
import type { TouchableOpacityProps } from 'react-native';

import type { CheckboxSizeType } from '@oreo-ui/core/dist/styled/components.types';
import type { IconSizingKeys } from '@oreo-ui/core/dist/theme/utilities/sizing';
import type { TextProps } from '../text';

export interface CheckboxProps
  extends Omit<CheckboxThemedStyledProps, keyof TouchableOpacityProps>,
    TouchableOpacityProps {
  onChange?: (checked: boolean) => void;

  checked?: boolean;

  labelProps?: TextProps;

  hintProps?: TextProps;
}

export type CheckboxCheckedIconSizeType = {
  [key in CheckboxSizeType]: IconSizingKeys;
};
