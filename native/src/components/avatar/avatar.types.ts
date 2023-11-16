import type {
  AvatarThemedStyledProps,
  AvatarGroupThemedStyledProps,
} from '@oreo-ui/core/dist/styled/components.types';

import type { ImageProps } from 'react-native';
import { TextProps } from '../text/text.types';

export interface AvatarProps extends Omit<AvatarThemedStyledProps, 'imgProps'> {
  imgProps?: ImageProps;
  textProps?: TextProps;
}

export interface AvatarGroupProps extends AvatarGroupThemedStyledProps {}
