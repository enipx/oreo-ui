// @imports
import { G, Path, Svg } from 'react-native-svg';
import React from 'react';

import type { NativeSvgProps } from '@/core/styled/index.types';
import { iconSizing } from '@/core/theme/utilities/sizing';

export const ShowPasswordIcon: React.FC<NativeSvgProps> = (props) => {
  const iconSize = iconSizing[props.size || 'sm'];
  const stroke = props.theme?.colors.gray[500];

  return (
    <Svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
      <G
        clipRule="evenodd"
        stroke={stroke || '#000'}
        strokeWidth={props.strokeWidth || 1.5}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M15.161 12.053a3.162 3.162 0 1 1-6.323-.001 3.162 3.162 0 0 1 6.323.001Z" />
        <Path d="M11.998 19.355c3.808 0 7.291-2.738 9.252-7.302-1.961-4.564-5.444-7.302-9.252-7.302h.004c-3.808 0-7.291 2.738-9.252 7.302 1.961 4.564 5.444 7.302 9.252 7.302h-.004Z" />
      </G>
    </Svg>
  );
};

export const HidePasswordIcon: React.FC<NativeSvgProps> = (props) => {
  const iconSize = iconSizing[props.size || 'sm'];
  const stroke = props.theme?.colors.gray[500];

  return (
    <Svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
      <G
        clipRule="evenodd"
        stroke={stroke || '#000'}
        strokeWidth={props.strokeWidth || 1.5}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M9.76 14.367a3.123 3.123 0 0 1-.924-2.23A3.16 3.16 0 0 1 12 8.973c.867 0 1.665.35 2.23.925M15.105 12.699a3.158 3.158 0 0 1-2.537 2.542" />
        <Path d="M6.655 17.472c-1.587-1.246-2.931-3.066-3.905-5.335.984-2.279 2.337-4.109 3.934-5.365C8.27 5.516 10.1 4.834 11.999 4.834c1.91 0 3.74.692 5.336 1.957M19.448 8.99a15.359 15.359 0 0 1 1.802 3.147c-1.968 4.557-5.444 7.302-9.25 7.302a7.98 7.98 0 0 1-2.532-.413M19.887 4.25 4.113 20.024" />
      </G>
    </Svg>
  );
};
