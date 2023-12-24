// @imports
import React from 'react';
import { View } from '../view';
import { Image } from '../image';

import { ProfileIcon } from './avatar-icon';
import type { AvatarProps } from './avatar.types';

import { getNameInitialsHandler } from '@oreo-ui/core/dist/helpers/string';
import {
  avatarDefaultStyle,
  avatarTextDefaultStyle,
  avatarDefaults,
} from '@oreo-ui/core/dist/styled/themed/avatar';
import { allStyleWithoutSize } from '@oreo-ui/core/dist/styled/system';
import { useTheme, styled, baseStyled } from '@oreo-ui/core/dist/styled/native';

// @exports
export const StyledAvatar = styled(
  baseStyled('View', ['layout', 'space'])
)<AvatarProps>`
  ${(props) => avatarDefaultStyle({ ...props, type: 'native' } as any)}
  ${allStyleWithoutSize()}
`;

export const StyledAvatarText = styled(
  baseStyled('Text', ['layout', 'shadow', 'space'])
)<AvatarProps>`
  ${(props) => avatarTextDefaultStyle({ ...props, type: 'native' } as any)}
  ${allStyleWithoutSize()}
`;

export const AvatarBase = (props: AvatarProps) => {
  const { src, children, alt: _alt, imgProps, textProps, name } = props;

  const theme = useTheme();

  const alt = _alt || name || avatarDefaults.alt;

  const renderChildren = () => {
    return (
      <Image
        src={src}
        alt={alt}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: '100%',
          height: '100%',
        }}
        fallback={
          name
            ? children || (
                <View bg="transparent">
                  <StyledAvatarText {...textProps}>
                    {getNameInitialsHandler(name)}
                  </StyledAvatarText>
                </View>
              )
            : children || (
                <ProfileIcon
                  theme={theme as any}
                  strokeWidth={avatarDefaults.placeholderStrokeWidth}
                />
              )
        }
        {...imgProps}
      />
    );
  };

  return <StyledAvatar {...props}>{renderChildren()}</StyledAvatar>;
};
