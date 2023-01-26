// @imports
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { StyledHintText } from '../input/input';
import { Text } from '../text';
import { View } from '../view';
import { StyledButton } from '../button/button';
import type {
  RadioProps,
  RadioCheckedIconSizeType,
  RadioDataType,
} from './radio.types';

import {
  radioDefaults,
  radioDefaultStyle,
  radioSizeVariant,
  radioDataExist,
} from '@/core/styled/themed/radio';
import { styled } from '@/core/styled/native';
import { isArrayLastItem } from '@/core/helpers/base';
import { divide } from '@/core/helpers/number';

// @exports
export const StyledRadio = styled(StyledButton)<RadioProps>`
  ${({ theme, disabled, checked }) =>
    radioDefaultStyle({ theme, disabled, checked, type: 'native' })};
  ${({ theme, disabled }) =>
    radioSizeVariant({ theme, disabled, type: 'native' })};
`;

export const RadioControl: React.FC<RadioProps> = (props) => {
  const {
    size = radioDefaults.size as RadioProps['size'],
    description,
    label,
    checked,
    onPress,
    ...otherProps
  } = props;

  const activeOpacity = otherProps.disabled ? 1 : radioDefaults.activeOpacity;

  const renderLabel = () => {
    if (label) {
      return (
        <View ml="md">
          <Text fontWeight="medium" fontSize="sm">
            {label}
          </Text>
          {description ? (
            <StyledHintText state="default" fontSize="xs">
              {description}
            </StyledHintText>
          ) : null}
        </View>
      );
    }

    return null;
  };

  const renderIcon = () => {
    const iconSizes: RadioCheckedIconSizeType = {
      sm: 5,
      md: 6,
      lg: 7,
    };

    const iconSize = iconSizes[size || 'md'];

    const borderRadius = divide(iconSize, 2);

    if (checked) {
      return <View bg="white" size={iconSize} borderRadius={borderRadius} />;
    }

    return null;
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
      <View flexDirection="row">
        <View flexCenter>
          <StyledRadio
            size={size}
            {...(otherProps as any)}
            onPress={onPress}
            checked={checked}
            activeOpacity={radioDefaults.activeOpacity}>
            {renderIcon()}
          </StyledRadio>
        </View>
        {renderLabel()}
      </View>
    </TouchableOpacity>
  );
};

export const Radio: React.FC<RadioProps> = (props) => {
  const { data, horizontal, defaultValue, onChange, ...otherProps } = props;

  const [value, setValue] = useState(defaultValue);

  const onPressHandler = (item: RadioDataType) => {
    const newValue = item.value || item.id;
    setValue(newValue);

    onChange?.(item);
  };

  const isItemChecked = (item: RadioDataType) => {
    return item.value ? item.value === value : item.id === value;
  };

  if (radioDataExist(data)) {
    return (
      <View flexDirection={horizontal ? 'row' : undefined}>
        {data?.map((radioItem, index) => {
          const isLast = isArrayLastItem({ array: data, index });

          const checked = isItemChecked(radioItem);

          return (
            <View
              mb={isLast || horizontal ? 'none' : 'base'}
              mr={isLast || !horizontal ? 'none' : 'base'}>
              <RadioControl
                {...otherProps}
                {...radioItem}
                checked={checked}
                onPress={() => {
                  onPressHandler(radioItem);
                }}
              />
            </View>
          );
        })}
      </View>
    );
  }

  return <RadioControl {...otherProps} />;
};
