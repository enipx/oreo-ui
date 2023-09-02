import type { AnimatedThemedDefaultProps } from '@oreo-ui/core/dist/styled/components.types';
import type {
  TransitionsKeyframeOptions,
  TransitionsType,
} from '@oreo-ui/core/dist/styled/css/transitions';
import type { ViewProps } from 'react-native';

export interface AnimatedProps
  extends AnimatedThemedDefaultProps,
    Omit<ViewProps, keyof AnimatedThemedDefaultProps> {
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
