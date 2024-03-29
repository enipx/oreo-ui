// @imports
import React, { forwardRef, useState, useEffect } from 'react';

import type { ImageProps } from './image.types';

import {
  imageDefaults,
  imageDefaultStyle,
  isSvgHandler,
} from '@oreo-ui/core/dist/styled/themed/image';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/native';
import { layout } from '@oreo-ui/core/dist/styled/system';
import { SvgUri } from 'react-native-svg';

// @exports
export const StyledImage = styled(baseStyled('Image'))<ImageProps>`
  ${(props) => imageDefaultStyle({ ...props, type: 'native' } as any)}
  ${layout}
`;

export const Image = forwardRef((props: ImageProps, ref) => {
  const { alt, src, fallback, fit, fallbackSrc, ...otherProps } = props;

  const [isSrcBroken, setIsSrcBroken] = useState(!src);

  const size = otherProps?.size || imageDefaults.size;

  const onImgError = () => {
    setIsSrcBroken(true);
  };

  const renderImg = (imgSrc?: string) => {
    const uri = imgSrc || src;

    const isSvg = isSvgHandler(uri);

    if (isSvg) {
      return (
        <SvgUri
          uri={uri || null}
          style={{
            width: (otherProps?.width || size) as any,
            height: (otherProps?.height || size) as any,
          }}
        />
      );
    }

    return (
      <StyledImage
        onError={imgSrc ? undefined : onImgError}
        source={{ uri: imgSrc || src }}
        accessibilityLabel={alt}
        resizeMode={fit || 'cover'}
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
