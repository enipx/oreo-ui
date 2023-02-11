// @imports
import { Button } from '@components/button';
import { IconButton } from '@components/icon-button';
import { Portal } from '@components/portal';
import { Text } from '@components/text';
import { useEffect, useRef } from 'react';

import { CloseIcon } from './modal-icon';
import type { ModalProps } from './modal.types';

import { isString } from '@/core/helpers/base';
import {
  domExistsHandler,
  preventPageScrollingHandler,
} from '@/core/helpers/dom';
import { getTransitionClassName } from '@/core/styled/css/transitions';
import { baseBackgroundColor, baseColor } from '@/core/styled/themed/base';
import {
  modalOverlayDefaultStyle,
  modalOverlayBackgroundColor,
  modalContentDefaultStyle,
  modalHeaderDefaultStyle,
  modalBodyDefaultStyle,
  modalFooterDefaultStyle,
  modalDefaultStyle,
  modalDefaultTransitions,
} from '@/core/styled/themed/modal';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const defaultView = () => {
  return baseStyled('div', [
    'layout',
    'typography',
    'flexbox',
    'grid',
    'position',
    'shadow',
    'space',
  ]);
};

export const StyledModalHeader = styled(defaultView())<ModalProps>`
  ${({ theme }) => modalHeaderDefaultStyle({ theme })}
`;

export const ModalOverlay = styled(defaultView())<ModalProps>`
  ${(props) => modalOverlayDefaultStyle(props as any)}
  background-color: ${({ overlayBg }) =>
    overlayBg || modalOverlayBackgroundColor};
`;

export const ModalContent = styled(baseStyled('div', ['position']))<ModalProps>`
  ${(props) => modalContentDefaultStyle(props as any)}
  background-color: ${baseBackgroundColor};
  color: ${baseColor};
`;

export const ModalBody = styled(defaultView())<ModalProps>`
  ${(props) => modalBodyDefaultStyle(props as any)}
  color: ${baseColor};
`;

export const ModalFooter = styled(defaultView())<ModalProps>`
  ${(props) => modalFooterDefaultStyle(props as any)}
`;

export const StyledModal = styled(defaultView())<ModalProps>`
  ${(props) => modalDefaultStyle(props as any)}
`;

export const ModalHeader: React.FC<ModalProps> = (props) => {
  const { title, hideCloseButton, children, onClose } = props;

  const renderTitle = () => {
    if (title) {
      return isString(title) ? <Text>{title}</Text> : title;
    }

    return children;
  };

  const renderClose = () => {
    if (hideCloseButton) {
      return null;
    }

    return (
      <IconButton
        ml="auto"
        size="sm"
        icon={<CloseIcon size="3xs" />}
        onClick={onClose}
      />
    );
  };

  return (
    <StyledModalHeader>
      {renderTitle()}
      {renderClose()}
    </StyledModalHeader>
  );
};

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    children,
    title,
    style,
    closeOnOverlayClick,
    preventScrolling,
    closeOnEscape,
    modalSize,
    onClose,
    size: specifiedSize,
    ...otherProps
  } = props;

  const modalContentRef = useRef<HTMLDivElement>(null);

  const size = modalSize || specifiedSize;

  const transitionType = modalDefaultTransitions({
    pos: props?.pos || '',
    isDrawer: props.isDrawer,
  });

  const { active: activeCls, inactive: inactiveCls } = getTransitionClassName(
    transitionType as any
  );

  const updateTransitionClassNameHandler = (alt = false) => {
    if (alt) {
      modalContentRef.current?.classList.remove(activeCls);
      modalContentRef.current?.classList.add(inactiveCls);
    } else {
      modalContentRef.current?.classList.remove(inactiveCls);
      modalContentRef.current?.classList.add(activeCls);
    }
  };

  const onCloseHandler = () => {
    updateTransitionClassNameHandler(true);

    setTimeout(() => {
      updateTransitionClassNameHandler();
      onClose?.();
    }, 400);
  };

  const overlayOnClickHandler = () => {
    if (closeOnOverlayClick) {
      onCloseHandler?.();
    }
  };

  const closeOnEscapeHandler = (event: KeyboardEvent) => {
    if (domExistsHandler() && event.key === 'Escape' && closeOnEscape) {
      onCloseHandler?.();
    }
  };

  const renderModalFooter = () => {
    if (props.withFooter) {
      return (
        <ModalFooter {...otherProps}>
          {props.footerContent || (
            <>
              <Button
                text="Close"
                colorScheme="ghost"
                onClick={onCloseHandler}
                {...props.footerCloseButtonProps}
              />
              <Button
                text="Confirm"
                colorScheme="blue"
                {...props.footerConfirmButtonProps}
              />
            </>
          )}
        </ModalFooter>
      );
    }

    return null;
  };

  useEffect(() => {
    if (preventScrolling) {
      preventPageScrollingHandler(props.isOpen);
    }
  }, [props.isOpen]);

  useEffect(() => {
    updateTransitionClassNameHandler();
  }, [props.pos]);

  useEffect(() => {
    window.addEventListener('keydown', closeOnEscapeHandler);

    return () => window.removeEventListener('keydown', closeOnEscapeHandler);
  }, []);

  if (!props.isOpen) {
    return null;
  }

  return (
    <Portal>
      <StyledModal {...otherProps}>
        <ModalOverlay onClick={overlayOnClickHandler} {...otherProps} />
        <ModalContent
          ref={modalContentRef}
          className={activeCls}
          modalSize={size}
          style={style}
          {...otherProps}>
          <ModalHeader title={title} {...otherProps} />
          <ModalBody {...otherProps}>{children}</ModalBody>
          {renderModalFooter()}
        </ModalContent>
      </StyledModal>
    </Portal>
  );
};

Modal.defaultProps = {
  closeOnOverlayClick: true,
  pos: 'top',
  preventScrolling: true,
  overflow: 'outside',
  closeOnEscape: true,
  size: 'md',
};
