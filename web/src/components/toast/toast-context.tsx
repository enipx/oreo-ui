// @imports
import { createContext } from '@oreo-ui/core/dist/utils/context';

import type { ToastContextProps } from './toast.types';

// @exports
export const [ToastContextProvider, useToastContext] =
  createContext<ToastContextProps>();
