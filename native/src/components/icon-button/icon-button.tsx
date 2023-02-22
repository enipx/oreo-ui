// @imports
import React from 'react';
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
  ${(props) => iconButtonDefaultStyle({ ...props, type: 'native' } as any)}
  ${(props) => iconButtonSizeVariant({ ...props, type: 'native' } as any)}
  ${(props) => buttonStateVariant({ ...props, type: 'native' } as any)}
  ${border}
  ${width}
  ${minWidth}
  ${height}
  ${minHeight}
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
