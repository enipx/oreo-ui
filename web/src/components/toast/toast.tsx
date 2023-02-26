// @imports
import { useEffect, useMemo, useRef } from 'react';

import { Alert } from '../alert';
import { Portal } from '../portal';
import { ToastContextProvider } from './toast-context';
import type { ToastProviderProps, ToastStateProps } from './toast.types';
import { useToastConfig } from './use-toast';

import { useTimeout } from '@/core/hooks/use-timeout';
import {
  getTransitionClassName,
  transitionDefaults,
} from '@/core/styled/css/transitions';
import {
  getToastPositions,
  toastContainerDefaultStyle,
  toastBaseContainerDefaultStyle,
  toastDefaults,
  getToastTransition,
} from '@/core/styled/themed/toast';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const ToastContainer = styled(baseStyled('ul'))<ToastProviderProps>`
  ${(props) => toastContainerDefaultStyle({ ...props } as any)}
`;

export const ToastBase = styled(baseStyled('li'))<ToastProviderProps>`
  ${(props) => toastBaseContainerDefaultStyle({ ...props } as any)}
`;

export const Toast = (props: ToastStateProps) => {
  const {
    render,
    duration = toastDefaults.duration,
    disabledAutoHide,
    onHide,
    pos,
    id,
    ...otherProps
  } = props;

  const toastRef = useRef<HTMLDivElement>(null);

  const toastTransition = getToastTransition(pos);

  const transitionClassName = getTransitionClassName(toastTransition);

  const hideHandler = () => {
    if (transitionClassName.inactive) {
      toastRef.current?.classList.remove(
        transitionClassName.active,
        'fadeTopSmallIn'
      );
      toastRef.current?.classList.add(transitionClassName.inactive);

      setTimeout(() => {
        onHide?.();
      }, transitionDefaults.durationTimeout);

      return;
    }

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
    <ToastBase
      ref={toastRef}
      pos={pos}
      className={transitionClassName.active}
      render={render}>
      {render || (
        <Alert onClose={hideHandler} {...otherProps} transition="none" />
      )}
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
            <ToastContainer
              role="region"
              key={key}
              pos={containerPosition as any}>
              {filteredToast.map((toast, _index) => {
                const { id, onHide, ...otherProps } = toast;

                return (
                  <Toast
                    key={id}
                    onHide={() => {
                      hide(id);
                      onHide?.();
                    }}
                    id={id}
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
