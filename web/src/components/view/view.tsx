// @imports
import type { ViewProps } from './view.types';

import {
  flexCenterStyle,
  flexCenterYStyle,
  flexCenterXStyle,
} from '@/core/styled/css/';
import { color } from '@/core/styled/system';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const View = styled(baseStyled('div'))<ViewProps>`
  ${({ flexCenter }) => flexCenter && flexCenterStyle}
  ${({ flexCenterY }) => flexCenterY && flexCenterYStyle}
  ${({ flexCenterX }) => flexCenterX && flexCenterXStyle}
  ${color}
`;
