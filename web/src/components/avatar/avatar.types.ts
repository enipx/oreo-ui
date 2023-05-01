import type {
  AvatarGroupThemedStyledProps,
  AvatarThemedStyledProps,
} from '@/core/styled/components.types';

export interface AvatarProps extends Omit<AvatarThemedStyledProps, 'color'> {}

export interface AvatarGroupProps
  extends Omit<AvatarGroupThemedStyledProps, 'color'> {}
