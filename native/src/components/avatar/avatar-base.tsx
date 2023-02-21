// @imports
import React from 'react';
import { View } from '../view';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';

import { ProfileIcon } from './avatar-icon';
import type { AvatarProps } from './avatar.types';

import { getNameInitialsHandler } from '@/core/helpers/string';
import {
  avatarDefaultStyle,
  avatarTextDefaultStyle,
  avatarDefaults,
} from '@/core/styled/themed/avatar';
import { useTheme, styled, baseStyled } from '@/core/styled/native';

// @exports
export const StyledAvatar = styled(
  baseStyled('View', ['layout', 'space'])
)<AvatarProps>`
  ${(props) => avatarDefaultStyle({ ...props, type: 'native' } as any)}
`;

export const StyledAvatarText = styled(
  baseStyled('Text', ['layout', 'shadow', 'space'])
)<AvatarProps>`
  ${(props) => avatarTextDefaultStyle({ ...props, type: 'native' } as any)}
`;

export const AvatarBase = (props: AvatarProps) => {
  const { src, children, alt: _alt, imgProps, name } = props;

  const theme = useTheme();

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
          theme={theme as any}
          strokeWidth={avatarDefaults.placeholderStrokeWidth}
        />
      );
    }

    if (src && !isScrBroken) {
      return (
        <Image
          onError={onImgError}
          source={{ uri: src }}
          accessibilityLabel={alt}
          resizeMode="cover"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '100%',
            height: '100%',
          }}
          {...imgProps}
        />
      );
    }

    if (name) {
      return (
        <View>
          <StyledAvatarText {...props}>
            {getNameInitialsHandler(name)}
          </StyledAvatarText>
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
