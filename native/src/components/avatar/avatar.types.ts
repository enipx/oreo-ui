import type {
  AvatarThemedDefaultProps,
  AvatarGroupThemedDefaultProps,
} from '@/core/styled/components.types';

import type { ImageProps } from 'react-native';

export interface AvatarProps
  extends Omit<AvatarThemedDefaultProps, 'imgProps'> {
  imgProps?: ImageProps;
}

export interface AvatarGroupProps extends AvatarGroupThemedDefaultProps {}
