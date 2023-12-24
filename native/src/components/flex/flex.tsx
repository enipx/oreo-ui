// @imports
import { View } from '../view';
import React, { Children, cloneElement } from 'react';

import type { FlexProps } from './flex.types';

import { isString } from '@oreo-ui/core/dist/helpers/base';
import {
  flexDefaultStyle,
  flexSpacerDefaultStyle,
} from '@oreo-ui/core/dist/styled/themed/flex';
import { styled } from '@oreo-ui/core/dist/styled/web';
import { allStyle } from '@oreo-ui/core/dist/styled/system';

// @exports
export const StyledFlex = styled(View)<FlexProps>`
  ${(props) => flexDefaultStyle({ ...props, type: 'native' } as any)}
  ${allStyle()}
`;

export const Spacer = styled(View)<FlexProps>`
  ${(props) => flexSpacerDefaultStyle({ ...props, type: 'native' } as any)}
`;

export const Flex = (props: FlexProps) => {
  const { children, spacing, ...otherProps } = props;

  const renderChildren = isString(children) ? (
    <View>{children}</View>
  ) : (
    children
  );

  return (
    <StyledFlex {...otherProps}>
      {Children.map(renderChildren, (child, _index) => {
        const isFirstItem = _index === 0;

        if (!child) return null;

        return cloneElement(child as any, {
          style: isFirstItem ? {} : { marginLeft: spacing },
        });
      })}
    </StyledFlex>
  );
};

Flex.Fill = Spacer;
