import type { SwitchThemedStyledProps } from '@oreo-ui/core/dist/styled/components.types';
import React from 'react';

export type CheckboxDataType = SwitchThemedStyledProps &
  Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    keyof SwitchThemedStyledProps
  >;

export interface SwitchProps extends CheckboxDataType {}
