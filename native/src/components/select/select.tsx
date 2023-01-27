// @imports
import React from 'react';
import { IconButton } from '../icon-button';
import { Text } from '../text';
import { View } from '../view/view';
import { StyledHintText, StyledInputContainer } from '../input/input';
import { ArrowDownIcon } from './select-icon';
import type { SelectProps, SelectContainerProps } from './select.types';

import {
  selectDefaults,
  selectContainerBaseStyle,
  selectPlaceholderBaseStyle,
} from '@/core/styled/themed/select';
import { styled, baseStyled } from '@/core/styled/native';

// @exports
export const StyledSelectContainer = styled(
  StyledInputContainer
)<SelectContainerProps>`
  ${({ theme, size }) =>
    selectContainerBaseStyle({ theme, size, type: 'native' })}
`;

export const StyledSelect = styled(
  baseStyled('TouchableOpacity', ['shadow', 'grid', 'position', 'background'])
)<SelectProps>``;

export const StyledSelectPlaceholder = styled(
  baseStyled('Text', [
    'background',
    'border',
    'flexbox',
    'grid',
    'position',
    'shadow',
    'layout',
  ])
)<SelectProps>`
  ${({ theme, size }) =>
    selectPlaceholderBaseStyle({ theme, size, type: 'native' })}
`;

export const Select: React.FC<SelectProps> = (props) => {
  const {
    icon,
    state = selectDefaults.state as SelectProps['state'],
    size = selectDefaults.size as SelectProps['size'],
    disabled,
    hint,
    label,
    placeholder,
    ...otherProps
  } = props;

  const isDisabled = disabled || state === 'disabled';

  const selectState: SelectProps['state'] = isDisabled ? 'disabled' : state;

  const activeOpacity = isDisabled ? 1 : selectDefaults.activeOpacity;

  const onPressHandler = () => {
    if (!isDisabled) {
      // ..
    }
  };

  const renderDropdownIcon = () => {
    return (
      <IconButton
        onPress={onPressHandler}
        size={size}
        icon={icon || <ArrowDownIcon size="xs" />}
      />
    );
  };

  const renderChildren = () => {
    if (placeholder) {
      return (
        <>
          <StyledSelectPlaceholder size={size}>
            {placeholder}
          </StyledSelectPlaceholder>
          {renderDropdownIcon()}
        </>
      );
    }

    return renderDropdownIcon();
  };

  return (
    <View>
      {label ? (
        <Text fontWeight="medium" fontSize="sm" mb="sm">
          {label}
        </Text>
      ) : null}
      <StyledSelect onPress={onPressHandler} activeOpacity={activeOpacity}>
        <StyledSelectContainer
          size={size}
          disabled={isDisabled}
          state={selectState}
          {...(otherProps as any)}>
          {renderChildren()}
        </StyledSelectContainer>
      </StyledSelect>
      {hint ? (
        <StyledHintText state={selectState} fontSize="xs" mt="sm">
          {hint}
        </StyledHintText>
      ) : null}
    </View>
  );
};
