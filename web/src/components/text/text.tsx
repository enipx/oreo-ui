// @imports
import type { TextProps } from './text.types';

import { textDefaultStyle } from '@/core/styled/themed/text';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const Text = styled(
  baseStyled('p', ['background', 'border', 'grid', 'position', 'shadow'])
)<TextProps>`
  ${(props) => textDefaultStyle({ ...props } as any)}
`;
