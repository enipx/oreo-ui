// @imports
import React from 'react';
import { Path, Svg } from 'react-native-svg';

import type { NativeSvgProps } from '@/core/styled/index.types';
import { iconSizing } from '@/core/theme/utilities/sizing';
import { CloseIcon } from '../modal/modal-icon';

export const InfoIcon: React.FC<NativeSvgProps> = (props) => {
  const { size } = props;
  const iconSize = iconSizing[size || 'sm'];
  const fill = props.theme?.colors.gray[500];

  return (
    <Svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
      <Path
        fillRule="evenodd"
        d="M1.5 9C1.5 4.86 4.86 1.5 9 1.5a7.5 7.5 0 1 1 0 15c-4.14 0-7.5-3.359-7.5-7.5zm7.502-2.114c-.56 0-1.006-.457-1.006-1.006s.446-.994.994-.994c.56 0 1.006.446 1.006.994s-.446 1.006-.994 1.006zM8.246 8.64a.76.76 0 0 1 .754-.754c.411 0 .746.344.746.754v3.789c0 .412-.334.746-.746.746s-.754-.333-.754-.746V8.64z"
        fill={props.fill || fill || '#000'}
      />
    </Svg>
  );
};

export const SuccessIcon: React.FC<NativeSvgProps> = (props) => {
  const { size } = props;
  const iconSize = iconSizing[size || 'sm'];
  const fill = props.theme?.colors.gray[500];

  return (
    <Svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
      <Path
        fillRule="evenodd"
        d="M1.5 9C1.5 4.86 4.86 1.5 9 1.5a7.5 7.5 0 1 1 0 15c-4.14 0-7.5-3.359-7.5-7.5zm7.072 2.056l3.562-3.562a.66.66 0 0 0 0-.93.66.66 0 0 0-.93 0L8.108 9.661 6.795 8.349a.66.66 0 0 0-.93 0 .66.66 0 0 0 0 .93l1.785 1.777a.64.64 0 0 0 .457.188c.173 0 .338-.06.465-.187z"
        fill={props.fill || fill || '#000'}
      />
    </Svg>
  );
};

export const WarningIcon: React.FC<NativeSvgProps> = (props) => {
  const { size } = props;
  const iconSize = iconSizing[size || 'sm'];
  const fill = props.theme?.colors.gray[500];

  return (
    <Svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
      <Path
        fillRule="evenodd"
        d="M10.858 3.332l5.452 9.461c.12.282.172.512.188.751a2.07 2.07 0 0 1-.547 1.516c-.383.415-.9.661-1.462.69H3.509a2.36 2.36 0 0 1-.682-.149c-1.087-.438-1.612-1.672-1.17-2.742l5.489-9.535c.187-.335.472-.624.825-.81a2.14 2.14 0 0 1 2.887.817zM9.651 9.567c0 .357-.292.655-.652.655s-.66-.298-.66-.655V7.464c0-.357.3-.647.66-.647a.65.65 0 0 1 .652.647v2.102zm-.652 3.196c-.36 0-.66-.298-.66-.654s.3-.655.66-.655a.65.65 0 0 1 .652.647.66.66 0 0 1-.652.662z"
        fill={props.fill || fill || '#000'}
      />
    </Svg>
  );
};

export const DangerIcon: React.FC<NativeSvgProps> = (props) => {
  const { size } = props;
  const iconSize = iconSizing[size || 'sm'];
  const fill = props.theme?.colors.gray[500];

  return (
    <Svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
      <Path
        fillRule="evenodd"
        d="M1.5 9C1.5 4.86 4.86 1.5 9 1.5a7.5 7.5 0 1 1 0 15c-4.14 0-7.5-3.359-7.5-7.5zm6.746-3.36a.76.76 0 0 1 .754-.754c.411 0 .746.344.746.754v3.789c0 .412-.334.746-.746.746s-.754-.333-.754-.746V5.64zm.756 7.534c-.56 0-1.006-.457-1.006-1.006s.446-.994.994-.994c.56 0 1.006.446 1.006.994s-.446 1.006-.994 1.006z"
        fill={props.fill || fill || '#000'}
      />
    </Svg>
  );
};

export { CloseIcon };
