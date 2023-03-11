// @imports
import { useRef, useEffect, useState } from 'react';

import { InputLabel, InputHint } from '../input/input';
import { View } from '../view';
import type {
  PinInputProps,
  PinInputFieldElementType,
} from './pin-input.types';

import {
  inputContainerDefaultStyle,
  backgroundColor,
  hoverBorderColor,
  focusBorderColor,
  borderColor,
} from '@/core/styled/themed/input';
import {
  pinInputSizeVariant,
  pinInputDefaults,
  pinInputOnChangeHandler,
  pinInputOnKeyDownHandler,
  pinInputDefaultStyle,
} from '@/core/styled/themed/pin-input';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const StyledInput = styled(
  baseStyled('input', ['shadow', 'grid', 'position', 'background'])
)<PinInputProps & { inputIndex?: number }>`
  ${({ theme, disabled }) => inputContainerDefaultStyle({ theme, disabled })}
  ${({ theme, disabled }) => pinInputDefaultStyle({ theme, disabled })}
  ${({ theme, disabled, inputIndex }) =>
    pinInputSizeVariant({ theme, disabled, index: inputIndex })}
  border-color: ${borderColor};
  background-color: ${backgroundColor};

  :hover {
    border-color: ${hoverBorderColor};
  }

  :focus {
    border-color: ${focusBorderColor};
  }
`;

export const PinInput: React.FC<PinInputProps> = (props) => {
  const {
    state = pinInputDefaults.state as PinInputProps['state'],
    size = pinInputDefaults.size as PinInputProps['size'],
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

  const [inputsValues, setInputsValues] = useState(
    inputsLengthArray.map(() => '')
  );

  const inputsRef = useRef<PinInputFieldElementType[]>([]);

  const inputsRefHandler = (
    _input: PinInputFieldElementType,
    _index: number
  ) => {
    inputsRef.current[_index] = _input;
  };

  const onChangeHandler = (_text: string, _index: number) => {
    pinInputOnChangeHandler({
      text: _text,
      position: _index,
      inputsLength: length,
      inputsValues,
      setInputsValues,
      onChange,
      onFilled,
      inputsRef,
    });
  };

  const onKeyDownHandler = (key: string, _index: number) => {
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
      <InputLabel label={label} />
      <View display="flex">
        {inputsLengthArray.map((_input, _index) => {
          const value = inputsValues[_index];

          return (
            <StyledInput
              state={pinInputState}
              size={size}
              disabled={isDisabled}
              ref={(_inputEv: PinInputFieldElementType) => {
                inputsRefHandler(_inputEv, _index);
              }}
              inputIndex={_index}
              key={pinInputDefaults.key + _index}
              {...(otherProps as any)}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                onChangeHandler(event.target.value, _index);
              }}
              onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                onKeyDownHandler(event.key, _index);
              }}
              defaultValue={value}
            />
          );
        })}
      </View>

      <InputHint hint={hint} state={pinInputState} />
    </View>
  );
};
