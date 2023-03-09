import type {
  TableThemedDefaultProps,
  TableThemedSizeTypes,
} from '../components.types';
import { transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { getColorSchemeStyle, styleModeHandler } from './base';

// @defaults
export const tableDefaults = {
  size: 'md',
};

// @themes
type TableSystemThemeParams = SystemThemeParams & TableThemedDefaultProps;

export const tableContainerDefaultStyle = (options: TableSystemThemeParams) => {
  const { type = 'web' } = options;

  const baseStyle = `
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    display: block;
    white-space: nowrap;
    overflow: auto hidden;
    max-width: 100%;
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const tableCaptionDefaultStyle = (options: TableSystemThemeParams) => {
  const { type = 'web' } = options;

  const baseStyle = `
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const tableDefaultStyle = (options: TableSystemThemeParams) => {
  const {
    theme,
    type = 'web',
    colorScheme,
    captionPlacement,
    size,
    hovered,
  } = options;

  const borderColor = styleModeHandler({
    theme,
    light: 'gray.50',
    dark: 'gray.800',
  });

  const { backgroundColor } = getColorSchemeStyle({
    theme,
    colorScheme: colorScheme || 'gray',
    variant: 'subtle',
  });

  const tablePadding: { [key in TableThemedSizeTypes]: string | number } = {
    sm: theme.space[2],
    md: theme.space[4],
    lg: theme.space[6],
  };

  const baseStyle = `
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    ${transitionStyle()}
    text-align: left;
    width: 100%;
    border-collapse: collapse;

    td, th {
      padding: ${tablePadding[size || 'md']};
    }

    tr {
      border-bottom: 1px solid ${borderColor};
    }

    > thead {
      th {
        font-size: ${theme.fontSizes.sm};
        font-weight: ${theme.fontWeights.semiBold};
        text-transform: uppercase;
      }
    }

    tbody {
      tr {
        &:nth-of-type(odd) {
          background-color: ${
            getTableStripHandler(options).isOdd
              ? backgroundColor
              : theme.colors.transparent
          };
        }

        &:nth-of-type(even) {
          background-color: ${
            getTableStripHandler(options).isEven
              ? backgroundColor
              : theme.colors.transparent
          };
        }

        ${
          hovered
            ? `&:hover {
          background-color: ${backgroundColor};
        }`
            : ''
        }
      }
    }

    caption {
      caption-side: ${captionPlacement || 'bottom'}
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

// @utilities
export const getTableStripHandler = (options: TableSystemThemeParams) => {
  const { striped } = options;

  return {
    isOdd: striped === 'odd',
    isEven: striped === 'even',
  };
};
