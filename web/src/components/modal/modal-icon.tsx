// @imports

import type { WebSvgProps } from '@/core/styled/index.types';
import { iconSizing } from '@/core/theme/utilities/sizing';
import React from 'react';

export const CloseIcon: React.FC<WebSvgProps> = (props) => {
  const iconSize = iconSizing[props.size || 'sm'];

  return (
    <svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
      <path
        d="m7.145 7.012 9.706 9.706M16.95 6.913l-9.9 9.9"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
