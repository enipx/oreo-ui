// @imports

import type { AccordionIconPositionTypes } from '../components.types';
import { flexCenterYStyle, transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { baseBorderColor, baseColor, modeHandler } from './base';

// @defaults
export const accordionDefaults = {
  transitionDuration: '200ms',
  iconOpacity: '0.5',
};

// @theme
export const buttonColor = baseColor;

export const borderBottomColor = baseBorderColor;

export const hoverBackgroundColor = modeHandler('gray.50', 'gray.800');

// @styles
export const accordionButtonDefaultStyle = (option: SystemThemeParams) => {
  const { theme, type = 'web' } = option;

  const baseStyle = `
    background-color: transparent;
    width: 100%;
    border: 0;
    outline: 0;
    border-bottom: 1px solid transparent;
  `;

  const native = `
    ${baseStyle}
    ${flexCenterYStyle}
    flex-direction: row;
    padding-horizontal: ${theme.space[2]};
    padding-vertical: ${theme.space[3]};
    border-bottom-width: 1px;
  `;

  const web = `
    ${baseStyle}
    ${flexCenterYStyle}
    ${transitionStyle()}
    appearance: none;
    cursor: pointer;
    font-size: ${theme.fontSizes.md};
    text-align: left;
    padding: ${theme.space[3]} ${theme.space[4]};
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const accordionPanelDefaultStyle = (option: SystemThemeParams) => {
  const {
    type = 'web',
    transitionDuration = accordionDefaults.transitionDuration,
  } = option;

  const baseStyle = `
    height: 0;
    overflow: hidden;
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    transition: height ${transitionDuration} ease;
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const accordionIconOrderHandler = (
  position?: AccordionIconPositionTypes
) => {
  const order: { [key in AccordionIconPositionTypes]: number } = {
    left: -1,
    right: 1,
  };

  return order[position || 'right'];
};
