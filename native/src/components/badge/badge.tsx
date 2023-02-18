// @imports
import type { BadgeProps } from './badge.types';

import { badgeDefaultStyle } from '@/core/styled/themed/badge';
import { styled, baseStyled } from '@/core/styled/native';

// @exports
export const Badge = styled(
  baseStyled('Text', ['layout', 'space'])
)<BadgeProps>`
  ${(props) => badgeDefaultStyle({ ...props, type: 'native' } as any)}
`;

Badge.defaultProps = {
  fontSize: 'xs',
};
