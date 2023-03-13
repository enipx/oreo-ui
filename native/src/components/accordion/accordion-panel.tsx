// @imports
import React from 'react';
import { View } from '../view';
import { Text } from '../text';

import {
  useAccordionItemContext,
  useAccordionContext,
} from './accordion-context';
import type { AccordionPanelProps } from './accordion.types';
import { useAccordion } from './use-accordion';

// @exports

export const AccordionPanel: React.FC<AccordionPanelProps> = (props) => {
  const { children, content } = props;

  const accordionValue = useAccordionContext();

  const item = useAccordionItemContext();

  const { isActive } = useAccordion({
    item: item || '',
    ...accordionValue,
  });

  if (!isActive) {
    return null;
  }

  return (
    <View px="4" pt="1" pb="4">
      {content ? <Text>{content}</Text> : children}
    </View>
  );
};
