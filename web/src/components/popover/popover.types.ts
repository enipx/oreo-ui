import type {
  PopoverThemedDefaultProps,
  PopoverContentThemedStyledProps,
} from '@oreo-ui/core/dist/styled/components.types';
import type { usePopper } from 'react-popper';

export interface PopoverProps extends PopoverThemedDefaultProps {}

export interface UsePopoverOptions extends PopoverProps {
  referenceElement?: HTMLElement | null;
  popperElement?: HTMLElement | null;
  arrowElement?: HTMLElement | null;
  placement?: PopoverProps['placement'];
  opened?: boolean;
}

export interface PopoverTargetProps {
  children?: JSX.Element;
  trigger?: 'hover' | 'click';
}

export interface PopoverContentProps extends PopoverContentThemedStyledProps {
  children?: JSX.Element;
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
