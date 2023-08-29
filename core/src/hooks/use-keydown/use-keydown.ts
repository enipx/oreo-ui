// @imports
import { useEffect, useCallback } from 'react';

import { domExistsHandler } from '@/core/helpers/dom';

type UseKeydownkOptionsType = {
  key: KeyboardEvent['key'];
  callback?: () => void;
  enabled?: boolean;
};

// @exports
export const useKeydown = (options: UseKeydownkOptionsType) => {
  const { key, callback, enabled = false } = options;

  const keydownHandler = useCallback(
    (event: KeyboardEvent) => {
      let shortcut = '';
      let specialKey = '';

      switch (true) {
        case key.split('+').length > 1:
          [specialKey, shortcut] = key.split('+');
          break;

        case key.split('+').length === 1:
          specialKey = '';
          shortcut = key;
          break;

        default:
          return;
      }

      const eventCallback = () => {
        event.preventDefault();
        callback?.();
      };

      // shift key
      if (specialKey === 'shift' && event.shiftKey) {
        if (event.key.toLowerCase() === shortcut.toLowerCase()) {
          eventCallback();
          return;
        }
      }

      // control key
      if (specialKey === 'ctrl' && event.ctrlKey) {
        if (event.key.toLowerCase() === shortcut.toLowerCase()) {
          eventCallback();
          return;
        }
      }

      if (event.key === key && enabled) {
        eventCallback();
      }
    },
    [callback]
  );

  useEffect(() => {
    if (!enabled) return;

    // bind the event listener
    if (domExistsHandler()) {
      window.addEventListener('keydown', keydownHandler);
    }

    return () => {
      // unbind the event listener on clean up
      if (domExistsHandler()) {
        window.removeEventListener('keydown', keydownHandler);
      }
    };
  }, [key, enabled, callback]);

  return null;
};
