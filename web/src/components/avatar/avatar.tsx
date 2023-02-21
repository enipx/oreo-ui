// @imports
import { AvatarBase } from './avatar-base';
import { AvatarGroup } from './avatar-group';
import { AvatarProps } from './avatar.types';

export const Avatar = (props: AvatarProps) => {
  return <AvatarBase {...props} />;
};

Avatar.Group = AvatarGroup;
