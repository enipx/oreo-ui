import styledTheme from 'styled-theming';

import { ModalSizesType } from '../components.types';
import { flexCenterXStyle, flexCenterYStyle, transitionStyle } from '../css';
import type {
  StyledThemeProps,
  SystemThemeParams,
  SystemThemeReturnType,
} from '../index.types';
import { mediaQueryStyle } from '../mixins';

import { ModalSizesKeys } from '@/core/theme/components/modal';

// @defaults
export const modalDefaults = {
  size: 'md',
};

// @themes
export const modalOverlayBackgroundColor = styledTheme('mode', {
  light: ({ theme }: StyledThemeProps) => theme.colors.blackAlpha[400],
  dark: ({ theme }: StyledThemeProps) => theme.colors.blackAlpha[400],
});

// @variants
export const modalSizeVariant = (options: SystemThemeParams) => {
  const { theme, size = modalDefaults.size } = options;

  const modalSizes = theme.components.modal.sizes;

  if (isModalFull(size)) {
    return `
      max-width: 100%;
      min-height: 100vh;
      border-radius: 0;
      margin: 0;
    `;
  }

  return `max-width: ${modalSizes?.[size as ModalSizesKeys] || size};`;
};

// @styles
export const modalDisplayStyle = (options: SystemThemeParams) => {
  const { isOpen } = options;

  const display = isOpen ? 'flex' : 'none';

  return `
    display: ${display};
  `;
};

export const modalPositionStyle = (options: SystemThemeParams) => {
  const { pos } = options;

  const positions = {
    top: 'flex-start',
    center: 'center',
    end: 'flex-end',
  };

  return `
    align-items: ${positions[pos as keyof typeof positions]};
  `;
};

const modalfilterStyle = (options: SystemThemeParams) => {
  const { overlayBlur, overlayFilter } = options;
  let style = '';

  if (overlayBlur) {
    style += `backdrop-filter: blur(${overlayBlur});`;
  }

  if (overlayFilter) {
    style += `filter: ${overlayFilter}`;
  }

  return style;
};

const modalOverflowStyle = (options: SystemThemeParams) => {
  const { overflow } = options;

  let style = '';

  if (!isOverflowInside(overflow)) {
    style += 'overflow-y: auto;';
  }

  if (isOverflowInside(overflow)) {
    style += 'max-height: 100%;';
  }

  return style;
};

export const modalDefaultStyle = (options: SystemThemeParams) => {
  const { theme, type = 'web', size } = options;

  let paddingMd = `padding: ${theme.space[12]};`;

  if (isModalFull(size)) {
    paddingMd = `padding: 0;`;
  }

  const baseStyle = `
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    ${transitionStyle()}
    ${flexCenterXStyle}
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: ${theme.zIndices.modal};
    ${modalDisplayStyle(options)}
    ${modalPositionStyle(options)}
    ${modalfilterStyle(options)}
    ${modalOverflowStyle(options)}
    padding: ${theme.space[12]} ${theme.space[4]};

    ${mediaQueryStyle('md', paddingMd)}
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const modalOverlayDefaultStyle = (options: SystemThemeParams) => {
  const { theme, type = 'web', overlayOpacity } = options;

  const opacity = overlayOpacity || 1;

  const baseStyle = `
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: ${theme.zIndices.overlay};
    opacity: ${opacity};
    ${modalDisplayStyle(options)}
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const modalContentDefaultStyle = (options: SystemThemeParams) => {
  const { theme, type = 'web' } = options;

  const baseStyle = `
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    width: 100%;
    border-radius: ${theme.radii.base};
    display: flex;
    flex-direction: column;
    padding: ${theme.space[4]} ${theme.space[5]};
    position: relative;
    z-index: ${theme.zIndices.modal};
    word-break: break-word;
    ${modalSizeVariant(options)}
    ${modalOverflowStyle(options)}
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const modalHeaderDefaultStyle = (options: SystemThemeParams) => {
  const { theme, type = 'web' } = options;

  const baseStyle = `
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    ${flexCenterYStyle}
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.semiBold};
    justify-content: space-between;
    padding-bottom: ${theme.space[2]};
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const modalBodyDefaultStyle = (options: SystemThemeParams) => {
  const { theme, type = 'web', size, withFooter, overflow } = options;

  const flex =
    (isModalFull(size) && withFooter) || isOverflowInside(overflow)
      ? '1'
      : 'unset';

  const overflowY = isOverflowInside(overflow) ? 'auto' : 'unset';

  const baseStyle = `
    padding-top: ${theme.space[2]};
    padding-bottom: ${theme.space[2]};
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    flex: ${flex};
    overflow-y: ${overflowY};
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const modalFooterDefaultStyle = (options: SystemThemeParams) => {
  const { theme, type = 'web', footerAlt } = options;

  const footerStyle = () => {
    if (footerAlt) {
      return `
        flex-direction: column;

        button {
          margin-bottom: ${theme.space[2]};
          width: 100%;
        }

        button:first-child {
          margin-bottom: 0;
          order: 1;
        }
      `;
    }

    return `
      button:first-child {
        margin-right: ${theme.space[2]};
      }
    `;
  };

  const baseStyle = `
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    ${flexCenterYStyle}
    justify-content: flex-end;
    padding-top: ${theme.space[2]};
    ${footerStyle()}
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

// @utilities
const isModalFull = (size: ModalSizesType) => {
  return size === 'full';
};

const isOverflowInside = (overflow: string) => {
  return overflow === 'inside';
};
