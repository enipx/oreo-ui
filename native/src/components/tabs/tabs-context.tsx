// @imports
import type { TabsContextProps } from './tabs.types';

import { createContext } from '@oreo-ui/core/dist/utils/context';

// @exports
export const [TabsContextProvider, useTabsContext] =
  createContext<TabsContextProps>();
