import type { ContainerThemedStyledProps } from '@oreo-ui/core/dist/styled/components.types';

export interface ContainerProps
  extends ContainerThemedStyledProps,
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      keyof ContainerThemedStyledProps
    > {}
