// @imports
import { useCallback, useState } from 'react';
import { usePopper } from 'react-popper';

import type { UsePopverOptions } from './popover.types';

import { useKeydown } from '@/core/hooks/use-keydown';
import { useOutsideElementClick } from '@/core/hooks/use-outside-element-click';
import { getTransitionClassName } from '@/core/styled/css/transitions';
import spacing from '@/core/theme/utilities/spacing';

// @exports
export const usePopover = (options: UsePopverOptions) => {
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
    element: referenceElement,
    callback: closeHandler,
    enabled: closeOnClickOutside,
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