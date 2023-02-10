// @imports
import { View } from '@components/view';
import { useEffect, useRef } from 'react';

import {
  useAccordionItemContext,
  useAccordionContext,
} from './accordion-context';
import type { AccordionPanelProps } from './accordion.types';
import { useAccordion } from './use-accordion';

import { accordionPanelDefaultStyle } from '@/core/styled/themed/accordion';
import { styled } from '@/core/styled/web';

// @exports
export const StyledAccordionPanel = styled(View)<AccordionPanelProps>`
  ${(props) => accordionPanelDefaultStyle(props as any)}
`;

export const AccordionPanel: React.FC<AccordionPanelProps> = (props) => {
  const { children } = props;

  const panelRef = useRef<HTMLDivElement>(null);

  const accordionValue = useAccordionContext();

  const item = useAccordionItemContext();

  const { isActive, togglePanel } = useAccordion({
    item: item || '',
    panelRef,
    ...accordionValue,
  });

  useEffect(() => {
    togglePanel();
  }, [isActive]);

  return (
    <StyledAccordionPanel ref={panelRef} {...accordionValue}>
      <View px="4" pt="2" pb="4">
        {children}
      </View>
    </StyledAccordionPanel>
  );
};
