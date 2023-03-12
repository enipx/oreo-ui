import React from 'react';

import type { SwitchThemedStyledProps } from '@/core/styled/components.types';

export type CheckboxDataType = SwitchThemedStyledProps &
  Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'height' | 'width'
  >;

export interface SwitchProps extends CheckboxDataType {}
