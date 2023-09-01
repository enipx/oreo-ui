// @imports

import { allStyleWithoutSize } from '@oreo-ui/core/dist/styled/system';
import { dividerDefaultStyle } from '@oreo-ui/core/dist/styled/themed/divider';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/web';
import { componentDefaultStyle } from '@oreo-ui/core/dist/styled/themed/base';

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
  ${allStyleWithoutSize()}
`;

export const Divider = forwardRef((props: DividerProps, ref) => {
  return <StyledDivider {...props} ref={ref} />;
});
