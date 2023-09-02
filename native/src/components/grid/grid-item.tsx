// @imports
import React from 'react';
import { View } from '../view';

import type { GridItemProps } from './grid.types';

import { gridItemDefaultStyle } from '@oreo-ui/core/dist/styled/themed/grid';
import { styled } from '@oreo-ui/core/dist/styled/web';

// @exports
export const StyledGridItem = styled(View)<GridItemProps>`
  ${(props) => gridItemDefaultStyle({ ...props, type: 'native' } as any)}
`;

export const GridItem = (props: GridItemProps) => {
  const { children, ...otherProps } = props;

  return <StyledGridItem {...otherProps}>{children}</StyledGridItem>;
};
