// @imports
import { createContext } from '@oreo-ui/core/dist/utils/context';

import type { ModalContextProps } from './modal.types';

// @exports
export const [ModalContextProvider, useModalContext] =
  createContext<ModalContextProps>();
