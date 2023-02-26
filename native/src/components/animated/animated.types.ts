import type { AnimatedThemedDefaultProps } from '@/core/styled/components.types';
import type {
  TransitionsKeyframeOptions,
  TransitionsType,
} from '@/core/styled/css/transitions';
import type { ViewProps } from 'react-native';

export interface AnimatedProps extends AnimatedThemedDefaultProps, ViewProps {
  name?: TransitionsType;
  onAnimationEnd?: () => void;
}

export interface useAnimationOptions {
  name?: TransitionsType;
  callback?: () => void;
}

export interface getTransitionOptions {
  name?: TransitionsType;
  animatedOptions?: TransitionsKeyframeOptions;
}
