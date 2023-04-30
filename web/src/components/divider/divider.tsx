// @imports

import { width, height, compose } from '@/core/styled/system';
import { dividerDefaultStyle } from '@/core/styled/themed/divider';
import { styled, baseStyled } from '@/core/styled/web';

import type { DividerProps } from './divider.types';

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
  ${compose(width, height)}
`;
