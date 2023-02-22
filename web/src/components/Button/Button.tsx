// @imports
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

export const Button = (props: ButtonProps) => {
  const {
    text,
    icon,
    rightIcon,
    size = buttonDefaults.size,
    colorScheme = buttonDefaults.colorScheme,
    ...otherProps
  } = props;

  return (
    <StyledButton
      colorScheme={colorScheme}
      size={size}
      {...(otherProps as any)}>
      {icon ? (
        <View as="span" mr={buttonIconSpacing[size]}>
          {icon}
        </View>
      ) : null}
      {text}
      {rightIcon ? (
        <View as="span" ml={buttonIconSpacing[size]}>
          {rightIcon}
        </View>
      ) : null}
    </StyledButton>
  );
};
