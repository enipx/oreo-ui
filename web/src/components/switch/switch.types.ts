import React from 'react';

import type { SwitchThemedStyledProps } from '@/core/styled/components.types';

export type CheckboxDataType = SwitchThemedStyledProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export interface SwitchProps extends CheckboxDataType {}
