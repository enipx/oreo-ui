import type { RefObject } from 'react';

import type {
  AccordionThemedDefaultProps,
  AccordionItemThemedDefaultProps,
  AccordionButtonThemedDefaultProps,
  AccordionPanelThemedDefaultProps,
} from '@oreo-ui/core/dist/styled/components.types';

export interface AccordionProps extends AccordionThemedDefaultProps {
  isActive?: boolean;
}

export interface AccordionItemProps extends AccordionItemThemedDefaultProps {}

export interface AccordionButtonProps
  extends AccordionButtonThemedDefaultProps {}

export interface AccordionPanelProps extends AccordionPanelThemedDefaultProps {}

export interface UserAccordionProps extends AccordionProps {
  item?: string;
  panelRef?: RefObject<HTMLDivElement>;
}

export interface AccordionContextProps extends AccordionProps {
  updateValue?: (arg: string) => void;
  togglePanel?: () => void;
}

export type AccordionItemContextProps = AccordionItemProps['value'];
