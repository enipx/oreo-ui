// @imports
import { styled } from '@oreo-ui/core/dist/styled/web';

import { View } from '../view';
import type { ContainerProps } from './container.types';
import { componentDefaultStyle } from '@oreo-ui/core/dist/styled/themed/base';
import { forwardRef } from 'react';

// @exports
export const StyledContainer = styled(View)<ContainerProps>`
  margin: 0 auto;
  width: 100%;
  ${({ type, theme }) => {
    if (type) {
      const { breakpoints } = theme;

      return `max-width: ${breakpoints?.[type] || type}`;
    }

    return '';
  }}
  ${(props) => componentDefaultStyle({ ...props } as any)}
`;

export const Container = forwardRef((props: ContainerProps, ref) => {
  return <StyledContainer {...props} ref={ref} />;
});
