// @imports
import { View } from '@components/view';

import type { ModalProps } from './modal.types';

import { styled } from '@/core/styled/web';

// @exports
export const Modal = styled(View)<ModalProps>`
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
