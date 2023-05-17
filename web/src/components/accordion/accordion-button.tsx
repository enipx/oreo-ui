// @imports
import {
  accordionButtonDefaultStyle,
  borderBottomColor,
  accordionDefaults,
  accordionIconOrderHandler,
  buttonColor,
} from '@/core/styled/themed/accordion';
import { baseStyled, styled } from '@/core/styled/web';
import { componentDefaultStyle } from '@/core/styled/themed/base';

import { IconButton } from '../icon-button';
import { View } from '../view';
import {
  useAccordionItemContext,
  useAccordionContext,
} from './accordion-context';
import { ChevronUpIcon } from './accordion-icon';
import type { AccordionButtonProps, AccordionProps } from './accordion.types';
import { useAccordion } from './use-accordion';

// @exports
export const StyledAccordionButton = styled(
  baseStyled('button')
)<AccordionProps>`
  ${(props) => accordionButtonDefaultStyle({ ...props } as any)}
  border-bottom-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.transparent : borderBottomColor};
  color: ${buttonColor};

  ${(props) => componentDefaultStyle({ ...props } as any)}
`;

export const AccordionButton: React.FC<AccordionButtonProps> = (props) => {
  const item = useAccordionItemContext();

  const accordionValue = useAccordionContext();

  const { isActive } = useAccordion({
    item: item || '',
    ...accordionValue,
  });

  const { children, text, ...otherProps } = props;

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
        variant="link"
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
      {...otherProps}
      isActive={isActive}>
      {renderChildren()}

      {renderIcon()}
    </StyledAccordionButton>
  );
};
