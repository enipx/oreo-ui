// @imports
import { getNameInitialsHandler } from '@/core/helpers/string';
import { allStyleWithoutSize } from '@/core/styled/system';
import {
  avatarDefaultStyle,
  avatarDefaults,
} from '@/core/styled/themed/avatar';
import { styled } from '@/core/styled/web';

import { View } from '@components/view';

import { Image } from '../image';
import { ProfileIcon } from './avatar-icon';
import type { AvatarProps } from './avatar.types';
import { componentDefaultStyle } from '@/core/styled/themed/base';

// @exports
export const StyledAvatar = styled(View)<AvatarProps>`
  ${(props) => avatarDefaultStyle({ ...props } as any)}
  ${(props) => componentDefaultStyle({ ...props } as any)}
  ${allStyleWithoutSize()}
`;

export const AvatarBase = (props: AvatarProps) => {
  const { src, children, alt: _alt, imgProps, name } = props;

  const alt = _alt || name || avatarDefaults.alt;

  const renderChildren = () => {
    return (
      <Image
        src={src}
        alt={alt}
        className={avatarDefaults.imgClassName}
        fallback={
          name
            ? children || (
                <View
                  role="img"
                  aria-label={name}
                  className={avatarDefaults.initialsClassName}>
                  {getNameInitialsHandler(name)}
                </View>
              )
            : children || (
                <ProfileIcon
                  strokeWidth={avatarDefaults.placeholderStrokeWidth}
                  className={avatarDefaults.svgClassName}
                />
              )
        }
        {...imgProps}
      />
    );
  };

  return <StyledAvatar {...props}>{renderChildren()}</StyledAvatar>;
};
