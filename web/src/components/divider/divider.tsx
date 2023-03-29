// @imports
import type { DividerProps } from './divider.types';

import { layout } from '@/core/styled/system';
import { dividerDefaultStyle } from '@/core/styled/themed/divider';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const Divider = styled(
  baseStyled('hr', [
    'color',
    'background',
    'border',
    'flexbox',
    'grid',
    'layout',
  ])
)<DividerProps>`
  ${(props) => dividerDefaultStyle({ ...props } as any)}
  ${layout}
`;
