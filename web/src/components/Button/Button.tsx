import React from 'react';

import type { ButtonProps, ButtonSizesType } from './Button.types';

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  color,
  ...props
}: ButtonProps) => {
  const sizes: { [key in ButtonSizesType]: React.CSSProperties } = {
    small: {
      fontSize: '0.675rem',
      padding: '10px 16px',
    },
    medium: {
      fontSize: '0.75rem',
      padding: '12px 20px',
    },
    large: {
      fontSize: '1rem',
      padding: '14px 24px',
    },
  };

  const styles: React.CSSProperties = {
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 700,
    border: 0,
    borderRadius: '3em',
    cursor: 'pointer',
    display: 'inline-block',
    lineHeight: 1,
    color: color || primary ? 'white' : '#000',
    backgroundColor: backgroundColor || primary ? '#1ea7fd' : '#eeeeee',
    ...sizes[size],
  };

  return (
    <button type="button" style={styles} {...props}>
      {label}
    </button>
  );
};
