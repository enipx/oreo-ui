import type {
  TableThemedDefaultProps,
  TableHeadThemedDefaultProps,
  TableBodyThemedDefaultProps,
  TableFootThemedDefaultProps,
  ThThemedDefaultProps,
  TrThemedDefaultProps,
  TdThemedDefaultProps,
  TableCaptionThemedDefaultProps,
  TableContainerThemedDefaultProps,
} from '@/core/styled/components.types';

export interface TableProps extends TableThemedDefaultProps {}

export interface TableContainerProps extends TableContainerThemedDefaultProps {}

export interface TheadProps extends TableHeadThemedDefaultProps {}

export interface TbodyProps extends TableBodyThemedDefaultProps {}

export interface TfootProps extends TableFootThemedDefaultProps {}

export interface TrProps extends TrThemedDefaultProps {}

export interface ThProps extends ThThemedDefaultProps {}

export interface TdProps extends TdThemedDefaultProps {}

export interface TableCaptionProps extends TableCaptionThemedDefaultProps {}
