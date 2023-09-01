// @imports
import type { BadgeProps } from './badge.types';

import { badgeDefaultStyle } from '@oreo-ui/core/dist/styled/themed/badge';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/native';
import { space, background, typography, border } from '@oreo-ui/core/dist/styled/system';

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
