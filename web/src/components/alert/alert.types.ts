import type {
  AlertThemedStyledProps,
  AlertIconTypeTypes,
} from '@/core/styled/components.types';

export interface AlertProps extends AlertThemedStyledProps {}

export type AlertIconObjectType = {
  [key in AlertIconTypeTypes]: React.ReactNode;
};
