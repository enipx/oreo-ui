// @imports
import type { SpinnerProps } from './spinner.types';

import { layout, border } from '@/core/styled/system';
import { spinnerDefaultStyle } from '@/core/styled/themed/spinner';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const Spinner = styled(
  baseStyled('div', ['color', 'background', 'background'])
)<SpinnerProps>`
  ${(props) => spinnerDefaultStyle({ ...props } as any)}
  ${layout}
  ${border}
`;
