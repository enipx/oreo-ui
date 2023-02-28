// @imports
import { forwardRef, useState, useEffect } from 'react';

import type { ImageProps } from './image.types';

import { imageDefaultStyle } from '@/core/styled/themed/image';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const StyledImage = styled(baseStyled('img'))<ImageProps>`
  ${(props) => imageDefaultStyle({ ...props } as any)}
`;

export const Image = forwardRef((props: ImageProps, ref) => {
  const { alt, src, imgProps, fallback, fallbackSrc, ...otherProps } = props;

  const [isSrcBroken, setIsSrcBroken] = useState(false);

  const onImgError = () => {
    setIsSrcBroken(true);
  };

  const renderImg = (imgSrc?: string) => {
    return (
      <StyledImage
        onError={imgSrc ? undefined : onImgError}
        src={imgSrc || src}
        alt={alt}
        ref={ref as any}
        {...otherProps}
      />
    );
  };

  useEffect(() => {
    setIsSrcBroken(false);
  }, [src]);

  if (isSrcBroken && fallbackSrc) {
    return renderImg(fallbackSrc);
  }

  if (isSrcBroken && fallback) {
    return <>{fallback}</>;
  }

  return renderImg();
});
