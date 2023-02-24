import type {
  ToastThemedDefaultProps,
  ToastNativePositionTypes,
} from '@/core/styled/components.types';

export interface ToastProps extends Omit<ToastThemedDefaultProps, 'pos'> {
  pos?: ToastNativePositionTypes;
}

export interface ToastProviderProps extends ToastProps {}

export interface ToastStateProps extends ToastProps {
  id: string;
}

export interface ToastContextProps {
  show: (content: ToastProps) => void;
  hide: (id: Required<ToastStateProps['id']>) => void;
  hideAll: () => void;
}

export type useToastProps = () => ToastContextProps;
