// @imports
import React, { useState } from 'react';
import type { InputProps, InputFocusEventType } from './input.types';

import {
  inputFieldDefaultStyle,
  borderColor,
  backgroundColor,
  inputDefaults,
} from '@/core/styled/themed/input';
import { styled, baseStyled } from '@/core/styled/native';

// @exports
export const StyledInputField = styled(
  baseStyled('TextInput', ['shadow', 'grid', 'position', 'background'])
)<InputProps>`
  ${({ theme }) => inputFieldDefaultStyle({ theme, type: 'native' })};
  border-color: ${borderColor};
  background-color: ${backgroundColor};
`;

export const InputField: React.FC<InputProps> = (props) => {
  const {
    state = inputDefaults.state as InputProps['state'],
    disabled,
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

  return (
    <StyledInputField
      editable={!disabled}
      selectionColor={inputDefaults.selectionColor}
      selectTextOnFocus={false}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      keyboardType={keyboardType}
      state={inputState}
      underlineColorAndroid="transparent"
      {...(otherProps as any)}
    />
  );
};
