import type { ButtonThemedStyledProps } from '@/core/styled/components.types';

export interface ButtonProps
  extends ButtonThemedStyledProps,
    Omit<
      React.InputHTMLAttributes<HTMLButtonElement>,
      'width' | 'height' | 'color' | 'size'
    > {}
