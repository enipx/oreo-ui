// @imports
import React, { useMemo } from 'react';

import { Modal } from './modal';
import { ModalContextProvider } from './modal-context';
import type { ModalProviderProps } from './modal.types';
import { useModalConfig } from './use-modal';

// @exports

export const ModalProvider = (props: ModalProviderProps) => {
  const { children } = props;

  const { modal, show, hide } = useModalConfig();

  const contextValue = useMemo(() => ({ show, hide }), [hide, show]);

  const hideHandler = () => {
    hide?.();
    modal?.onClose?.();
  };

  return (
    <ModalContextProvider value={contextValue}>
      {children}

      <Modal isOpen={!!modal} {...modal} onClose={hideHandler} />
    </ModalContextProvider>
  );
};
