// @imports
import { color } from '@oreo-ui/core/dist/styled/system';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/web';
import { viewDefaultStyle } from '@oreo-ui/core/dist/styled/themed/view';
import { componentDefaultStyle } from '@oreo-ui/core/dist/styled/themed/base';

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
