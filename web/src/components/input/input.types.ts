import type { FocusEvent } from 'react';

import type { TextProps } from '../text';
import type { ViewProps } from '../view';

import type {
  InputThemedStyledProps,
  InputThemedDefaultProps,
} from '@/core/styled/components.types';

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
