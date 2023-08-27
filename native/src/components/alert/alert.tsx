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
    warning: <WarningIcon size="sm" fill={color} />,
    info: <InfoIcon size="sm" fill={color} />,
    success: <SuccessIcon size="sm" fill={color} />,
    danger: <DangerIcon size="sm" fill={color} />,
  };

  if (withIcon) {
    return (
      <View bg="transparent" mr="sm">
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
      icon={<CloseIcon stroke={color} size="md" />}
      variant="link"
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
      <View flex={1} bg="transparent" pr="sm">
        <View flexDirection="row" flexCenterX>
          <AlertIcon
            icon={icon}
            withIcon={withIcon}
            iconType={iconType}
            colorScheme={colorScheme}
            variant={variant}
          />
          {title ? (
            <StyledAlertTitle colorScheme={colorScheme} variant={variant}>
              <>{title}</>
            </StyledAlertTitle>
          ) : null}
        </View>

        {content ? (
          <View mt="md" bg="transparent">
            <StyledAlertContent colorScheme={colorScheme} variant={variant}>
              <>{content}</>
            </StyledAlertContent>
          </View>
        ) : null}
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
