// @imports
import { View } from '@components/view';

import { Image } from '../image';
import { ProfileIcon } from './avatar-icon';
import type { AvatarProps } from './avatar.types';

import { getNameInitialsHandler } from '@/core/helpers/string';
import { layout, border } from '@/core/styled/system';
import {
  avatarDefaultStyle,
  avatarDefaults,
} from '@/core/styled/themed/avatar';
import { styled } from '@/core/styled/web';

// @exports
export const StyledAvatar = styled(View)<AvatarProps>`
  ${(props) => avatarDefaultStyle({ ...props } as any)}
  ${layout}
  ${border}
`;

export const AvatarBase = (props: AvatarProps) => {
  const { src, children, alt: _alt, imgProps, name } = props;

  const alt = _alt || name || avatarDefaults.alt;

  const renderChildren = () => {
    // ...
    if (children) return children;

    return (
      <Image
        src={src}
        alt={alt}
        className={avatarDefaults.imgClassName}
        fallback={
          name ? (
            <View
              role="img"
              aria-label={name}
              className={avatarDefaults.initialsClassName}>
              {getNameInitialsHandler(name)}
            </View>
          ) : (
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
