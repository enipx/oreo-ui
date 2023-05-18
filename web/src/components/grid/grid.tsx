// @imports
import { gridDefaultStyle } from '@/core/styled/themed/grid';
import { styled } from '@/core/styled/web';

import { View } from '@components/view';

import type { GridProps } from './grid.types';

// @exports
export const StyledGrid = styled(View)<GridProps>`
  ${(props) => gridDefaultStyle({ ...props } as any)}
`;

export const Grid = (props: GridProps) => {
  return <StyledGrid {...props} />;
};

Grid.Item = View;
