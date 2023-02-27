// @imports
import { View } from '@components/view';

import { usePopoverContext } from './popover-context';
import type { PopoverContentProps } from './popover.types';

import { popoverContentDefaultStyle } from '@/core/styled/themed/popover';
import { styled } from '@/core/styled/web';

// @exports
export const StyledPopover = styled(View)<PopoverContentProps>`
  ${(props) => popoverContentDefaultStyle({ ...props } as any)}
`;

export const PopoverContent = (props: PopoverContentProps) => {
  const { children } = props;

  const contextValue = usePopoverContext();

  const withArrow = contextValue?.withArrow;

  return (
    <StyledPopover
      style={contextValue?.styles.popper}
      data-show={contextValue?.opened}
      ref={contextValue?.setPopperElement as any}
      role="tooltip"
      {...contextValue?.attributes?.popper}>
      {children}

      {withArrow ? (
        <span
          ref={contextValue.setArrowElement as any}
          style={contextValue?.styles.arrow}
          {...contextValue?.attributes.arrow}
          className="arrow"
        />
      ) : null}
    </StyledPopover>
  );
};