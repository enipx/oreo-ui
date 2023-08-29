// @imports
import { useCallback, useEffect, useRef } from 'react';

import type { UseTimeoutOptionsType } from './use-timeout.type';

// @exports
export const useTimeout = (
  callback: () => void,
  options?: UseTimeoutOptionsType
) => {
  const timer = useRef<NodeJS.Timeout | undefined>(undefined);

  const isActive = timer !== undefined;

  const startOnMount = options?.startOnMount || false;

  const delay = options?.delay;

  const clear = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = undefined;
    }
  }, []);

  const start = useCallback(() => {
    // clear current timeout
    clear();

    // don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay) {
      return;
    }

    // initialize new timeout
    timer.current = setTimeout(() => {
      callback();
      clear();
    }, delay);
  }, [delay, callback]);

  useEffect(() => {
    if (startOnMount) {
      start();
    }
  }, [startOnMount]);

  return { startTimer: start, clearTimer: clear, isActive };
};
