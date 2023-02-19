// @imports
import { View } from '..';
import { IconButton } from '../icon-button';
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
  hoverBackgroundColor,
  accordionDefaults,
  accordionIconOrderHandler,
} from '@/core/styled/themed/accordion';
import { baseStyled, styled } from '@/core/styled/web';

// @exports
export const StyledAccordionButton = styled(
  baseStyled('button')
)<AccordionProps>`
  ${(props) => accordionButtonDefaultStyle({ ...props } as any)}
  border-bottom-color: ${({ isActive }) =>
    isActive ? 'transparent' : borderBottomColor};

  :hover {
    background-color: ${hoverBackgroundColor};
  }
`;

export const AccordionButton: React.FC<AccordionButtonProps> = (props) => {
  const item = useAccordionItemContext();

  const accordionValue = useAccordionContext();

  const { isActive } = useAccordion({
    item: item || '',
    ...accordionValue,
  });

  const { children, text } = props;

  const onClickHandler = () => {
    accordionValue?.updateValue?.(item || '');
  };

  const renderIcon = () => {
    if (isActive && accordionValue?.activeIcon)
      return accordionValue.activeIcon;

    if (accordionValue?.icon) return accordionValue.icon;

    return (
      <IconButton
        as="span"
        size="xs"
        mr={accordionValue?.iconPosition === 'left' ? 'sm' : undefined}
        ml={accordionValue?.iconPosition === 'right' ? 'sm' : undefined}
        style={{
          order: accordionIconOrderHandler(accordionValue?.iconPosition),
        }}
        icon={
          <ChevronUpIcon
            size="xs"
            style={{
              transform: isActive ? 'rotate(-180deg)' : 'initial',
              transition: 'transform 0.2s ease 0s',
              opacity: accordionDefaults.iconOpacity,
            }}
          />
        }
      />
    );
  };

  const renderChildren = () => {
    if (text) {
      return (
        <View as="span" flex="1">
          {text}
        </View>
      );
    }

    return children;
  };

  return (
    <StyledAccordionButton
      onClick={onClickHandler}
      {...accordionValue}
      isActive={isActive}>
      {renderChildren()}

      {renderIcon()}
    </StyledAccordionButton>
  );
};