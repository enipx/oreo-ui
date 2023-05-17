// @imports

import {
  space,
  background,
  typography,
  border,
  compose,
} from '@/core/styled/system';
import { badgeDefaultStyle } from '@/core/styled/themed/badge';
import { styled, baseStyled } from '@/core/styled/web';
import { componentDefaultStyle } from '@/core/styled/themed/base';

import type { BadgeProps } from './badge.types';

// @exports
export const StyledBadge = styled(baseStyled('span'))<BadgeProps>`
  ${(props) => badgeDefaultStyle({ ...props } as any)}
  ${(props) => componentDefaultStyle({ ...props } as any)}
  ${compose(space, background, typography, border)}
`;

export const Badge: React.FC<BadgeProps> = (props) => {
  return <StyledBadge {...props} />;
};

Badge.defaultProps = {
  fontSize: 'xs',
  variant: 'solid',
};
