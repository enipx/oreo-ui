// @imports
import React from 'react';
import { Path, Svg } from 'react-native-svg';

import type { NativeSvgProps } from '@oreo-ui/core/dist/styled/index.types';
import { iconSizing } from '@oreo-ui/core/dist/theme/utilities/sizing';
import { CloseIcon } from '../modal/modal-icon';

export const InfoIcon: React.FC<NativeSvgProps> = (props) => {
  const { size } = props;
  const iconSize = iconSizing[size || 'sm'];
  const fill = props.theme?.colors.gray[500];

  return (
    <Svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22c5.523 0 10-4.476 10-10 0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.524 4.477 10 10 10Zm-.005-8.494a.877.877 0 0 0 .875-.875V8.21a.877.877 0 0 0-.875-.875.877.877 0 0 0-.875.875v4.42c0 .482.393.875.875.875Zm0 1.423a.874.874 0 1 0 .01 1.75.876.876 0 0 0 .875-.875.878.878 0 0 0-.885-.875Z"
        fill={props.fill || fill || '#000'}
      />
    </Svg>
  );
};

export const SuccessIcon: React.FC<NativeSvgProps> = (props) => {
  const { size } = props;
  const iconSize = iconSizing[size || 'sm'];
  const fill = props.theme?.colors.gray[500];

  return (
    <Svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22c5.523 0 10-4.476 10-10 0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.524 4.477 10 10 10Zm-1.954-6.846a.944.944 0 0 0 .67.277.944.944 0 0 0 .67-.277l5.136-5.137a.947.947 0 0 0-1.338-1.34l-4.468 4.468-1.9-1.9a.946.946 0 1 0-1.338 1.34l2.568 2.569Z"
        fill={props.fill || fill || '#000'}
      />
    </Svg>
  );
};

export const WarningIcon: React.FC<NativeSvgProps> = (props) => {
  const { size } = props;
  const iconSize = iconSizing[size || 'sm'];
  const fill = props.theme?.colors.gray[500];

  return (
    <Svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.684 21.166c.014.002.026.002.039.002h.072l14.52-.002a2.808 2.808 0 0 0 1.956-.93 2.812 2.812 0 0 0 .725-2.041 2.872 2.872 0 0 0-.248-1.008L14.475 4.46a2.833 2.833 0 0 0-4.946-.009L2.208 17.276a2.833 2.833 0 0 0 2.476 3.89Zm7.315-12.02a.877.877 0 0 0-.875.875v2.828a.876.876 0 0 0 1.75 0v-2.828A.877.877 0 0 0 12 9.146Zm0 6.244a.877.877 0 0 0 0 1.755.879.879 0 0 0 .875-.886.873.873 0 0 0-.875-.869Z"
        fill={props.fill || fill || '#000'}
      />
    </Svg>
  );
};

export const DangerIcon = WarningIcon;

export { CloseIcon };
