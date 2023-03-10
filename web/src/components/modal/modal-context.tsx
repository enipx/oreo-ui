// @imports
import type { ModalContextProps } from './modal.types';

import { createContext } from '@/core/utils/context';

// @exports
export const [ModalContextProvider, useModalContext] =
  createContext<ModalContextProps>();
