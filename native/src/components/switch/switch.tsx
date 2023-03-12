// @imports
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { InputHint, InputLabel } from '../input/input';
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
  ${(props) => switchDefaultStyle({ ...props, type: 'native' })};
  ${(props) => switchBaseStyle({ ...props, type: 'native' })};
  ${(props) => switchSizeVariant({ ...props, type: 'native' })};
`;

export const SwitchControl = styled(baseStyled('View'))`
  ${(props) => switchControlBaseStyle({ ...props, type: 'native' })};
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
          <InputLabel label={label} mb="0" />
          <InputHint state="default" hint={description} mt="0" />
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
