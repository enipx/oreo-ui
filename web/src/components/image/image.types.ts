import type { ImageThemedDefaultProps } from '@/core/styled/components.types';

export interface ImageProps extends ImageThemedDefaultProps {
  imgProps?: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
}
