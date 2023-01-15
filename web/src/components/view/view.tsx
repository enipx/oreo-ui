// @imports
import type { ViewProps } from './view.types';

import { styled, baseStyled } from '@/core/styled/web';

// @styles
const flexCenterStyle = `
  align-items: center;
  display: flex;
  justify-content: center;
`;

const flexCenterYStyle = `
  align-items: center;
  display: flex;
`;

const flexCenterXStyle = `
  display: flex;
  justify-content: center;
`;

// @exports
export const View = styled(baseStyled('div'))<ViewProps>`
  ${({ flexCenter }) => flexCenter && flexCenterStyle}
  ${({ flexCenterY }) => flexCenterY && flexCenterYStyle}
  ${({ flexCenterX }) => flexCenterX && flexCenterXStyle}
`;
