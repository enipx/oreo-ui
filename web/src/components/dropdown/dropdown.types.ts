import React from 'react';

import { PopoverProps, PopoverContentProps } from '../popover';
import { ComponentsDefaultProps } from '@/core/styled/components.types';

export interface DropdownProps extends PopoverProps {}

export interface DropdownContentProps extends PopoverContentProps {}

export interface DropdownItemProps
  extends React.InputHTMLAttributes<HTMLButtonElement>,
    ComponentsDefaultProps {
  children?: React.ReactNode;

  text?: string;

  description?: string;

  icon?: React.ReactNode;

  iconRight?: React.ReactNode;
}
