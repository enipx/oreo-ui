// @imports
import {
  width,
  height,
  border,
  compose,
  typography,
  flexbox,
} from '@/core/styled/system';
import { componentDefaultStyle } from '@/core/styled/themed/base';
import {
  buttonDefaultStyle,
  buttonSizeVariant,
  buttonStateVariant,
  buttonDefaults,
} from '@/core/styled/themed/button';
import { styled, baseStyled } from '@/core/styled/web';
import { forwardRef } from 'react';

import { Spinner } from '../spinner';
import { View } from '../view';
import type { ButtonProps } from './button.types';

// @exports
export const StyledButton = styled(baseStyled('button'))<ButtonProps>`
  ${(props) => buttonDefaultStyle({ ...props } as any)}
  ${(props) => buttonSizeVariant({ ...props } as any)}
  ${(props) => buttonStateVariant({ ...props } as any)}
  ${(props) => componentDefaultStyle({ ...props } as any)}
  ${compose(width, height, border, typography, flexbox)}
`;

export const Button = forwardRef((props: ButtonProps, ref) => {
  const {
    text,
    icon,
    rightIcon,
    size = buttonDefaults.size,
    colorScheme = buttonDefaults.colorScheme,
    children,
    loading,
    loadingText,
    loadingIcon,
    ...otherProps
  } = props;

  const renderChildren = () => {
    if (loading) {
      return (
        <>
          {loadingIcon || (
            <View className={buttonDefaults.iconClassName} as="span">
              <Spinner size="xs" color="inherit" />
            </View>
          )}
          {loadingText || null}
        </>
      );
    }

    return (
      <>
        {icon ? (
          <View className={buttonDefaults.iconClassName} as="span">
            {icon}
          </View>
        ) : null}
        {children || text}
        {rightIcon ? (
          <View className={buttonDefaults.iconClassName} as="span">
            {rightIcon}
          </View>
        ) : null}
      </>
    );
  };

  return (
    <StyledButton
      colorScheme={colorScheme}
      size={size}
      ref={ref}
      {...(otherProps as any)}>
      {renderChildren()}
    </StyledButton>
  );
});
