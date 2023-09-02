// @imports
import { createContext } from '@oreo-ui/core/dist/utils/context';

import type { FlexContextProps } from './flex.types';

// @exports
export const [FlexRowContextProvider, useFlexRowContext] =
  createContext<FlexContextProps>();
