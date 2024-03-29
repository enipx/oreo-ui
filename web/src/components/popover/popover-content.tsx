// @imports
import { popoverContentDefaultStyle } from '@oreo-ui/core/dist/styled/themed/popover';
import { styled } from '@oreo-ui/core/dist/styled/web';

import { View } from '@components/view';

import { usePopoverContext } from './popover-context';
import type { PopoverContentProps } from './popover.types';
import { componentDefaultStyle } from '@oreo-ui/core/dist/styled/themed/base';
import { allStyle } from '@oreo-ui/core/dist/styled/system';

// @exports
export const StyledPopover = styled(View)<PopoverContentProps>`
  ${(props) => popoverContentDefaultStyle({ ...props } as any)}
  ${(props) => componentDefaultStyle({ ...props } as any)}
  ${allStyle()}
`;

export const PopoverContent = (props: PopoverContentProps) => {
  const { children, ...otherProps } = props;

  const contextValue = usePopoverContext();

  const withArrow = contextValue?.withArrow;

  return (
    <StyledPopover
      style={contextValue?.styles.popper}
      data-show={contextValue?.opened}
      ref={contextValue?.setPopperElement as any}
      role="tooltip"
      {...contextValue?.attributes?.popper}
      {...(otherProps as any)}>
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
