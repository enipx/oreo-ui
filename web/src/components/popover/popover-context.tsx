// @imports
import { createContext } from '@/core/utils/context';

import type { PopoverContextProps } from './popover.types';

// @exports
export const [PopoverContextProvider, usePopoverContext] =
  createContext<PopoverContextProps>();
