// @imports
import React from 'react';
import type { ViewProps } from './view.types';
import { styled, baseStyled } from '@/core/styled/native';
import { KeyboardAvoidingView } from 'react-native';
import { isIOS } from '../../helpers/base';

// @styles
const flexCenterStyle = `
  align-items: center;
  display: flex;
  justify-content: center;
`;

const flexCenterYStyle = `
  display: flex;
  justify-content: center;
`;

const flexCenterXStyle = `
  align-items: center;
  display: flex;
`;

// @exports

export const StyledView = styled(baseStyled('View'))<ViewProps>`
  ${({ flexCenter }) => flexCenter && flexCenterStyle}
  ${({ flexCenterY }) => flexCenterY && flexCenterYStyle}
  ${({ flexCenterX }) => flexCenterX && flexCenterXStyle}
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
