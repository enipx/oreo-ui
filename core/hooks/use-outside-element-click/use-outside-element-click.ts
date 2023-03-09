// @imports
import { useEffect } from 'react';

type UseOutsideElementClickOptionsType = {
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
    window.addEventListener('mousedown', mousedownHandler);

    return () => {
      // unbind the event listener on clean up
      document.removeEventListener('mousedown', mousedownHandler);
    };
  }, [element, enabled]);

  return null;
};
