import type { IconButtonThemedStyledProps } from '@/core/styled/components.types';

export interface IconButtonProps
  extends IconButtonThemedStyledProps,
    Omit<
      React.InputHTMLAttributes<HTMLButtonElement>,
      'color' | 'width' | 'height' | 'size'
    > {}
