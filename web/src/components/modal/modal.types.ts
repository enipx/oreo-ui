import type {
  ModalThemedDefaultProps,
  ViewThemedStyledProps,
} from '@oreo-ui/core/dist/styled/components.types';

import type { ButtonProps } from '../button';

export interface ModalProps
  extends ModalThemedDefaultProps,
    Omit<ViewThemedStyledProps, keyof ModalThemedDefaultProps> {
  /**
   * update footer close button props
   */
  footerCloseButtonProps?: ButtonProps;
  /**
   * update footer confirm button props
   */
  footerConfirmButtonProps?: ButtonProps;
}

export interface ModalContextProps {
  show: (content: ModalProps) => void;
  hide: () => void;
}

export type useModalProps = () => ModalContextProps;

export interface ModalProviderProps {
  children?: React.ReactNode;
}
