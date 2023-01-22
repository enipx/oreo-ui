// @imports
import React, { useState } from 'react';
import { IconButton } from '../icon-button';
import { Text } from '../text';
import { View } from '../view/view';
import { HidePasswordIcon, ShowPasswordIcon } from './input-icon';
import type {
  InputProps,
  InputContainerProps,
  InputTextProps,
  InputFocusEventType,
} from './input.types';

import {
  inputSizeVariant,
  inputContainerDefaultStyle,
  inputDefaultStyle,
  borderColor,
  backgroundColor,
  hintColor,
  isDisabled,
  inputDefaults,
} from '@/core/styled/themed/input';
import { styled, baseStyled } from '@/core/styled/native';

// @exports
export const StyledInputContainer = styled(
  baseStyled('View', ['layout', 'flexbox', 'grid'])
)<InputContainerProps>`
  ${({ theme, disabled }) =>
    inputContainerDefaultStyle({ theme, disabled, type: 'native' })};
  ${({ theme, rightIcon, icon }) =>
    inputSizeVariant({ theme, icon, rightIcon, type: 'native' })};
  border-color: ${borderColor};
  background-color: ${backgroundColor};
`;

export const StyledInput = styled(
  baseStyled('TextInput', ['shadow', 'grid', 'position', 'background'])
)<InputProps>`
  ${({ theme }) => inputDefaultStyle({ theme, type: 'native' })}
`;

export const StyledHintText = styled(Text)<InputTextProps>`
  color: ${hintColor};
  opacity: ${({ state }) =>
    isDisabled(state) ? inputDefaults.disabledOpacity : 1};
`;

export const Input: React.FC<InputProps> = (props) => {
  const {
    icon,
    rightIcon,
    state = inputDefaults.state as InputProps['state'],
    disabled,
    size = inputDefaults.size as InputProps['size'],
    hint,
    label,
    onBlur,
    onFocus,
    type,
    keyboardType: _keyboardType,
    ...otherProps
  } = props;

  const isPassword = type === 'password';

  const keyboardType: InputProps['keyboardType'] = isPassword
    ? 'default'
    : _keyboardType || type;

  const [toggledPassword, setToggledPassword] = useState(isPassword);

  const [inputState, setInputState] = useState<InputProps['state']>(
    disabled ? 'disabled' : state
  );

  const onFocusHandler = (event: InputFocusEventType) => {
    if (inputState !== 'focused') setInputState('focused');

    onFocus?.(event);
  };

  const onBlurHandler = (event: InputFocusEventType) => {
    if (inputState !== 'default') setInputState('default');

    onBlur?.(event);
  };

  const toggledPasswordHandler = () => {
    setToggledPassword(!toggledPassword);
  };

  const renderRightIcon = () => {
    if (isPassword) {
      return (
        <IconButton
          onPress={toggledPasswordHandler}
          size={size}
          icon={toggledPassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
        />
      );
    }

    if (rightIcon) {
      return <IconButton size={size} icon={rightIcon} />;
    }

    return null;
  };

  return (
    <View>
      {label ? (
        <Text fontWeight="medium" fontSize="sm" mb="sm">
          {label}
        </Text>
      ) : null}
      <StyledInputContainer
        size={size}
        disabled={disabled}
        state={inputState}
        rightIcon={renderRightIcon()}
        icon={icon}
        keyboardType={type}
        {...(otherProps as any)}>
        {icon ? <IconButton size={size} icon={icon} /> : null}
        <StyledInput
          editable={!disabled}
          selectionColor={inputDefaults.selectionColor}
          selectTextOnFocus={false}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          secureTextEntry={toggledPassword}
          keyboardType={keyboardType}
          {...(otherProps as any)}
        />
        {renderRightIcon()}
      </StyledInputContainer>
      {hint ? (
        <StyledHintText state={inputState} fontSize="xs" mt="sm">
          {hint}
        </StyledHintText>
      ) : null}
    </View>
  );
};
