// @imports

import { typography, border } from '@oreo-ui/core/dist/styled/system';
import { textDefaultStyle } from '@oreo-ui/core/dist/styled/themed/text';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/web';
import { componentDefaultStyle } from '@oreo-ui/core/dist/styled/themed/base';

import type { TextProps } from './text.types';
import { forwardRef } from 'react';

// @exports
export const StyledText = styled(baseStyled('p'))<TextProps>`
  ${(props) => textDefaultStyle({ ...props } as any)}
  ${(props) => componentDefaultStyle({ ...props } as any)}
  ${typography}
  ${border}
`;

export const Text = forwardRef((props: TextProps, ref) => {
  return <StyledText {...props} ref={ref} />;
});
