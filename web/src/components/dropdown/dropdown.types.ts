import React from 'react';

import { PopoverProps, PopoverContentProps } from '../popover';

export interface DropdownProps extends PopoverProps {}

export interface DropdownContentProps extends PopoverContentProps {}

export interface DropdownItemProps
  extends React.InputHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;

  text?: string;

  description?: string;

  icon?: React.ReactNode;

  iconRight?: React.ReactNode;
}
