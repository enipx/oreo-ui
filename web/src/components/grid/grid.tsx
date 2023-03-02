// @imports
import { View } from '@components/view';

import type { GridProps } from './grid.types';

import { gridDefaultStyle } from '@/core/styled/themed/grid';
import { styled } from '@/core/styled/web';

// @exports
export const StyledGrid = styled(View)<GridProps>`
  ${(props) => gridDefaultStyle({ ...props } as any)}
`;

export const Grid = (props: GridProps) => {
  const { children, ...otherProps } = props;
  return <StyledGrid {...otherProps}>{children}</StyledGrid>;
};

Grid.Item = View;
