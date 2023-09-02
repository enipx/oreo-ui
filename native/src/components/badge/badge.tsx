// @imports
import React, { forwardRef } from 'react';
import type { BadgeProps } from './badge.types';

import { badgeDefaultStyle } from '@oreo-ui/core/dist/styled/themed/badge';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/native';
import {
  space,
  background,
  typography,
  border,
} from '@oreo-ui/core/dist/styled/system';

// @exports
export const StyledBadge = styled(baseStyled('Text'))<BadgeProps>`
  ${(props) => badgeDefaultStyle({ ...props, type: 'native' } as any)}
  ${space}
  ${background}
  ${typography}
  ${border}
`;

export const Badge: React.FC<BadgeProps> = forwardRef((props, ref) => {
  return <StyledBadge {...props} ref={ref} />;
});

Badge.defaultProps = {
  fontSize: 'xs',
};
