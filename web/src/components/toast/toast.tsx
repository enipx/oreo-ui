// @imports
import { forwardRef, useImperativeHandle, useCallback, useRef } from 'react';

import { Alert } from '../alert';
import { Portal } from '../portal';
import type { useToastProps, ToastProps } from './toast.types';
import { useToast } from './use-toast';

import { toastContainerDefaultStyle } from '@/core/styled/themed/toast';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const ToastContainer = styled(baseStyled('div'))<ToastProps>`
  ${({ theme }) => toastContainerDefaultStyle({ theme })}
`;

export const Toast = () => {
  return (
    <Portal>
      <ToastContainer>
        <Alert />
      </ToastContainer>
    </Portal>
  );
};
