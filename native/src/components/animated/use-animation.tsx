import spacing from '@/core/theme/utilities/spacing';
import { useCallback, useRef } from 'react';
import { Animated } from 'react-native';
import type {
  getTransitionOptions,
  useAnimationOptions,
} from './animated.types';

const getTransitions = (options: getTransitionOptions) => {
  //
  const { name, animatedOptions } = options;

  const getAxis = (axisOptions?: { negative?: boolean }) => {
    const defaultValue = axisOptions?.negative ? -spacing[9] : spacing[9];

    const yAxis = animatedOptions?.yAxis || defaultValue;

    const xAxis = animatedOptions?.xAxis || defaultValue;

    return {
      yAxis: +yAxis,
      xAxis: +xAxis,
    };
  };

  const animatedValues = {
    translateY: [0, 0],
    translateX: [0, 0],
    opacity: [0, 1],
    inputRange: [0, 1],
  };

  // fade bottom animation
  if (name === 'fadeBottom') {
    const { yAxis } = getAxis();
    animatedValues.translateY = [yAxis, 0];
  }

  // fade top animation
  if (name === 'fadeTop') {
    const { yAxis } = getAxis({ negative: true });
    animatedValues.translateY = [yAxis, 0];
  }

  return animatedValues;
};

export const useAnimation = (options: useAnimationOptions) => {
  const { name } = options;

  // get animation value in ranges
  const {
    inputRange,
    translateY: translateYOutput,
    opacity: opacityOutput,
  } = getTransitions({ name });

  // returns animation value. Initial Value: 0
  const animatedValue = useRef(new Animated.Value(0)).current;

  const opacity = animatedValue.interpolate({
    inputRange,
    outputRange: opacityOutput,
  });

  const translateY = animatedValue.interpolate({
    inputRange,
    outputRange: translateYOutput,
  });

  const animatedStyles = {
    opacity,
    transform: [
      {
        translateY,
      },
    ],
  };

  const animated = useCallback(
    (toValue: number) => {
      return Animated.spring(animatedValue, {
        toValue,
        useNativeDriver: true,
        friction: 8,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return { animatedStyles, animated, animatedValue };
};
