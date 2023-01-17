// @imports
import { View } from '../view';
import type { ButtonProps } from './button.types';

import {
  buttonDefaultStyle,
  buttonBackgroundColor,
  buttonColor,
  buttonIconSpacing,
  buttonSizeVariant,
} from '@/core/styled/themed/button';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const StyledButton = styled(
  baseStyled('button', ['shadow', 'grid', 'position', 'background'])
)<ButtonProps>`
  background-color: ${buttonBackgroundColor};
  color: ${buttonColor};
  ${({ theme }) => buttonDefaultStyle(theme)}
  ${({ theme }) => buttonSizeVariant(theme)}
`;

export const Button: React.FC<ButtonProps> = (props) => {
  const { text, icon, rightIcon, colorScheme = 'blue', ...otherProps } = props;

  return (
    <StyledButton colorScheme={colorScheme} {...(otherProps as any)}>
      {icon ? (
        <View as="span" mr={buttonIconSpacing[otherProps?.size || 'md']}>
          {icon}
        </View>
      ) : null}
      {text}
      {rightIcon ? (
        <View as="span" ml={buttonIconSpacing[otherProps?.size || 'md']}>
          {rightIcon}
        </View>
      ) : null}
    </StyledButton>
  );
};
