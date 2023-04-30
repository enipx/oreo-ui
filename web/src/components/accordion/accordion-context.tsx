// @imports
import { createContext } from '@/core/utils/context';

import type {
  AccordionItemContextProps,
  AccordionContextProps,
} from './accordion.types';

// @exports
export const [AccordionContextProvider, useAccordionContext] =
  createContext<AccordionContextProps>();

export const [AccordionItemContextProvider, useAccordionItemContext] =
  createContext<AccordionItemContextProps>();
