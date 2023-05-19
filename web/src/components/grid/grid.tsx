// @imports
import {
  gridDefaultStyle,
  webGridItemDefaultStyle,
} from '@/core/styled/themed/grid';
import { styled } from '@/core/styled/web';

import { View } from '@components/view';

import type { GridProps, GridItemProps } from './grid.types';

// @exports
export const StyledGrid = styled(View)<GridProps>`
  ${(props) => gridDefaultStyle({ ...props } as any)}
`;

export const StyledGridItem = styled(View)<GridItemProps>`
  ${(props) => webGridItemDefaultStyle({ ...props } as any)}
`;

export const Grid = (props: GridProps) => {
  return <StyledGrid {...props} />;
};

export const GridItem = (props: GridItemProps) => {
  return <StyledGridItem {...props} />;
};

Grid.Item = GridItem;
