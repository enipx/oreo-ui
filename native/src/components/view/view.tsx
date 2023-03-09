// @imports
import React from 'react';
import type { ViewProps } from './view.types';
import { styled, baseStyled } from '@/core/styled/native';
import {
  flexCenterStyle,
  flexCenterYStyle,
  flexCenterXStyle,
} from '@/core/styled/css/';
import { KeyboardAvoidingView } from 'react-native';
import { isIOS } from '../../helpers/base';
import { baseBackgroundColor } from '@/core/styled/themed/base';
import { color } from '@/core/styled/system';

// @exports

export const StyledView = styled(baseStyled('View'))<ViewProps>`
  ${({ flexCenter }) => flexCenter && flexCenterStyle}
  ${({ flexCenterY }) => flexCenterY && flexCenterXStyle}
  ${({ flexCenterX }) => flexCenterX && flexCenterYStyle}
  background-color: ${baseBackgroundColor};
  ${color}
`;

export const View: React.FC<ViewProps> = (props) => {
  const { enableKeyboardAvoidingView, keyboardAvoidingViewProps } = props;

  const renderChildren = () => {
    return <StyledView {...(props as any)} />;
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
