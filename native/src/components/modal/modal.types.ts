import type { ModalProps as DefaultModalProps } from 'react-native';
import type { ModalThemedDefaultProps } from '@/core/styled/components.types';
import type { ButtonProps } from '../button';

export interface ModalProps
  extends DefaultModalProps,
    Omit<ModalThemedDefaultProps, 'style'> {
  /**
   * update footer close button props
   */
  footerCloseButtonProps?: ButtonProps;
  /**
   * update footer confirm button props
   */
  footerConfirmButtonProps?: ButtonProps;
}
