// @imports
import React, { useState } from 'react';
import type { AccordionProps } from './accordion.types';

import { AccordionButton } from './accordion-button';
import { AccordionContextProvider } from './accordion-context';
import { AccordionItem } from './accordion-item';
import { AccordionPanel } from './accordion-panel';
import { useAccordion } from './use-accordion';

import { accordionContainerDefaultStyle } from '@oreo-ui/core/dist/styled/themed/accordion';
import { baseBorderColor } from '@oreo-ui/core/dist/styled/themed/base';
import { styled } from '@oreo-ui/core/dist/styled/native';

import { View } from '../view';

// @exports
export const StyledAccordionContainer = styled(View)<AccordionProps>`
  ${(props) => accordionContainerDefaultStyle({ ...props } as any)}
  border-color: ${baseBorderColor};
`;

export const Accordion = (props: AccordionProps) => {
  const { children, value: defaultValue, ...otherProps } = props;

  const [value, setValue] = useState(defaultValue || '');

  const { updateValue: _updateValue } = useAccordion({ value, ...otherProps });

  const updateValue = (item: string) => {
    setValue(_updateValue(item));
  };

  return (
    <AccordionContextProvider value={{ ...otherProps, updateValue, value }}>
      <StyledAccordionContainer {...otherProps}>
        {children}
      </StyledAccordionContainer>
    </AccordionContextProvider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Button = AccordionButton;
Accordion.Panel = AccordionPanel;
