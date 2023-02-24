// @imports
import React, { useEffect, useMemo } from 'react';

import { Alert } from '../alert';
import { ToastContextProvider } from './toast-context';
import type { ToastProviderProps, ToastProps } from './toast.types';
import { useToastConfig } from './use-toast';

import { useTimeout } from '@/core/hooks/use-timeout';
import {
  getToastPositions,
  toastContainerDefaultStyle,
  toastBaseContainerDefaultStyle,
  toastDefaults,
} from '@/core/styled/themed/toast';
import { styled } from '@/core/styled/web';
import { View } from '../view';

// @exports
export const ToastContainer = styled(View)<ToastProviderProps>`
  ${(props) => toastContainerDefaultStyle({ ...props, type: 'native' } as any)}
`;

export const ToastBase = styled(View)<ToastProviderProps>`
  ${(props) =>
    toastBaseContainerDefaultStyle({ ...props, type: 'native' } as any)}
`;

export const Toast = (props: ToastProps) => {
  const {
    render,
    duration = toastDefaults.duration,
    disabledAutoHide,
    onHide,
    pos,
    ...otherProps
  } = props;

  const hideHandler = () => {
    onHide?.();
  };

  const { startTimer, clearTimer } = useTimeout(hideHandler, {
    delay: duration,
  });

  const timeoutHandler = () => {
    if (disabledAutoHide) {
      clearTimer();
      return;
    }
    startTimer();
  };

  useEffect(() => {
    timeoutHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ToastBase pos={pos}>
      {render || <Alert onClose={hideHandler} {...otherProps} />}
    </ToastBase>
  );
};

export const ToastProvider = (props: ToastProviderProps) => {
  const { children } = props;

  const { toasts, show, hide, hideAll } = useToastConfig();

  const contextValue = useMemo(
    () => ({ show, hide, hideAll }),
    [hide, hideAll, show]
  );

  const positions = getToastPositions('native');

  return (
    <ToastContextProvider value={contextValue}>
      {children}

      <>
        {positions.map((containerPosition, _index) => {
          const filteredToast = toasts.filter(
            (toast) => containerPosition === toast?.pos
          );

          const key = `toast-container-${_index}`;

          if (filteredToast.length === 0) {
            return null;
          }

          return (
            <ToastContainer key={key} pos={containerPosition as any}>
              {filteredToast.map((toast) => {
                const { id, onHide, ...otherProps } = toast;

                // return null;

                return (
                  <Toast
                    key={id}
                    onHide={() => {
                      hide(id);
                      onHide?.();
                    }}
                    {...(otherProps as any)}
                  />
                );
              })}
            </ToastContainer>
          );
        })}
      </>
    </ToastContextProvider>
  );
};
