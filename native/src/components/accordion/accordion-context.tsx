// @imports
import type {
  AccordionItemContextProps,
  AccordionContextProps,
} from './accordion.types';

import { createContext } from '@oreo-ui/core/dist/utils/context';

// @exports
export const [AccordionContextProvider, useAccordionContext] =
  createContext<AccordionContextProps>();

export const [AccordionItemContextProvider, useAccordionItemContext] =
  createContext<AccordionItemContextProps>();
