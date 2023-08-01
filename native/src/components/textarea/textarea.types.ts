import type { TextareaThemedStyledProps } from '@/core/styled/components.types';
import type { KeyboardTypeOptions, TextInputProps } from 'react-native';

export interface TextareaProps
  extends TextareaThemedStyledProps,
    Omit<TextInputProps, 'disabled' | 'textAlign'> {
  type?: KeyboardTypeOptions | 'password';
}
