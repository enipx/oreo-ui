// @imports

import { allStyleWithoutSize } from '@/core/styled/system';
import { componentDefaultStyle } from '@/core/styled/themed/base';
import {
  iconButtonDefaultStyle,
  iconButtonSizeVariant,
  buttonStateVariant,
  iconButtonDefaults,
} from '@/core/styled/themed/button';
import { styled, baseStyled } from '@/core/styled/web';

import type { IconButtonProps } from './icon-button.types';

// @exports
export const StyledIconButton = styled(
  baseStyled('button', ['shadow', 'grid', 'position', 'background'])
)<IconButtonProps>`
  ${(props) => iconButtonDefaultStyle({ ...props } as any)};
  ${(props) => iconButtonSizeVariant({ ...props } as any)};
  ${(props) => buttonStateVariant({ ...props } as any)};
  ${(props) => componentDefaultStyle({ ...props } as any)}
  ${allStyleWithoutSize()}
`;

export const IconButton: React.FC<IconButtonProps> = (props) => {
  const {
    icon,
    size = iconButtonDefaults.size,
    colorScheme = iconButtonDefaults.colorScheme,
    children,
    disabled: _disabled,
    ...otherProps
  } = props;

  const disabled = _disabled || props?.state === 'disabled';

  return (
    <StyledIconButton
      size={size}
      colorScheme={colorScheme}
      disabled={disabled}
      {...(otherProps as any)}>
      {icon ? icon : children || null}
    </StyledIconButton>
  );
};
