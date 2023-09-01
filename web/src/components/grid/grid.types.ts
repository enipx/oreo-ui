import type {
  GridThemedStyledProps,
  GridItemThemedStyledProps,
} from '@oreo-ui/core/dist/styled/components.types';

export interface GridProps extends Omit<GridThemedStyledProps, 'color'> {}

export interface GridItemProps
  extends Omit<GridItemThemedStyledProps, 'color'> {}
