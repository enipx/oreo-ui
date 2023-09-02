import type {
  AlertThemedStyledProps,
  AlertIconTypeTypes,
  ReactChildrenType,
} from '@oreo-ui/core/dist/styled/components.types';
export interface AlertProps extends AlertThemedStyledProps {}

export type AlertIconObjectType = {
  [key in AlertIconTypeTypes]: ReactChildrenType;
};
