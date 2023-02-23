// @imports
import { useEffect, useMemo } from 'react';

import { Alert } from '../alert';
import { Portal } from '../portal';
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
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const ToastContainer = styled(baseStyled('div'))<ToastProviderProps>`
  ${(props) => toastContainerDefaultStyle({ ...props } as any)}
`;

export const ToastBase = styled(baseStyled('div'))<ToastProviderProps>`
  ${(props) => toastBaseContainerDefaultStyle({ ...props } as any)}
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

  const contextValue = useMemo(() => ({ show, hide, hideAll }), []);

  const positions = getToastPositions();

  return (
    <ToastContextProvider value={contextValue}>
      {children}

      <Portal>
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
              {filteredToast.map((toast, _index) => {
                const { id, onHide, ...otherProps } = toast;

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
      </Portal>
    </ToastContextProvider>
  );
};
