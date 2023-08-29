// @imports
import { useEffect } from 'react';

import { domExistsHandler } from '@/helpers/dom';

export type UseOutsideElementClickOptionsType = {
  element?: (HTMLElement | null | undefined)[];
  callback?: () => void;
  enabled?: boolean;
};

// @exports
export const useOutsideElementClick = (
  options: UseOutsideElementClickOptionsType
) => {
  const { element, callback, enabled = false } = options;

  const mousedownHandler = (event: any) => {
    if (element && element.length > 0 && enabled) {
      if (element.every((item) => item && !item.contains(event.target))) {
        callback?.();
      }
    }
  };

  useEffect(() => {
    if (!enabled) return;

    // bind the event listener
    if (domExistsHandler()) {
      window.addEventListener('mousedown', mousedownHandler);
    }

    return () => {
      // unbind the event listener on clean up
      if (domExistsHandler()) {
        window.removeEventListener('mousedown', mousedownHandler);
      }
    };
  }, [element, enabled]);

  return null;
};
