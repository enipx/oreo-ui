import { transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { getBaseStyle } from './base';
import {
  backgroundColor,
  borderColor,
  hoverBorderColor,
  focusBorderColor,
  inputPseudoStyle,
} from './input';

// @button themes
export const textareaDefaults = {
  disabledOpacity: 0.5,
  state: 'default',
};

export { backgroundColor, borderColor, hoverBorderColor, focusBorderColor };

export const textareaDefaultStyle = (option: SystemThemeParams) => {
  const { theme, type = 'web', disabled, resize } = option;

  const opacity = disabled ? textareaDefaults.disabledOpacity : 1;

  const { color } = getBaseStyle({ theme });

  const baseStyle = `
    ${transitionStyle()}
    opacity: ${opacity};
    width: 100%;
    border-width: 1px;
    border-style: solid;
    position: relative;
    overflow: auto;
    min-height: ${theme.components.textarea.height};
    outline: 0;
    border-radius: ${theme.radii.md};
    padding-left: ${theme.space.md};
    padding-right: ${theme.space.md};
    padding-top: ${theme.space.sm};
    padding-bottom: ${theme.space.sm};
    vertical-align: top;
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    appearance: none;
    font-size: ${theme.fontSizes.sm};
    resize: ${resize || 'vertical'};
    color: ${color};

    ::placeholder {
      font-size: ${theme.fontSizes.sm};
    }

    :disabled {
      cursor: not-allowed;
    }

    ${inputPseudoStyle({
      ...option,
      removeFocusBoxShadow: true,
    })}
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};
