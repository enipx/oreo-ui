import type { DrawerThemedDefaultProps } from '@oreo-ui/core/dist/styled/components.types';

import type { ModalProps } from '../modal';

export interface DrawerProps
  extends Omit<ModalProps, 'pos'>,
    DrawerThemedDefaultProps {}
