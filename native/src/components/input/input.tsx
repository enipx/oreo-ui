// @imports
import React, { useEffect, useState, forwardRef } from 'react';
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
  nativeBorderColor,
  backgroundColor,
  hintColor,
  isInputDisabled,
  inputDefaults,
} from '@oreo-ui/core/dist/styled/themed/input';
import { styled, baseStyled, useTheme } from '@oreo-ui/core/dist/styled/native';
import { getThemeValueHandler } from '@oreo-ui/core/dist/helpers/theme';
import { useModeTheme } from '../../hooks';
import {
  color,
  compose,
  allStyleWithoutSize,
} from '@oreo-ui/core/dist/styled/system';

// @exports
export const StyledInputContainer = styled(
  baseStyled('View', ['layout', 'flexbox', 'grid'])
)<InputContainerProps>`
  ${(props) =>
    inputContainerDefaultStyle({ ...props, packageType: 'native' } as any)};
  ${(props) => inputSizeVariant({ ...props, packageType: 'native' } as any)};
  border-color: ${nativeBorderColor};
  background-color: ${backgroundColor};
  ${allStyleWithoutSize()}
`;

export const StyledInput = styled(
  baseStyled('TextInput', [
    'shadow',
    'grid',
    'position',
    'background',
    'layout',
    'space',
  ])
)<InputProps>`
  ${(props) => inputDefaultStyle({ ...props, packageType: 'native' } as any)}
  ${({ icon }) => (icon ? 'paddingLeft: 0' : '')}
  ${({ rightIcon }) => (rightIcon ? 'paddingRight: 0' : '')}
  ${compose(color)}
`;

export const StyledHintText = styled(Text)<InputTextProps>`
  color: ${hintColor};
  opacity: ${({ state }) =>
    isInputDisabled(state) ? inputDefaults.disabledOpacity : 1};
  ${allStyleWithoutSize()}
`;

export const InputLabel = ({ label, ...otherProps }: InputLabelProps) => {
  if (!label) {
    return null;
  }

  return (
    <Text fontWeight="medium" mb="sm" {...(otherProps as any)}>
      {label}
    </Text>
  );
};

export const InputHint = ({ hint, state, ...otherProps }: InputHintProps) => {
  if (!hint) {
    return null;
  }

  return (
    <StyledHintText
      state={state}
      fontSize="sm"
      mt="sm"
      {...(otherProps as any)}>
      {hint}
    </StyledHintText>
  );
};

export const Input: React.FC<InputProps> = forwardRef((props, ref) => {
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
    placeholderTextColor,
    hintProps,
    showPasswordIcon,
    hidePasswordIcon,
    bg,
    background,
    backgroundColor: inputBgColor,
    ...otherProps
  } = props;

  const bgColor = bg || background || inputBgColor || 'transparent';

  const { iconColor, theme } = useModeTheme();

  const { components } = useTheme();

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
          bg="transparent"
          icon={
            toggledPassword
              ? showPasswordIcon || <ShowPasswordIcon />
              : hidePasswordIcon || <HidePasswordIcon />
          }
        />
      );
    }

    if (rightIcon) {
      return <IconButton bg="transparent" size={size} icon={rightIcon} />;
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
        bg={bgColor}
        {...(otherProps as any)}>
        {icon ? <IconButton bg="transparent" size={size} icon={icon} /> : null}
        <StyledInput
          editable={!isDisabled}
          selectionColor={components.input.selectionColor}
          selectTextOnFocus={false}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          secureTextEntry={toggledPassword}
          keyboardType={keyboardType}
          underlineColorAndroid="transparent"
          size={size}
          icon={icon}
          rightIcon={rightIcon}
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
        {renderRightIcon()}
      </StyledInputContainer>
      <InputHint hint={hint} state={inputState} {...hintProps} />
    </View>
  );
});
