// @imports
import type { PopoverContextProps } from './popover.types';

import { createContext } from '@/core/utils/context';

// @exports
export const [PopoverContextProvider, usePopoverContext] =
  createContext<PopoverContextProps>();
