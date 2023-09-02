import type { FlexThemedStyledProps } from '@oreo-ui/core/dist/styled/components.types';

export interface FlexProps
  extends Omit<FlexThemedStyledProps, 'color' | 'inline'> {}
