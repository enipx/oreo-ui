// @imports
import React, { useRef, useEffect, useCallback } from 'react';
import { View } from '../view';

import type { SpinnerProps } from './spinner.types';

import {
  spinnerDefaultStyle,
  spinnerDefaults,
} from '@/core/styled/themed/spinner';
import { styled } from '@/core/styled/native';
import { width, height, compose } from '@/core/styled/system';
import { AnimatedBase } from '../animated';
import { Easing } from 'react-native';

// @exports
export const StyledSpinner = styled(View)<SpinnerProps>`
  ${(props) => spinnerDefaultStyle({ ...props, type: 'native' } as any)}
  ${compose(width, height)}
`;

export const Spinner = (props: SpinnerProps) => {
  const startValue = useRef(new AnimatedBase.Value(0)).current;
  const endValue = 1;

  const duration = props?.duration || spinnerDefaults.duration;

  const rotate = startValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animate = useCallback(() => {
    AnimatedBase.loop(
      AnimatedBase.timing(startValue, {
        toValue: endValue,
        useNativeDriver: true,
        duration,
        easing: Easing.linear,
      })
    ).start(() => {
      startValue.setValue(0);
    });
  }, [duration, startValue]);

  useEffect(() => {
    animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatedBase.View
      style={[
        // eslint-disable-next-line react-native/no-inline-styles
        {
          transform: [{ rotate }],
          alignSelf: 'flex-start',
        },
      ]}>
      <StyledSpinner {...props} />
    </AnimatedBase.View>
  );
};
