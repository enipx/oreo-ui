// @imports
import React from 'react';
import { Spinner } from '../spinner';
import { Text, TextProps } from '../text';
import { width, minWidth, minHeight, height } from '@/core/styled/system';
import { styled, baseStyled } from '@/core/styled/native';
import {
  buttonDefaultStyle,
  buttonSizeVariant,
  buttonStateVariant,
  buttonIconSpacing,
  buttonTextsize,
  buttonDefaults,
  buttonTextDefaultStyle,
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
  ${(props) => buttonDefaultStyle({ ...props, packageType: 'native' } as any)}
  ${(props) => buttonSizeVariant({ ...props, packageType: 'native' } as any)}
  ${(props) => buttonStateVariant({ ...props, packageType: 'native' } as any)}
  ${width}
  ${minWidth}
  ${height}
  ${minHeight}
`;

export const StyleButtonText = styled(Text)<TextProps>`
  ${(props) =>
    buttonTextDefaultStyle({ ...props, packageType: 'native' } as any)}
`;

export const BaseButton = styled(
  baseStyled('TouchableOpacity', [
    'layout',
    'shadow',
    'grid',
    'position',
    'background',
  ])
)<ButtonProps>``;

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    icon,
    rightIcon,
    text,
    textProps,
    colorScheme,
    children,
    size = buttonDefaults.size,
    activeOpacity,
    variant,
    loading,
    loadingText,
    loadingIcon,
    ...otherProps
  } = props;

  const renderChildren = () => {
    if (loading) {
      return (
        <>
          {loadingIcon || (
            <View
              flexCenter
              flexDirection="row"
              mr={loadingText ? buttonIconSpacing[size] : undefined}>
              <Spinner size="xs" color="white" />
            </View>
          )}
          {loadingText ? (
            <StyleButtonText
              textAlign="center"
              colorScheme={colorScheme}
              fontSize={buttonTextsize[size]}
              variant={variant}
              buttonSize={size}
              {...(textProps as any)}>
              {loadingText}
            </StyleButtonText>
          ) : null}
        </>
      );
    }

    return (
      <>
        {icon ? <View mr={buttonIconSpacing[size]}>{icon}</View> : null}
        {text ? (
          <StyleButtonText
            textAlign="center"
            colorScheme={colorScheme}
            fontSize={buttonTextsize[size]}
            variant={variant}
            buttonSize={size}
            {...(textProps as any)}>
            {text}
          </StyleButtonText>
        ) : (
          children
        )}
        {rightIcon ? (
          <View ml={buttonIconSpacing[size]}>{rightIcon}</View>
        ) : null}
      </>
    );
  };

  return (
    <StyledButton
      activeOpacity={activeOpacity}
      colorScheme={colorScheme}
      variant={variant}
      size={size}
      {...(otherProps as any)}>
      {renderChildren()}
    </StyledButton>
  );
};

BaseButton.defaultProps = {
  activeOpacity: 1,
};

Button.defaultProps = {
  activeOpacity: buttonDefaults.activeOpacity,
  size: 'md',
  colorScheme: 'blue',
};
