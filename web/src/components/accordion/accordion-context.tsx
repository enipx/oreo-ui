// @imports
import { createContext } from '@oreo-ui/core/dist/utils/context';

import type {
  AccordionItemContextProps,
  AccordionContextProps,
} from './accordion.types';

// @exports
export const [AccordionContextProvider, useAccordionContext] =
  createContext<AccordionContextProps>();

export const [AccordionItemContextProvider, useAccordionItemContext] =
  createContext<AccordionItemContextProps>();
