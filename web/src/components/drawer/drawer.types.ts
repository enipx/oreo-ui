import type { DrawerThemedDefaultProps } from '@/core/styled/components.types';

import type { ModalProps } from '../modal';

export interface DrawerProps
  extends Omit<ModalProps, 'pos'>,
    DrawerThemedDefaultProps {}
