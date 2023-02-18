// @imports
import { View } from '@components/view';
import { useEffect, useState } from 'react';

import { AvatarGroup } from './avatar-group';
import { ProfileIcon } from './avatar-icon';
import type { AvatarProps } from './avatar.types';

import { getNameInitialsHandler } from '@/core/helpers/string';
import {
  avatarDefaultStyle,
  avatarDefaults,
} from '@/core/styled/themed/avatar';
import { styled } from '@/core/styled/web';

// @exports
export const StyledAvatar = styled(View)<AvatarProps>`
  ${(props) => avatarDefaultStyle({ ...props } as any)}
`;

export const Avatar = (props: AvatarProps) => {
  const { src, children, alt: _alt, imgProps, name } = props;

  const alt = _alt || name || avatarDefaults.alt;

  const [isScrBroken, setIsScrBroken] = useState(false);

  const onImgError = () => {
    setIsScrBroken(true);
  };

  const renderChildren = () => {
    // ...
    if (children) return children;

    if ((isScrBroken && !name) || (!src && !name)) {
      return (
        <ProfileIcon
          strokeWidth={avatarDefaults.placeholderStrokeWidth}
          className={avatarDefaults.svgClassName}
        />
      );
    }

    if (src && !isScrBroken) {
      return (
        <img
          onError={onImgError}
          src={src}
          alt={alt}
          className={avatarDefaults.imgClassName}
          {...imgProps}
        />
      );
    }

    if (name) {
      return (
        <View
          role="img"
          aria-label={name}
          className={avatarDefaults.initialsClassName}>
          {getNameInitialsHandler(name)}
        </View>
      );
    }

    return null;
  };

  useEffect(() => {
    setIsScrBroken(false);
  }, [src]);

  return <StyledAvatar {...props}>{renderChildren()}</StyledAvatar>;
};

Avatar.Group = AvatarGroup;
