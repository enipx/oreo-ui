import type { ContainerThemedStyledProps } from '@/core/styled/components.types';

export interface ContainerProps
  extends ContainerThemedStyledProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {}
