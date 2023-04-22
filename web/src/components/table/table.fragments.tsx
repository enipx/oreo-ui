// @imports

import type {
  TableContainerProps,
  TheadProps,
  TbodyProps,
  TfootProps,
  TableCaptionProps,
  TdProps,
  ThProps,
  TrProps,
} from './table.types';

import {
  layout,
  overflowX,
  overflow,
  overflowY,
  display,
  compose,
} from '@/core/styled/system';
import {
  tableContainerDefaultStyle,
  tableCaptionDefaultStyle,
} from '@/core/styled/themed/table';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const StyledTcaption = styled(baseStyled('caption'))<TableCaptionProps>`
  ${(props) => tableCaptionDefaultStyle({ ...props } as any)}
`;

export const TableContainer = styled(baseStyled('div'))<TableContainerProps>`
  ${(props) => tableContainerDefaultStyle({ ...props } as any)}
  ${compose(layout, overflow, overflowX, overflowY, display)}
`;

export const Thead = styled(baseStyled('thead'))<TheadProps>``;

export const Tbody = styled(baseStyled('tbody'))<TbodyProps>``;

export const Tfoot = styled(baseStyled('tfoot'))<TfootProps>``;

export const Th = styled(baseStyled('th'))<ThProps>``;

export const Tr = styled(baseStyled('tr'))<TrProps>``;

export const Td = styled(baseStyled('td'))<TdProps>``;

export const Tcaption = (props: TableCaptionProps) => {
  return (
    <StyledTcaption
      fontSize="sm"
      fontWeight="medium"
      p="4"
      {...(props as any)}
    />
  );
};
