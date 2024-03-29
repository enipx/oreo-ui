// @imports
import {
  getTransitionClassName,
  transitionDefaults,
} from '@oreo-ui/core/dist/styled/css/transitions';
import { componentDefaultStyle } from '@oreo-ui/core/dist/styled/themed/base';
import {
  alertDefaultStyle,
  alertDefaults,
  getAlertIconType,
} from '@oreo-ui/core/dist/styled/themed/alert';
import { allStyle } from '@oreo-ui/core/dist/styled/system';
import { styled } from '@oreo-ui/core/dist/styled/web';
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

// @exports
export const StyledAlert = styled(View)<AlertProps>`
  ${(props) => alertDefaultStyle({ ...props } as any)}
  ${(props) => componentDefaultStyle({ ...props } as any)}
  ${allStyle()}
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

  if (icon) return <>{icon}</>;

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

  const alertContent = children || content;

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
          {title ? <Text>{title}</Text> : null}
        </View>
        {alertContent ? (
          <View className={alertDefaults.contentDescrClassName}>
            {alertContent}
          </View>
        ) : null}
      </View>
      <AlertCloseButton
        withCloseButton={withCloseButton}
        onClick={onCloseHandler}
      />
    </StyledAlert>
  );
};
