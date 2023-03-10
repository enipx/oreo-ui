// @imports
import { useState } from 'react';

import { useModalContext } from './modal-context';
import type {
  ModalProps,
  ModalContextProps,
  useModalProps,
} from './modal.types';

// @exports
export const useModalConfig = () => {
  const [modal, setModal] = useState<ModalProps | undefined>(undefined);

  const show: ModalContextProps['show'] = (content) => {
    setModal(content);
  };

  const hide: ModalContextProps['hide'] = () => {
    setModal(undefined);
  };

  return { hide, show, modal };
};

export const useModal = useModalContext as useModalProps;
