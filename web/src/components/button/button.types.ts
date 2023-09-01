import type { ButtonThemedStyledProps } from '@oreo-ui/core/dist/styled/components.types';

export interface ButtonProps
  extends ButtonThemedStyledProps,
    Omit<
      React.InputHTMLAttributes<HTMLButtonElement>,
      'width' | 'height' | 'color' | 'size'
    > {}
