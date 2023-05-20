// @imports
import { allStyleWithoutSize } from '@/core/styled/system';
import { componentDefaultStyle } from '@/core/styled/themed/base';
import {
  inputSizeVariant,
  inputContainerDefaultStyle,
  inputDefaultStyle,
  borderColor,
  hoverBorderColor,
  focusBorderColor,
  backgroundColor,
  hintColor,
  isInputDisabled,
  inputDefaults,
} from '@/core/styled/themed/input';
import { styled, baseStyled } from '@/core/styled/web';
import { useEffect, useState, forwardRef } from 'react';

import { IconButton } from '../icon-button';
import { Text } from '../text';
import { View } from '../view';
import { HidePasswordIcon, ShowPasswordIcon } from './input-icon';
import type {
  InputProps,
  InputContainerProps,
  InputHintProps,
  InputLabelProps,
} from './input.types';

// @exports
export const StyledInputContainer = styled(
  baseStyled('div', ['layout'])
)<InputContainerProps>`
  ${(props) => inputContainerDefaultStyle({ ...props, type: 'web' } as any)};
`;

export const StyledInput = styled(baseStyled('input'))<InputProps>`
  &:hover {
    border-color: ${hoverBorderColor};
  }

  &:focus {
    border-color: ${focusBorderColor};
  }

  ${(props) => inputDefaultStyle({ ...props, type: 'web' } as any)};
  ${(props) => inputSizeVariant({ ...props, type: 'web' } as any)};

  background-color: ${backgroundColor};
  border-color: ${borderColor};

  ${(props) => componentDefaultStyle({ ...props } as any)}

  ${allStyleWithoutSize()};
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

export const Input = forwardRef((props: InputProps, ref) => {
  const {
    icon,
    rightIcon,
    state = inputDefaults.state as InputProps['state'],
    disabled,
    size = inputDefaults.size as InputProps['size'],
    hint,
    label,
    type,
    showPasswordIcon,
    hidePasswordIcon,
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

  const isFocused = inputState === 'focused';

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
          className={inputDefaults.rightIconClassName}
          variant="link"
          size={size}
          icon={
            toggledPassword
              ? showPasswordIcon || <ShowPasswordIcon />
              : hidePasswordIcon || <HidePasswordIcon />
          }
        />
      );
    }

    if (rightIcon) {
      return (
        <IconButton
          className={inputDefaults.rightIconClassName}
          size={size}
          variant="link"
          icon={rightIcon}
        />
      );
    }

    return null;
  };

  return (
    <View>
      <InputLabel label={label} />
      <StyledInputContainer
        rightIcon={renderRightIcon()}
        icon={icon}
        size={size}
        disabled={isDisabled}>
        {icon ? (
          <IconButton
            className={inputDefaults.leftIconClassName}
            variant="link"
            size={size}
            icon={icon}
          />
        ) : null}
        <StyledInput
          type={inputType}
          disabled={isDisabled}
          state={inputState}
          rightIcon={renderRightIcon()}
          icon={icon}
          ref={ref}
          autoFocus={isFocused}
          size={size}
          {...(otherProps as any)}
        />
        {renderRightIcon()}
      </StyledInputContainer>

      <InputHint hint={hint} state={inputState} />
    </View>
  );
});
