// @imports
import type { IconButtonProps } from './icon-button.types';

import { border } from '@/core/styled/system';
import {
  iconButtonDefaultStyle,
  buttonBackgroundColor,
  iconButtonSizeVariant,
  buttonHoverBackgroundColor,
  buttonHoverBorderColor,
  buttonStateVariant,
} from '@/core/styled/themed/button';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const StyledIconButton = styled(
  baseStyled('button', ['shadow', 'grid', 'position', 'background'])
)<IconButtonProps>`
  background-color: ${buttonBackgroundColor};
  ${({ theme, disabled }) => iconButtonDefaultStyle({ theme, disabled })};
  ${({ theme, rounded }) => iconButtonSizeVariant({ theme, rounded })};

  :hover,
  :active,
  :focus {
    background-color: ${buttonHoverBackgroundColor};
    border-color: ${buttonHoverBorderColor};
  }

  ${({ theme, colorScheme }) => buttonStateVariant({ theme, colorScheme })}
  ${border}
`;

export const IconButton: React.FC<IconButtonProps> = (props) => {
  const {
    icon,
    size = 'md',
    colorScheme = 'transparent',
    ...otherProps
  } = props;

  return (
    <StyledIconButton
      size={size}
      colorScheme={colorScheme}
      {...(otherProps as any)}>
      {icon ? icon : null}
    </StyledIconButton>
  );
};
