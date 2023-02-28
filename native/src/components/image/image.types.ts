import type { ImageThemedDefaultProps } from '@/core/styled/components.types';
import type {
  ImageProps as DefaultImageProps,
  ImageResizeMode,
} from 'react-native';

export interface ImageProps extends Omit<ImageThemedDefaultProps, 'fit'> {
  imgProps?: DefaultImageProps;
  fit?: ImageResizeMode;
}
