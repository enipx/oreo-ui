// @imports
import { Modal, ModalProps } from '../modal';
import type { DrawerProps } from './drawer.types';

// @exports

export const Drawer: React.FC<DrawerProps> = (props) => {
  const { pos, ...otherProps } = props;
  return <Modal pos={pos as ModalProps['pos']} {...otherProps} />;
};

Drawer.defaultProps = {
  closeOnOverlayClick: true,
  pos: 'left',
  preventScrolling: true,
  overflow: 'outside',
  closeOnEscape: true,
  size: 'md',
  isDrawer: true,
};
