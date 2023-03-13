// @imports
import type { BadgeProps } from './badge.types';

import { space, background, typography, border } from '@/core/styled/system';
import { badgeDefaultStyle } from '@/core/styled/themed/badge';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const Badge = styled(baseStyled('span'))<BadgeProps>`
  ${(props) => badgeDefaultStyle({ ...props } as any)}
  ${space}
  ${background}
  ${typography}
  ${border}
`;

Badge.defaultProps = {
  fontSize: 'xs',
  variant: 'solid',
};
