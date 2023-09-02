// @imports

import { useKeydown } from '@oreo-ui/core/dist/hooks/use-keydown';
import { useOutsideElementClick } from '@oreo-ui/core/dist/hooks/use-outside-element-click';
import { getTransitionClassName } from '@oreo-ui/core/dist/styled/css/transitions';
import spacing from '@oreo-ui/core/dist/theme/utilities/spacing';
import { useCallback, useState } from 'react';
import { usePopper } from 'react-popper';

import type { UsePopoverOptions } from './popover.types';

// @exports
export const usePopover = (options: UsePopoverOptions) => {
  const {
    referenceElement,
    popperElement,
    arrowElement,
    placement,
    opened: defaultOpened,
    openDelay,
    closeDelay,
    closeOnClickOutside = true,
    closeOnEscape,
    onClose,
    onOpen,
  } = options;

  const isControlled = defaultOpened !== undefined;

  const transitionClassName = getTransitionClassName('fade');

  const [opened, setOpened] = useState(defaultOpened || false);

  const popper = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      { name: 'offset', options: { offset: [0, spacing[1.5]] } },
    ],
  });

  const closeHandler = useCallback(() => {
    const init = () => {
      if (isControlled) {
        onClose?.();
        return;
      }

      popperElement?.classList.remove(transitionClassName.active);
      popperElement?.classList.add(transitionClassName.inactive);
      setTimeout(() => {
        setOpened(false);
        onClose?.();
      }, 200);
    };

    if (closeDelay) {
      setTimeout(() => {
        init();
      }, closeDelay);

      return;
    }

    init();
  }, [popperElement]);

  const openHandler = useCallback(() => {
    const init = () => {
      if (isControlled) {
        onOpen?.();
        return;
      }

      setOpened(true);
      onOpen?.();
      popperElement?.classList.remove(transitionClassName.inactive);
      popperElement?.classList.add(transitionClassName.active);
    };

    if (openDelay) {
      setTimeout(() => {
        init();
      }, openDelay);

      return;
    }

    init();
  }, [popperElement]);

  const toggleHandler = useCallback(() => {
    if (opened) {
      closeHandler();
    } else {
      openHandler();
    }
  }, [opened]);

  useOutsideElementClick({
    element: [popperElement, referenceElement],
    callback: closeHandler,
    enabled: opened && closeOnClickOutside,
  });

  useKeydown({
    key: 'Escape',
    callback: closeHandler,
    enabled: closeOnEscape,
  });

  return {
    ...popper,
    opened,
    closeHandler,
    openHandler,
    toggleHandler,
  };
};
