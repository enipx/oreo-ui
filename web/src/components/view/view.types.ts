import type { ViewThemedStyledProps } from '@oreo-ui/core/dist/styled/components.types';

export interface ViewProps
  extends ViewThemedStyledProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof ViewThemedStyledProps> {
  ref?: React.RefObject<HTMLDivElement>;
}
