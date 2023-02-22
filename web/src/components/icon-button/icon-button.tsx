// @imports
import type { IconButtonProps } from './icon-button.types';

import { border } from '@/core/styled/system';
import {
  iconButtonDefaultStyle,
  iconButtonSizeVariant,
  buttonStateVariant,
  iconButtonDefaults,
} from '@/core/styled/themed/button';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const StyledIconButton = styled(
  baseStyled('button', ['shadow', 'grid', 'position', 'background'])
)<IconButtonProps>`
  ${(props) => iconButtonDefaultStyle({ ...props } as any)};
  ${(props) => iconButtonSizeVariant({ ...props } as any)};
  ${(props) => buttonStateVariant({ ...props } as any)};
  ${border}
`;

export const IconButton: React.FC<IconButtonProps> = (props) => {
  const {
    icon,
    size = iconButtonDefaults.size,
    colorScheme = iconButtonDefaults.colorScheme,
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
