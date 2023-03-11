// @imports
import { useEffect, useState } from 'react';

import { IconButton } from '../icon-button';
import { Text } from '../text';
import { View } from '../view';
import { HidePasswordIcon, ShowPasswordIcon } from './input-icon';
import type {
  InputProps,
  InputContainerProps,
  InputFocusEventType,
  InputHintProps,
  InputLabelProps,
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
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const StyledInputContainer = styled(View)<InputContainerProps>`
  ${({ theme, disabled }) => inputContainerDefaultStyle({ theme, disabled })};
  ${({ theme, rightIcon, icon }) =>
    inputSizeVariant({ theme, icon, rightIcon })};
  border-color: ${borderColor};
  background-color: ${backgroundColor};
`;

export const StyledInput = styled(
  baseStyled('input', ['shadow', 'grid', 'position', 'background'])
)<InputProps>`
  ${({ theme }) => inputDefaultStyle({ theme })}
`;

export const StyledHintText = styled(Text)<InputHintProps>`
  color: ${hintColor};
  opacity: ${({ state }) =>
    isInputDisabled(state) ? inputDefaults.disabledOpacity : 1};
`;

export const InputLabel = ({ label, ...otherProps }: InputLabelProps) => {
  if (!label) {
    return null;
  }

  return (
    <Text fontWeight="medium" fontSize="sm" mb="sm" {...(otherProps as any)}>
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
      fontSize="xs"
      mt="sm"
      {...(otherProps as any)}>
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
    onFocus,
    onBlur,
    type,
    ...otherProps
  } = props;

  const [toggledPassword, setToggledPassword] = useState(false);

  const [inputType, setInputType] = useState<InputProps['type'] | undefined>(
    type
  );

  const isDisabled = disabled || state === 'disabled';

  const isStateDefault = state === inputDefaults.state || !state;

  const defaultState: InputProps['state'] = isDisabled ? 'disabled' : state;

  const [inputState, setInputState] =
    useState<InputProps['state']>(defaultState);

  const onFocusHandler = (event: InputFocusEventType) => {
    if (inputState !== 'focused' && isStateDefault) setInputState('focused');

    onFocus?.(event);
  };

  const onBlurHandler = (event: InputFocusEventType) => {
    if (inputState !== 'default' && isStateDefault) setInputState('default');

    onBlur?.(event);
  };

  const toggledPasswordHandler = () => {
    setToggledPassword(!toggledPassword);
    setInputType(toggledPassword ? type : 'text');
  };

  useEffect(() => {
    setInputState(defaultState);
  }, [state, disabled]);

  const renderRightIcon = () => {
    if (type === 'password') {
      return (
        <IconButton
          onClick={toggledPasswordHandler}
          variant="link"
          size={size}
          icon={toggledPassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
        />
      );
    }

    if (rightIcon) {
      return <IconButton size={size} variant="link" icon={rightIcon} />;
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
        {...(otherProps as any)}>
        {icon ? <IconButton variant="link" size={size} icon={icon} /> : null}
        <StyledInput
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          type={inputType}
          disabled={isDisabled}
          {...(otherProps as any)}
        />
        {renderRightIcon()}
      </StyledInputContainer>

      <InputHint hint={hint} state={inputState} />
    </View>
  );
};
