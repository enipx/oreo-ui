import React, { useEffect } from 'react';
import type { AnimatedProps } from './animated.types';

import { Animated as DefaultAnimated } from 'react-native';
import { useAnimation } from './use-animation';

export const Animated = (props: AnimatedProps) => {
  const { name, onAnimationEnd, children, style, ...otherProps } = props;

  const { animatedStyles, animated } = useAnimation({
    name,
    callback: onAnimationEnd,
  });

  useEffect(() => {
    animated(1).start();
  }, [animated]);

  return (
    <DefaultAnimated.View style={[style, animatedStyles]} {...otherProps}>
      {children}
    </DefaultAnimated.View>
  );
};

Animated.Container = DefaultAnimated;

export const AnimatedBase = DefaultAnimated;
