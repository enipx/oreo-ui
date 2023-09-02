import type {
  SelectThemedStyledProps,
  SelectThemedDefaultProps,
} from '@oreo-ui/core/dist/styled/components.types';

import type { ViewProps } from '../view';

export interface SelectContainerProps
  extends Omit<ViewProps, 'size'>,
    SelectThemedDefaultProps {}

export interface SelectProps
  extends SelectThemedStyledProps,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      keyof SelectThemedStyledProps
    > {}
