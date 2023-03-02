// @imports
import type { GridContextProps } from './grid.types';

import { createContext } from '@/core/utils/context';

// @exports
export const [GridContextProvider, useGridContext] =
  createContext<GridContextProps>();
