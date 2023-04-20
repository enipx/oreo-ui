// @imports
import { View } from '@components/view';
import { Children, cloneElement } from 'react';

import type { FlexProps } from './flex.types';

import { isString } from '@/core/helpers/base';
import {
  flexDefaultStyle,
  flexSpacerDefaultStyle,
} from '@/core/styled/themed/flex';
import { styled } from '@/core/styled/web';

// @exports
export const StyledFlex = styled(View)<FlexProps>`
  ${(props) => flexDefaultStyle({ ...props } as any)}
`;

export const Spacer = styled(View)<FlexProps>`
  ${(props) => flexSpacerDefaultStyle({ ...props } as any)}
`;

export const Flex = (props: FlexProps) => {
  const { children, ...otherProps } = props;

  const renderChildren = isString(children) ? (
    <View>{children}</View>
  ) : (
    children
  );

  return (
    <StyledFlex {...otherProps}>
      {Children.map(renderChildren, (child, _index) => {
        if (!child) return null;

        return cloneElement(child as any);
      })}
    </StyledFlex>
  );
};

Flex.Fill = Spacer;
