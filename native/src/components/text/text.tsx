// @imports
import type { TextProps } from './text.types';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/native';
import { baseColor } from '@oreo-ui/core/dist/styled/themed/base';

import { typography, color } from '@oreo-ui/core/dist/styled/system';
import { textDefaultStyle } from '@oreo-ui/core/dist/styled/themed/text';

import React, { forwardRef } from 'react';

// @exports
export const StyledText = styled(
  baseStyled('Text', ['background', 'border', 'grid', 'position', 'shadow'])
)<TextProps>`
  ${(props) => textDefaultStyle({ ...props, packageType: 'native' } as any)}
  color: ${baseColor};
  ${typography}
  ${color}
`;

export const Text = forwardRef((props: TextProps, ref) => {
  return <StyledText {...props} ref={ref} />;
});
