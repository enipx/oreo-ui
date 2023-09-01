// @imports
import { isString } from '@oreo-ui/core/dist/helpers/base';
import { tooltipDefaultStyle } from '@oreo-ui/core/dist/styled/themed/tooltip';
import { styled } from '@oreo-ui/core/dist/styled/web';
import { useState, Children, cloneElement, SetStateAction } from 'react';

import { usePopover } from '@components/popover/use-popover';
import { View } from '@components/view';

import { Portal } from '../portal';
import type { TooltipProps } from './tooltip.types';

// @exports
export const StyledTooltip = styled(View)<TooltipProps>`
  ${(props) => tooltipDefaultStyle({ ...props } as any)}
`;

export const Tooltip = (props: TooltipProps) => {
  const { children, placement, label, withArrow, ...otherProps } = props;

  const [referenceElement, setReferenceEl] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperEl] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowEl] = useState<HTMLElement | null>(null);

  const { styles, attributes, opened, openHandler, closeHandler } = usePopover({
    referenceElement,
    popperElement,
    arrowElement,
    placement,
    ...otherProps,
  });

  const renderChildren = isString(children) ? (
    <span>{children}</span>
  ) : (
    children
  );

  return (
    <div>
      {Children.map(renderChildren, (child, _index) => {
        if (!child) return null;

        return cloneElement(child as any, {
          ref: (ref: SetStateAction<HTMLElement | null>) => setReferenceEl(ref),
          onMouseEnter: openHandler,
          onMouseLeave: closeHandler,
        });
      })}

      <Portal>
        <StyledTooltip
          style={styles.popper}
          data-show={opened}
          ref={setPopperEl as any}
          role="tooltip"
          {...attributes.popper}
          {...otherProps}>
          <p>{label}</p>

          {withArrow ? (
            <span
              ref={setArrowEl as any}
              style={styles.arrow}
              {...attributes.arrow}
              className="arrow"
            />
          ) : null}
        </StyledTooltip>
      </Portal>
    </div>
  );
};
