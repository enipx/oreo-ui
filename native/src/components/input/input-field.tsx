// @imports
import React, { useState, forwardRef } from 'react';
import type { InputProps, InputFocusEventType } from './input.types';

import {
  inputFieldDefaultStyle,
  borderColor,
  backgroundColor,
  inputDefaults,
} from '@oreo-ui/core/dist/styled/themed/input';
import { styled, baseStyled, useTheme } from '@oreo-ui/core/dist/styled/native';
import { getThemeValueHandler } from '@oreo-ui/core/dist/helpers/theme';
import { useModeTheme } from '../../hooks';

// @exports
export const StyledInputField = styled(
  baseStyled('TextInput', ['shadow', 'grid', 'position', 'background'])
)<InputProps>`
  ${(props) => inputFieldDefaultStyle({ ...props, type: 'native' } as any)};
  border-color: ${borderColor};
  background-color: ${backgroundColor};
`;

export const InputField: React.FC<InputProps> = forwardRef((props, ref) => {
  const {
    state = inputDefaults.state as InputProps['state'],
    disabled,
    onBlur,
    onFocus,
    type,
    keyboardType: _keyboardType,
    placeholderTextColor,
    ...otherProps
  } = props;

  const { iconColor, theme } = useModeTheme();

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
      placeholderTextColor={
        placeholderTextColor
          ? getThemeValueHandler?.({
              theme,
              value: placeholderTextColor as any,
            })
          : iconColor
      }
      {...(otherProps as any)}
      ref={ref}
    />
  );
});
