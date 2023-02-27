// @imports
import { forwardRef } from 'react';

import { View } from '../view';
import type { ButtonProps } from './button.types';

import {
  buttonDefaultStyle,
  buttonIconSpacing,
  buttonSizeVariant,
  buttonStateVariant,
  buttonDefaults,
} from '@/core/styled/themed/button';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const StyledButton = styled(
  baseStyled('button', ['shadow', 'grid', 'position', 'background'])
)<ButtonProps>`
  ${(props) => buttonDefaultStyle({ ...props } as any)}
  ${(props) => buttonSizeVariant({ ...props } as any)}
  ${(props) => buttonStateVariant({ ...props } as any)}
`;

export const Button = forwardRef((props: ButtonProps, ref) => {
  const {
    text,
    icon,
    rightIcon,
    size = buttonDefaults.size,
    colorScheme = buttonDefaults.colorScheme,
    children,
    ...otherProps
  } = props;

  return (
    <StyledButton
      colorScheme={colorScheme}
      size={size}
      ref={ref}
      {...(otherProps as any)}>
      {icon ? (
        <View as="span" mr={buttonIconSpacing[size]}>
          {icon}
        </View>
      ) : null}
      {children || text}
      {rightIcon ? (
        <View as="span" ml={buttonIconSpacing[size]}>
          {rightIcon}
        </View>
      ) : null}
    </StyledButton>
  );
});
