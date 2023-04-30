// @imports
import { createContext } from '@/core/utils/context';

import type { TabsContextProps } from './tabs.types';

// @exports
export const [TabsContextProvider, useTabsContext] =
  createContext<TabsContextProps>();
