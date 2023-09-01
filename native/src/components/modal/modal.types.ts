import type { ModalProps as DefaultModalProps } from 'react-native';
import type { ModalThemedDefaultProps } from '@oreo-ui/core/dist/styled/components.types';
import type { ButtonProps } from '../button';

export interface ModalProps
  extends DefaultModalProps,
    Omit<ModalThemedDefaultProps, 'style' | 'children'> {
  /**
   * update footer close button props
   */
  footerCloseButtonProps?: ButtonProps;
  /**
   * update footer confirm button props
   */
  footerConfirmButtonProps?: ButtonProps;

  /**
   * use scroll view
   */
  withScrollView?: boolean;
}

export interface ModalContextProps {
  show: (content: ModalProps) => void;
  hide: () => void;
}

export type useModalProps = () => ModalContextProps;

export interface ModalProviderProps {
  children?: React.ReactNode;
}
