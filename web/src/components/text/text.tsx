// @imports

import { typography, border } from '@/core/styled/system';
import { textDefaultStyle } from '@/core/styled/themed/text';
import { styled, baseStyled } from '@/core/styled/web';

import type { TextProps } from './text.types';

// @exports
export const Text = styled(baseStyled('p'))<TextProps>`
  ${(props) => textDefaultStyle({ ...props } as any)}
  ${typography}
  ${border}
`;
