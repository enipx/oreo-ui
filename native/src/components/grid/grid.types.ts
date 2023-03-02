import type {
  GridThemedStyledProps,
  GridItemThemedStyledProps,
} from '@/core/styled/components.types';

export interface GridProps extends Omit<GridThemedStyledProps, 'color'> {}

export interface GridItemProps
  extends Omit<GridItemThemedStyledProps, 'color'> {}

export interface GridContextProps extends GridProps {}
