import type { FlexThemedStyledProps } from '@oreo-ui/core/dist/styled/components.types';
import type { ViewProps } from '../view/view.types';

export interface FlexProps
  extends ViewProps,
    Omit<FlexThemedStyledProps, keyof ViewProps> {}
