export type ButtonSizesType = 'small' | 'medium' | 'large';

export interface ButtonProps {
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
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
