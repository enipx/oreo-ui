import type { CSSAnimationThemedDefaultProps } from '../components.types';

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
  | 'slideRight'
  | 'none';

export type TransitionsTypeObject = Record<string, TransitionsType>;

export type TransitionsKeyframeOptions = {
  yAxis?: string;
  xAxis?: string;
};

export interface TransitionsOption extends CSSAnimationThemedDefaultProps {
  name: TransitionsType;
  keyframeOptions?: TransitionsKeyframeOptions;
}

// @defaults
export const transitionDefaults = {
  duration: '500ms',
  durationTimeout: 400,
};

// @fade
export const fade = (_options: TransitionsKeyframeOptions) => {
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
export const fadeTop = (options: TransitionsKeyframeOptions) => {
  const { yAxis = '-3rem' } = options;

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
export const fadeBottom = (options: TransitionsKeyframeOptions) => {
  const { yAxis = '3rem', ...rest } = options;

  return fadeTop({ ...rest, yAxis });
};

// @fade left
export const fadeLeft = (options: TransitionsKeyframeOptions) => {
  const { xAxis = '-3rem' } = options;

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
export const fadeRight = (options: TransitionsKeyframeOptions) => {
  const { xAxis = '3rem', ...rest } = options;

  return fadeLeft({ ...rest, xAxis });
};

// @slide top
export const slideTop = (options: TransitionsKeyframeOptions) => {
  const { yAxis = '-100%' } = options;

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
export const slideBottom = (options: TransitionsKeyframeOptions) => {
  const { yAxis = '100%', ...rest } = options;

  return slideTop({ ...rest, yAxis });
};

// @slide left
export const slideLeft = (options: TransitionsKeyframeOptions) => {
  const { xAxis = '-100%' } = options;

  const ins = `
    from {
      transform: translateX(${xAxis});
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
      transform: translateX(${xAxis});
    }
  `;

  return { in: ins, out };
};

// @slide right
export const slideRight = (options: TransitionsKeyframeOptions) => {
  const { xAxis = '100%', ...rest } = options;
  return slideLeft({ ...rest, xAxis });
};

/**
 *
 * @param transition: TransitionsOption
 * @returns setup styles base on config
 */
export const addTransitionsHandler = (transition: TransitionsOption[]) => {
  const transitions: {
    [key in TransitionsType]: (options: TransitionsKeyframeOptions) => {
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
    none: () => ({ in: '', out: '' }),
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
        keyframeOptions,
      } = currrentTransition;

      const nameIn = `${name}In`;
      const nameOut = `${name}Out`;

      const keyframeNameIn = `${nameIn}Keyframe`;
      const keyframeNameOut = `${nameOut}Keyframe`;

      const defaultSettings =
        `${duration} ${delay} ${iterationCount} ${direction} ${timingFunction} ${fillMode}`.trimEnd();

      const skipTransition = getIfTransitionIsDisabled(name);

      // skip transition
      if (skipTransition) {
        return `
        ${preferredTransitions}
      `.trim();
      }

      return `
        ${preferredTransitions}

        @keyframes ${keyframeNameIn} {
          ${transitions[name]({ ...keyframeOptions }).in}
        }

        @keyframes ${keyframeNameOut} {
          ${transitions[name]({ ...keyframeOptions }).out}
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
  const skipTransition = getIfTransitionIsDisabled(name);

  const active = skipTransition ? '' : `${name}In`;
  const inactive = skipTransition ? '' : `${name}Out`;

  return {
    active,
    inactive,
  };
};

export const getIfTransitionIsDisabled = (name: TransitionsType) => {
  return name === 'none';
};
