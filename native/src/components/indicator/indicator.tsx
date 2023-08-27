// @imports
import React from 'react';
import { View } from '../view';

import type { IndicatorProps } from './indicator.types';

import {
  indicatorDefaultStyle,
  indicatorTextDefaultStyle,
} from '@/core/styled/themed/indicator';
import { styled, baseStyled } from '@/core/styled/native';

// @exports
export const StyledIndicator = styled(View)<IndicatorProps>`
  ${(props) => indicatorDefaultStyle({ ...props, type: 'native' } as any)}
`;

export const StyledIndicatorText = styled(baseStyled('Text'))<IndicatorProps>`
  ${(props) => indicatorTextDefaultStyle({ ...props, type: 'native' } as any)}
`;

export const Indicator = (props: IndicatorProps) => {
  const { value, children, ...otherProps } = props;

  const renderChildren = () => {
    return children;
  };

  return (
    <View
      position="relative"
      flexDirection="row"
      alignSelf="flex-start"
      flexWrap="wrap">
      <StyledIndicator {...otherProps}>
        <StyledIndicatorText>
          <>{value}</>
        </StyledIndicatorText>
      </StyledIndicator>
      {renderChildren()}
    </View>
  );
};
