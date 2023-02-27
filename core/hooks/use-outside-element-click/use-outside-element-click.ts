// @imports
import { useEffect } from 'react';

type UseOutsideElementClickOptionsType = {
  element?: HTMLElement | null;
  callback?: () => void;
  enabled?: boolean;
};

// @exports
export const useOutsideElementClick = (
  options: UseOutsideElementClickOptionsType
) => {
  const { element, callback, enabled = false } = options;

  const mousedownHandler = (event: any) => {
    if (element && !element.contains(event.target)) {
      callback?.();
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
