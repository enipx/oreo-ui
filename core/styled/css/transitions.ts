import { CSSAnimationThemedDefaultProps } from '../components.types';

// @types
export type TransitionsType =
  | 'fade'
  | 'fadeTop'
  | 'fadeLeft'
  | 'fadeRight'
  | 'fadeBottom'
  | 'slideTop'
  | 'slideBottom'
  | 'slideLeft'
  | 'slideRight';

export type TransitionsTypeObject = Record<string, TransitionsType>;

export type TransitionsOption = {
  name: TransitionsType;
} & CSSAnimationThemedDefaultProps;

// @defaults
export const transitionDefaults = {
  duration: '500ms',
  durationTimeout: 400,
};

// @fade
export const fade = () => {
  const ins = `
    from { opacity: 0; }
    to { opacity: 1; }
  `;

  const out = `
    from { opacity: 1; }
    to { opacity: 0; }
  `;

  return { in: ins, out };
};

// @fade top
export const fadeTop = (yAxis = '-3rem') => {
  const ins = `
    from {
      opacity: 0;
      transform: translateY(${yAxis});
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const out = `
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(${yAxis});
    }
  `;

  return { in: ins, out };
};

// @fade bottom
export const fadeBottom = (yAxis = '3rem') => {
  return fadeTop(yAxis);
};

// @fade left
export const fadeLeft = (xAxis = '-3rem') => {
  const ins = `
    from {
      opacity: 0;
      transform: translateX(${xAxis});
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `;

  const out = `
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(${xAxis});
    }
  `;

  return { in: ins, out };
};

// @fade right
export const fadeRight = (xAxis = '3rem') => {
  return fadeLeft(xAxis);
};

// @slide top
export const slideTop = (yAxis = '-100%') => {
  const ins = `
    from {
      transform: translateY(${yAxis});
    }
    to {
      transform: translateY(0);
    }
  `;

  const out = `
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(${yAxis});
    }
  `;

  return { in: ins, out };
};

// @slide bottom
export const slideBottom = (yAxis = '100%') => {
  return slideTop(yAxis);
};

// @slide left
export const slideLeft = (yAxis = '-100%') => {
  const ins = `
    from {
      transform: translateX(${yAxis});
    }
    to {
      transform: translateX(0);
    }
  `;

  const out = `
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(${yAxis});
    }
  `;

  return { in: ins, out };
};

// @slide right
export const slideRight = (yAxis = '100%') => {
  return slideLeft(yAxis);
};

/**
 *
 * @param transition: TransitionsOption
 * @returns setup styles base on config
 */
export const addTransitionsHandler = (transition: TransitionsOption[]) => {
  const transitions: {
    [key in TransitionsType]: () => {
      in: string;
      out: string;
    };
  } = {
    fadeTop,
    fadeBottom,
    fadeLeft,
    fadeRight,
    fade,
    slideTop,
    slideBottom,
    slideRight,
    slideLeft,
  };

  const styles = transition.reduce(
    (preferredTransitions, currrentTransition) => {
      const {
        name,
        duration = transitionDefaults.duration,
        delay = '',
        iterationCount = '',
        direction = '',
        timingFunction = '',
        fillMode = '',
      } = currrentTransition;

      const nameIn = `${name}In`;
      const nameOut = `${name}Out`;

      const keyframeNameIn = `${nameIn}Keyframe`;
      const keyframeNameOut = `${nameOut}Keyframe`;

      const defaultSettings =
        `${duration} ${delay} ${iterationCount} ${direction} ${timingFunction} ${fillMode}`.trimEnd();

      return `
        ${preferredTransitions}

        @keyframes ${keyframeNameIn} {
          ${transitions[name]().in}
        }

        @keyframes ${keyframeNameOut} {
          ${transitions[name]().out}
        }

        &.${nameIn} {
          animation: ${keyframeNameIn} ${defaultSettings};
        }

        &.${nameOut} {
          animation: ${keyframeNameOut} ${defaultSettings};
        }
      `.trim();
    },
    ''
  );

  return styles;
};

export const getTransitionClassName = (name: TransitionsType) => {
  const active = `${name}In`;
  const inactive = `${name}Out`;

  return {
    active,
    inactive,
  };
};
