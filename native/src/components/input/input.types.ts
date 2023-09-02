import type { TextProps } from '../text';
import type { ViewProps } from '../view';
import type {
  InputThemedStyledProps,
  InputThemedDefaultProps,
} from '@oreo-ui/core/dist/styled/components.types';
import type {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native';

export interface InputProps
  extends InputThemedStyledProps,
    Omit<TextInputProps, keyof InputThemedStyledProps> {
  type?: KeyboardTypeOptions | 'password';
}

export interface InputContainerProps
  extends Omit<ViewProps, keyof InputThemedDefaultProps>,
    InputThemedDefaultProps {}

export interface InputTextProps
  extends Omit<TextProps, keyof InputThemedDefaultProps>,
    InputThemedDefaultProps {}

export type InputFocusEventType = NativeSyntheticEvent<TextInputFocusEventData>;

export interface InputLabelProps extends TextProps {
  label?: string;
}

export interface InputHintProps extends TextProps {
  hint?: string;
  state?: InputProps['state'];
}
