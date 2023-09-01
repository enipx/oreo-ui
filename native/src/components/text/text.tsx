// @imports
import type { TextProps } from './text.types';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/native';
import { baseColor } from '@oreo-ui/core/dist/styled/themed/base';

import { typography, color } from '@oreo-ui/core/dist/styled/system';
import { textDefaultStyle } from '@oreo-ui/core/dist/styled/themed/text';

// @exports
export const Text = styled(
  baseStyled('Text', ['background', 'border', 'grid', 'position', 'shadow'])
)<TextProps>`
  ${(props) => textDefaultStyle({ ...props, packageType: 'native' } as any)}
  color: ${baseColor};
  ${typography}
  ${color}
`;
