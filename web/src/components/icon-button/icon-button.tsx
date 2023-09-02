// @imports

import { allStyleWithoutSize } from '@oreo-ui/core/dist/styled/system';
import { componentDefaultStyle } from '@oreo-ui/core/dist/styled/themed/base';
import {
  iconButtonDefaultStyle,
  iconButtonSizeVariant,
  buttonStateVariant,
  iconButtonDefaults,
} from '@oreo-ui/core/dist/styled/themed/button';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/web';

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
