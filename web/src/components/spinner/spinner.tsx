// @imports

import { width, height, compose, border } from '@/core/styled/system';
import { spinnerDefaultStyle } from '@/core/styled/themed/spinner';
import { styled, baseStyled } from '@/core/styled/web';

import type { SpinnerProps } from './spinner.types';

// @exports
export const Spinner = styled(
  baseStyled('div', ['color', 'background', 'layout'])
)<SpinnerProps>`
  ${(props) => spinnerDefaultStyle({ ...props } as any)}
  ${compose(width, height, border)}
`;
