import type {
  IndicatorThemedDefaultProps,
  ComponentsDefaultProps,
} from '@oreo-ui/core/dist/styled/components.types';

import type { ThemeStyledProps } from '@oreo-ui/core/dist/styled/index.types';

export interface IndicatorProps
  extends IndicatorThemedDefaultProps,
    Omit<ThemeStyledProps, keyof IndicatorThemedDefaultProps>,
    ComponentsDefaultProps {}
