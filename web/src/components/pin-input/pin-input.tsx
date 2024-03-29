// @imports
import { allStyleWithoutSize } from '@oreo-ui/core/dist/styled/system';
import { componentDefaultStyle } from '@oreo-ui/core/dist/styled/themed/base';
import {
  inputDefaultStyle,
  backgroundColor,
  borderColor,
  hoverBorderColor,
  focusBorderColor,
} from '@oreo-ui/core/dist/styled/themed/input';
import {
  pinInputSizeVariant,
  pinInputDefaults,
  pinInputOnChangeHandler,
  pinInputOnKeyDownHandler,
  pinInputDefaultStyle,
} from '@oreo-ui/core/dist/styled/themed/pin-input';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/web';
import { useRef, useEffect, useState } from 'react';

import { InputLabel, InputHint } from '../input/input';
import { View } from '../view';
import type {
  PinInputProps,
  PinInputFieldElementType,
} from './pin-input.types';

// @exports
export const StyledInput = styled(
  baseStyled('input', ['shadow', 'grid', 'position', 'background', 'layout'])
)<PinInputProps & { inputIndex?: number }>`
  &:hover {
    border-color: ${hoverBorderColor};
  }

  &:focus {
    border-color: ${focusBorderColor};
  }

  ${(props) => inputDefaultStyle({ ...props } as any)}
  ${(props) => pinInputDefaultStyle({ ...props } as any)}
  ${(props) =>
    pinInputSizeVariant({ ...props, index: props.inputIndex } as any)}

  border-color: ${borderColor};
  background-color: ${backgroundColor};

  ${(props) => componentDefaultStyle({ ...props } as any)}

  ${allStyleWithoutSize()};
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
