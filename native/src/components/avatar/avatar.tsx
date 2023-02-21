// @imports
import React from 'react';

import { AvatarGroup } from './avatar-group';
import { AvatarBase } from './avatar-base';
import type { AvatarProps } from './avatar.types';

// @exports

export const Avatar = (props: AvatarProps) => {
  return <AvatarBase {...props} />;
};

Avatar.Group = AvatarGroup;
