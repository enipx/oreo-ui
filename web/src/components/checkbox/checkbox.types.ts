import React from 'react';

import type { CheckboxThemedStyledProps } from '@/core/styled/components.types';

export interface CheckboxProps
  extends CheckboxThemedStyledProps,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'size' | 'height' | 'width'
    > {}
