// @imports
import { useState } from 'react';

import { useToastContext } from './toast-context';
import type {
  ToastStateProps,
  ToastContextProps,
  useToastProps,
} from './toast.types';

import { generateUIDHandler } from '@/core/helpers/base';
import { toastDefaults } from '@/core/styled/themed/toast';

// @exports
export const useToastConfig = () => {
  const [toasts, setToasts] = useState<ToastStateProps[]>([]);

  const show: ToastContextProps['show'] = (content) => {
    setToasts((prevToasts) => {
      const id = `toast-${prevToasts.length + 1}-${generateUIDHandler()}`;

      return [
        ...prevToasts,
        {
          ...content,
          id,
          pos: content.pos || (toastDefaults.position as any),
        },
      ];
    });
  };

  const hide: ToastContextProps['hide'] = (id) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  };

  const hideAll: ToastContextProps['hideAll'] = () => {
    setToasts([]);
  };

  return { hide, hideAll, show, toasts };
};

export const useToast = useToastContext as useToastProps;
