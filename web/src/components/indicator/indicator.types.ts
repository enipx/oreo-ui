import type {
  IndicatorThemedDefaultProps,
  ComponentsDefaultProps,
} from '@/core/styled/components.types';

import type { ThemeStyledProps } from '@/core/styled/index.types';

export interface IndicatorProps
  extends IndicatorThemedDefaultProps,
    Omit<ThemeStyledProps, 'size'>,
    ComponentsDefaultProps {}
