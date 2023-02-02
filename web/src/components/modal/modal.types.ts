import type { ButtonProps } from '../button';

import type { ModalThemedDefaultProps } from '@/core/styled/components.types';

export interface ModalProps extends ModalThemedDefaultProps {
  /**
   * update footer close button props
   */
  footerCloseButtonProps?: ButtonProps;
  /**
   * update footer confirm button props
   */
  footerConfirmButtonProps?: ButtonProps;
}
