// @imports
import { Path, Svg } from 'react-native-svg';
import React from 'react';

import type { NativeSvgProps } from '@/core/styled/index.types';
import { iconSizing } from '@/core/theme/utilities/sizing';

export const CheckedIcon: React.FC<NativeSvgProps> = (props) => {
  const iconSize = iconSizing[props.size || 'sm'];
  const stroke = props.theme?.colors.white;

  return (
    <Svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
      <Path
        d="m3 12 6.002 5.998L21 6"
        stroke={stroke || '#FFF'}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const IndeterminateIcon: React.FC<NativeSvgProps> = (props) => {
  const iconSize = iconSizing[props.size || 'sm'];
  const stroke = props.theme?.colors.white;

  return (
    <Svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
      <Path
        d="M21.192 12.58 3 12.389"
        stroke={stroke || '#FFF'}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
