// @imports
import React from 'react';
import { Path, Svg } from 'react-native-svg';

import type { NativeSvgProps } from '@oreo-ui/core/dist/styled/index.types';
import { iconSizing } from '@oreo-ui/core/dist/theme/utilities/sizing';

export const ChevronUpIcon: React.FC<NativeSvgProps> = (props) => {
  const { size } = props;
  const iconSize = iconSizing[size || 'sm'];
  const stroke = props.theme?.colors.gray[500];

  return (
    <Svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
      <Path
        d="m19 8.5-7 7-7-7"
        stroke={stroke || '#000'}
        strokeWidth={props.strokeWidth || 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
