// @imports
import { View } from '@components/view';

import type { ContainerProps } from './container.types';

import { styled } from '@/core/styled/web';

// @exports
export const Container = styled(View)<ContainerProps>`
  margin: 0 auto;
  width: 100%;
  ${({ type, theme }) => {
    if (type) {
      const { breakpoints } = theme;

      return `max-width: ${breakpoints[type]}`;
    }

    return '';
  }}
`;
