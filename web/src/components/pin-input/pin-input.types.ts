import React from 'react';

import type { PinInputThemedDefaultProps } from '@/core/styled/components.types';

export interface PinInputProps
  extends PinInputThemedDefaultProps,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'size' | 'height' | 'width' | 'onChange' | 'value'
    > {}

export type PinInputFieldElementType = HTMLInputElement;
