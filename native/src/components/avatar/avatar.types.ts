import type {
  AvatarThemedStyledProps,
  AvatarGroupThemedStyledProps,
} from '@oreo-ui/core/dist/styled/components.types';

import type { ImageProps } from 'react-native';
import { TextProps } from '../text/text.types';
import type { ViewProps } from '../view/view.types';

export interface AvatarProps
  extends Omit<ViewProps, keyof AvatarThemedStyledProps>,
    AvatarThemedStyledProps {
  imgProps?: ImageProps;
  textProps?: TextProps;
}

export interface AvatarGroupProps extends AvatarGroupThemedStyledProps {}
