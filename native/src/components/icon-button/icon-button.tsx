// @imports
import React from 'react';
import { Text, TextProps } from '../text';
import {
  width,
  minWidth,
  minHeight,
  height,
  border,
} from '@/core/styled/system';
import { styled, baseStyled } from '@/core/styled/native';
import {
  iconButtonDefaultStyle,
  buttonBackgroundColor,
  buttonColor,
  iconButtonSizeVariant,
  buttonStateVariant,
  iconButtonDefaults,
} from '@/core/styled/themed/button';

import type { IconButtonProps } from './icon-button.types';

// @exports
export const StyledIconButton = styled(
  baseStyled('TouchableOpacity', [
    'layout',
    'shadow',
    'grid',
    'position',
    'background',
  ])
)<IconButtonProps>`
  ${width}
  ${minWidth}
  ${height}
  ${minHeight}
  align-self: flex-start;
  background-color: ${buttonBackgroundColor};
  ${({ theme, disabled }) =>
    iconButtonDefaultStyle({ theme, disabled, type: 'native' })}
  ${({ theme, rounded }) => iconButtonSizeVariant({ theme, rounded })}
  ${({ theme, colorScheme }) => buttonStateVariant({ theme, colorScheme })}
  ${border}
`;

export const StyleButtonText = styled(Text)<TextProps>`
  color: ${buttonColor};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const IconButton: React.FC<IconButtonProps> = (props) => {
  const {
    icon,
    colorScheme = iconButtonDefaults.colorScheme,
    size = iconButtonDefaults.size,
    activeOpacity = iconButtonDefaults.activeOpacity,
    ...otherProps
  } = props;

  return (
    <StyledIconButton
      activeOpacity={activeOpacity}
      colorScheme={colorScheme}
      size={size}
      {...(otherProps as any)}>
      {icon ? icon : null}
    </StyledIconButton>
  );
};
