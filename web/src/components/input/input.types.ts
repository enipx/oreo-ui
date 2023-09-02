import type {
  InputThemedStyledProps,
  InputThemedDefaultProps,
} from '@oreo-ui/core/dist/styled/components.types';
import type { FocusEvent } from 'react';

import type { TextProps } from '../text';
import type { ViewProps } from '../view';

export interface InputContainerProps
  extends Omit<ViewProps, keyof InputThemedDefaultProps>,
    InputThemedDefaultProps {}

export interface InputProps
  extends InputThemedStyledProps,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      keyof InputThemedStyledProps
    > {}

export interface InputTextProps
  extends Omit<TextProps, keyof InputThemedDefaultProps>,
    InputThemedDefaultProps {}

export type InputFocusEventType = FocusEvent<HTMLInputElement, Element>;

export interface InputLabelProps extends TextProps {
  label?: string;
}

export interface InputHintProps extends TextProps {
  hint?: string;
  state?: InputProps['state'];
}
