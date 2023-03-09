// @imports
import type { BadgeProps } from './badge.types';

import { badgeDefaultStyle } from '@/core/styled/themed/badge';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const Badge = styled(
  baseStyled('span', ['layout', 'space'])
)<BadgeProps>`
  ${(props) => badgeDefaultStyle({ ...props } as any)}
`;

Badge.defaultProps = {
  fontSize: 'xs',
  variant: 'solid',
};
