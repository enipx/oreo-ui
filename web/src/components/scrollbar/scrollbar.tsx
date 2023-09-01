// @imports
import { scrollbarDefaultStyle } from '@oreo-ui/core/dist/styled/themed/scrollbar';
import { styled } from '@oreo-ui/core/dist/styled/web';

import { View } from '../view';
import type { ScrollbarProps } from './scrollbar.types';

// @exports
export const Scrollbar = styled(View)<ScrollbarProps>`
  ${(props) => scrollbarDefaultStyle({ ...props } as any)}
`;
