// @imports
import { color } from '@/core/styled/system';
import { styled, baseStyled } from '@/core/styled/web';
import { viewDefaultStyle } from '@/core/styled/themed/view';
import { componentDefaultStyle } from '@/core/styled/themed/base';

import type { ViewProps } from './view.types';
import { forwardRef } from 'react';

// @exports
export const StyledView = styled(baseStyled('div'))<ViewProps>`
  ${(props) => viewDefaultStyle({ ...props } as any)}
  ${(props) => componentDefaultStyle({ ...props } as any)}
  ${color}
`;

export const View = forwardRef((props: ViewProps, ref) => {
  return <StyledView {...props} ref={ref} />;
});
