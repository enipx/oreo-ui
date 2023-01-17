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
  buttonStateVariant,
  buttonIconSpacing,
  buttonTextsize,
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
  ${({ theme, disabled }) =>
    buttonDefaultStyle({ theme, disabled, type: 'native' })}
  ${({ theme }) => buttonSizeVariant(theme)}
  ${({ theme }) => buttonStateVariant({ theme })}
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
    size = 'md',
    activeOpacity = 0.8,
    ...otherProps
  } = props;

  return (
    <StyledButton
      activeOpacity={activeOpacity}
      colorScheme={colorScheme}
      size={size}
      {...(otherProps as any)}>
      {icon ? <View mr={buttonIconSpacing[size]}>{icon}</View> : null}
      {text ? (
        <StyleButtonText
          textAlign="center"
          colorScheme={colorScheme}
          fontSize={buttonTextsize[size]}
          {...(textProps as any)}>
          {text}
        </StyleButtonText>
      ) : (
        children
      )}
      {rightIcon ? <View ml={buttonIconSpacing[size]}>{rightIcon}</View> : null}
    </StyledButton>
  );
};
