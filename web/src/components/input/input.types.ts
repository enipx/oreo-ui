import type {
  InputThemedStyledProps,
  InputThemedDefaultProps,
} from '@/core/styled/components.types';
import type { FocusEvent } from 'react';

import type { TextProps } from '../text';
import type { ViewProps } from '../view';

export interface InputContainerProps
  extends Omit<ViewProps, 'size'>,
    InputThemedDefaultProps {}

export interface InputProps
  extends InputThemedStyledProps,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'size' | 'height' | 'width'
    > {}

export interface InputTextProps
  extends Omit<TextProps, 'size'>,
    InputThemedDefaultProps {}

export type InputFocusEventType = FocusEvent<HTMLInputElement, Element>;

export interface InputLabelProps extends TextProps {
  label?: string;
}

export interface InputHintProps extends TextProps {
  hint?: string;
  state?: InputProps['state'];
}
