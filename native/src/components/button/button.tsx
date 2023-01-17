// @imports
import React from 'react';
import { Text, TextProps } from '../text';
import { width, minWidth, minHeight } from '@/core/styled/system';
import { styled, baseStyled } from '@/core/styled/native';
import {
  buttonDefaultStyle,
  buttonBackgroundColor,
  buttonColor,
  buttonSizeVariant,
  buttonIconSpacing,
} from '@/core/styled/themed/button';

import type { ButtonProps } from './button.types';
import { View } from '../view';

// @exports
export const StyledButton = styled(
  baseStyled('TouchableOpacity', [
    'layout',
    'shadow',
    'grid',
    'position',
    'background',
  ])
)<ButtonProps>`
  ${width}
  ${minWidth}
  ${minHeight}
  background-color: ${buttonBackgroundColor};
  align-self: flex-start;
  ${({ theme }) => buttonDefaultStyle(theme, 'native')}
  ${({ theme }) => buttonSizeVariant(theme)}
`;

export const StyleButtonText = styled(Text)<TextProps>`
  color: ${buttonColor};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    icon,
    rightIcon,
    text,
    textProps,
    colorScheme = 'blue',
    children,
    activeOpacity = 0.8,
    ...otherProps
  } = props;

  return (
    <StyledButton
      activeOpacity={activeOpacity}
      colorScheme={colorScheme}
      {...(otherProps as any)}>
      {icon ? (
        <View mr={buttonIconSpacing[otherProps?.size || 'md']}>{icon}</View>
      ) : null}
      {text ? (
        <StyleButtonText
          textAlign="center"
          colorScheme={colorScheme}
          {...(textProps as any)}>
          {text}
        </StyleButtonText>
      ) : (
        children
      )}
      {rightIcon ? (
        <View ml={buttonIconSpacing[otherProps?.size || 'md']}>
          {rightIcon}
        </View>
      ) : null}
    </StyledButton>
  );
};
