// @imports
import { View } from '@components/view';
import { Children, cloneElement } from 'react';

import { AvatarBase } from './avatar-base';
import type { AvatarGroupProps, AvatarProps } from './avatar.types';

import { avatarGroupDefaultStyle } from '@/core/styled/themed/avatar';
import { styled } from '@/core/styled/web';

// @exports
export const StyledAvatarGroup = styled(View)<AvatarGroupProps>`
  ${(props) => avatarGroupDefaultStyle({ ...props } as any)}
`;

export const AvatarGroup = (props: AvatarGroupProps) => {
  const { max, size, children, colorScheme, variant } = props;

  const maxExists = max && max > 0;

  // @ts-ignore
  const childrenArray: React.ReactElement<AvatarProps>[] =
    Children.toArray(children);

  const avatarChildrenArray = maxExists
    ? childrenArray.slice(0, max)
    : childrenArray;

  const numberOfUnrenderedAvatar = childrenArray.length - (max || 0);

  return (
    <StyledAvatarGroup {...props}>
      {Children.map(avatarChildrenArray, (child, index: number) => {
        const isLastItem = maxExists
          ? false
          : index === avatarChildrenArray.length - 1;

        return cloneElement(child, {
          size,
          isGrouped: true,
          isLastItem,
          colorScheme,
          variant,
        });
      })}
      {maxExists ? (
        <AvatarBase
          isGrouped
          isLastItem
          size={size}>{`+${numberOfUnrenderedAvatar}`}</AvatarBase>
      ) : null}
    </StyledAvatarGroup>
  );
};
