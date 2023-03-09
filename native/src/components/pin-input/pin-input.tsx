// @imports
import React, { useRef, useEffect, useState, forwardRef } from 'react';
import { Keyboard } from 'react-native';

import { StyledHintText } from '../input/input';
import { Text } from '../text';
import { View } from '../view';
import type {
  PinInputProps,
  PinInputFieldProps,
  PinInputFieldElementType,
  PinInputonChangeEventType,
} from './pin-input.types';

import {
  inputContainerDefaultStyle,
  backgroundColor,
  borderColor,
} from '@/core/styled/themed/input';
import {
  pinInputSizeVariant,
  pinInputDefaults,
  pinInputOnChangeHandler,
  pinInputOnKeyDownHandler,
  pinInputDefaultStyle,
} from '@/core/styled/themed/pin-input';
import { styled, baseStyled } from '@/core/styled/native';
import type { InputFocusEventType } from '@components/input/input.types';

// @exports
export const StyledPinInputField = styled(
  baseStyled('TextInput', ['shadow', 'grid', 'position', 'background'])
)<PinInputFieldProps & { inputIndex?: number }>`
  ${({ theme, disabled }) =>
    inputContainerDefaultStyle({ theme, disabled, type: 'native' })}
  ${({ theme, disabled }) =>
    pinInputDefaultStyle({ theme, disabled, type: 'native' })}
  ${({ theme, disabled, inputIndex }) =>
    pinInputSizeVariant({ theme, disabled, index: inputIndex })}
  border-color: ${borderColor};
  background-color: ${backgroundColor};
`;

export const PinInputField: React.FC<
  PinInputFieldProps & { inputIndex?: number }
> = forwardRef((props, ref) => {
  const {
    state = pinInputDefaults.state as PinInputProps['state'],
    size = pinInputDefaults.size as PinInputProps['size'],
    disabled,
    keyboardType: _keyboardType,
    type,
    onBlur,
    onFocus,
    ...otherProps
  } = props;

  const isPassword = type === 'password';

  const keyboardType: PinInputFieldProps['keyboardType'] = isPassword
    ? 'default'
    : _keyboardType || type;

  const [inputState, setInputState] = useState<PinInputFieldProps['state']>(
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
    <StyledPinInputField
      ref={ref}
      keyboardType={keyboardType}
      state={inputState}
      size={size}
      disabled={disabled}
      editable={!disabled}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      textAlign="center"
      selectTextOnFocus
      selectionColor={pinInputDefaults.selectionColor}
      secureTextEntry={isPassword}
      underlineColorAndroid="transparent"
      {...(otherProps as any)}
    />
  );
});

export const PinInput: React.FC<PinInputProps> = (props) => {
  const {
    state = pinInputDefaults.state as PinInputProps['state'],
    disabled,
    hint,
    label,
    length = pinInputDefaults.length,
    focusOnMounted,
    onChange,
    onFilled,
    ...otherProps
  } = props;

  const isDisabled = disabled || state === 'disabled';

  const pinInputState: PinInputProps['state'] = isDisabled ? 'disabled' : state;

  const inputsLengthArray = [...Array(length)];

  const defaultInputsValues = inputsLengthArray.map(() => '');

  const [inputsValues, setInputsValues] =
    useState<string[]>(defaultInputsValues);

  const inputsRef = useRef<PinInputFieldElementType[]>([]);

  const inputsRefHandler = (
    _input: PinInputFieldElementType,
    _index: number
  ) => {
    inputsRef.current[_index] = _input;
  };

  const onChangeHandler = (_text: string, _index: number) => {
    const newInputsValues = pinInputOnChangeHandler({
      text: _text,
      position: _index,
      inputsLength: length,
      inputsValues,
      packageType: 'native',
      onChange,
      onFilled,
      inputsRef,
      Keyboard,
    });

    setInputsValues([...newInputsValues]);
  };

  const onKeyPressHandler = (key: string, _index: number) => {
    pinInputOnKeyDownHandler({
      inputsRef,
      inputsLength: length,
      inputsValues,
      key,
      position: _index,
    });
  };

  useEffect(() => {
    // focus inputs when element is mounted
    if (focusOnMounted) {
      inputsRef?.current?.[0]?.focus?.();
    }
  }, [focusOnMounted]);

  return (
    <View>
      {label ? (
        <Text fontWeight="medium" fontSize="sm" mb="sm">
          {label}
        </Text>
      ) : null}
      <View flexDirection="row">
        {inputsLengthArray.map((_input, _index) => {
          const inputValue = inputsValues?.[_index] || '';

          return (
            <PinInputField
              state={pinInputState}
              ref={(_inputEv: PinInputFieldElementType) => {
                inputsRefHandler(_inputEv, _index);
              }}
              inputIndex={_index}
              key={pinInputDefaults.key + _index}
              {...(otherProps as any)}
              onChangeText={(text: string) => {
                onChangeHandler(text, _index);
              }}
              onKeyPress={(event: PinInputonChangeEventType) => {
                onKeyPressHandler(event.nativeEvent.key, _index);
              }}
              value={inputValue}
              maxLength={length}
              disabled={isDisabled}
              selectTextOnFocus
            />
          );
        })}
      </View>
      {hint ? (
        <StyledHintText state={pinInputState} fontSize="xs" mt="sm">
          {hint}
        </StyledHintText>
      ) : null}
    </View>
  );
};
