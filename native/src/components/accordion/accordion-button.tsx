// @imports
import React from 'react';
import { View } from '../view';
import { Text } from '../text';
import { BaseButton } from '../button';
import {
  useAccordionItemContext,
  useAccordionContext,
} from './accordion-context';
import { ChevronUpIcon } from './accordion-icon';
import type { AccordionButtonProps, AccordionProps } from './accordion.types';
import { useAccordion } from './use-accordion';

import {
  accordionButtonDefaultStyle,
  borderBottomColor,
  accordionDefaults,
} from '@/core/styled/themed/accordion';
import { styled } from '@/core/styled/native';

// @exports
export const StyledAccordionButton = styled(BaseButton)<AccordionProps>`
  ${(props) => accordionButtonDefaultStyle({ ...props, type: 'native' } as any)}
  border-bottom-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.transparent : borderBottomColor};
`;

export const AccordionButton: React.FC<AccordionButtonProps> = (props) => {
  const item = useAccordionItemContext();

  const accordionValue = useAccordionContext();

  const { isActive } = useAccordion({
    item: item || '',
    ...accordionValue,
  });

  const { children, text } = props;

  const onPressHandler = () => {
    accordionValue?.updateValue?.(item || '');
  };

  const renderIcon = () => {
    if (isActive && accordionValue?.activeIcon)
      return accordionValue.activeIcon;

    if (accordionValue?.icon) return accordionValue.icon;

    return (
      <View
        style={{ transform: [{ rotate: isActive ? '-180deg' : '0deg' }] }}
        mr="sm"
        ml="sm"
        opacity={accordionDefaults.iconOpacity}>
        <ChevronUpIcon size="2xs" />
      </View>
    );
  };

  const renderChildren = () => {
    if (text) {
      return (
        <View flex={1}>
          <Text>{text}</Text>
        </View>
      );
    }

    return children ? children : null;
  };

  return (
    <StyledAccordionButton onPress={onPressHandler} isActive={isActive}>
      {renderChildren()}

      {renderIcon()}
    </StyledAccordionButton>
  );
};
