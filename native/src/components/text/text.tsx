// @imports
import type { TextProps } from './text.types';
import { styled, baseStyled } from '@/core/styled/native';

// @exports
export const Text = styled(
  baseStyled('Text', ['background', 'border', 'grid', 'position', 'shadow'])
)<TextProps>`
  text-transform: ${({ textTransform }) => textTransform || 'none'};
`;
