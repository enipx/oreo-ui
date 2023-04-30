// @imports
import { dropdownItemDefaultStyle } from '@/core/styled/themed/dropdown';
import { styled, baseStyled } from '@/core/styled/web';

import { Text } from '../text';
import { View } from '../view';
import type { DropdownItemProps } from './dropdown.types';

// @exports
export const StyledDropdownItem = styled(
  baseStyled('button')
)<DropdownItemProps>`
  ${(props) => dropdownItemDefaultStyle({ ...props } as any)}
`;

export const DropdownItem = (props: DropdownItemProps) => {
  const { children, text, description, icon, iconRight, ...otherProps } = props;

  const renderIcon = (right = false) => {
    if (right) {
      return iconRight ? (
        <View as="span" ml="md">
          {iconRight}
        </View>
      ) : null;
    }

    if (icon) {
      return (
        <View as="span" mr="md">
          {icon}
        </View>
      );
    }

    return null;
  };

  const renderDescription = () => {
    if (description) {
      return (
        <Text
          textAlign="left"
          display="inline-block"
          as="span"
          opacity="0.6"
          mt="sm"
          fontSize="sm"
          width="100%">
          {description}
        </Text>
      );
    }

    return null;
  };

  const renderChildren = () => {
    if (children) {
      return children;
    }

    return (
      <>
        <View as="span" flexCenterX>
          {renderIcon()}

          <Text
            textAlign="left"
            display="inline-block"
            as="span"
            flex={1}
            width="100%">
            {text}
          </Text>

          {renderIcon(true)}
        </View>
        {renderDescription()}
      </>
    );
  };

  return (
    <StyledDropdownItem {...otherProps}>{renderChildren()}</StyledDropdownItem>
  );
};
