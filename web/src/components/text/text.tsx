// @imports

import { typography, border } from '@/core/styled/system';
import { textDefaultStyle } from '@/core/styled/themed/text';
import { styled, baseStyled } from '@/core/styled/web';
import { componentDefaultStyle } from '@/core/styled/themed/base';

import type { TextProps } from './text.types';

// @exports
export const StyledText = styled(baseStyled('p'))<TextProps>`
  ${(props) => textDefaultStyle({ ...props } as any)}
  ${(props) => componentDefaultStyle({ ...props } as any)}
  ${typography}
  ${border}
`;

export const Text = (props: TextProps) => {
  return <StyledText {...props} />;
};
