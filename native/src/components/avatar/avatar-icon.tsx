// @imports
import React from 'react';
import { Path, Svg, G } from 'react-native-svg';

import type { NativeSvgProps } from '@/core/styled/index.types';
import { iconSizing } from '@/core/theme/utilities/sizing';

export const ProfileIcon: React.FC<NativeSvgProps> = (props) => {
  const { size } = props;
  const iconSize = iconSizing[size || 'sm'];
  const stroke = props.theme?.colors.gray[500];

  return (
    <Svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
      <G
        clipRule="evenodd"
        stroke={props.stroke || stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth || 1.5}>
        <Path d="M11.985 15.346c-3.868 0-7.17.585-7.17 2.927s3.281 2.948 7.17 2.948c3.867 0 7.17-.586 7.17-2.927s-3.282-2.948-7.17-2.948Z" />
        <Path d="M11.985 12.006A4.596 4.596 0 1 0 7.389 7.41a4.58 4.58 0 0 0 4.563 4.596h.033Z" />
      </G>
    </Svg>
  );
};
