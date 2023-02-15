// @imports
import { useEffect, useState } from 'react';

import type { useToastProps } from './toast.types';

import { mergedObjectsHandler } from '@/core/helpers/base';
import { useTimeout } from '@/core/hooks/use-timeout';

const globalOptions: useToastProps = {
  position: 'bottom',
  duration: 2000,
};

// @exports
export const useToast = (defaultOptions: useToastProps | void) => {
  const [isShowned, setIsShowned] = useState(false);

  const [options, setOptions] = useState<useToastProps>(
    mergedObjectsHandler(globalOptions, defaultOptions) as useToastProps
  );

  const hide = () => {
    // .. hide current visible toast
    setIsShowned(false);
    options.onHide?.();
  };

  // NOTE: Had to move this here because of HOISTING
  const { startTimer, clearTimer } = useTimeout(hide, {
    delay: options.duration,
  });

  const hideAll = () => {
    // .. hide all current visible toast
  };

  const show = (defaultOptions: useToastProps | void) => {
    console.log('show');
    // .. show current visible toast
    const newOptions = mergedObjectsHandler(
      options,
      defaultOptions
    ) as useToastProps;

    setOptions(newOptions);

    setIsShowned(true);

    newOptions.onShow?.();
  };

  const timeoutHandler = () => {
    if (isShowned) {
      if (options.disabledAutoHide) {
        clearTimer();
        return;
      }

      startTimer();
    }
  };

  useEffect(() => {
    timeoutHandler();
  }, [isShowned, options]);

  return { hide, hideAll, show, isShowned, options };
};
