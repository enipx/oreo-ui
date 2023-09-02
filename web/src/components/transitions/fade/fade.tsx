// @imports

import {
  transitionDefaults,
  fade,
  fadeLeft,
  fadeRight,
  fadeTop,
} from '@oreo-ui/core/dist/styled/css/transitions';
import {
  styled,
  baseStyled,
  keyframes,
  css,
} from '@oreo-ui/core/dist/styled/web';

import type { FadeProps } from './fade.types';

// @exports
export const animationOptionsStyle = (props: FadeProps) => {
  const {
    duration = transitionDefaults.duration,
    delay = '',
    iterationCount = '',
    direction = '',
    timingFunction = '',
    fillMode = '',
  } = props;

  const style = `${duration} ${delay} ${iterationCount} ${direction} ${timingFunction} ${fillMode}`;

  return style;
};

export const defaultStyle = () => {
  return baseStyled('div', ['layout']);
};

// @fade
const fadeInKeyframes = keyframes`
  ${fade({}).in}
`;

export const FadeIn = styled(defaultStyle())<FadeProps>`
  animation: ${(props) =>
    css`
      ${fadeInKeyframes} ${animationOptionsStyle(props)};
    `};
`;

const fadeOutKeyframes = keyframes`
  ${fade({}).out}
`;

export const FadeOut = styled(defaultStyle())<FadeProps>`
  animation: ${(props) =>
    css`
      ${fadeOutKeyframes} ${animationOptionsStyle(props)};
    `};
`;

// @fade-top
const fadeInTopKeyframes = keyframes`
  ${fadeTop({}).in}
`;

export const FadeInTop = styled(defaultStyle())<FadeProps>`
  animation: ${(props) =>
    css`
      ${fadeInTopKeyframes} ${animationOptionsStyle(props)};
    `};
`;

const fadeOutTopKeyframes = keyframes`
  ${fadeTop({}).out}
`;

export const FadeOutTop = styled(defaultStyle())<FadeProps>`
  animation: ${(props) =>
    css`
      ${fadeOutTopKeyframes} ${animationOptionsStyle(props)};
    `};
`;

// @fade-left
const fadeInLeftKeyframes = keyframes`
  ${fadeLeft({}).in}
`;

export const FadeInLeft = styled(defaultStyle())<FadeProps>`
  animation: ${(props) =>
    css`
      ${fadeInLeftKeyframes} ${animationOptionsStyle(props)};
    `};
`;

const fadeOutLeftKeyframes = keyframes`
  ${fadeLeft({}).out}
`;

export const FadeOutLeft = styled(defaultStyle())<FadeProps>`
  animation: ${(props) =>
    css`
      ${fadeOutLeftKeyframes} ${animationOptionsStyle(props)};
    `};
`;

// @fade-right
const fadeInRightKeyframes = keyframes`
  ${fadeRight({}).in}
`;

export const FadeInRight = styled(defaultStyle())<FadeProps>`
  animation: ${(props) =>
    css`
      ${fadeInRightKeyframes} ${animationOptionsStyle(props)};
    `};
`;

const fadeOutRightKeyframes = keyframes`
  ${fadeRight({}).out}
`;

export const FadeOutRight = styled(defaultStyle())<FadeProps>`
  animation: ${(props) =>
    css`
      ${fadeOutRightKeyframes} ${animationOptionsStyle(props)};
    `};
`;
