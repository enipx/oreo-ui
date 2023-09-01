import type { RadioThemedStyledProps } from '@oreo-ui/core/dist/styled/components.types';
import React from 'react';

export type RadioDataType = RadioThemedStyledProps &
  Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'height' | 'width'
  >;

export interface RadioProps extends RadioDataType {
  data?: RadioDataType[];
}
