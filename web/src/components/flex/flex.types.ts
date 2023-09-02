import type {
  FlexThemedStyledProps,
  FlexColThemedStyledProps,
  FlexRowThemedStyledProps,
  FlexRowThemedDefaultProps,
} from '@oreo-ui/core/dist/styled/components.types';

export interface FlexProps extends FlexThemedStyledProps {
  wrap?: boolean;
}

export interface FlexColProps extends FlexColThemedStyledProps {}

export interface FlexRowProps extends FlexRowThemedStyledProps {}

export interface FlexContextProps extends FlexRowThemedDefaultProps {}
