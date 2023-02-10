// @imports
import React, { useState } from 'react';
import type { AccordionProps } from './accordion.types';

import { AccordionButton } from './accordion-button';
import { AccordionContextProvider } from './accordion-context';
import { AccordionItem } from './accordion-item';
import { AccordionPanel } from './accordion-panel';
import { useAccordion } from './use-accordion';

// @exports
export const Accordion = (props: AccordionProps) => {
  const { children, value: defaultValue, ...otherProps } = props;

  const [value, setValue] = useState(defaultValue || '');

  const { updateValue: _updateValue } = useAccordion({ value, ...otherProps });

  const updateValue = (item: string) => {
    setValue(_updateValue(item));
  };

  return (
    <AccordionContextProvider value={{ ...otherProps, updateValue, value }}>
      {children}
    </AccordionContextProvider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Button = AccordionButton;
Accordion.Panel = AccordionPanel;
