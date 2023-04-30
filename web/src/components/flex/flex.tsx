// @imports
import {
  flexDefaultStyle,
  flexSpacerDefaultStyle,
} from '@/core/styled/themed/flex';
import { styled } from '@/core/styled/web';

import { View } from '@components/view';

import type { FlexProps } from './flex.types';

// @exports
export const StyledFlex = styled(View)<FlexProps>`
  ${(props) => flexDefaultStyle({ ...props } as any)}
`;

export const Spacer = styled(View)<FlexProps>`
  ${(props) => flexSpacerDefaultStyle({ ...props } as any)}
`;

export const Flex = (props: FlexProps) => {
  const { children, ...otherProps } = props;

  return <StyledFlex {...otherProps}>{children}</StyledFlex>;
};

Flex.Fill = Spacer;
