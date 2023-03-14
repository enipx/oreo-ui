// @imports
import { PopoverContent } from '@components/popover/popover-content';
import { PopoverTarget } from '@components/popover/popover-target';

import { Popover } from '../popover';
import { DropdownItem } from './dropdown-item';
import { DropdownProps, DropdownContentProps } from './dropdown.types';

// @exports
export const Dropdown = (props: DropdownProps) => {
  return <Popover placement="bottom-start" {...props} />;
};

Dropdown.Target = PopoverTarget;
Dropdown.Content = (props: DropdownContentProps) => {
  return <PopoverContent {...({ ...props, dropdown: true } as any)} />;
};
Dropdown.Item = DropdownItem;
