// @imports
import { createContext } from '@/core/utils/context';

import type { ModalContextProps } from './modal.types';

// @exports
export const [ModalContextProvider, useModalContext] =
  createContext<ModalContextProps>();
