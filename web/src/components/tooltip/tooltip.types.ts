import type { TooltipThemedDefaultProps } from '@/core/styled/components.types';

export interface TooltipProps extends TooltipThemedDefaultProps {}

export interface UseTooltipOptions extends TooltipProps {
  referenceElement?: HTMLElement | null;
  popperElement?: HTMLElement | null;
  arrowElement?: HTMLElement | null;
  placement?: TooltipProps['placement'];
  opened?: boolean;
}
