import type { ViewThemedStyledProps } from '@oreo-ui/core/dist/styled/components.types';

export interface ViewProps
  extends ViewThemedStyledProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  ref?: React.RefObject<HTMLDivElement>;
}
