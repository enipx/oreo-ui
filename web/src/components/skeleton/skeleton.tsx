// @imports

import { layout, border, space } from '@oreo-ui/core/dist/styled/system';
import { skeletonDefaultStyle } from '@oreo-ui/core/dist/styled/themed/skeleton';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/web';

import { FadeIn } from '../transitions';
import type { SkeletonProps } from './skeleton.types';

// @exports
export const StyledSkeleton = styled(
  baseStyled('div', [
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
  ${(props) => skeletonDefaultStyle({ ...props } as any)}
  ${layout};
  ${border};
  ${space}
`;

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
            <StyledSkeleton
              key={key}
              {...otherProps}
              {...({ isLastItem } as any)}
              count={count}
            />
          );
        })}
      </>
    );
  };

  if (!loading && children) {
    return <FadeIn>{children}</FadeIn>;
  }

  return renderSkeleton();
};
