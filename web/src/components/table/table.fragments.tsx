// @imports

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
import { componentDefaultStyle } from '@/core/styled/themed/base';

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

// @exports
export const StyledTcaption = styled(baseStyled('caption'))<TableCaptionProps>`
  ${(props) => tableCaptionDefaultStyle({ ...props } as any)}
  ${(props) => componentDefaultStyle({ ...props } as any)}
`;

export const StyledTableContainer = styled(
  baseStyled('div')
)<TableContainerProps>`
  ${(props) => tableContainerDefaultStyle({ ...props } as any)}
  ${(props) => componentDefaultStyle({ ...props } as any)}
  ${compose(layout, overflow, overflowX, overflowY, display)}
`;

export const StyledThead = styled(baseStyled('thead'))<TheadProps>`
  ${(props) => componentDefaultStyle({ ...props } as any)}
`;

export const StyledTbody = styled(baseStyled('tbody'))<TbodyProps>`
  ${(props) => componentDefaultStyle({ ...props } as any)}
`;

export const StyledTfoot = styled(baseStyled('tfoot'))<TfootProps>`
  ${(props) => componentDefaultStyle({ ...props } as any)}
`;

export const StyledTh = styled(baseStyled('th'))<ThProps>`
  ${(props) => componentDefaultStyle({ ...props } as any)}
`;

export const StyledTr = styled(baseStyled('tr'))<TrProps>`
  ${(props) => componentDefaultStyle({ ...props } as any)}
`;

export const StyledTd = styled(baseStyled('td'))<TdProps>`
  ${(props) => componentDefaultStyle({ ...props } as any)}
`;

export const TableContainer = (props: TableContainerProps) => {
  return <StyledTableContainer {...props} />;
};

export const Thead = (props: TheadProps) => {
  return <StyledThead {...props} />;
};

export const Tbody = (props: TbodyProps) => {
  return <StyledTbody {...props} />;
};

export const Tfoot = (props: TfootProps) => {
  return <StyledTfoot {...props} />;
};

export const Th = (props: ThProps) => {
  return <StyledTh {...props} />;
};

export const Tr = (props: TrProps) => {
  return <StyledTr {...props} />;
};

export const Td = (props: TdProps) => {
  return <StyledTd {...props} />;
};

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
