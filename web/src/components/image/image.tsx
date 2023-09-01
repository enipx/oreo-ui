// @imports
import { imageDefaultStyle } from '@oreo-ui/core/dist/styled/themed/image';
import { componentDefaultStyle } from '@oreo-ui/core/dist/styled/themed/base';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/web';
import { forwardRef, useState, useEffect } from 'react';

import type { ImageProps } from './image.types';

// @exports
export const StyledImage = styled(baseStyled('img'))<ImageProps>`
  ${(props) => imageDefaultStyle({ ...props } as any)}
  ${(props) => componentDefaultStyle({ ...props } as any)}
`;

export const Image = forwardRef((props: ImageProps, ref) => {
  const { alt, src, fallback, fallbackSrc, ...otherProps } = props;

  const [isSrcBroken, setIsSrcBroken] = useState(!src);

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
    setIsSrcBroken(!src);
  }, [src]);

  if (isSrcBroken && fallbackSrc) {
    return renderImg(fallbackSrc);
  }

  if (isSrcBroken && fallback) {
    return <>{fallback}</>;
  }

  return renderImg();
});
