/* eslint-disable react-native/no-inline-styles */
// @imports
import React from 'react';
import { Modal as DefaultModal } from 'react-native';
import { StyledView } from '../view/view';
import { Text } from '../text';
import { Button, BaseButton } from '../button';
import { IconButton } from '../icon-button';
import type { ModalProps } from './modal.types';

import { styled } from '@/core/styled/native';
import {
  modalBodyDefaultStyle,
  modalOverlayDefaultStyle,
  modalContentDefaultStyle,
  modalHeaderDefaultStyle,
  modalFooterDefaultStyle,
  isModalFull,
} from '@/core/styled/themed/modal';
import { CloseIcon } from './modal-icon';
import { ScrollView } from '../scroll-view';
import { isString } from '@/core/helpers/base';

// @styles
export const ModalOverlay = styled(StyledView)<ModalProps>`
  ${(props) => modalOverlayDefaultStyle({ ...props, type: 'native' })}
`;

export const ModalContent = styled(StyledView)<ModalProps>`
  ${(props) => modalContentDefaultStyle({ ...props, type: 'native' })}
`;

export const ModalBody = styled(StyledView)<ModalProps>`
  ${(props) => modalBodyDefaultStyle({ ...props, type: 'native' })}
`;

export const ModalFooter = styled(StyledView)<ModalProps>`
  ${(props) => modalFooterDefaultStyle({ ...props, type: 'native' })}
`;

export const StyledModalHeader = styled(StyledView)<ModalProps>`
  ${(props) => modalHeaderDefaultStyle({ ...props, type: 'native' })}
`;

// @exports
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
        onPress={onClose}
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
    isOpen,
    onClose,
    children,
    closeOnOverlayClick,
    style,
    size: specifiedSize,
    modalSize,
    title,
    withScrollView,
    ...otherProps
  } = props;

  const size = specifiedSize || modalSize;

  const overlayOnClickHandler = () => {
    if (closeOnOverlayClick) {
      onClose?.();
    }
  };

  const renderModalFooter = () => {
    const renderModalFooterContent = () => {
      if (props.footerContent) {
        return props.footerContent;
      }

      if (props.footerAlt) {
        return (
          <>
            <Button
              text="Close"
              colorScheme="gray"
              variant="ghost"
              onPress={props.onClose}
              mr="md"
              {...props.footerCloseButtonProps}
            />
            <Button
              text="Confirm"
              colorScheme="blue"
              {...props.footerConfirmButtonProps}
            />
          </>
        );
      }
      return (
        <>
          <Button
            text="Confirm"
            colorScheme="blue"
            width="100%"
            mb="md"
            {...props.footerConfirmButtonProps}
          />
          <Button
            text="Close"
            colorScheme="gray"
            variant="ghost"
            width="100%"
            onPress={props.onClose}
            {...props.footerCloseButtonProps}
          />
        </>
      );
    };

    if (props.withFooter) {
      return (
        <ModalFooter {...otherProps}>{renderModalFooterContent()}</ModalFooter>
      );
    }

    return null;
  };

  const renderChildren = () => {
    if (isModalFull(size || '') || withScrollView) {
      return (
        <ScrollView
          style={[isModalFull(size || '') && { flex: 1 }]}
          viewProps={isModalFull(size || '') ? { flex: 1 } : {}}>
          {children}
        </ScrollView>
      );
    }

    return <>{children}</>;
  };

  return (
    <DefaultModal
      animationType="fade"
      visible={isOpen}
      onRequestClose={onClose}
      {...otherProps}>
      <ModalOverlay modalSize={size} {...otherProps}>
        <BaseButton
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
          onPress={overlayOnClickHandler}
        />
        <ModalContent modalSize={size} {...otherProps} style={style}>
          <ModalHeader title={title} {...otherProps} onClose={onClose} />
          <ModalBody modalSize={size} {...otherProps}>
            {renderChildren()}
          </ModalBody>
          {renderModalFooter()}
        </ModalContent>
      </ModalOverlay>
    </DefaultModal>
  );
};

Modal.defaultProps = {
  closeOnOverlayClick: true,
  transparent: true,
  statusBarTranslucent: true,
};
