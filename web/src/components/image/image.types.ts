import type { ImageThemedDefaultProps } from '@oreo-ui/core/dist/styled/components.types';

type DefaultImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export interface ImageProps
  extends ImageThemedDefaultProps,
    Omit<DefaultImageProps, keyof ImageThemedDefaultProps> {}
