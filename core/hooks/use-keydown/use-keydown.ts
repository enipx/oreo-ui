// @imports
import { useEffect } from 'react';

type UseKeydownkOptionsType = {
  key: KeyboardEvent['key'];
  callback?: () => void;
  enabled?: boolean;
};

// @exports
export const useKeydown = (options: UseKeydownkOptionsType) => {
  const { key, callback, enabled = false } = options;

  const keydownHandler = (event: KeyboardEvent) => {
    if (event.key === key && enabled) {
      callback?.();
    }
  };

  useEffect(() => {
    if (!enabled) return;

    // bind the event listener
    window.addEventListener('keydown', keydownHandler);

    return () => {
      // unbind the event listener on clean up
      document.removeEventListener('keydown', keydownHandler);
    };
  }, [key, enabled]);

  return null;
};
