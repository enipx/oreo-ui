import type { CheckboxThemedStyledProps } from '@oreo-ui/core/dist/styled/components.types';
import React from 'react';

export interface CheckboxProps
  extends CheckboxThemedStyledProps,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      keyof CheckboxThemedStyledProps
    > {}
