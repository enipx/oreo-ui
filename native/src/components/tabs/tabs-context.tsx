// @imports
import type { TabsContextProps } from './tabs.types';

import { createContext } from '@/core/utils/context';

// @exports
export const [TabsContextProvider, useTabsContext] =
  createContext<TabsContextProps>();
