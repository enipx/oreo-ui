// @imports

import {
  flexCenterStyle,
  flexCenterYStyle,
  flexCenterXStyle,
} from '@/core/styled/css/';
import { color } from '@/core/styled/system';
import { styled, baseStyled } from '@/core/styled/web';

import type { ViewProps } from './view.types';

// @exports
export const View = styled(baseStyled('div'))<ViewProps>`
  ${({ flexCenter }) => flexCenter && flexCenterStyle}
  ${({ flexCenterY }) => flexCenterY && flexCenterYStyle}
  ${({ flexCenterX }) => flexCenterX && flexCenterXStyle}
  ${color}
`;
