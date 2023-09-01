// @imports

import { allStyleWithoutSize } from '@oreo-ui/core/dist/styled/system';
import { badgeDefaultStyle } from '@oreo-ui/core/dist/styled/themed/badge';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/web';
import { componentDefaultStyle } from '@oreo-ui/core/dist/styled/themed/base';

import type { BadgeProps } from './badge.types';
import { forwardRef } from 'react';

// @exports
export const StyledBadge = styled(baseStyled('span'))<BadgeProps>`
  ${(props) => badgeDefaultStyle({ ...props } as any)}
  ${(props) => componentDefaultStyle({ ...props } as any)}
  ${allStyleWithoutSize()}
`;

export const Badge: React.FC<BadgeProps> = forwardRef((props, ref) => {
  return <StyledBadge {...props} ref={ref} />;
});

Badge.defaultProps = {
  fontSize: 'xs',
  variant: 'solid',
};
