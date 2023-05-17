// @imports

import {
  flexCenterStyle,
  flexCenterYStyle,
  flexCenterXStyle,
} from '@/core/styled/css/';
import { color } from '@/core/styled/system';
import { styled, baseStyled } from '@/core/styled/web';
import { componentDefaultStyle } from '@/core/styled/themed/base';

import type { ViewProps } from './view.types';

// @exports
export const StyledView = styled(baseStyled('div'))<ViewProps>`
  ${({ flexCenter }) => flexCenter && flexCenterStyle}
  ${({ flexCenterY }) => flexCenterY && flexCenterYStyle}
  ${({ flexCenterX }) => flexCenterX && flexCenterXStyle}
  ${(props) => componentDefaultStyle({ ...props } as any)}
  ${color}
`;

export const View = (props: ViewProps) => {
  return <StyledView {...props} />;
};
