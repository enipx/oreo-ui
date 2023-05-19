import type {
  TextareaThemedStyledProps,
  TextareaResizeType,
} from '@/core/styled/components.types';

export interface TextareaProps
  extends TextareaThemedStyledProps,
    Omit<
      React.InputHTMLAttributes<HTMLTextAreaElement>,
      'size' | 'height' | 'width' | 'color'
    > {
  resize?: TextareaResizeType;
}
