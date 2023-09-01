import type {
  TextareaThemedStyledProps,
  TextareaResizeType,
} from '@oreo-ui/core/dist/styled/components.types';

export interface TextareaProps
  extends TextareaThemedStyledProps,
    Omit<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      'size' | 'height' | 'width' | 'color'
    > {
  resize?: TextareaResizeType;
}
