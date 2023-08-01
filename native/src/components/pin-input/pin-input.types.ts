import type { PinInputThemedDefaultProps } from '@/core/styled/components.types';
import type {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInput,
  TextInputProps,
  TextInputKeyPressEventData,
} from 'react-native';

export interface PinInputFieldProps
  extends PinInputThemedDefaultProps,
    Omit<TextInputProps, 'disabled' | 'size' | 'onChange' | 'textAlign'> {
  type?: KeyboardTypeOptions | 'password';
}

export interface PinInputProps extends PinInputThemedDefaultProps {
  type?: KeyboardTypeOptions | 'password';
}

export type PinInputFieldElementType = TextInput;

export type PinInputonChangeEventType =
  NativeSyntheticEvent<TextInputKeyPressEventData>;
