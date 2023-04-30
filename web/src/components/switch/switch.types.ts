import type { SwitchThemedStyledProps } from '@/core/styled/components.types';
import React from 'react';

export type CheckboxDataType = SwitchThemedStyledProps &
  Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'height' | 'width'
  >;

export interface SwitchProps extends CheckboxDataType {}
