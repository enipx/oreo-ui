// @imports

import { width, height, compose } from '@/core/styled/system';
import { dividerDefaultStyle } from '@/core/styled/themed/divider';
import { styled, baseStyled } from '@/core/styled/web';
import { componentDefaultStyle } from '@/core/styled/themed/base';

import type { DividerProps } from './divider.types';
import { forwardRef } from 'react';

// @exports
export const StyledDivider = styled(
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
  ${(props) => componentDefaultStyle({ ...props } as any)}
  ${compose(width, height)}
`;

export const Divider = forwardRef((props: DividerProps, ref) => {
  return <StyledDivider {...props} ref={ref} />;
});
