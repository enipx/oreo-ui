import type { TextProps } from '../text';
import type { ViewProps } from '../view';
import type {
  InputThemedStyledProps,
  InputThemedDefaultProps,
} from '@/core/styled/components.types';
import type {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native';

export interface InputProps
  extends InputThemedStyledProps,
    Omit<TextInputProps, 'disabled'> {
  type?: KeyboardTypeOptions | 'password';
}

export interface InputContainerProps
  extends Omit<ViewProps, 'size'>,
    InputThemedDefaultProps {}

export interface InputTextProps
  extends Omit<TextProps, 'size'>,
    InputThemedDefaultProps {}

export type InputFocusEventType = NativeSyntheticEvent<TextInputFocusEventData>;

export interface InputLabelProps extends TextProps {
  label?: string;
}

export interface InputHintProps extends TextProps {
  hint?: string;
  state?: InputProps['state'];
}
