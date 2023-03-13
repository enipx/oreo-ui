// @imports
import type { BadgeProps } from './badge.types';

import { badgeDefaultStyle } from '@/core/styled/themed/badge';
import { styled, baseStyled } from '@/core/styled/native';
import { space, background, typography, border } from '@/core/styled/system';

// @exports
export const Badge = styled(baseStyled('Text'))<BadgeProps>`
  ${(props) => badgeDefaultStyle({ ...props, type: 'native' } as any)}
  ${space}
  ${background}
  ${typography}
  ${border}
`;

Badge.defaultProps = {
  fontSize: 'xs',
};
