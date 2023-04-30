// @imports
import { scrollbarDefaultStyle } from '@/core/styled/themed/scrollbar';
import { styled } from '@/core/styled/web';

import { View } from '../view';
import type { ScrollbarProps } from './scrollbar.types';

// @exports
export const Scrollbar = styled(View)<ScrollbarProps>`
  ${(props) => scrollbarDefaultStyle({ ...props } as any)}
`;
