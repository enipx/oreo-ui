import type { PinInputThemedDefaultProps } from '@/core/styled/components.types';
import React from 'react';

export interface PinInputProps
  extends PinInputThemedDefaultProps,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'size' | 'height' | 'width' | 'onChange' | 'value' | 'color'
    > {}

export type PinInputFieldElementType = HTMLInputElement;
