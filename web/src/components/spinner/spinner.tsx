// @imports

import {
  width,
  height,
  compose,
  border,
} from '@oreo-ui/core/dist/styled/system';
import { spinnerDefaultStyle } from '@oreo-ui/core/dist/styled/themed/spinner';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/web';

import type { SpinnerProps } from './spinner.types';

// @exports
export const Spinner = styled(
  baseStyled('div', ['color', 'background', 'layout'])
)<SpinnerProps>`
  ${(props) => spinnerDefaultStyle({ ...props } as any)}
  ${compose(width, height, border)}
`;
