// @imports
import { Path, Svg } from 'react-native-svg';
import React from 'react';

import type { NativeSvgProps } from '@oreo-ui/core/dist/styled/index.types';
import { iconSizing } from '@oreo-ui/core/dist/theme/utilities/sizing';
import { useModeTheme } from '../../hooks';

export const CloseIcon: React.FC<NativeSvgProps> = (props) => {
  const { iconColor } = useModeTheme();

  const iconSize = iconSizing[props.size || 'sm'];
  const stroke = iconColor;

  return (
    <Svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
      <Path
        stroke={props?.stroke || stroke || '#000'}
        d="m7.145 7.012 9.706 9.706M16.95 6.913l-9.9 9.9"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
