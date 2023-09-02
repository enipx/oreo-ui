import type { PackageTypes } from '../../constants/index.types';
import type { PinInputThemedDefaultProps } from '../components.types';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';

import { isPackageNative, isPackageWeb } from '@/helpers/base';
import { minus, add } from '@/helpers/number';
import { convertReactCSSToCSSHandler } from '@/helpers/theme';

// @defaults
export const pinInputDefaults = {
  size: 'md',
  state: 'default',
  length: 4,
  key: 'pin-input',
};

export const pinInputSizeVariant = (options: SystemThemeParams) => {
  const {
    theme,
    type = 'web',
    index,
    size = pinInputDefaults.size,
    fontSize: _fontSize,
    borderRadius: _borderRadius,
    ml,
    marginLeft: _marginLeft,
  } = options;

  const isFirstInput = index === 0;

  const isNative = isPackageNative(type);

  const {
    height: inputHeights,
    width: inputWidths,
    fontSizes,
    borderRadius: inputRadii,
    marginLeft: inputmarginLeft,
  } = theme.components.pinInput;

  const height = inputHeights?.[size as keyof typeof inputHeights] || size;

  const width = inputWidths?.[size as keyof typeof inputHeights] || size;

  const fontSize =
    fontSizes?.[size as keyof typeof fontSizes] || _fontSize || fontSizes.md;

  const borderRadius =
    inputRadii?.[size as keyof typeof inputRadii] ||
    _borderRadius ||
    inputRadii.md;

  const marginLeft = isFirstInput
    ? 0
    : inputmarginLeft?.[size as keyof typeof inputmarginLeft] ||
      ml ||
      _marginLeft ||
      inputmarginLeft.md;

  const styles = {
    ...(isNative ? {} : { fontSize }),
    height,
    width,
    marginLeft,
    borderRadius,
  };

  return convertReactCSSToCSSHandler(styles);
};

export const pinInputDefaultStyle = (option: SystemThemeParams) => {
  const { type = 'web' } = option;

  const baseStyle = `
    text-align: center;
    padding: 0;
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

// @utilities
type inputOnChangeHandler = {
  text: string;
  position: number;
  inputsLength: number;
  inputsValues: any[];
  packageType?: PackageTypes;
  onChange?: PinInputThemedDefaultProps['onChange'];
  onFilled?: PinInputThemedDefaultProps['onFilled'];
  Keyboard?: any;
  inputsRef?: any;
  setInputsValues?: any;
};

/**
 *
 * @TODO
 * fix copy issues when inputs is already filled
 */
export const pinInputOnChangeHandler = (options: inputOnChangeHandler) => {
  const {
    text,
    position,
    packageType = 'web',
    inputsLength,
    inputsValues,
    onChange,
    onFilled,
    Keyboard,
    inputsRef,
  } = options;

  const isNative = isPackageNative(packageType);
  const isWeb = isPackageWeb(packageType);

  // check if input is last
  const isLast = position === inputsLength - 1;

  // store if input can focus next input
  let canFocusNextInput = true;

  // new inputsarray value
  let newInputsValues = inputsValues;

  // next input position/index
  let nextInputPosition = text ? add(position, 1) : minus(position, 0);

  // current input value
  const inputValue = inputsValues[position];

  // check if every inputs is filled
  const onFilledHandler = () => {
    // check if all inputs values exists
    const allInputsValuesExists = newInputsValues.every((value) => value);

    if (allInputsValuesExists) {
      const value = newInputsValues.join('');
      onChange?.(value);
      onFilled?.(value);

      // dimiss keyboard if visible on native
      if (isNative) {
        Keyboard?.dismiss?.();
      }
    }
  };

  const updateInputsValues = () => {
    if (isWeb) {
      newInputsValues.forEach((_value, _index) => {
        inputsRef.current[_index].value = _value;
      });
    }
  };

  const focusNext = () => {
    inputsRef?.current[nextInputPosition]?.focus?.();
  };

  // check if add value length is more than 1
  if (text.length > 1) {
    // filter out only characters (remove space, etc.)
    const filterTextArray = text.split('').filter((val) => val.trim());

    /**
     * @NOTE intention is to replace current input value
     * check if filter text array is more than the inputs values array length
     */
    if (text.length === 2 && filterTextArray.includes(inputValue)) {
      let replaceValue =
        filterTextArray.filter((value) => value !== inputValue)?.[0] || '';

      if (filterTextArray.every((value) => value === inputValue)) {
        replaceValue = filterTextArray?.[0] || '';
      }

      newInputsValues.splice(position, 1, replaceValue);
    } else {
      /**
       * @NOTE intention is to copy otp in inputs
       * check if filter text array is more than the inputs values array length
       */
      if (filterTextArray.length >= inputsValues.length) {
        newInputsValues = filterTextArray;

        // prevent focusing second input
        canFocusNextInput = false;

        onFilledHandler();
      } else {
        // if text array is not more than value array length then replace the one available
        newInputsValues = [
          ...filterTextArray,
          ...inputsValues.slice(filterTextArray.length),
        ];

        // update next input position
        nextInputPosition = filterTextArray.length;
      }
    }
  } else {
    newInputsValues.splice(position, 1, text);
  }

  // if cleared input go to previous input
  if (!text && nextInputPosition >= 0 && canFocusNextInput) {
    focusNext();
  }

  // Update inputs array state
  if (!isLast) {
    if (text && canFocusNextInput) {
      focusNext();
    }
  } else {
    onFilledHandler();
  }

  // reduce values array to inputs length
  newInputsValues.length = inputsLength;

  onChange?.(newInputsValues.join(''));

  updateInputsValues();

  return newInputsValues;
};

type inputOnKeyDownHandler = {
  inputsRef?: any;
  inputsLength: number;
  inputsValues: any[];
  key: string;
  position: number;
};

export const pinInputOnKeyDownHandler = (options: inputOnKeyDownHandler) => {
  const { key, position, inputsValues, inputsLength, inputsRef } = options;

  if (key === 'Backspace') {
    // check if input value doesn't exist
    const inputValue = inputsValues[position];

    const nextInputPosition = position - 1;

    if (!inputValue && position > 0 && position < inputsLength) {
      inputsRef.current[nextInputPosition].focus?.();
    }
  }
};
