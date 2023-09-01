import type {
  AlertThemedStyledProps,
  AlertIconTypeTypes,
} from '@oreo-ui/core/dist/styled/components.types';
export interface AlertProps extends AlertThemedStyledProps {}

export type AlertIconObjectType = {
  [key in AlertIconTypeTypes]: JSX.Element;
};
