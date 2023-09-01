import type { ImageThemedDefaultProps } from '@oreo-ui/core/dist/styled/components.types';
import type {
  ImageProps as DefaultImageProps,
  ImageResizeMode,
} from 'react-native';

export interface ImageProps
  extends Omit<ImageThemedDefaultProps, 'fit'>,
    Omit<
      DefaultImageProps,
      | 'borderRadius'
      | 'borderTopRightRadius'
      | 'borderTopLeftRadius'
      | 'borderBottomRightRadius'
      | 'borderBottomLeftRadius'
      | 'borderLeftRadius'
      | 'borderRightRadius'
    > {
  fit?: ImageResizeMode;
}
