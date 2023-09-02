import React from 'react';

import { PopoverProps, PopoverContentProps } from '../popover';
import {
  ComponentsDefaultProps,
  ReactChildrenType,
} from '@oreo-ui/core/dist/styled/components.types';

export interface DropdownProps extends PopoverProps {}

export interface DropdownContentProps extends PopoverContentProps {}

export interface DropdownItemProps
  extends React.InputHTMLAttributes<HTMLButtonElement>,
    ComponentsDefaultProps {
  children?: ReactChildrenType;

  text?: string;

  description?: string;

  icon?: ReactChildrenType;

  iconRight?: ReactChildrenType;
}
