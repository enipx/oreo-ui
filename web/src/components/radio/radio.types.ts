import React from 'react';

import type { RadioThemedStyledProps } from '@/core/styled/components.types';

export type RadioDataType = RadioThemedStyledProps &
  Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'height' | 'width'
  >;

export interface RadioProps extends RadioDataType {
  data?: RadioDataType[];
}
