// @imports
import React from 'react';

import type { WebSvgProps } from '@/core/styled/index.types';
import { iconSizing } from '@/core/theme/utilities/sizing';

export const ChevronUpIcon: React.FC<WebSvgProps> = (props) => {
  const { size, style } = props;
  const iconSize = iconSizing[size || 'sm'];

  return (
    <svg
      width={iconSize}
      height={iconSize}
      fill="none"
      viewBox="0 0 24 24"
      style={style}>
      <path
        d="m19 8.5-7 7-7-7"
        stroke="currentColor"
        strokeWidth={props.strokeWidth || 1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
