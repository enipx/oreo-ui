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
import { forwardRef } from 'react';

// @exports
export const StyledTCaption = styled(baseStyled('caption'))<TableCaptionProps>`
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

export const TableContainer = forwardRef((props: TableContainerProps, ref) => {
  return <StyledTableContainer {...props} ref={ref} />;
});

export const Thead = forwardRef((props: TheadProps, ref) => {
  return <StyledThead {...props} ref={ref} />;
});

export const Tbody = forwardRef((props: TbodyProps, ref) => {
  return <StyledTbody {...props} ref={ref} />;
});

export const Tfoot = forwardRef((props: TfootProps, ref) => {
  return <StyledTfoot {...props} ref={ref} />;
});

export const Th = forwardRef((props: ThProps, ref) => {
  return <StyledTh {...props} ref={ref} />;
});

export const Tr = forwardRef((props: TrProps, ref) => {
  return <StyledTr {...props} ref={ref} />;
});

export const Td = forwardRef((props: TdProps, ref) => {
  return <StyledTd {...props} ref={ref} />;
});

export const TCaption = forwardRef((props: TableCaptionProps, ref) => {
  return (
    <StyledTCaption
      fontSize="sm"
      fontWeight="medium"
      p="4"
      {...(props as any)}
      ref={ref}
    />
  );
});
