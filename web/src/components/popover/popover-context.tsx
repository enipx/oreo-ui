// @imports
import { createContext } from '@oreo-ui/core/dist/utils/context';

import type { PopoverContextProps } from './popover.types';

// @exports
export const [PopoverContextProvider, usePopoverContext] =
  createContext<PopoverContextProps>();
