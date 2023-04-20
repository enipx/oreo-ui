import type {
  AvatarThemedStyledProps,
  AvatarGroupThemedStyledProps,
} from '@/core/styled/components.types';

import type { ImageProps } from 'react-native';

export interface AvatarProps extends Omit<AvatarThemedStyledProps, 'imgProps'> {
  imgProps?: ImageProps;
}

export interface AvatarGroupProps extends AvatarGroupThemedStyledProps {}
