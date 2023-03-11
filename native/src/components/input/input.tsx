// @imports
import React, { useEffect, useState } from 'react';
import { IconButton } from '../icon-button';
import { Text } from '../text';
import { View } from '../view/view';
import { HidePasswordIcon, ShowPasswordIcon } from './input-icon';
import type {
  InputProps,
  InputContainerProps,
  InputTextProps,
  InputFocusEventType,
  InputLabelProps,
  InputHintProps,
} from './input.types';

import {
  inputSizeVariant,
  inputContainerDefaultStyle,
  inputDefaultStyle,
  borderColor,
  backgroundColor,
  hintColor,
  isInputDisabled,
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
    isInputDisabled(state) ? inputDefaults.disabledOpacity : 1};
`;

export const InputLabel = ({ label, ...otherProps }: InputLabelProps) => {
  if (!label) {
    return null;
  }

  return (
    <Text fontWeight="medium" mb="sm" {...otherProps}>
      {label}
    </Text>
  );
};

export const InputHint = ({ hint, state, ...otherProps }: InputHintProps) => {
  if (!hint) {
    return null;
  }

  return (
    <StyledHintText state={state} fontSize="sm" mt="sm" {...otherProps}>
      {hint}
    </StyledHintText>
  );
};

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

  const isDisabled = disabled || state === 'disabled';

  const defaultState: InputProps['state'] = isDisabled ? 'disabled' : state;

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

  useEffect(() => {
    setInputState(defaultState);
  }, [state, disabled, defaultState]);

  const renderRightIcon = () => {
    if (isPassword) {
      return (
        <IconButton
          onPress={toggledPasswordHandler}
          size={size}
          variant="link"
          icon={toggledPassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
        />
      );
    }

    if (rightIcon) {
      return <IconButton variant="link" size={size} icon={rightIcon} />;
    }

    return null;
  };

  return (
    <View>
      <InputLabel label={label} />
      <StyledInputContainer
        size={size}
        disabled={isDisabled}
        state={inputState}
        rightIcon={renderRightIcon()}
        icon={icon}
        keyboardType={type}
        {...(otherProps as any)}>
        {icon ? <IconButton variant="link" size={size} icon={icon} /> : null}
        <StyledInput
          editable={!isDisabled}
          selectionColor={inputDefaults.selectionColor}
          selectTextOnFocus={false}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          secureTextEntry={toggledPassword}
          keyboardType={keyboardType}
          underlineColorAndroid="transparent"
          {...(otherProps as any)}
        />
        {renderRightIcon()}
      </StyledInputContainer>
      <InputHint hint={hint} state={inputState} />
    </View>
  );
};
