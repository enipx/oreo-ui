// @imports
import { styled } from '@/core/styled/web';

import { View } from '../view';
import type { ContainerProps } from './container.types';
import { componentDefaultStyle } from '@/core/styled/themed/base';

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

export const Container = (props: ContainerProps) => {
  return <StyledContainer {...props} />;
};
