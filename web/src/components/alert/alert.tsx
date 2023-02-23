// @imports
import { useRef, useState } from 'react';

import { IconButton } from '../icon-button';
import { Text } from '../text';
import { View } from '../view';
import {
  WarningIcon,
  InfoIcon,
  SuccessIcon,
  DangerIcon,
  CloseIcon,
} from './alert-icon';
import type { AlertProps, AlertIconObjectType } from './alert.types';

import {
  getTransitionClassName,
  transitionDefaults,
} from '@/core/styled/css/transitions';
import {
  alertDefaultStyle,
  alertDefaults,
  getAlertIconType,
} from '@/core/styled/themed/alert';
import { styled } from '@/core/styled/web';

// @exports
export const StyledAlert = styled(View)<AlertProps>`
  ${(props) => alertDefaultStyle({ ...props } as any)}
`;

export const AlertIcon = (props: AlertProps) => {
  const { icon, withIcon } = props;

  const type = getAlertIconType(props);

  const Icon: AlertIconObjectType = {
    warning: <WarningIcon />,
    info: <InfoIcon />,
    success: <SuccessIcon />,
    danger: <DangerIcon />,
  };

  if (withIcon) {
    return <View className={alertDefaults.iconClassName}>{Icon[type]}</View>;
  }

  if (icon) return icon as JSX.Element;

  return null;
};

export const AlertCloseButton = (
  props: AlertProps & { onClick?: () => void }
) => {
  const { withCloseButton, onClick } = props;

  if (!withCloseButton) return null;

  return (
    <IconButton
      onClick={onClick}
      size="xs"
      className={alertDefaults.closeClassName}
      icon={<CloseIcon size="4xs" />}
    />
  );
};

export const Alert = (props: AlertProps) => {
  const {
    children,
    colorScheme,
    variant,
    title,
    withCloseButton,
    onClose,
    icon,
    withIcon,
    iconType,
    content,
    ...otherProps
  } = props;

  const transition = getTransitionClassName('fade');

  const [show, setShow] = useState(true);

  const alertRef = useRef<HTMLDivElement>(null);

  const onCloseHandler = () => {
    alertRef.current?.classList.add(transition.inactive);

    setTimeout(() => {
      setShow(false);
      onClose?.();
    }, transitionDefaults.durationTimeout);
  };

  if (!show) return null;

  return (
    <StyledAlert
      ref={alertRef}
      colorScheme={colorScheme}
      variant={variant}
      className={transition.active}
      {...(otherProps as any)}>
      <AlertIcon
        icon={icon}
        withIcon={withIcon}
        iconType={iconType}
        colorScheme={colorScheme}
      />
      <View className={alertDefaults.contentClassName}>
        <Text>{title}</Text>
        <View className={alertDefaults.contentDescrClassName}>
          {content || children}
        </View>
      </View>
      <AlertCloseButton
        withCloseButton={withCloseButton}
        onClick={onCloseHandler}
      />
    </StyledAlert>
  );
};
