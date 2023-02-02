// @imports
import { useState } from 'react';

import type {
  UseDisclosureCallbackType,
  UseDisclosureInitialStateType,
} from './use-disclosure.type';

// @exports
export const useDisclosure = (
  initialState: UseDisclosureInitialStateType,
  callback?: UseDisclosureCallbackType
) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openHandler = () => {
    if (!isOpen) {
      setIsOpen(true);
      callback?.onOpen?.();
    }
  };

  const closeHandler = () => {
    if (isOpen) {
      setIsOpen(false);
      callback?.onClose?.();
    }
  };

  const toggleHandler = () => {
    if (isOpen) {
      closeHandler();
    }

    openHandler();
  };

  const updateHandler = (param: UseDisclosureInitialStateType) => {
    if (param !== isOpen) {
      setIsOpen(param);
    }
  };

  return [
    isOpen,
    {
      open: openHandler,
      close: closeHandler,
      toggle: toggleHandler,
      update: updateHandler,
    },
  ] as const;
};
