// @imports

import { tableDefaultStyle } from '@oreo-ui/core/dist/styled/themed/table';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/web';

import {
  TableContainer,
  Thead,
  Tbody,
  Tfoot,
  Th,
  Tr,
  Td,
  TCaption,
} from './table.fragments';
import type { TableProps } from './table.types';

// @exports
export const StyledTable = styled(baseStyled('table'))`
  ${(props) => tableDefaultStyle({ ...props } as any)}
`;

export const Table = (props: TableProps) => {
  const { children, ...otherProps } = props;

  return <StyledTable {...otherProps}>{children}</StyledTable>;
};

Table.Container = TableContainer;
Table.Head = Thead;
Table.Body = Tbody;
Table.Foot = Tfoot;
Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;
Table.Caption = TCaption;
