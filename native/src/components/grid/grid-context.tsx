// @imports
import type { GridContextProps } from './grid.types';

import { createContext } from '@oreo-ui/core/dist/utils/context';

// @exports
export const [GridContextProvider, useGridContext] =
  createContext<GridContextProps>();
