// @imports
import { View } from '../view';
import type { ScrollbarProps } from './scrollbar.types';

import { scrollbarDefaultStyle } from '@/core/styled/themed/scrollbar';
import { styled } from '@/core/styled/web';

// @exports
export const Scrollbar = styled(View)<ScrollbarProps>`
  ${(props) => scrollbarDefaultStyle({ ...props } as any)}
`;
