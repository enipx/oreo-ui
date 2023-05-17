import type { ViewThemedStyledProps } from '@/core/styled/components.types';

export interface ViewProps
  extends ViewThemedStyledProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {}
