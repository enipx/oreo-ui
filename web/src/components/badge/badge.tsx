// @imports

import { allStyleWithoutSize } from '@/core/styled/system';
import { badgeDefaultStyle } from '@/core/styled/themed/badge';
import { styled, baseStyled } from '@/core/styled/web';
import { componentDefaultStyle } from '@/core/styled/themed/base';

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
