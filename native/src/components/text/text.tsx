// @imports
import type { TextProps } from './text.types';
import { styled, baseStyled } from '@/core/styled/native';
import { baseColor } from '@/core/styled/themed/base';

import { typography, color } from '@/core/styled/system';
import { textDefaultStyle } from '@/core/styled/themed/text';

// @exports
export const Text = styled(
  baseStyled('Text', ['background', 'border', 'grid', 'position', 'shadow'])
)<TextProps>`
  ${(props) => textDefaultStyle({ ...props, type: 'native' } as any)}
  color: ${baseColor};
  ${typography}
  ${color}
`;
