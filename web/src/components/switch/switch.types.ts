import type { SwitchThemedStyledProps } from '@oreo-ui/core/dist/styled/components.types';
import React from 'react';

export type CheckboxDataType = SwitchThemedStyledProps &
  Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'height' | 'width'
  >;

export interface SwitchProps extends CheckboxDataType {}
