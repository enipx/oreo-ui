import type { IconButtonThemedStyledProps } from '@oreo-ui/core/dist/styled/components.types';

export interface IconButtonProps
  extends IconButtonThemedStyledProps,
    Omit<
      React.InputHTMLAttributes<HTMLButtonElement>,
      'color' | 'width' | 'height' | 'size'
    > {}
