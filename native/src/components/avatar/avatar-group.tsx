// @imports
import React from 'react';
import { Children, cloneElement } from 'react';

import { AvatarBase, StyledAvatarText } from './avatar-base';
import type { AvatarGroupProps, AvatarProps } from './avatar.types';

import { avatarGroupDefaultStyle } from '@oreo-ui/core/dist/styled/themed/avatar';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/native';

// @exports
export const StyledAvatarGroup = styled(
  baseStyled('View', ['layout'])
)<AvatarGroupProps>`
  ${(props) => avatarGroupDefaultStyle({ ...props, type: 'native' } as any)}
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
      <>
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
          <AvatarBase isGrouped isLastItem size={size}>
            <StyledAvatarText colorScheme={colorScheme} variant={variant}>
              <>{`+${numberOfUnrenderedAvatar || '-'}`}</>
            </StyledAvatarText>
          </AvatarBase>
        ) : null}
      </>
    </StyledAvatarGroup>
  );
};
