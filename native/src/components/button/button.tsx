import React from 'react';
import {
  StyleProp,
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';

import type { ButtonProps, ButtonSizesType } from './button.types';

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  color,
  style,
  ...props
}: ButtonProps) => {
  const sizes: { [key in ButtonSizesType]: StyleProp<TextStyle> } = {
    small: {
      fontSize: 12,
    },
    medium: {
      fontSize: 14,
    },
    large: {
      fontSize: 16,
    },
  };

  const styles: StyleProp<ViewStyle> = style || {
    borderRadius: 32,
    backgroundColor: backgroundColor || primary ? '#1ea7fd' : '#eeeeee',
    borderWidth: 0,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  };

  const textStyle: StyleProp<TextStyle> = {
    color: color || (primary ? '#fff' : '#000'),
  };

  return (
    <TouchableOpacity style={styles} {...props}>
      <Text style={[textStyle, sizes[size]]}>{label}</Text>
    </TouchableOpacity>
  );
};
