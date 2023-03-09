import { flexCenterStyle, positionCenterStyle, transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { variant } from '../system';
import { styleModeHandler } from './base';

import type { ObjectTypes } from '@/core/constants/index.types';
import type { RadiiKeys } from '@/core/theme/utilities/radius';

// @checkbox themes
export const checkboxDefaults = {
  disabledOpacity: 0.5,
  activeOpacity: 0.8,
  size: 'md',
};

export const checkboxCheckedStyle = (options: SystemThemeParams) => {
  const {
    theme,
    type = 'web',
    indeterminate,
    size = checkboxDefaults.size,
  } = options;

  const isSmall = size === 'sm';

  const rotateProperty = indeterminate ? 'rotate(0deg)' : 'rotate(-45deg)';

  const borderWidth = () => {
    const defaultWidth = '2px';

    if (isSmall) {
      return indeterminate ? defaultWidth : '1px';
    }

    return defaultWidth;
  };

  const getHeight = (value: string) => {
    return indeterminate ? 0 : value;
  };

  const getTop = (value: string) => {
    return indeterminate ? '50%' : value;
  };

  const sizes = {
    sm: {
      width: '0.3rem',
      height: getHeight('0.2rem'),
    },
    md: {
      width: '0.5rem',
      height: getHeight('0.3rem'),
    },
    lg: {
      width: '0.55rem',
      height: getHeight('0.3rem'),
    },
  };

  type SizeKey = keyof typeof sizes;

  const baseStyle = ``;

  const native = `
    ${baseStyle}
  `;

  const web = `
    :checked:after {
      ${baseStyle}
      width: ${sizes[size as SizeKey].width};
      height: ${sizes[size as SizeKey].height};
      border: ${borderWidth()} solid ${theme.colors.white};
      border-top: 0;
      border-right: 0;
      ${positionCenterStyle({ transfrom: rotateProperty })}
      top: ${isSmall ? getTop('49%') : getTop('45%')};
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const checkboxDefaultStyle = (options: SystemThemeParams) => {
  const { theme, type = 'web', disabled, checked } = options;

  const cursor = disabled ? 'not-allowed' : 'pointer';

  const borderColor = () => {
    if (disabled) {
      return styleModeHandler({
        light: 'gray.200',
        dark: 'gray.600',
        theme,
      });
    }

    if (checked) {
      return styleModeHandler({
        light: 'blue.500',
        dark: 'blue.600',
        theme,
      });
    }

    return styleModeHandler({
      light: 'gray.100',
      dark: 'gray.700',
      theme,
    });
  };

  const backgroundColor = () => {
    if (disabled) {
      return styleModeHandler({
        light: 'gray.200',
        dark: 'gray.600',
        theme,
      });
    }

    if (checked) {
      return styleModeHandler({
        light: 'blue.500',
        dark: 'blue.600',
        theme,
      });
    }

    return theme.colors.transparent;
  };

  const checkedBackgroundColor = disabled
    ? theme.colors.gray[200]
    : theme.colors.blue[500];

  const checkedBorderColor = checkedBackgroundColor;

  const hoverBorderColor = styleModeHandler({
    theme,
    light: 'gray.200',
    dark: 'gray.600',
  });

  const baseStyle = `
    ${flexCenterStyle}
    appearance: none;
    box-shadow: none;
    position: relative;
    margin: 0;
    outline: 0;
    padding: 0;
    border: 1px solid ${borderColor()};
    background-color: ${backgroundColor()};
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${transitionStyle()}
    ${baseStyle}
    cursor: ${cursor};

    + label {
      cursor: ${cursor};
    }

    :after {
      content: '';
      display: block;
      ${positionCenterStyle()}
    }

    :checked {
      background-color: ${checkedBackgroundColor};
      border-color: ${checkedBorderColor};
    }

    :disabled {
      cursor: not-allowed;
  
      + label {
        cursor: not-allowed;
      }
    }

    :hover {
      border-color: ${hoverBorderColor};
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const checkboxSizing = (options: SystemThemeParams) => {
  const { theme, isSwitch } = options;

  const size = options?.size || checkboxDefaults.size;

  const defaultSize: ObjectTypes = {
    sm: {
      height: theme.space[3],
      width: theme.space[3],
    },
    md: {
      height: theme.space[4],
      width: theme.space[4],
    },
    lg: {
      height: theme.space[5],
      width: theme.space[5],
    },
  };

  const switchSize: ObjectTypes = {
    sm: {
      height: theme.space[4],
      width: theme.space[7],
    },
    md: {
      height: theme.space[5],
      width: theme.space[9],
    },
    lg: {
      height: theme.space[7],
      width: theme.space[12],
    },
  };

  if (isSwitch) {
    return switchSize[size];
  }

  return defaultSize[size];
};

export const checkboxSizeVariant = (options: SystemThemeParams) => {
  const { theme, isRadio, isSwitch } = options;

  const getBorderRadius = (key?: RadiiKeys) => {
    if (isRadio || isSwitch) {
      return theme.radii.full;
    }

    return theme.radii[key || 'sm'];
  };

  const getSize = (size?: string) => {
    return checkboxSizing({ ...options, size });
  };

  return variant({
    prop: 'size',
    variants: {
      sm: {
        ...getSize('sm'),
        borderRadius: getBorderRadius(),
      },
      md: {
        ...getSize('md'),
        borderRadius: getBorderRadius(),
      },
      lg: {
        ...getSize('lg'),
        borderRadius: getBorderRadius(),
      },
    },
  });
};
