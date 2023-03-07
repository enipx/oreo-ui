import type { ModalSizesType } from '../components.types';
import { flexCenterXStyle, flexCenterYStyle, transitionStyle } from '../css';
import {
  addTransitionsHandler,
  TransitionsTypeObject,
} from '../css/transitions';
import type {
  StyledThemeProps,
  SystemThemeParams,
  SystemThemeReturnType,
} from '../index.types';
import { mediaQueryStyle } from '../mixins';
import { themer } from '../web';
import { drawerContentDefaultStyle, drawerDefaultTransitions } from './drawer';

import { isPackageNative } from '@/core/helpers/base';
import type { ModalSizesKeys } from '@/core/theme/components/modal';

// @defaults
export const modalDefaults = {
  size: 'md',
};

// @themes
export const modalDefaultTransitions = (
  options: Partial<SystemThemeParams>
) => {
  const { pos, isDrawer } = options;

  if (isDrawer) return drawerDefaultTransitions(options);

  const positions: TransitionsTypeObject = {
    top: 'fadeTop',
    center: 'fade',
    bottom: 'fadeBottom',
  };

  return positions[pos];
};

export const modalOverlayBackgroundColor = themer('mode', {
  light: ({ theme }: StyledThemeProps) => theme.colors.blackAlpha[400],
  dark: ({ theme }: StyledThemeProps) => theme.colors.blackAlpha[400],
});

// @variants
export const modalSizeVariant = (options: SystemThemeParams) => {
  const { theme, size: specifiedSize, modalSize, isDrawer } = options;

  const size = specifiedSize || modalSize;

  const modalSizes = isDrawer
    ? theme.components.drawer.sizes
    : theme.components.modal.sizes;

  if (isModalFull(size || modalSize)) {
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
  const { pos, type = 'web' } = options;

  const positions = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
  };

  return `
    ${isPackageNative(type) ? 'justify-content' : 'align-items'}: ${
    positions[pos as keyof typeof positions]
  };
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

const modalFlexwStyle = (options: SystemThemeParams) => {
  const { modalSize } = options;

  let style = '';

  if (isModalFull(modalSize)) {
    style += 'flex: 1;';
  }

  return style;
};

export const modalDefaultStyle = (options: SystemThemeParams) => {
  const {
    theme,
    type = 'web',
    size: specifiedSize,
    modalSize,
    isDrawer,
  } = options;

  const size = specifiedSize || modalSize;

  let paddingMd = `padding: ${theme.space[12]};`;
  let padding = `${theme.space[12]} ${theme.space[4]}`;

  if (isModalFull(size)) {
    paddingMd = `padding: 0;`;
  }

  if (isDrawer) {
    padding = '0';
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
    padding: ${padding};

    ${mediaQueryStyle('md', paddingMd)}
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const modalOverlayDefaultStyle = (options: SystemThemeParams) => {
  const {
    theme,
    type = 'web',
    overlayBg,
    overlayOpacity,
    modalSize,
    removeContentMargin,
  } = options;

  const opacity = overlayOpacity || 1;

  const padding =
    isModalFull(modalSize) || removeContentMargin ? 0 : theme.space[4];

  const baseStyle = `
  `;

  const native = `
    ${baseStyle}
    position: relative;
    width: 100%;
    flex: 1;
    background-color: ${overlayBg || theme.colors.blackAlpha[400]};
    padding-horizontal: ${padding};
    padding-vertical: ${padding};
    ${modalPositionStyle(options)}
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

  const padding = theme.space[4];

  const borderRadius = theme.radii.md;

  const baseStyle = `
  `;

  const native = `
    ${baseStyle}
    border-radius: ${theme.radii.md};
    width: 100%;
    padding-horizontal: ${padding};
    padding-vertical: ${padding};
    ${modalFlexwStyle(options)}
  `;

  const web = `
    ${baseStyle}
    width: 100%;
    border-radius: ${borderRadius};
    display: flex;
    flex-direction: column;
    padding: ${theme.space[4]} ${theme.space[5]};
    position: relative;
    z-index: ${theme.zIndices.modal};
    word-break: break-word;
    ${modalSizeVariant(options)}
    ${modalOverflowStyle(options)}
    ${drawerContentDefaultStyle(options)}

    ${addTransitionsHandler([
      { name: 'fade' },
      { name: 'fadeTop' },
      { name: 'fadeBottom' },
      { name: 'slideLeft' },
      { name: 'slideRight' },
      { name: 'slideTop' },
      { name: 'slideBottom' },
    ])}
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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${theme.space[2]};
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
  const {
    theme,
    type = 'web',
    size,
    withFooter,
    overflow,
    modalSize,
    isDrawer,
  } = options;

  const flex =
    (isModalFull(modalSize || size) && withFooter) ||
    isOverflowInside(overflow) ||
    isDrawer
      ? '1'
      : 'unset';

  const overflowY = isOverflowInside(overflow) ? 'auto' : 'unset';

  const baseStyle = `
    padding-top: ${theme.space[2]};
    padding-bottom: ${theme.space[2]};
  `;

  const native = `
    ${baseStyle}
    ${modalFlexwStyle(options)}
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
    padding-top: ${theme.space[2]};
  `;

  const native = `
    ${baseStyle}
    flex-direction: ${!footerAlt ? 'column' : 'row'};
    justify-content: flex-end;
    padding-top: ${theme.space[4]};
  `;

  const web = `
    ${baseStyle}
    ${flexCenterYStyle}
    justify-content: flex-end;
    ${footerStyle()}
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

// @utilities
export const isModalFull = (size: ModalSizesType) => {
  return size === 'full';
};

const isOverflowInside = (overflow: string) => {
  return overflow === 'inside';
};
