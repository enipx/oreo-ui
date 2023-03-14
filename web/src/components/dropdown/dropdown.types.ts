import React from 'react';

import { PopoverProps } from '../popover';

export interface DropdownProps extends PopoverProps {}

export interface DropdownItemProps
  extends React.InputHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;

  text?: string;

  description?: string;

  icon?: React.ReactNode;

  iconRight?: React.ReactNode;
}
