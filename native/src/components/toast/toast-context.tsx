// @imports
import type { ToastContextProps } from './toast.types';

import { createContext } from '@oreo-ui/core/dist/utils/context';

// @exports
export const [ToastContextProvider, useToastContext] =
  createContext<ToastContextProps>();
