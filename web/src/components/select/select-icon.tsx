// @imports
import React from 'react';

import type { WebSvgProps } from '@/core/styled/index.types';
import { iconSizing } from '@/core/theme/utilities/sizing';

export const ArrowDown: React.FC<WebSvgProps> = (props) => {
  const iconSize = iconSizing[props.size || 'sm'];

  return (
    <svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
      <path
        d="M4.47 7.97a.75.75 0 0 1 .976-.073l.084.073L12 14.439l6.47-6.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 .073.976l-.073.084-7 7a.75.75 0 0 1-.976.073l-.084-.073-7-7a.75.75 0 0 1 0-1.06Z"
        fill="currentColor"
      />
    </svg>
  );
};
