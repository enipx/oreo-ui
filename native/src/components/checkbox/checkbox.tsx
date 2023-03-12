// @imports
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { InputHint, InputLabel } from '../input/input';
import { View } from '../view';
import { StyledButton } from '../button/button';
import type {
  CheckboxProps,
  CheckboxCheckedIconSizeType,
} from './checkbox.types';

import {
  checkboxDefaults,
  checkboxDefaultStyle,
  checkboxSizeVariant,
} from '@/core/styled/themed/checkbox';
import { styled } from '@/core/styled/native';
import { CheckedIcon, IndeterminateIcon } from './checkbox-icon';

// @exports
export const StyledCheckbox = styled(StyledButton)<CheckboxProps>`
  ${(props) => checkboxDefaultStyle({ ...props, type: 'native' })};
  ${(props) => checkboxSizeVariant({ ...props, type: 'native' })};
`;

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    size = checkboxDefaults.size as CheckboxProps['size'],
    description,
    label,
    checked: defaultChecked,
    indeterminate,
    onChange,
    ...otherProps
  } = props;

  const activeOpacity = otherProps.disabled
    ? 1
    : checkboxDefaults.activeOpacity;

  const [checked, setChecked] = useState(defaultChecked || false);

  const onPressHandler = () => {
    if (!otherProps.disabled) {
      onChange?.(!checked);
      setChecked(!checked);
    }
  };

  const renderLabel = () => {
    if (label) {
      return (
        <View ml="md">
          <InputLabel label={label} mb="0" />
          <InputHint state="default" hint={description} mt="0" />
        </View>
      );
    }

    return null;
  };

  const renderIcon = () => {
    const iconSize: CheckboxCheckedIconSizeType = {
      sm: '5xs',
      md: '3xs',
      lg: '2xs',
    };

    if (checked) {
      return indeterminate ? (
        <IndeterminateIcon size={iconSize[size || 'md']} />
      ) : (
        <CheckedIcon size={iconSize[size || 'md']} />
      );
    }

    return null;
  };

  return (
    <TouchableOpacity onPress={onPressHandler} activeOpacity={activeOpacity}>
      <View flexDirection="row">
        <View flexCenter>
          <StyledCheckbox
            size={size}
            {...(otherProps as any)}
            checked={checked}
            onPress={onPressHandler}
            activeOpacity={activeOpacity}>
            {renderIcon()}
          </StyledCheckbox>
        </View>
        {renderLabel()}
      </View>
    </TouchableOpacity>
  );
};
