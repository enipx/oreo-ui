// @imports
import { AccordionItemContextProvider } from './accordion-context';
import type { AccordionItemProps } from './accordion.types';

// @exports
export const AccordionItem: React.FC<AccordionItemProps> = (props) => {
  const { children, value } = props;

  return (
    <AccordionItemContextProvider value={value}>
      {children}
    </AccordionItemContextProvider>
  );
};
