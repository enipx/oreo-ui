// @imports

import type { WebSvgProps } from '@/core/styled/index.types';
import { iconSizing } from '@/core/theme/utilities/sizing';
import React from 'react';

export const ProfileIcon = (props: WebSvgProps) => {
  const iconSize = iconSizing[props.size || 'sm'];

  return (
    <svg
      width={props.width || iconSize}
      height={props.height || iconSize}
      fill="none"
      className={props.className}
      viewBox="0 0 24 24">
      <g
        clipRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth || 1.5}>
        <path d="M11.985 15.346c-3.868 0-7.17.585-7.17 2.927s3.281 2.948 7.17 2.948c3.867 0 7.17-.586 7.17-2.927s-3.282-2.948-7.17-2.948Z" />
        <path d="M11.985 12.006A4.596 4.596 0 1 0 7.389 7.41a4.58 4.58 0 0 0 4.563 4.596h.033Z" />
      </g>
    </svg>
  );
};
