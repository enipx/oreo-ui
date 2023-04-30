// @imports
import { tooltipDefaultStyle } from '@/core/styled/themed/tooltip';
import { styled } from '@/core/styled/web';
import { useState } from 'react';

import { View } from '@components/view';

import { PopoverContent } from './popover-content';
import { PopoverContextProvider } from './popover-context';
import { PopoverTarget } from './popover-target';
import type { PopoverProps } from './popover.types';
import { usePopover } from './use-popover';

// @exports
export const StyledTooltip = styled(View)<PopoverProps>`
  ${(props) => tooltipDefaultStyle({ ...props } as any)}
`;

export const Popover = (props: PopoverProps) => {
  const { children, placement = 'bottom', withArrow, ...otherProps } = props;

  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const popoverOptions = usePopover({
    referenceElement,
    popperElement,
    arrowElement,
    placement,
    ...otherProps,
  });

  const contextValue = {
    ...props,
    ...popoverOptions,
    setReferenceElement,
    setPopperElement,
    setArrowElement,
  };

  return (
    <PopoverContextProvider value={contextValue}>
      {children}
    </PopoverContextProvider>
  );
};

Popover.Target = PopoverTarget;
Popover.Content = PopoverContent;
