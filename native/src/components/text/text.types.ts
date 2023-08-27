import type { TextProps as DefaultTextProps } from 'react-native';
import type { TextThemedStyledProps } from '@/core/styled/components.types';

export interface TextProps
  extends DefaultTextProps,
    Omit<TextThemedStyledProps, keyof DefaultTextProps> {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong';
}
