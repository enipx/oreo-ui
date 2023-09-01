// @imports
import type { ModalContextProps } from './modal.types';

import { createContext } from '@oreo-ui/core/dist/utils/context';

// @exports
export const [ModalContextProvider, useModalContext] =
  createContext<ModalContextProps>();
