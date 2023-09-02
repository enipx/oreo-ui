// @imports
import React, { Children } from 'react';
import { View } from '../view';

import type { GridProps } from './grid.types';

import {
  gridDefaultStyle,
  getChildrenGridRows,
} from '@oreo-ui/core/dist/styled/themed/grid';
import { styled } from '@oreo-ui/core/dist/styled/web';
import { GridItem } from './grid-item';

// @exports
export const StyledGrid = styled(View)<GridProps>`
  ${(props) => gridDefaultStyle({ ...props, type: 'native' } as any)}
`;

export const Grid = (props: GridProps) => {
  const { children, ...otherProps } = props;

  const childrenArray = Children.toArray(children);

  const rows = getChildrenGridRows({
    data: childrenArray,
    columns: otherProps.columns,
  });

  if (rows && rows.length > 0) {
    return rows.map((row, _index) => {
      const key = `grid-row-${_index}`;

      return (
        <StyledGrid key={key}>
          <>
            {row.map((_rowItem, _rowIndex) => {
              const rowKey = `grid-row-${_rowIndex}`;

              const isFirstItem = _rowIndex === 0;
              const isLastItem = _rowIndex === row.length - 1;

              return (
                <GridItem
                  key={rowKey}
                  {...otherProps}
                  {...({ isFirstItem, isLastItem } as any)}>
                  <>{_rowItem}</>
                </GridItem>
              );
            })}
          </>
        </StyledGrid>
      );
    });
  }

  return null;
};
