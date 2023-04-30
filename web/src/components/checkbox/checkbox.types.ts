import type { CheckboxThemedStyledProps } from '@/core/styled/components.types';
import React from 'react';

export interface CheckboxProps
  extends CheckboxThemedStyledProps,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'size' | 'height' | 'width'
    > {}
