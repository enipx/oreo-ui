import type { ModalProps } from '../modal';

import type { DrawerThemedDefaultProps } from '@/core/styled/components.types';

export interface DrawerProps
  extends Omit<ModalProps, 'pos'>,
    DrawerThemedDefaultProps {}
