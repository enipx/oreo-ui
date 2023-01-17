// @imports
import { View } from '../view';
import type { ButtonProps } from './button.types';

import {
  buttonDefaultStyle,
  buttonBackgroundColor,
  buttonHoverBackgroundColor,
  buttonHoverBorderColor,
  buttonColor,
  buttonIconSpacing,
  buttonSizeVariant,
  buttonStateVariant,
} from '@/core/styled/themed/button';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const StyledButton = styled(
  baseStyled('button', ['shadow', 'grid', 'position', 'background'])
)<ButtonProps>`
  ${({ theme, disabled }) => buttonDefaultStyle({ theme, disabled })}
  ${({ theme }) => buttonSizeVariant(theme)}
  background-color: ${buttonBackgroundColor};
  color: ${buttonColor};
  border: 1px solid ${buttonBackgroundColor};

  :hover,
  :active,
  :focus {
    background-color: ${buttonHoverBackgroundColor};
    border-color: ${buttonHoverBorderColor};
  }

  ${({ theme, colorScheme }) => buttonStateVariant({ theme, colorScheme })}
`;

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    text,
    icon,
    rightIcon,
    size = 'md',
    colorScheme = 'blue',
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
