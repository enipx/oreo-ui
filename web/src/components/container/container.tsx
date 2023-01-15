// @imports
import { View } from '@components/view';

import type { ContainerProps } from './container.types';

import { getDimensionsUnitHandler } from '@/core/helpers/layout';
import { styled } from '@/core/styled/web';

// @exports
export const Container = styled(View)<ContainerProps>`
  margin: 0 auto;
  width: 100%;
  ${({ type, theme }) => {
    if (type) {
      const { breakpoints } = theme;
      const { rem } = getDimensionsUnitHandler(breakpoints[type]);

      return `max-width: ${rem}`;
    }

    return '';
  }}
`;
