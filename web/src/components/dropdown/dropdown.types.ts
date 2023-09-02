import React from 'react';

import { PopoverProps, PopoverContentProps } from '../popover';
import { ComponentsDefaultProps } from '@oreo-ui/core/dist/styled/components.types';

export interface DropdownProps extends PopoverProps {}

export interface DropdownContentProps extends PopoverContentProps {}

export interface DropdownItemProps
  extends React.InputHTMLAttributes<HTMLButtonElement>,
    ComponentsDefaultProps {
  children?: JSX.Element;

  text?: string;

  description?: string;

  icon?: JSX.Element;

  iconRight?: JSX.Element;
}
