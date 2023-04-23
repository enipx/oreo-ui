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
    warning: <WarningIcon size="sm" />,
    info: <InfoIcon size="sm" />,
    success: <SuccessIcon size="sm" />,
    danger: <DangerIcon size="sm" />,
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
      icon={<CloseIcon size="md" />}
      variant="link"
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
    transition = 'fade',
    ...otherProps
  } = props;

  const transitionClassName = getTransitionClassName(transition);

  const [show, setShow] = useState(true);

  const alertRef = useRef<HTMLDivElement>(null);

  const onCloseHandler = () => {
    if (transitionClassName.inactive) {
      alertRef.current?.classList.remove(transitionClassName.active);
      alertRef.current?.classList.add(transitionClassName.inactive);

      setTimeout(() => {
        setShow(false);
        onClose?.();
      }, transitionDefaults.durationTimeout);

      return;
    }

    onClose?.();
  };

  if (!show) return null;

  return (
    <StyledAlert
      ref={alertRef}
      colorScheme={colorScheme}
      variant={variant}
      className={transitionClassName.active}
      {...(otherProps as any)}>
      <View className={alertDefaults.contentClassName}>
        <View flexCenterY>
          <AlertIcon
            icon={icon}
            withIcon={withIcon}
            iconType={iconType}
            colorScheme={colorScheme}
            variant={variant}
          />
          <Text>{title}</Text>
        </View>
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
