// @imports
import React from 'react';
import type { ViewProps } from './view.types';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/native';
import {
  flexCenterStyle,
  flexCenterYStyle,
  flexCenterXStyle,
} from '@oreo-ui/core/dist/styled/css/';
import { KeyboardAvoidingView } from 'react-native';
import { isIOS } from '../../helpers/base';

// @exports
export const StyledView = styled(baseStyled('View'))<ViewProps>`
  ${({ flexCenter }) => flexCenter && flexCenterStyle}
  ${({ flexCenterY }) => flexCenterY && flexCenterXStyle}
  ${({ flexCenterX }) => flexCenterX && flexCenterYStyle}
`;

export const View = (props: ViewProps) => {
  const {
    enableKeyboardAvoidingView,
    keyboardAvoidingViewProps,
    children,
    ...otherProps
  } = props;

  const renderChildren = () => {
    return <StyledView {...(otherProps as any)}>{children}</StyledView>;
  };

  if (enableKeyboardAvoidingView) {
    return (
      <KeyboardAvoidingView
        behavior={isIOS() ? 'padding' : 'height'}
        {...keyboardAvoidingViewProps}>
        {renderChildren()}
      </KeyboardAvoidingView>
    );
  }

  return renderChildren();
};
