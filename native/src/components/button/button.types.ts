import type { TouchableOpacityProps } from 'react-native';

export type ButtonSizesType = 'small' | 'medium' | 'large';

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;

  /**
   * What color to use
   */
  color?: string;
  /**
   * How large should the button be?
   */
  size?: ButtonSizesType;
  /**
   * Button contents
   */
  label: string;
}
