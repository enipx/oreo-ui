// @imports
import React, { useRef, useEffect } from 'react';
import { AnimatedBase } from '../animated';
import type { SkeletonProps } from './skeleton.types';

import { layout, border, space } from '@/core/styled/system';
import {
  skeletonDefaultStyle,
  skeletonBaseDefaultStyle,
} from '@/core/styled/themed/skeleton';
import { styled, baseStyled } from '@/core/styled/native';
import { getLayout } from '../../../src/helpers/base';
import spacing from '@/core/theme/utilities/spacing';

// @exports
export const StyledSkeleton = styled(
  baseStyled('View', [
    'background',
    'color',
    'flexbox',
    'grid',
    'position',
    'shadow',
    'space',
    'typography',
  ])
)<SkeletonProps>`
  ${(props) => skeletonDefaultStyle({ ...props, type: 'native' } as any)}
  ${layout};
  ${border};
  ${space}
`;

export const StyledSkeletonBase = styled(baseStyled('View'))<SkeletonProps>`
  ${(props) => skeletonBaseDefaultStyle({ ...props } as any)}
`;

export const SkeletonBase = (props: SkeletonProps & { index?: number }) => {
  const startValue = useRef(new AnimatedBase.Value(-spacing[8])).current;
  const endValue = getLayout().width;

  const index = (props.index as any) || 0;

  useEffect(() => {
    AnimatedBase.loop(
      AnimatedBase.timing(startValue, {
        toValue: endValue,
        useNativeDriver: true,
        duration: 1500,
        delay: 20 * (index || 0),
      })
    ).start();
  }, [endValue, index, startValue]);

  return (
    <StyledSkeleton {...props}>
      <AnimatedBase.View
        style={[
          {
            transform: [{ translateX: startValue }],
          },
        ]}>
        <StyledSkeletonBase endColor={props.endColor} />
      </AnimatedBase.View>
    </StyledSkeleton>
  );
};

export const Skeleton = (props: SkeletonProps) => {
  const { count = 1, children, loading = false, ...otherProps } = props;

  const countArray = [...Array(count)];

  const renderSkeleton = () => {
    return (
      <>
        {countArray.map((_item, _index) => {
          const isLastItem = count - 1 === _index;

          const key = `skeleton-item-${_index}`;

          return (
            <SkeletonBase
              key={key}
              {...otherProps}
              {...({ isLastItem, index: _index } as any)}
              count={count}
            />
          );
        })}
      </>
    );
  };

  if (!loading && children) {
    return <>{children}</>;
  }

  return renderSkeleton();
};
