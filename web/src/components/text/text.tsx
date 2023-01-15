// @imports
import type { TextProps } from './text.types';

import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const Text = styled(
  baseStyled('p', ['background', 'border', 'grid', 'position', 'shadow'])
)<TextProps>`
  text-transform: ${({ textTransform }) => textTransform || 'none'};
`;
