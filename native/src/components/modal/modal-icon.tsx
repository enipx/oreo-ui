// @imports
import { Path, Svg } from 'react-native-svg';
import React from 'react';

import type { NativeSvgProps } from '@/core/styled/index.types';
import { iconSizing } from '@/core/theme/utilities/sizing';
import { useModeTheme } from '../../hooks';

export const CloseIcon: React.FC<NativeSvgProps> = (props) => {
  const { iconColor } = useModeTheme();

  const iconSize = iconSizing[props.size || 'sm'];
  const fill = iconColor;

  return (
    <Svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
      <Path
        fill={props?.fill || fill || '#000'}
        d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
      />
    </Svg>
  );
};
