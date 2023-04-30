// @imports
import { isString } from '@/core/helpers/base';
import { Children, cloneElement } from 'react';

import { usePopoverContext } from './popover-context';
import type { PopoverTargetProps } from './popover.types';

// @exports

export const PopoverTarget = (props: PopoverTargetProps) => {
  const { children, trigger = 'click' } = props;

  const openOnHover = trigger === 'hover';

  const renderChildren = isString(children) ? (
    <span>{children}</span>
  ) : (
    children
  );

  const contextValue = usePopoverContext();

  return (
    <>
      {Children.map(renderChildren, (child, _index) => {
        if (!child) return null;

        return cloneElement(child as any, {
          ref: contextValue?.setReferenceElement as any,
          onClick: openOnHover ? undefined : contextValue?.toggleHandler,
          onMouseEnter: openOnHover ? contextValue?.openHandler : undefined,
          onMouseLeave: openOnHover ? contextValue?.closeHandler : undefined,
        });
      })}
    </>
  );
};
