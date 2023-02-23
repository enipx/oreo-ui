// @imports
import type { ToastContextProps } from './toast.types';

import { createContext } from '@/core/utils/context';

// @exports
export const [ToastContextProvider, useToastContext] =
  createContext<ToastContextProps>();
