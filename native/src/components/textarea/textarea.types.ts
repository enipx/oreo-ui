import type { TextareaThemedStyledProps } from '@oreo-ui/core/dist/styled/components.types';
import type { KeyboardTypeOptions, TextInputProps } from 'react-native';

export interface TextareaProps
  extends TextareaThemedStyledProps,
    Omit<TextInputProps, keyof TextareaThemedStyledProps> {
  type?: KeyboardTypeOptions | 'password';
}
