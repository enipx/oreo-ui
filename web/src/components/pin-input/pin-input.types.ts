import type { PinInputThemedDefaultProps } from '@oreo-ui/core/dist/styled/components.types';
import React from 'react';

export interface PinInputProps
  extends PinInputThemedDefaultProps,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      keyof PinInputThemedDefaultProps
    > {}

export type PinInputFieldElementType = HTMLInputElement;
