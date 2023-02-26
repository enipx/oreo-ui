// @imports
import { useCallback, useState } from 'react';
import { usePopper } from 'react-popper';

import type { UseTooltipOptions } from './tooltip.types';

import { getTransitionClassName } from '@/core/styled/css/transitions';
import spacing from '@/core/theme/utilities/spacing';

// @exports
export const useTooltip = (options: UseTooltipOptions) => {
  const {
    referenceElement,
    popperElement,
    arrowElement,
    placement,
    opened: defaultOpened,
    openDelay,
    closeDelay,
  } = options;

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
      popperElement?.classList.remove(transitionClassName.active);
      popperElement?.classList.add(transitionClassName.inactive);
      setTimeout(() => {
        setOpened(false);
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
      setOpened(true);
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

  return {
    ...popper,
    opened,
    closeHandler,
    openHandler,
  };
};
