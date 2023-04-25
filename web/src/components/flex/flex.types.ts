import type { FlexThemedStyledProps } from '@/core/styled/components.types';

export interface FlexProps extends Omit<FlexThemedStyledProps, 'color'> {
  wrap?: boolean;
}
