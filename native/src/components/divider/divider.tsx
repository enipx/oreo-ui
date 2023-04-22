// @imports
import type { DividerProps } from './divider.types';

import { width, height, compose } from '@/core/styled/system';
import { dividerDefaultStyle } from '@/core/styled/themed/divider';
import { styled, baseStyled } from '@/core/styled/native';

// @exports
export const Divider = styled(
  baseStyled('View', [
    'color',
    'background',
    'border',
    'flexbox',
    'grid',
    'layout',
  ])
)<DividerProps>`
  ${(props) => dividerDefaultStyle({ ...props, type: 'native' } as any)}
  ${compose(width, height)}
`;
