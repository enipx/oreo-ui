// @imports
import { PopoverContent } from '@components/popover/popover-content';
import { PopoverTarget } from '@components/popover/popover-target';

import { Popover } from '../popover';
import { DropdownItem } from './dropdown-item';
import { DropdownProps } from './dropdown.types';

// @exports
export const Dropdown = (props: DropdownProps) => {
  return (
    <Popover
      placement="bottom-start"
      {...({ ...props, dropdown: true } as any)}
    />
  );
};

Dropdown.Target = PopoverTarget;
Dropdown.Content = PopoverContent;
Dropdown.Item = DropdownItem;
