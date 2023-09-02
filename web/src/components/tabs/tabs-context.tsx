// @imports
import { createContext } from '@oreo-ui/core/dist/utils/context';

import type { TabsContextProps } from './tabs.types';

// @exports
export const [TabsContextProvider, useTabsContext] =
  createContext<TabsContextProps>();
