import type { usePopper } from 'react-popper';

import type { PopoverThemedDefaultProps } from '@/core/styled/components.types';

export interface PopoverProps extends PopoverThemedDefaultProps {}

export interface UsePopverOptions extends PopoverProps {
  referenceElement?: HTMLElement | null;
  popperElement?: HTMLElement | null;
  arrowElement?: HTMLElement | null;
  placement?: PopoverProps['placement'];
  opened?: boolean;
}

export interface PopoverTargetProps {
  children?: React.ReactNode;
  trigger?: 'hover' | 'click';
}

export interface PopoverContentProps {
  children?: React.ReactNode;
}

export interface PopoverContextProps
  extends PopoverProps,
    ReturnType<typeof usePopper> {
  setReferenceElement?: React.Dispatch<
    React.SetStateAction<HTMLElement | null>
  >;
  setPopperElement?: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  setArrowElement?: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  opened?: boolean;
  closeHandler?: () => void;
  openHandler?: () => void;
  toggleHandler?: () => void;
}