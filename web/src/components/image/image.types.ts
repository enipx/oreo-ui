import type { ImageThemedDefaultProps } from '@/core/styled/components.types';

type DefaultImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export interface ImageProps
  extends ImageThemedDefaultProps,
    Omit<DefaultImageProps, 'width' | 'height' | 'color'> {}
