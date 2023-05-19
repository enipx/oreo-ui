// @imports
import { createContext } from '@/core/utils/context';

import type { FlexContextProps } from './flex.types';

// @exports
export const [FlexRowContextProvider, useFlexRowContext] =
  createContext<FlexContextProps>();
