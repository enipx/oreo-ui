// @imports
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { InputHint, InputLabel } from '../input/input';
import { View } from '../view';
import { StyledButton } from '../button/button';
import type { RadioProps, RadioDataType } from './radio.types';

import {
  radioDefaults,
  radioDefaultStyle,
  radioSizeVariant,
  radioDataExist,
} from '@/core/styled/themed/radio';
import { styled } from '@/core/styled/native';
import { isArrayLastItem } from '@/core/helpers/base';
import { divide } from '@/core/helpers/number';
import { useModeTheme } from '../../hooks';

// @exports
export const StyledRadio = styled(StyledButton)<RadioProps>`
  ${(props) => radioDefaultStyle({ ...props, packageType: 'native' } as any)};
  ${(props) => radioSizeVariant({ ...props, packageType: 'native' } as any)};
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

  const { bg, theme } = useModeTheme();

  const activeOpacity = otherProps.disabled ? 1 : radioDefaults.activeOpacity;

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
    const iconSizes = theme.components.radio.checked.width;

    const iconSize = iconSizes[size || 'md'];

    const borderRadius = divide(iconSize, 2);

    if (checked) {
      return <View bg={bg} size={iconSize} borderRadius={borderRadius} />;
    }

    return null;
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
      <View flexDirection="row" flexCenterX>
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

          const key = `${radioItem.value || radioItem.id}-${index}`;

          const checked = isItemChecked(radioItem);

          return (
            <View
              key={key}
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
