// @imports
import React, { forwardRef } from 'react';

import type { DividerProps } from './divider.types';

import { width, height, compose } from '@oreo-ui/core/dist/styled/system';
import { dividerDefaultStyle } from '@oreo-ui/core/dist/styled/themed/divider';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/native';

// @exports
export const StyledDivider = styled(
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

export const Divider = forwardRef((props: DividerProps, ref) => {
  return <StyledDivider {...props} ref={ref} />;
});
