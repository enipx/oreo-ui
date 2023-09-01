// @imports

import type { WebSvgProps } from '@oreo-ui/core/dist/styled/index.types';
import { iconSizing } from '@oreo-ui/core/dist/theme/utilities/sizing';
import React from 'react';

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
        strokeWidth={props.strokeWidth || 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
