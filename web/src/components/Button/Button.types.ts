import type { ButtonThemedStyledProps } from '@/core/styled/components.types';

export interface ButtonProps
  extends Omit<ButtonThemedStyledProps, 'width' | 'height'>,
    Omit<React.InputHTMLAttributes<HTMLButtonElement>, 'color' | 'size'> {}
