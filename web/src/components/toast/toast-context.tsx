// @imports
import { createContext } from '@/core/utils/context';

import type { ToastContextProps } from './toast.types';

// @exports
export const [ToastContextProvider, useToastContext] =
  createContext<ToastContextProps>();
