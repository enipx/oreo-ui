// @imports
import React, { useState } from 'react';
import type { AlertProps, AlertIconObjectType } from './alert.types';

import { StyledView, View } from '../view/view';
import { Text } from '../text';
import { IconButton } from '../icon-button';
import {
  alertDefaultStyle,
  getAlertIconType,
  alertTitleDefaultStyle,
  getAlertColors,
} from '@/core/styled/themed/alert';
import {
  WarningIcon,
  InfoIcon,
  SuccessIcon,
  DangerIcon,
  CloseIcon,
} from './alert-icon';
import { styled, useTheme } from '@/core/styled/native';

// @exports
export const StyledAlert = styled(StyledView)<AlertProps>`
  ${(props) => alertDefaultStyle({ ...props, type: 'native' } as any)}
`;

export const StyledAlertTitle = styled(Text)<AlertProps>`
  ${(props) => alertTitleDefaultStyle({ ...props, type: 'native' } as any)}
`;

export const StyledAlertContent = styled(Text)<AlertProps>`
  ${(props) =>
    alertTitleDefaultStyle({
      ...props,
      type: 'native',
      isContent: true,
    } as any)}
`;

export const AlertIcon = (props: AlertProps) => {
  const { icon, withIcon } = props;

  const theme = useTheme();

  const { color } = getAlertColors({ ...props, theme } as any);

  const type = getAlertIconType(props);

  const Icon: AlertIconObjectType = {
    warning: <WarningIcon fill={color} />,
    info: <InfoIcon fill={color} />,
    success: <SuccessIcon fill={color} />,
    danger: <DangerIcon fill={color} />,
  };

  if (withIcon) {
    return (
      <View bg="transparent" mt="xs" mr="sm">
        {Icon[type]}
      </View>
    );
  }

  if (icon) return icon as JSX.Element;

  return null;
};

export const AlertCloseButton = (
  props: AlertProps & { onPress?: () => void }
) => {
  const { withCloseButton, onPress } = props;

  const theme = useTheme();

  const { color } = getAlertColors({ ...props, theme } as any);

  if (!withCloseButton) return null;

  return (
    <IconButton
      onPress={onPress}
      size="xs"
      icon={<CloseIcon fill={color} size="4xs" />}
    />
  );
};

export const Alert = (props: AlertProps) => {
  const {
    content,
    colorScheme,
    variant,
    title,
    withCloseButton,
    onClose,
    icon,
    withIcon,
    iconType,
    ...otherProps
  } = props;

  const [show, setShow] = useState(true);

  const onCloseHandler = () => {
    setShow(false);
    onClose?.();
  };

  if (!show) return null;

  return (
    <StyledAlert
      colorScheme={colorScheme}
      variant={variant}
      {...(otherProps as any)}>
      <AlertIcon
        icon={icon}
        withIcon={withIcon}
        iconType={iconType}
        colorScheme={colorScheme}
        variant={variant}
      />
      <View flex={1} bg="transparent">
        <StyledAlertTitle colorScheme={colorScheme} variant={variant}>
          {title}
        </StyledAlertTitle>
        <View mt="sm" bg="transparent">
          <StyledAlertContent colorScheme={colorScheme} variant={variant}>
            {content}
          </StyledAlertContent>
        </View>
      </View>
      <AlertCloseButton
        withCloseButton={withCloseButton}
        onPress={onCloseHandler}
        colorScheme={colorScheme}
        variant={variant}
      />
    </StyledAlert>
  );
};
