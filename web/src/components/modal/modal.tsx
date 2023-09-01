// @imports

import { isString } from '@oreo-ui/core/dist/helpers/base';
import {
  domExistsHandler,
  preventPageScrollingHandler,
} from '@oreo-ui/core/dist/helpers/dom';
import { useKeydown } from '@oreo-ui/core/dist/hooks/use-keydown';
import { getTransitionClassName } from '@oreo-ui/core/dist/styled/css/transitions';
import { border, compose } from '@oreo-ui/core/dist/styled/system';
import {
  modalOverlayDefaultStyle,
  modalOverlayBackgroundColor,
  modalContentDefaultStyle,
  modalHeaderDefaultStyle,
  modalBodyDefaultStyle,
  modalFooterDefaultStyle,
  modalDefaultStyle,
  modalDefaultTransitions,
} from '@oreo-ui/core/dist/styled/themed/modal';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/web';
import { useEffect, useRef } from 'react';

import { Button } from '@components/button';
import { IconButton } from '@components/icon-button';
import { Portal } from '@components/portal';
import { Text } from '@components/text';

import { CloseIcon } from './modal-icon';
import type { ModalProps } from './modal.types';

// @exports
export const defaultView = () => {
  return baseStyled('div', ['all']);
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
  ${compose(border)};
`;

export const ModalBody = styled(defaultView())<ModalProps>`
  ${(props) => modalBodyDefaultStyle(props as any)}
`;

export const ModalFooter = styled(defaultView())<ModalProps>`
  ${(props) => modalFooterDefaultStyle(props as any)}
`;

export const StyledModal = styled(defaultView())<ModalProps>`
  ${(props) => modalDefaultStyle(props as any)}
`;

export const ModalHeader: React.FC<ModalProps> = (props) => {
  const { title, hideCloseButton, children, onClose } = props;

  if (hideCloseButton && !title && !children) {
    return null;
  }

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
        icon={<CloseIcon size="md" />}
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
    onOpen,
    overflow,
    withFooter,
    isDrawer,
    hideCloseButton,
    size: specifiedSize,
    ...otherProps
  } = props;

  const modalContentRef = useRef<HTMLDivElement>(null);

  const size = modalSize || specifiedSize;

  const transitionType = modalDefaultTransitions({
    pos: props?.pos,
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
      onCloseHandler();
    }
  };

  const renderModalFooter = () => {
    if (props.withFooter) {
      return (
        <ModalFooter>
          {props.footerContent || (
            <>
              <Button
                text="Close"
                colorScheme="gray"
                variant="ghost"
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

    if (props.isOpen) {
      onOpen?.();
    }
  }, [props.isOpen]);

  useEffect(() => {
    updateTransitionClassNameHandler();
  }, [props.pos]);

  useKeydown({
    key: 'Escape',
    callback: onCloseHandler,
    enabled: domExistsHandler() && closeOnEscape,
  });

  if (!props.isOpen) {
    return null;
  }

  return (
    <Portal>
      <StyledModal
        size={size}
        modalSize={size}
        overflow={overflow}
        withFooter={withFooter}
        isDrawer={isDrawer}
        {...otherProps}>
        <ModalOverlay onClick={overlayOnClickHandler} {...otherProps} />
        <ModalContent
          ref={modalContentRef}
          className={activeCls}
          modalSize={size}
          style={style}
          overflow={overflow}
          isDrawer={isDrawer}
          {...otherProps}>
          <ModalHeader
            hideCloseButton={hideCloseButton}
            title={title}
            onClose={onCloseHandler}
          />
          <ModalBody
            modalSize={size}
            overflow={overflow}
            withFooter={withFooter}
            isDrawer={isDrawer}>
            {children}
          </ModalBody>
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
