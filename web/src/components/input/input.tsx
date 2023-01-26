// @imports
import { useEffect, useState } from 'react';

import { IconButton } from '../icon-button';
import { Text } from '../text';
import { View } from '../view';
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
  hoverBorderColor,
  hintColor,
  isDisabled,
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

  :hover {
    border-color: ${hoverBorderColor};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.gray[50]};
  }
`;

export const StyledInput = styled(
  baseStyled('input', ['shadow', 'grid', 'position', 'background'])
)<InputProps>`
  ${({ theme }) => inputDefaultStyle({ theme })}
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

  const defaultState: InputProps['state'] = isDisabled ? 'disabled' : state;

  const [inputState, setInputState] =
    useState<InputProps['state']>(defaultState);

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
    setInputType(toggledPassword ? type : 'text');
  };

  const renderRightIcon = () => {
    if (type === 'password') {
      return (
        <IconButton
          onClick={toggledPasswordHandler}
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

  useEffect(() => {
    setInputState(defaultState);
  }, [state, disabled]);

  return (
    <View>
      {label ? (
        <Text fontWeight="medium" fontSize="sm" mb="sm">
          {label}
        </Text>
      ) : null}
      <StyledInputContainer
        size={size}
        disabled={isDisabled}
        state={inputState}
        rightIcon={renderRightIcon()}
        icon={icon}
        {...(otherProps as any)}>
        {icon ? <IconButton size={size} icon={icon} /> : null}
        <StyledInput
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          type={inputType}
          disabled={isDisabled}
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
