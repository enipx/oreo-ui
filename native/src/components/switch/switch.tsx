// @imports
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { StyledHintText } from '../input/input';
import { Text } from '../text';
import { View } from '../view';
import { StyledButton } from '../button/button';
import type { SwitchProps } from './switch.types';

import {
  switchDefaults,
  switchDefaultStyle,
  switchBaseStyle,
  switchSizeVariant,
  switchControlBaseStyle,
} from '@/core/styled/themed/switch';
import { baseStyled, styled } from '@/core/styled/native';

// @exports
export const StyledSwitch = styled(StyledButton)<SwitchProps>`
  ${({ theme, disabled, checked }) =>
    switchDefaultStyle({ theme, disabled, checked, type: 'native' })};
  ${({ theme, disabled, checked, size }) =>
    switchBaseStyle({ theme, disabled, checked, size, type: 'native' })};
  ${({ theme, disabled }) =>
    switchSizeVariant({ theme, disabled, type: 'native' })};
`;

export const SwitchControl = styled(baseStyled('View'))`
  ${({ theme, disabled, checked, size }) =>
    switchControlBaseStyle({ theme, disabled, checked, size, type: 'native' })};
`;

export const Switch: React.FC<SwitchProps> = (props) => {
  const {
    size = switchDefaults.size as SwitchProps['size'],
    description,
    label,
    checked: defaultChecked,
    onChange,
    ...otherProps
  } = props;

  const [checked, setChecked] = useState(defaultChecked || false);

  const activeOpacity = otherProps.disabled ? 1 : switchDefaults.activeOpacity;

  const onPressHandler = () => {
    if (!otherProps.disabled) {
      setChecked(!checked);
      onChange?.(!checked);
    }
  };

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
    return <SwitchControl checked={checked} size={size} />;
  };

  return (
    <TouchableOpacity onPress={onPressHandler} activeOpacity={activeOpacity}>
      <View flexDirection="row">
        <View flexCenter>
          <StyledSwitch
            size={size}
            {...(otherProps as any)}
            onPress={onPressHandler}
            checked={checked}
            activeOpacity={switchDefaults.activeOpacity}>
            {renderIcon()}
          </StyledSwitch>
        </View>
        {renderLabel()}
      </View>
    </TouchableOpacity>
  );
};
