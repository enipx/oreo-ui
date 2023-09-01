// @imports
import React, { useState } from 'react';
import type { InputProps, InputFocusEventType } from './input.types';

import {
  inputFieldDefaultStyle,
  borderColor,
  backgroundColor,
  inputDefaults,
} from '@oreo-ui/core/dist/styled/themed/input';
import { styled, baseStyled, useTheme } from '@oreo-ui/core/dist/styled/native';

// @exports
export const StyledInputField = styled(
  baseStyled('TextInput', ['shadow', 'grid', 'position', 'background'])
)<InputProps>`
  ${(props) => inputFieldDefaultStyle({ ...props, type: 'native' } as any)};
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

  const { components } = useTheme();

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
      selectionColor={components.input.selectionColor}
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
